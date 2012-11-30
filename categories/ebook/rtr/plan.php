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

if(isset($_GET['Create'])){
	$planname = $plan;
	$plan = getPlanIdentifer($planname);
	if(!file_exists(SAVEDBOOKPATH.'/'.$book.'/'.$plan))
		mkdir_recursive(SAVEDBOOKPATH.'/'.$book.'/'.$plan);
	file_put_contents(SAVEDBOOKPATH.'/'.$book.'/'.$plan.'/info', "Title=$planname\n");
}

$mode = 'shared';
if(isset($_GET['mode']))
	$mode = trim($_GET['mode']);

$pageid = 1;
if(isset($_GET['page']))
	$pageid = $_GET['page'];
	
$pages = getBookPages($book, $plan, 'shared');
$subpages = getBookPages($book, $plan, 'subsequent');
$readpages = getBookReadPages($book);

?>
<div class="wrapper">

	<h1 class="content-title hide">Plan</h1>
	<div class="mode-switch">
		<span class="mode-link plan-active-link">Plan your lesson</span>
		<a href="read.php?<?php echo "book=$book&plan=$plan&mode=shared&page=$pageid";?>" class="mode-link">1st shared read</a>
		<a href="read.php?<?php echo "book=$book&plan=$plan&mode=subsequent&page=$pageid";?>" class="mode-link">Subsequent read</a>
		<a href="index.php" class="mode-link right close-book">Close book</a>
		<a href="#read-setting-pane" id="show-setting-pane">Show pane</a>
	</div>
	<div id="read-setting-pane">
		<div id="tabs-header">
			<ul class="nav nav-tabs">
				<li class="selected-tab"><a id="mode-tab-shared" class="ui-corner-top" href="#shared-read-pane">1st shared read</a></li>
				<li><a id="mode-tab-subsequent" class="ui-corner-top" href="#subsequent-read-pane">Subsequent Read</a></li>
			</ul>
		</div>
		<div id="tabs-content" class="ui-widget-content ui-corner-bottom">
			<div id="shared-read-pane" class="tab-content">
				<div class="description-box">
					<div class="truncate-block">
						<p>The 1st Shared Read should be relatively fluent and focus on the meaning of the text. I should be an enjoyable experiencing, enabling students to make connections to their prior knowledge.</p>
						<p>The tools available to you in this mode are to enable you to support your students to access the plot, meaning, and vocabulary so they are able to respond and think critically.</p>
						<div class="video-preview">
							<p class="video-text">Watch a video of the 1st Shared Read.</p>
						</div>
					</div>
				</div>
				<div>
					<label class="left">Go to page</label>
					<select class="goto-page non-phrase-mode">
						<?php for ($i = 1; $i <= count($pages); $i++){?>
							<option value="<?php echo $i;?>"><?php echo ($i+(($i - 1) * 2))."&#8211;".(($i+(($i - 1) * 2))+1);?></option>
						<?php }?>
					</select>
				</div>
				<h3>Towards independent reading</h3>
				<hr />
				<div>
					<h4 class="title"><a href="#phrase-help-text" class="inline-colorbox  topoffset-50 left-read-setting-pane leftoffset-320 opacity-0"><img style="display: inline-block;" src="images/i_icon.gif" /></a>Phrase Mode</h4>
					<input type="button" class="btn enter-phrase-mode" name="phrase" value="Phrase" />
					<hr />
				</div>
				<div>
					<span class="prompt-link"><a href="#book-wrapper .active-slide .lesson-prompt" class="inline-colorbox  topoffset-50 left-read-setting-pane leftoffset-320 opacity-0">Lesson Prompts</a></span>
					<!-- <span class="prompt-link"><a href="">Teacher Support Materials</a></span> -->
					<hr />
				</div>
				<div class="refrence-link">
					<a target="_blank" href="ELP.pdf" class="btn refrence-link">ELP</a>
					<a target="_blank" href="http://www.literacyprogressions.tki.org.nz/The-Structure-of-the-Progressions/After-one-year-at-school?q=node/12" class="btn refrence-link">LLP</a>
					<div class="clear"></div>
					<a target="_blank" href="http://nzcurriculum.tki.org.nz/" class="btn refrence-link">NZC</a>
				</div>
			</div>
			<div id="subsequent-read-pane" class="tab-content">
				<div class="description-box">
					<div class="truncate-block">
						<p>Shared reading involves multiple readings of a text that is initially too difficult for students to read by themselves . Subsequent readings of the big book will be with a group of students who have similar learning needs rather than with the whole class. These readings and the after-reading tasks should arise from monitoring the students' needs and should provide purposeful practice and reinforcement.</p>
					</div>
				</div>
				<div>
					<label class="left">Go to page</label>
					<select class="goto-page non-phrase-mode">
						<?php for ($i = 1; $i <= count($pages); $i++){?>
							<option value="<?php echo $i;?>"><?php echo ($i+(($i - 1) * 2))." - ".(($i+(($i - 1) * 2))+1);?></option>
						<?php }?>
					</select>
					<hr />
				</div>
				<div>
					<h4 class="title">Ready to Read Colour Levels</h4>
					<select id="color-scheme-selected" class="non-phrase-mode">
						<option value="" selected="">Reading level colour</option>
						<option value="group1">Magenta - Green</option>
						<option value="group2">Orange - Turquoise</option>
						<option value="group3">Purple - Gold</option>
					</select>				
					<hr />
				</div>
				<div class="help-icon-div">
					<h4 class="title"><a id="source-help-id" href="#source-help-text" class="inline-colorbox  top-source-help-id topoffset-50 left-read-setting-pane leftoffset-320 opacity-0"><img class="help-icon-img"style="display: inline-block;" src="images/i_icon.gif" /></a>Sources of information</h4>
					<div id="structure-controller">
						<a id="visual-help-id" href="#visual-help-text" class="inline-colorbox  top-visual-help-id topoffset-50 left-read-setting-pane leftoffset-320 opacity-0"><img style="display: inline-block;" src="images/i_icon.gif" /></a><input type="button" class="btn view-toggle-button non-phrase-mode" name="visual" value="Visual" />
						<a id="structure-help-id" href="#structure-help-text" class="inline-colorbox  top-structure-help-id topoffset-50 left-read-setting-pane leftoffset-320 opacity-0"><img style="display: inline-block;" src="images/i_icon.gif" /></a><input type="button" class="btn view-toggle-button non-phrase-mode" name="structure" value="Structure" />
						<a id="meaning-help-id" href="#meaning-help-text" class="inline-colorbox  top-meaning-help-id topoffset-50 left-read-setting-pane leftoffset-320 opacity-0"><img style="display: inline-block;" src="images/i_icon.gif" /></a><input type="button" class="btn view-toggle-button non-phrase-mode" name="meaning" value="Meaning" />
						<input type="button" class="btn clear-view-mode non-phrase-mode" name="clear" value="Clear" />
						<div style="display: none;">
							<div id="visual-help-text" class="inline-colorbox-content help-colorbox">
								<p>Students can use their accumulating knowledge of the story and their knowledge of digraphs and blends to help them work out unfamiliar words.</p>
								<a href="">Read more in ELP pg 30</a>	
							</div>
							<div id="structure-help-text" class="inline-colorbox-content help-colorbox">
								<p>The grammatical structures of phrases and sentences.</p>
								<a href="">Read more in ELP pg 30</a>	
							</div>
							<div id="meaning-help-text" class="inline-colorbox-content help-colorbox">
								<p>Students can use knowledge strategies and awareness in order to get meaning when reading.</p>
							</div>
							<div id="source-help-text" class="inline-colorbox-content help-colorbox">
								<p>As they interact with texts, students use meaning (meaning of words and images), structure (Grammatical structure of phrases and sentences), and visual information (features of printed letters, words and punctuation). This tool identifies the specific features of this text relating to each source of information that you may need to focus on with your students.</p>
							</div>
							<div id="phrase-help-text" class="inline-colorbox-content help-colorbox">
								<p>This mode provides highlighted phrases to support phrased fluent reading. Students might use this mode after many shared readings to scaffold their independent reading.</p>
								<a href="">Read more in ELP pg 30</a>	
							</div>

						</div>
						
					</div>
				</div>
				<h3>Towards independent reading</h3>
				<hr />
				<div>
					<h4 class="title"><a href="#phrase-help-text" class="inline-colorbox  topoffset-50 left-read-setting-pane leftoffset-320 opacity-0"><img style="display: inline-block;" src="images/i_icon.gif" /></a>Phrase Mode</h4>
					<input type="button" class="btn enter-phrase-mode" name="phrase" value="Phrase" />
					<hr />
				</div>
				<div>
					<span class="prompt-link"><a href="#book-wrapper .active-slide .lesson-prompt" class="inline-colorbox  topoffset-50 left-read-setting-pane leftoffset-320 opacity-0">Lesson Prompts</a></span>
					<!-- <span class="prompt-link"><a href="">Teacher Support Materials</a></span> -->
					<hr />
				</div>
				<div class="refrence-link">
					<a target="_blank" href="ELP.pdf" class="btn refrence-link">ELP</a>
					<a target="_blank" href="http://www.literacyprogressions.tki.org.nz/The-Structure-of-the-Progressions/After-one-year-at-school?q=node/12" class="btn refrence-link">LLP</a>
					<div class="clear"></div>
					<a target="_blank" href="http://nzcurriculum.tki.org.nz/" class="btn refrence-link">NZC</a>
				</div>
			</div>			
		</div>
	</div>
	<div id="book-wrapper">
		<?php
			foreach($pages as $index => $page){
		?>
				<div class="slide shared-slide <?php if($pageid == $index && $mode == 'shared') echo"active-slide ";if($index == 1) echo "first-slide "; elseif(count($pages) == $index)echo "last-slide ";?>" id="book-slide-shared-<?php echo $index;?>">
					<?php echo file_get_contents($page);?>
				</div>
		<?php
			}
		?>
		<?php
			foreach($subpages as $index => $page){
		?>
				<div class="slide subsequent-slide <?php if($index == 1) echo "first-slide "; elseif(count($pages) == $index)echo "last-slide ";?>" id="book-slide-subsequent-<?php echo $index;?>">
					<?php echo file_get_contents($page);?>
				</div>
		<?php
			}
		?>
		<?php
			foreach($readpages as $index => $page){
		?>
				<div class="slide read-slide <?php if($pageid == $index && $mode == 'subsequent') echo"active-slide ";if($index == 1) echo "first-slide "; elseif(count($pages) == $index)echo "last-slide ";?>" id="book-slide-read-<?php echo $index;?>">
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
</div>
<div class="push"></div>
<div id="navigation">
	<a id="previous-slide" <?php if($pageid <= 1)echo "style='display:none;'";?> class="nav-link" href="plan.php<?php echo "book=$book&plan=$plan&mode=$mode&page=".($pageid - 1);?>">Previous</a>
	<a id="next-slide" <?php if(count($pages) <= $pageid)echo "style='display:none;'";?> class="nav-link" href="plan.php<?php echo "book=$book&plan=$plan&mode=$mode&page=".($pageid + 1);?>">Next</a>
</div>
<div id="controller">
	<button class="btn non-phrase-mode" type="button" name="Highlight" value="Highlight" id="writehighlight" >Go to Highlight Mode</button>
	<div id="highlight_color_picker">
		<span id="lightgreen" class="color-picker-lightgreen selected-color" >&nbsp</span>
		<span id="yellow" class="color-picker-yellow" />&nbsp</span>
		<span id="lightblue" class="color-picker-lightblue" />&nbsp</span>
	</div>
	<button class="btn non-phrase-mode" type="button" name="Mask" value="Mask" id="writemask" >Go to Mask Mode</button>
	<a href="#" class="phrase-play" title="Play" alt="Play" style="display:none;">Play</a>
</div>
<script type="text/javascript">var pharseaudio = new Array();</script>
<?php
for ($i=1; $i<=count($pages); $i++){
	echo "\n<div id='page_{$i}_audio' class='jplayer'></div><script src='book/default/$book/audio/page_$i.js' type='text/javascript'></script>";
}
?>
<?php include("include/footer.inc"); ?>