<?php
include_once("include/utils_function.php");
$savedroot = "book/saved/";
if(isset($_POST['action']) && isset($_POST['book']) && isset($_POST['page'])&& isset($_POST['plan'])){
	switch ($_POST['action']) {
		case "save":
			$bookname = $_POST['book'];
			$page = $_POST['page'];
			$plan = $_POST['plan'];
			$mode = $_POST['mode'];
			$currentbook = "$savedroot/$bookname/$plan/$mode";
			if (!file_exists($currentbook))
				mkdir_recursive($currentbook);
			file_put_contents("$currentbook/page_$page.snipped", stripslashes($_POST['content']));
			echo 'Saved Content';
			break;
		case "workspace":
			$bookname = $_POST['book'];
			$plan = $_POST['plan'];
			$mode = $_POST['mode'];
			$currentbook = "$savedroot/$bookname/$plan/$mode";
			if (!file_exists($currentbook))
				mkdir_recursive($currentbook);
			$currentworkspace = getBookWorkspace($bookname, $plan, $mode);
			file_put_contents($currentworkspace, stripslashes($_POST['content']));
			echo 'Saved workspace Content';
			break;
	}
	
}
else
	echo 'Missing Parameter';
?>