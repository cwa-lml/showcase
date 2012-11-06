<?php include_once("include/utils_function.php"); ?>
<?php include("include/header.inc"); ?>
<?php
/*Setup Varaible*/
$book = 'dragon'; //Default book

if(isset($_GET['book']))
	$book = trim($_GET['book']);
$bookinfro = getBookInfo($book);
$existingplans = getAllPlan($book);
?>
<h1 class="content-title hide">Home</h1>
<div id="content-wrapper" class="clearfix">
	<div class="left size1of2 ">
		<img src="<?php echo $bookinfro['cover'];?>" alt="<?php echo $bookinfro['title'];?>" title="<?php echo $bookinfro['title'];?>" />
	</div>
	<div class="right size1of2">
		<div class="round-conner-box plan-lesson">
			<h2>Plan Lesson</h2>
			<a class="btn inline-colorbox" id="open-new-plan" href="#new-plan-form">New</a>
			<?php if(count($existingplans)){?>
			<a class="btn inline-colorbox" id="open-existing-plan" href="#existing-plans">Open existing</a>
			<?php }?>
		</div>
		<div class="clearfix"></div>
		<?php if(count($existingplans)){?>
		<div class="round-conner-box play-lesson">
			<h2>Play Lesson</h2>
			<form action="read.php">
				<input type="hidden" name="book" value="<?php echo $book;?>" />
				<select name="plan">
					<?php foreach ($existingplans as $plan) {
						echo "<option value='".$plan['name']."'>".$plan['title']."</option>";
					}?>
				</select>
				<select class="margin-top" name="mode">
					<!-- <option value="default-value" selected="selected">default value</option> -->
					<option value="shared">1st shared read</option>
					<option value="subsequent">Subsequent read</option>
				</select>
				<input type="submit" class="btn" name="read" value="Read" />
			</form>
		</div>
		<?php }?>
	</div>
</div>
<div style="display: none;">
	<div id="new-plan-form">
		<form action="plan.php">
			<input type="hidden" name="book" value="<?php echo $book;?>" />
			<label>Name :</label><input type="text" name="plan" value="" />
			<input type="submit" class="btn" name="Create" value="Create" />
		</form>
	</div>
	<div id="existing-plans">
		<ul class="plans-list">
			<?php foreach ($existingplans as $plan) {
				echo "<li><a href='plan.php?book=$book&amp;plan=".$plan['name']."'>".$plan['title']."</a></li>";
			}?>
		</ul>
	</div>
</div>
<?php include("include/footer.inc"); ?>