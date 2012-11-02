$.fn.textSize = function(text){
  var org = $(this)
  var html = $('<span style="postion:absolute;width:auto;left:-9999px">' + (text || org.html()) + '</span>');
  if (!text) {
    html.css("font-family", org.css("font-family"));
    html.css("font-size", org.css("font-size"));
  }
  $('body').append(html);
  var width = html.width();
  var height = html.height();
  html.remove();
  return {'width': width, 'height': height};
}

$.fn.wrapWordSpan = function(cssclass){
	$(this).each(function() {
		var temp = [],
			n = 0,
			inTag = false,
			html = $(this).html();

		$.each(html.split(' '), function(index, text) {
			text = text.replace(/(<[^>]*>)([^>]*)*$/, '$2$1');
			if(inTag) {
				temp[n++] = text;
				if(/>[^<]*$/.test(text)) {
					inTag = false;
				}
			} else {
				if(/^[^>]*</.test(text)) {
					inTag = true;
					temp[n++] = text;
				} else {
					
					temp[n++] = '<span class="'+cssclass+'">'+text.replace(/(\W)/, '</span>$1<span class="'+cssclass+'">')+'</span>';
				}
			}
		});
		$(this).html(temp.join(' '));
	});
}

$(document).ready(function(){
	function loadWorkspacepage(pageid, slideid){
		$("#workspace-currentslide").html($("#book-slide-read-"+pageid+" .page:nth-child("+slideid+")").html());

		$("#workspace-currentslide p span").each(function() {
			$(this).before($(this).html());
			$(this).remove();
		});
		
		$("#workspace-currentslide p").wrapWordSpan("span-draggable");
		$("#workspace-currentslide p span.span-draggable").draggable({ 
			helper: "clone",
			grid: [ 20, 20 ],
			cursor: "move" });
		$( "#workspace-drop-container" ).droppable({
			accept: "#workspace-currentslide p span.span-draggable",
			activeClass: "ui-state-highlight",
			drop: function( event, ui ) {
				var $this = $(this);
				if(wordchunks[ui.helper.text().toLowerCase()] != undefined){
					currentleft = ui.position.left;
					$.each(wordchunks[ui.helper.text().toLowerCase()], function(key, val){
						newitem  = $("<li style='position: absolute;left:"+currentleft+"px;top:"+ui.position.top+"px;'>"+val+"</li>");
						$this.find("ul").append(newitem);
						newitem.draggable({ 
							containment: $this,
							cursor: "move" });
						currentleft += newitem.outerWidth();
					});
				}
				else {
					newitem  = $("<li style='position: absolute;left:"+ui.position.left+"px;top:"+ui.position.top+"px;'>"+ui.helper.html()+"</li>");
					$this.find("ul").append(newitem);
					newitem.draggable({ 
						containment: $this,
						cursor: "move" });
				}
			}
		});
	}
	
	function saveBook(async, page){
		var currentpage = $("#book-wrapper div.active-slide");
		var currentpageid = $("#setting-current-page").val();
		var currentmode = $("#setting-current-mode").val();
		if(page != false){
			currentpage = page;
			currentpageid = page.attr('id').replace('book-slide-'+currentmode+"-",'');
		}
		$('span.highlighted').addClass('highlighted-mask');
		$('#book-wrapper p span').removeClass('highlighted-live');
		$('#book-wrapper p span').removeClass('masked-live');
		$(".show-view-mode").addClass('color-mask');
		$.ajax({ async: async,
					  type: "POST",
					  url: "ajax.php",
					  data: "action=save&plan="+$("#setting-current-plan").val()+"&page="+currentpageid+"&book="+$("#setting-current-book").val()+"&mode="+$("#setting-current-mode").val()+"&content="+currentpage.html(),
					  success: function(html){
					  }
					});					
		if($("#writehighlight").html() == 'Highlight Mode'){
			$('span.highlighted').addClass('highlighted-live');
			$('span.highlighted').removeClass('highlighted-mask');
		}
		if($("#writemask").html() == 'Mask Mode')
			$('span.masked').addClass('masked-live');
		if($('#structure-controller .active').length > 0)
			$(".show-view-mode").filter(function(index) { return $(this).hasClass($('#structure-controller .active').attr('name')+"-text");}).removeClass('color-mask');
	}
	
	$("#writehighlight").click(function(ev) {
		if($(this).html() == 'Highlight Mode'){
			$("#highlight_color_picker").hide();
			$(this).html('Go to Highlight Mode');
			$(this).removeClass('active');
			$('#book-wrapper p').unbind('mouseup');
			$('#book-wrapper p span').removeClass('highlighted-live');
			$('span.highlighted').addClass('highlighted-mask');
		}
		else{
			$('#controller .active').click();
			$(this).html('Highlight Mode');
			$(this).addClass('active');
			$("#highlight_color_picker").show();
			$('span.highlighted').addClass('highlighted-live');
			$('span.highlighted').removeClass('highlighted-mask');
			$('#book-wrapper p').mouseup(function(event){
				selectedhighlights = $(this).wrapSelection({fitToWord: false}).addClass('highlighted highlighted-live color-picker-'+$('#highlight_color_picker span.selected-color').attr('id'));
				if(event.detail == 2 && selectedhighlights.length > 0){
					lastelement = $(selectedhighlights[selectedhighlights.length - 1]);
					if(jQuery.trim(lastelement.html()) != lastelement.html()){
						lastelement.html(jQuery.trim(lastelement.html()));
						lastelement.after(' ');
					}
				}
				saveBook(true, false);
			});
		}
	});
	
	$("#highlight_color_picker").hide();
	$("#highlight_color_picker span").click(function() {
		$("#highlight_color_picker span").removeClass('selected-color');		
		$(this).addClass('selected-color');
	});
	
	$("#writemask").click(function(ev) {
		if($(this).html() == 'Mask Mode'){
			$(this).html('Go to Mask Mode');
			$(this).removeClass('active');
			$('#book-wrapper').removeClass('masked-mode');
			$('#book-wrapper p').unbind('mouseup');
			$('#book-wrapper p span').removeClass('masked-live');
		}
		else{
			$('#controller .active').click();
			$(this).html('Mask Mode');
			$(this).addClass('active');
			$('span.masked').addClass('masked-live');
			$('#book-wrapper').addClass('masked-mode');
			$('#book-wrapper p').mouseup(function(event){
				selectedmask = $(this).wrapSelection({fitToWord: false}).addClass('masked masked-live');
				maskkey = 'masked-'+$('.masked').length+'-index';
				selectedmasktext = '';
				selectedmaskclass = '';
				jQuery.each(selectedmask, function(index, element) {
					if(index == 0)
						$(element).addClass('masked-first');
					if(index + 1 == selectedmask.length){
						if(event.detail == 2){
							lastelement = $(element);
							if(jQuery.trim($(element).html()) != $(element).html()){
								$(element).html(jQuery.trim($(element).html()));
								$(element).after(' ');
							}
						}
						$(element).addClass('masked-last');
					}
					selectedmasktext += $(element).html();
					$(element).attr('id', maskkey+'-'+index);
					selectedmaskclass += ' '+maskkey+'-'+index;
				});
				$('#book-wrapper div.active-slide').append("<span class='"+jQuery.trim(selectedmaskclass)+"' style='display:none;'>"+selectedmasktext+"</span>");
				saveBook(true, false);
			});
		}
	});
	
	$("#highlight").click(function(ev) {
		if($(this).html() == 'UnHighlight'){
			$(this).html('Highlight');
			$(this).removeClass('active');
			$('span.highlighted').removeClass('highlighted-live1');
			$('span.highlighted').addClass('highlighted-mask');
		}
		else{
			$(this).html('UnHighlight');
			$(this).addClass('active');
			$('span.highlighted').addClass('highlighted-live1');
			$('span.highlighted').removeClass('highlighted-mask');
		}
	});
	
	$('span.highlighted-live').live("click", function(){
		$(this).before($(this).html());
		$(this).remove();
		saveBook(true, false);
	});

	$('span.highlighted-live1').live("click", function(){
		$(this).removeClass('highlighted-live1');
	});

	$('span.masked-live').live("click", function(){
		var maskeditems = $("."+$(this).attr("id"));
		jQuery.each(maskeditems.attr('class').split(' '),function(index, element) {		
			if(jQuery.trim(element) !== '' && $("#"+element).hasClass('masked')){
				removeitem = $("#"+element);
				$(removeitem).before($(removeitem).html());
				$(removeitem).remove();
			}
		});
		maskeditems.remove();
		saveBook(true, false);
	});
	
	$(".read-mode span.masked").live("click", function(ev) {
		var content = $("."+$(this).attr("id"));
		var position = $(this).position();
		jQuery.each(content.attr('class').split(' '),function(index, element) {
			if(jQuery.trim(element) !== '' && $("#"+element).hasClass('masked-first'))
				position = $("#"+element).position();
		});	
		$.colorbox({opacity: 0.5, top: position.top+"px", left: position.left+"px", title:"<span id='inc-250' class='zoom-colorbox-content'>zoom</span>",html:"<div class='colorbox-content'>"+content.html()+"</div>"});
		$(".colorbox-content").css("font-size", "200%");
	});
	
	$('span.zoom-colorbox-content').live("click", function(){
		if($(this).hasClass('active-zoom')){
			$(this).removeClass('active-zoom');
			$(".colorbox-content").css("font-size", "200%");
		}
		else{
			$(this).addClass('active-zoom');
			textsize = $(this).attr('id').replace('inc-','');
			$(".colorbox-content").css("font-size", textsize+"%");
		}
		htmlsize = $(".colorbox-content").textSize();
		$.colorbox.resize({innerWidth: htmlsize.width + 20});
	});
	
	$(".read-mode img").click(function(ev) {
		
		current_image = $(this).attr('src').replace('.','enlarge.');
		var img = new Image();
		  
		// wrap our new image in jQuery, then:
		$(img).attr('src', current_image).load(function (){
			$.colorbox({opacity: 0.5, html:"<div class='colorbox-image'><div id='current-colorbox-div'><img id='current-colorbox-image' src='"+current_image+"' /></div></div>"});
		});
		
	});
	
	$(".read-mode img").each(function() {
		current_image = $(this).attr('src').replace('.','enlarge.');
		var img = new Image();
		$(img).attr('src', current_image);
	});
	/*$(window).bind('beforeunload', function(event){
		saveBook(false);
	});*/
	$(".inline-colorbox").click(function(ev) {
		var position = $(this).offset();
		var top = position.top;
		var left = position.left;
		var offsetleft = 0;
		var offsettop = 0;
		var bkopacity = 0.5;
		jQuery.each($(this).attr('class').split(' '),function(index, element) {
			
			if($.string(element).startsWith('top-')){
				value = element.replace('top-','');
				if(!parseInt(value)){
					position.top = $("#"+value).offset().top;
				}
				else
					position.top = value;	
			}
			if($.string(element).startsWith('topoffset')){
				value = element.replace('topoffset','');
				if(parseInt(value))
					offsettop = value;	
			}

			if($.string(element).startsWith('left-')){
				value = element.replace('left-','');
				if(!parseInt(value)){
					position.left = $("#"+value).offset().left;
				}
				else
					position.left = value;	
			}

			if($.string(element).startsWith('leftoffset')){
				value = element.replace('leftoffset','');
				if(parseInt(value))
					offsetleft = value;	
			}
			if($.string(element).startsWith('opacity-'))
				bkopacity = parseFloat(element.replace('opacity-',''));
		});
		$.colorbox({opacity: bkopacity, top: eval(position.top + offsettop)+"px", left: eval(position.left + offsetleft)+"px",inline:true, href:$(this).attr('href')});
		return false;
	});
	
	$("#next-slide").click(function(ev) {
		if($(".phrase-play").text() != 'Play')
			$(".phrase-play").click();
		var currentmode = $("#setting-current-mode").val();
		var currentslide = $("#book-wrapper div.active-slide");
		var pageid = parseInt(currentslide.attr('id').replace("book-slide-"+currentmode+"-",""));
		var nextslide = $("#book-wrapper #book-slide-"+currentmode+"-"+(pageid + 1));
		currentslide.removeClass('active-slide');
		nextslide.addClass('active-slide');
		$("#setting-current-page").val(pageid + 1);
		$(".nav-link").show();
		$(".goto-page option[value="+(pageid + 1)+"]").attr('selected', 'selected');
		if(nextslide.hasClass('last-slide'))
			$(this).hide();
		return false; 
	});
	$("#previous-slide").click(function(ev) {
		if($(".phrase-play").text() != 'Play')
			$(".phrase-play").click();
		var currentmode = $("#setting-current-mode").val();
		var currentslide = $("#book-wrapper div.active-slide");
		var pageid = parseInt(currentslide.attr('id').replace("book-slide-"+currentmode+"-",""));
		var nextslide = $("#book-wrapper #book-slide-"+currentmode+"-"+(pageid - 1));
		currentslide.removeClass('active-slide');
		nextslide.addClass('active-slide');
		$("#setting-current-page").val(pageid - 1);
		$(".nav-link").show();
		$(".goto-page option[value="+(pageid - 1)+"]").attr('selected', 'selected');
		if(nextslide.hasClass('first-slide'))
			$(this).hide();
		return false;
	});
	$(".tab-content").hide();
	$("#show-setting-pane").click(function(ev) {
		var settingtabs = $($(this).attr('href'));	
		if($(this).text() != 'Show pane'){
			$(this).text('Show pane');
			settingtabs.stop().animate({'left':"+="+(settingtabs.outerWidth() + 10)+'px'}, 1000, function() {settingtabs.hide();});
		}
		else{
			$($("#tabs-header li.selected-tab a").attr('href')).show();
			settingtabs.css('left', ($(window).width()+10)+'px');
			$(this).text('Hide pane');
			settingtabs.stop().show().animate({'left':"-="+(settingtabs.outerWidth() + 10)+'px'}, 1000);
		}
		return false;
	});

	$("#tabs-header li").click(function(ev) {
		if(!$(this).hasClass('selected-tab') && $("#setting-current-mode").val() != 'read'){
			$(".tab-content").hide();
			var currentmodeid = $("#tabs-header li.selected-tab a:first-child").attr('id').replace('mode-tab-','');
			$("#tabs-header li").removeClass('selected-tab');
			$(this).addClass('selected-tab')
			$($(this).find('a:first-child').attr('href')).show();
			modeid = $(this).find('a:first-child').attr('id').replace('mode-tab-','');
			$("#setting-current-mode").val(modeid);
			var currentslide = $("#book-wrapper div.active-slide");
			var pageid = parseInt(currentslide.attr('id').replace("book-slide-"+currentmodeid+"-",""));
			currentslide.removeClass('active-slide');
			$("#book-wrapper #book-slide-"+modeid+"-"+pageid).addClass('active-slide');
			if($("#book-wrapper #book-slide-"+$("#setting-current-mode").val()+"-1 .setting-phrase-mode").length > 0){
				$(".enable-phrase-mode[name='"+$("#setting-current-mode").val()+"']").val('Disable phrase mode');
				$(".check-phrase-mode").removeAttr('disabled');
			}
			else{
				$(".check-phrase-mode").attr('disabled', 'disabled');
			}			
		}
		return false;
	});
	
	$("#color-scheme-selected option").each(function() {
		if($("#book-wrapper .subsequent-slide span.color-"+$(this).val()+':first').hasClass('show-view-mode'))
			$(this).attr('selected', 'selected');
	});
	
	$("#color-scheme-selected").change(function(ev) {
		if($(this).find("option:selected").val() != ''){
			var currentmode = $("#setting-current-mode").val();
			$(".show-view-mode").removeClass('show-view-mode');
			$("#book-wrapper span.color-"+$(this).find("option:selected").val()).addClass('show-view-mode');
			$("#book-wrapper div."+currentmode+"-slide").each(function() {
				saveBook(true, $(this));
			});
			
		}	
	});
	
	$(".clear-view-mode").click(function(ev) {
		var currentmode = $("#setting-current-mode").val();
		$('#structure-controller .active').removeClass('active');
		$(".show-view-mode").addClass('color-mask');
		$(".show-view-mode").removeClass('show-view-mode');
		$("#book-wrapper div."+currentmode+"-slide").each(function() {
			saveBook(true, $(this));
		});
	});
	
	$("#structure-controller .view-toggle-button").click(function(ev) {
		selectedview = $(this).attr('name'); 
		if(!$(this).hasClass('active')){
			$(".show-view-mode").filter(function(index) { return $(this).hasClass($('#structure-controller .active').attr('name')+"-text");}).addClass('color-mask');
			$('#structure-controller .active').removeClass('active');
			$(".show-view-mode").filter(function(index) { return $(this).hasClass(selectedview+"-text");}).removeClass('color-mask');
			$(this).addClass('active');
		}
		else{
			$(".show-view-mode").filter(function(index) { return $(this).hasClass(selectedview+"-text");}).addClass('color-mask');
			$(this).removeClass('active');
		}
		
	});

	$(".goto-page").change(function(ev) {
		if($(".phrase-play").text() != 'Play')
			$(".phrase-play").click();
		var currentmode = $("#setting-current-mode").val();
		var currentslide = $("#book-wrapper div.active-slide");
		var pageid = $("#setting-current-page").val();
		if($(this).find("option:selected").val() != '' && pageid != $(this).find("option:selected").val()){
			$("#book-wrapper div.active-slide").removeClass('active-slide');
			$("#book-wrapper #book-slide-"+currentmode+"-"+$(this).find("option:selected").val()).addClass('active-slide');
			$("#setting-current-page").val($(this).find("option:selected").val());
			$(".nav-link").show();
			if($("#book-wrapper div.active-slide").hasClass('first-slide'))
				$("#previous-slide").hide();
			if($("#book-wrapper div.active-slide").hasClass('last-slide'))
				$("#next-slide").hide();
		}
	});
	
	if($("#book-wrapper #book-slide-"+$("#setting-current-mode").val()+"-1 .setting-phrase-mode").length > 0){
		$(".enable-phrase-mode[name='"+$("#setting-current-mode").val()+"']").val('Disable phrase mode');
		$(".check-phrase-mode").removeAttr('disabled');
	}
	else{
		$(".check-phrase-mode").attr('disabled', 'disabled');
	}
	$(".enable-phrase-mode").click(function(ev) {
		var currentmode = $(this).attr('name');
		if($(this).val() == 'Enable phrase mode'){
			$(this).val('Disable phrase mode');
			$("#book-wrapper #book-slide-"+currentmode+"-1").append('<input type="hidden" name="phrasemode" class="setting-phrase-mode" value="enable" />');
			saveBook(true, $("#book-wrapper #book-slide-"+currentmode+"-1"));
		}
		else{
			$(this).val('Enable phrase mode');
			if($("#book-wrapper #book-slide-"+currentmode+"-1 .setting-phrase-mode").length > 0){
				$("#book-wrapper #book-slide-"+currentmode+"-1 .setting-phrase-mode").remove();
				saveBook(true, $("#book-wrapper #book-slide-"+currentmode+"-1"));
			}
		}
	});

	var phraseactiveid = false;

	$(".enter-phrase-mode").click(function(ev) {
		if(!$(".enter-phrase-mode").hasClass('active')){
			$(".non-phrase-mode").attr('disabled', 'disabled');
			$(".active-slide").removeClass('active-slide');
			$("#book-wrapper #book-slide-read-"+$("#setting-current-page").val()).addClass('active-slide');	
			$("#book-wrapper").append('<span id="phrase-button-text" style="display:none;">'+$(this).val()+'</span><span id="phrase-prev-mode" style="display:none;">'+$("#setting-current-mode").val()+'</span>');
			$("#setting-current-mode").val('read');
			if($(".enter-phrase-mode").hasClass('swicth-name'))
				$(".enter-phrase-mode").val('Hide Phrase');
			$(".enter-phrase-mode").addClass('active');
			$(".phrase-play").show();
		}
		else{
			$("div.active-slide").narrateify( 'stop' );
			modeid = $('#phrase-prev-mode').text();
			$("#setting-current-mode").val(modeid);
			$(".active-slide").removeClass('active-slide');
			$("#book-wrapper #book-slide-"+modeid+"-"+$("#setting-current-page").val()).addClass('active-slide');
			$(".non-phrase-mode").removeAttr('disabled');
			$(".enter-phrase-mode").removeClass('active');
			$(".enter-phrase-mode").val($("#phrase-button-text").text());
			$("#phrase-button-text").remove();
			$("#phrase-prev-mode").remove();
			$(".phrase-play").hide();
		}
	});
	
	$(".read-slide").each(function() {
		$("body").narrateify( pharseaudio['page_'+$(this).attr('id').replace('book-slide-read-','')] );
	});
	$("span.phrase").click(function(ev) {
		$("div.active-slide").narrateify( 'play', pharseaudio['page_'+$("div.active-slide").attr('id').replace('book-slide-read-','')] );
		$(".phrase-play").text('Stop');
		$(".phrase-play").attr('title', 'Stop');
		$(".phrase-play").attr('alt', 'Stop');
		$(".phrase-play").addClass('stop-button');
		
	});
	$(".phrase-play").click(function(ev) {
		if($(this).text() == 'Play'){
			$("div.active-slide").narrateify( 'play', pharseaudio['page_'+$("div.active-slide").attr('id').replace('book-slide-read-','')] );
			$(this).text('Stop');
			$(this).attr('title', 'Stop');
			$(this).attr('alt', 'Stop');
			$(this).addClass('stop-button');
		}
		else{
			$("div.active-slide").narrateify( 'stop' );
			$(this).removeClass('stop-button');
			$(this).text('Play');
			$(this).attr('title', 'Play');
			$(this).attr('alt', 'Play');
		}
		return false;
	});
	
	$(".truncate-block").expander({
		expandText: 'More',
		userCollapseText: 'Less',
		slicePoint: 55,
		moreClass: 'read-more',
		lessClass: 'read-less',
		afterExpand: function() {
				var position = $(this).position();
				$(this).find(".summary").show();
				$(this).find(".details").css("position","absolute");
				$(this).find(".details").css("left", position.left);
				$(this).find(".details").css("top", position.top);
				$(this).find(".details").css("width", $(this).width());
			}
		});
	
	/*$('#workspace-drop-container ul li').live("click", function(){
		$(this).remove();
	});*/

	$('#workspace-previous-slide').live("click", function(){
		var currentpageid = $("#workspace-page-id").val();
		if($("#workspace-slide-id").val() == 2){
			$("#workspace-slide-id").val(1);
		}
		else if($("#workspace-slide-id").val() == 1){
			currentpageid = parseInt(currentpageid) - 1;
			$("#workspace-slide-id").val(1);
			$("#workspace-page-id").val(currentpageid);
		}
		loadWorkspacepage(currentpageid, $("#workspace-slide-id").val());
		$(".workspace-nav-link").show();
		if($("#book-slide-read-"+currentpageid).hasClass('last-slide') && $("#workspace-slide-id").val() == 2)
			$('#workspace-next-slide').hide();

		if($("#book-slide-read-"+currentpageid).hasClass('first-slide') && $("#workspace-slide-id").val() == 1)
			$('#workspace-previous-slide').hide();
	});
	
	$('#workspace-next-slide').live("click", function(){
		var currentpageid = $("#workspace-page-id").val();
		if($("#workspace-slide-id").val() == 1){
			$("#workspace-slide-id").val(2);
		}
		else if($("#workspace-slide-id").val() == 2){
			currentpageid = parseInt(currentpageid) + 1;
			$("#workspace-slide-id").val(1);
			$("#workspace-page-id").val(currentpageid);
		}
		loadWorkspacepage(currentpageid, $("#workspace-slide-id").val());
		$(".workspace-nav-link").show();
		if($("#book-slide-read-"+currentpageid).hasClass('last-slide') && $("#workspace-slide-id").val() == 2)
			$('#workspace-next-slide').hide();

		if($("#book-slide-read-"+currentpageid).hasClass('first-slide') && $("#workspace-slide-id").val() == 1)
			$('#workspace-previous-slide').hide();
	});

	
	$('.workspace-save').live("click", function(){
		var currentpage = $("#workspace-save-content");
		var currentpageid = $("#setting-current-page").val();
		var currentmode = $("#setting-current-mode").val();
		workspacetext = $("#workspace-save-content textarea").val();
		$("#workspace-save-content textarea").html(workspacetext);
		$.ajax({ 
			  type: "POST",
			  url: "ajax.php",
			  data: "action=workspace&plan="+$("#setting-current-plan").val()+"&page="+currentpageid+"&book="+$("#setting-current-book").val()+"&mode="+$("#setting-current-mode").val()+"&content="+currentpage.html(),
			  success: function(html){
			  }
			});					

	});

	$('.workspace-cancel').live("click", function(){
		$.colorbox.close();
	});
	
	$(".enter-workspace-mode").click(function(ev) {
		var position = $("#book-wrapper").offset();
		var bkopacity = 0.5;
		var currentpageid = $("#setting-current-page").val();
		var currentreadslide = $("#book-slide-read-"+currentpageid);
		$(".workspace-nav-link").show();
		if($("#book-slide-read-"+currentpageid).hasClass('last-slide') && $("#workspace-slide-id").val() == 2)
			$('#workspace-next-slide').hide();
		if($("#book-slide-read-"+currentpageid).hasClass('first-slide') && $("#workspace-slide-id").val() == 1)
			$('#workspace-previous-slide').hide();
		$("#workspace-page-id").val(currentpageid);
		loadWorkspacepage(currentpageid, $("#workspace-slide-id").val());
		$.colorbox({opacity: bkopacity, top: position.top+"px", left: position.left+"px",inline:true, href:"#workspace-wapper"});
		return false;
	});

	$('.print-block').live("click", function(){
		var printcontent = $($(this).attr('href')),
			leftoffset = ($("#workspace-drop-container").position().left - 10) * -1,
			topoffset = ($("#workspace-drop-container").position().top - 40) * -1,
			printwords = $("<ul class='print-words'></ul>");
		printcontent.find('print-words').remove();
		$("#workspace-drop-container ul li").each(function(){
			var currentword = $(this).clone(),
				actualposition = $(this).position();
			currentword.css('top', (actualposition.top + topoffset) + 'px')
			currentword.css('left', (actualposition.left + leftoffset) + 'px')
			currentword.css('position', 'absolute')
			currentword.css('list-style-type', 'none')
			printwords.append(currentword);
		});
		printcontent.append(printwords);
		$("#workspace-print-notes").html("<h4>Note :</h4>"+$("#workspace-save-content textarea").val());
		$($(this).attr('href')).print();
		return false;
	});

	$('.print-parent-button').live("click", function(){
		$(this).parent().print();
		return false;
	});
});
