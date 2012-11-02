<?php
define("DEFAULTBOOKPATH", "book/default/");
define("SAVEDBOOKPATH", "book/saved/");
define("BOOKINFOFILE", "info");

if(!function_exists('scandir')) {
  function scandir($folder) {
    $handle = opendir($folder);
    while (false !== ($filename = readdir($handle))) {
      $files[] = $filename;
    }
    return $files;
  }
}


function mkdir_recursive($pathname){
	is_dir(dirname($pathname)) || mkdir_recursive(dirname($pathname));
	return is_dir($pathname) || @mkdir($pathname);
}

function getBookInfo($book){
	if(trim($book) != '' && file_exists(DEFAULTBOOKPATH.'/'.$book.'/'.BOOKINFOFILE)){
		$infolines = explode("\n", file_get_contents(DEFAULTBOOKPATH.'/'.$book.'/'.BOOKINFOFILE));
		$result = array();
		foreach ($infolines as $line) {
			$info = explode("=", $line);
			$result[strtolower($info[0])] = $info[1];
		}
		return $result;
	}
	return false;
}

function getBookPages($book, $plan, $mode){
	$bookinfo = getBookInfo($book);
	if($bookinfo){
		$pages = array();
		for($i=1;$i<=$bookinfo['noofpages'];$i++){
			if(file_exists(SAVEDBOOKPATH.'/'.$book.'/'.$plan.'/'.$mode.'/page_'.$i.'.snipped'))
				$pages[$i] = SAVEDBOOKPATH.'/'.$book.'/'.$plan.'/'.$mode.'/page_'.$i.'.snipped';
			elseif (file_exists(DEFAULTBOOKPATH.'/'.$book.'/page_'.$i.'.snipped'))
				$pages[$i] = DEFAULTBOOKPATH.'/'.$book.'/page_'.$i.'.snipped';
			else 
				$pages[$i] = false;
		}
		return $pages;
	}
	return false;
}

function getBookWorkspace($book, $plan, $mode){
	$bookinfo = getBookInfo($book);
	if($bookinfo){
		return SAVEDBOOKPATH.'/'.$book.'/'.$plan.'/'.$mode.'/workspace.snipped';
	}
	return false;
}


function getBookReadPages($book){
	$bookinfo = getBookInfo($book);
	if($bookinfo){
		$pages = array();
		for($i=1;$i<=$bookinfo['noofpages'];$i++){
			if (file_exists(DEFAULTBOOKPATH.'/'.$book.'/read_page_'.$i.'.snipped'))
				$pages[$i] = DEFAULTBOOKPATH.'/'.$book.'/read_page_'.$i.'.snipped';
			else 
				$pages[$i] = false;
		}
		return $pages;
	}
	return false;
}

function getPlanIdentifer($name){
	$except = array('\\', '/', ':', '*', '?', '"', '<', '>', '|');
	return strtolower(str_replace($except, '', $name)); 	
}

function getAllPlan($book){
	$plans = array();
	$dirs = scandir(SAVEDBOOKPATH.'/'.$book.'/');
	foreach($dirs as $dir)  {
		if ($dir != '.' && $dir != '..'){
			$result = array();
			if(file_exists(SAVEDBOOKPATH.'/'.$book.'/'.$dir.'/'.BOOKINFOFILE)){
				
				$infolines = explode("\n", file_get_contents(SAVEDBOOKPATH.'/'.$book.'/'.$dir.'/'.BOOKINFOFILE));
				foreach ($infolines as $line) {
					if(trim($line) != ''){
						$info = explode("=", $line);
						$result[strtolower($info[0])] = $info[1];
					}
				}
			}
			else{
				$result['title'] = $dir;
			}
			$result['name'] = $dir;
			$plans[] = $result;
		}
	}	  
	return $plans;
}
?>
