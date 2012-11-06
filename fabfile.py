# Run for either localhost or remote:
#   fab localhost deploy
#   fab remote deploy
#   fab remote:jason.darwin@showcase.learningmedia.co.nz deploy

import os
from fabric.operations import local as lrun
from fabric.api import *

'''
helpful variables
'''

# name of the package
project = "showcase"

# name of our remote host
remote_host = "showcase.learningmedia.co.nz"

# user
user = "root"

# group
group = "apache"

# path to git
git = "/usr/bin/git"

# file name
file = project + ".zip"

# pat to deploy to
deploy_path = "/var"

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
  env.hosts = ["localhost"]

'''
Set up some variables to use if connecting remotely
'''
def remote(host=remote_host):
  env.run = run
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

  # if we are copying to local then set local path
  # otherwise unzip from where we uploaded the file
  if env.run is lrun:
    sudo_run('unzip -o -u ' + tmp_file + ' -d ' + deploy_path)
  else:
    sudo_run('unzip -o -u ~/' + file + ' -d ' + deploy_path)
    
  # deploy external git sub-projects
  deploy_external('moodle', 'MOODLE_23_STABLE', 'www/html')
  
  # set the permissions  
  setpermissions(deploy_path, user=user, group=group)

  # clean up any unneeded files
  cleanup()

'''
deploy an external project
'''
def deploy_external(ext_project, ext_branch, ext_path):

	# change to the root directory of the external project 
	local('cd ' + ext_path)

	ext_file = ext_project + '.zip'
	ext_tmp_file = '/tmp/' + ext_file
	
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

	# change back to the previous directory 
	local('cd -')


'''
set permissions
'''
def setpermissions(path, user, group):
  # sudo_run('chown -R ' + user + ':' + user + ' ' + deploy_path)
  chown(path, user, group, True, True)


'''
remove any unneeded files
'''
def cleanup():
  local('rm -f ' + tmp_file)
  if env.run is not lrun:
    sudo_run('rm -f ~/' + file)


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