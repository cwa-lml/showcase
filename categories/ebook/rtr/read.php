<?php include_once("include/utils_function.php"); ?>
<?php include("include/header.inc"); ?>
<?php
/*Setup Varaible*/
$book = 'dragon'; //Default book

if(isset($_GET['book']))
	$book = trim($_GET['book']);

$plan = 'new';
if(isset($_GET['plan']))
	$plan = trim($_GET['plan']);
$mode = 'shared';
if(isset($_GET['mode']))
	$mode = trim($_GET['mode']);
	
$pageid = 1;
if(isset($_GET['page']))
	$pageid = $_GET['page'];
	
$pages = getBookPages($book, $plan, $mode);
$readpages = getBookReadPages($book);

?>
<div class="wrapper">

	<h1 class="content-title hide">Read</h1>
	<div class="mode-switch">
		<a href="plan.php?<?php echo "book=$book&plan=$plan&mode=shared&page=$pageid";?>" class="mode-link plan-link">Plan your lesson</a>
		<?php if($mode == 'shared'){?>
		<span class="mode-link read-active-link">1st shared read</span>
		<?php }else{?>
		<a href="read.php?<?php echo "book=$book&plan=$plan&mode=shared&page=$pageid";?>" class="mode-link">1st shared read</a>
		<?php }?>
		<?php if($mode == 'subsequent'){?>
		<span class="mode-link read-active-link">Subsequent read</span>
		<?php }else{?>
		<a href="read.php?<?php echo "book=$book&plan=$plan&mode=subsequent&page=$pageid";?>" class="mode-link">Subsequent read</a>
		<?php }?>
		<a href="index.php" class="mode-link right close-book">Close book</a>
	</div>
	
	<div id="book-wrapper" class="read-mode">
		<?php
			foreach($pages as $index => $page){
		?>
				<div class="slide <?php echo "$mode-slide "; if($pageid == $index) echo"active-slide ";if($index == 1) echo "first-slide "; elseif(count($pages) == $index)echo "last-slide ";?>" id="book-slide-<?php echo "$mode-$index";?>">
					<?php echo file_get_contents($page);?>
				</div>
		<?php
			}
		?>
		<?php
			foreach($readpages as $index => $page){
		?>
				<div class="slide read-slide <?php if($index == 1) echo "first-slide "; elseif(count($pages) == $index)echo "last-slide ";?>" id="book-slide-read-<?php echo $index;?>">
					<?php echo file_get_contents($page);?>
				</div>
		<?php
			}
		?>

	</div>
	<div id="book-setting" style="display: none;">
		<input type="hidden" id="setting-current-plan" value="<?php echo $plan;?>" />
		<input type="hidden" id="setting-current-mode" value="<?php echo $mode;?>" />
		<input type="hidden" id="setting-current-page" value="<?php echo $pageid;?>" />
		<input type="hidden" id="setting-current-book" value="<?php echo $book;?>" />
	</div>

</div><!-- end wrapper div -->

<div class="push"></div>
<div id="navigation">
	<a id="previous-slide" <?php if($pageid <= 1)echo "style='display:none;'";?> class="nav-link" href="plan.php<?php echo "book=$book&plan=$plan&mode=$mode&page=".($pageid - 1);?>">Previous</a>
	<a id="next-slide" <?php if(count($pages) <= $pageid)echo "style='display:none;'";?> class="nav-link" href="plan.php<?php echo "book=$book&plan=$plan&mode=$mode&page=".($pageid + 1);?>">Next</a>
</div>
<div id="controller">
	<div class="tools-controller">
		<button class="btn non-phrase-mode" type="button" name="Highlight" value="Highlight" id="writehighlight" >Go to Highlight Mode</button>
		<div id="highlight_color_picker">
			<span id="lightgreen" class="color-picker-lightgreen selected-color" >&nbsp</span>
			<span id="yellow" class="color-picker-yellow" />&nbsp</span>
			<span id="lightblue" class="color-picker-lightblue" />&nbsp</span>
		</div>
		<input type="button" class="btn enter-phrase-mode check-phrase-mode swicth-name" name="phrase" value="Show Phrase" />
		<a href="#" class="phrase-play" title="Play" alt="Play" style="display:none;">Play</a>
	</div>
	<?php if($mode == 'subsequent'){?>
	<div class="tools-controller">
		<input type="button" class="btn enter-workspace-mode" name="Workspace" value="Open Workspace" />
	</div>
	<div style="display: none;">
		<div id="workspace-wapper">
			<div id="workspace-form">
				<h3>Workspace</h3>
				<div id="workspace-save-content">
					
				<?php $currentworkspace = getBookWorkspace($book, $plan, $mode);
					if(file_exists($currentworkspace)){
						echo file_get_contents($currentworkspace);
					}
					else{ ?>
					<style>
						#workspace-drop-container ul{margin: 0 5px 0;list-style-type: none;}
						#workspace-drop-container ul li {font-size: 150%;margin: 0 0 5px;list-style-type: none;}
						#workspace-detials{font-size: 18px;}
					</style>
					<h4 class="hide">Workspace : Selected words</h4>
					<div id="workspace-drop-container">
						<ul>
						</ul>
					</div>
					<h4 class="hide">Note :</h4>
					<textarea id="workspace-detials" name="workspace-detials" style="resize: none;"></textarea>

				<?php } ?>

				</div>
				<div id="workspace-print-content" style="display:none">
					<style>
						#workspace-print-content ul{margin: 0 5px 0;list-style-type: none;}
						#workspace-print-content ul li {font-size: 150%;margin: 0 0 5px;list-style-type: none;}
						#workspace-print-notes{margin-top: 310px;}
					</style>
					<h4 class="hide">Workspace : Selected words</h4>
					<div id="workspace-print-notes">
					</div>
				</div>
				<a href="#workspace-print-content" class="btn print-block">Print</a>
				<input type="button" class="btn workspace-save" name="workspace-save-content" value="Save" />
				<input type="button" class="btn workspace-cancel" name="Cancel" value="Cancel" />
			</div>
			<div id="workspace-container">
				<div id="workspace-currentslide" class="page">
				</div>
				<div id="workspace-navigation">
					<a id="workspace-previous-slide" class="nav-link workspace-nav-link" >Previous</a>
					<a id="workspace-next-slide" class="nav-link workspace-nav-link" >Next</a>
					<input type="hidden" id="workspace-page-id" value="<?php echo $pageid; ?>" />
					<input type="hidden" id="workspace-slide-id" value="1" />
				</div>			
			</div>
		</div>
	</div>
	<div class="view-controller">
		<h3>Sources of information</h3>
		<div id="structure-controller">
			<input type="button" class="btn view-toggle-button non-phrase-mode" name="visual" value="Visual" />
			<input type="button" class="btn view-toggle-button non-phrase-mode" name="structure" value="Structure" />
			<input type="button" class="btn view-toggle-button non-phrase-mode" name="meaning" value="Meaning" />
		</div>
	</div>
	<?php }?>
</div>
<script type="text/javascript">var pharseaudio = new Array();</script>
<?php
for ($i=1; $i<=count($pages); $i++){
	echo "\n<div id='page_{$i}_audio' class='jplayer'></div><script src='book/default/$book/audio/page_$i.js' type='text/javascript'></script>";
}
	echo "\n<script src='book/default/$book/words.js' type='text/javascript'></script>";
?>
<?php include("include/footer.inc"); ?>