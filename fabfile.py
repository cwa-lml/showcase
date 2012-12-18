# How to run this script:
#   For localhost:
#     fab localhost deploy
#   For remote:
#     fab remote deploy
#   or
#     fab remote:jason.darwin@showcase.learningmedia.co.nz deploy

import os
from fabric.operations import local as lrun
from fabric.api import *
from fabric.contrib import files

'''
helpful variables
'''

# name of the package
project = "showcase"

# path to deploy to
deploy_path = "/var/www/html/" + project

# default name of our remote host
remote_host = "showcase.learningmedia.co.nz"

# path to git
git = "/usr/bin/git"

# file name
file = project + ".zip"

# local temp file
tmp_file = "/tmp/" + file


# if available, use ssh config
if env.ssh_config_path and os.path.isfile(os.path.expanduser(env.ssh_config_path)):
    env.use_ssh_config = True


'''
Set up some variables to use locally
'''  
def localhost():
  env.run = lrun
  env.cd = lcd
  env.hosts = ["localhost"]


'''
Set up some variables to use if connecting remotely
'''
def remote(host=remote_host):
  env.run = run
  env.cd = cd
  env.hosts = [host]


'''
run the command, this is a wrapper as sudo on localhost is poo
'''
def sudo_run(cmd):
  if env.run is lrun:
    env.run('sudo ' + cmd)
  else:
    sudo(cmd)


'''
package up the client with git archive
'''
def build_package(branch='master', out='/tmp/outfile.zip'):
  # archive the git branch
  local(git + " archive " + branch + " -o " + out)
  

'''
deploy the client
'''
def deploy(branch='master'):
  
  # package up the file
  build_package(branch, tmp_file)
  
  # if we are copying to the remote server then
  # push the archive to that server
  if env.run is not lrun:
    put(tmp_file)

  # Make deploy path if this is the initial deployment
  sudo_run('mkdir -p ' + deploy_path)

  # if we are copying to local then set local path
  # otherwise unzip from where we uploaded the file
  if env.run is lrun:
    sudo_run('unzip -o -u ' + tmp_file + ' -d ' + deploy_path)
  else:
    sudo_run('unzip -o -u ~/' + file + ' -d ' + deploy_path)
    
  # deploy external git sub-projects
  deploy_external('categories/moodle', 'moodle', 'MOODLE_23_STABLE')
  
  # set the permissions  
  setpermissions(deploy_path)

  # clean up any unneeded files
  cleanup(file)


'''
deploy an external project
'''
def deploy_external(ext_path, ext_project, ext_branch):

  ext_file = ext_project + '.zip'
  ext_tmp_file = '/tmp/' + ext_file
	
  # change to the root directory of the external project 
  with lcd(ext_path):
    # package up the file
    build_package(ext_branch, ext_tmp_file)

  # if we are copying to the remote server then
  # push the archive to that server
  if env.run is not lrun:
    put(ext_tmp_file)

  # if we are copying to local then set local path
  # otherwise unzip from where we uploaded the file
  if env.run is lrun:
    sudo_run('unzip -o -u ' + ext_tmp_file + ' -d ' + deploy_path + '/' + ext_path)
  else:
    sudo_run('unzip -o -u ~/' + ext_file + ' -d ' + deploy_path + '/' + ext_path)

  # Create symlinks for any config files.
  # These are stored in .config/<path_to_project>
  target = ext_path + '/config.php'
  sudo_run('rm ' + deploy_path + '/' + target)
  if env.run is lrun:
    if os.path.exists(deploy_path + '/.config/' + target):
      source = '../../.config/' + target
      sudo_run('ln -s ' + source + ' ' + deploy_path + '/' + target)
  else:
    if files.exists(deploy_path + '/.config/' + target):
      source = '../../.config/' + target
      sudo_run('ln -s ' + source + ' ' + deploy_path + '/' + target)

  # clean up any unneeded files
  cleanup(ext_file)


'''
set permissions
'''
def setpermissions(path):
  # sudo_run('chown -R ' + user + ':' + user + ' ' + deploy_path)
  if env.run is lrun:
    chown(path, 'root', 'wheel', True, True)
  else:
    chown(path, 'root', 'apache', True, True)


'''
remove any unneeded files
'''
def cleanup(file_to_remove):
  local('rm -f /tmp/' + file_to_remove)
  if env.run is not lrun:
    sudo_run('rm -f ~/' + file_to_remove)


def chown(path, owner=None, group=None, recursive=False, sudo=False):
  cmd = ''
  if recursive:
    cmd += ' -R'

  if not owner:
    owner = env.user

  cmd += ' ' + owner

  if group:
    cmd +=':' + group

  if sudo:
    sudo_run('chown' + cmd + ' ' + path)
  else:
    env.run('chown' + cmd + ' ' + path)