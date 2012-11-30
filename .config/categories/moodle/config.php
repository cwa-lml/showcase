<?php  // Moodle configuration file

// Note that this file is deployed by the main fabfile.py, symlinked to 
// the project directory.

unset($CFG);
global $CFG;
$CFG = new stdClass();

$CFG->dbtype    = 'mysqli';
$CFG->dblibrary = 'native';
$CFG->dbhost    = 'localhost';
$CFG->dbname    = 'moodle';
$CFG->dbuser    = 'moodleuser';
$CFG->dbpass    = 'p4ssw0rd';
$CFG->prefix    = 'mdl_';
$CFG->dboptions = array (
  'dbpersist' => 0,
  'dbsocket' => false,
);

$CFG->wwwroot   = 'http://showcase.learningmedia.co.nz/categories/moodle';
$CFG->dataroot  = '/usr/moodle/moodledata';
$CFG->admin     = 'admin';

$CFG->directorypermissions = 02777;

$CFG->passwordsaltmain = 'CR,+h6bf@I0oxO7@eXkfJ,>_';

require_once(dirname(__FILE__) . '/../../../categories/moodle/lib/setup.php');

// There is no php closing tag in this file,
// it is intentional because it prevents trailing whitespace problems!
