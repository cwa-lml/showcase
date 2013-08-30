/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         $(sym.getVariable("_p4a")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p4a_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p4b_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p4c_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p4d_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p4e_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p4f_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p4g_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p4h_back")).css( 'cursor', 'pointer' );
         
         sym.setVariable('foreground', false);
         sym.play('p4_in');
         
         // http://appcropolis.com/implementing-doubletap-on-iphones-and-ipads/
         $("#Stage_p4a_back").doubletap(
             /** doubletap-dblclick callback */
             function(event){
             },
             /** touch-click callback (touch) */
             function(event){
             },
             /** doubletap-dblclick delay (default is 500 ms) */
             400
         );
         
         /* http://adobe-edge.blogspot.in/2012/03/adobe-edge-audio.html */
         var currenttime = sym.getPosition();
         //if( currenttime == -1 ){
         	var esound = new Audio();
         	esound.src = "audio/flute.mp3";
         	sym.setVariable("audioObj", esound);
         	$(esound).bind("ended",function(){
         		// console.log("ended");
         		// sym.$('Text').html("Audio Completed..");
         		// var playtxt = sym.getSymbol('playbtn').$('Text').html("Play");
         	}); 
         //}

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p4a_back}", "touchstart", function(sym, e) {
         if ( sym.getVariable('foreground') !== true ) {
         	sym.setVariable('swipe_start', e.originalEvent.changedTouches[0].clientX);
         	sym.setVariable('swiping', true);
         }
         // In iBooks we don't want the righthand page to be swiped into the margin.
         // Stop the click event from firing, and interpret a touchend that's too short
         // to be a swipe as a click instead.
         e.preventDefault();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8004, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p4a_close}", "click", function(sym, e) {
         	$(sym.getVariable("_p4a")).css( 'cursor', 'default' );
         	$(sym.getVariable("_p4a_speech")).css( 'cursor', 'default' );
         	$(sym.getVariable("_p4a_speech_2")).css( 'cursor', 'default' );
         	sym.play('p4a_out');
         	
         	$(sym.getVariable("_p4a_back")).css( 'cursor', 'pointer' );
         	$(sym.getVariable("_p4b_back")).css( 'cursor', 'pointer' );
         	$(sym.getVariable("_p4c_back")).css( 'cursor', 'pointer' );
         	$(sym.getVariable("_p4d_back")).css( 'cursor', 'pointer' );
         	$(sym.getVariable("_p4e_back")).css( 'cursor', 'pointer' );
         	sym.setVariable('foreground', false);
         	sym.setVariable('p4a_state', undefined);
         	
         	var mp3_flute = sym.getVariable("mp3_flute");
         	mp3_flute.pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p4b_close}", "click", function(sym, e) {
         $(sym.getVariable("_p4b")).css( 'cursor', 'default' );
         $(sym.getVariable("_p4b_speech")).css( 'cursor', 'default' );
         sym.play('p4b_out');
         
         $(sym.getVariable("_p4a_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p4b_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p4c_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p4d_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p4e_back")).css( 'cursor', 'pointer' );
         sym.setVariable('foreground', false);
         sym.setVariable('p4b_state', undefined);
         
         var mp3_flute = sym.getVariable("mp3_flute");
         mp3_flute.pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_p4c_close}", "click", function(sym, e) {
         $(sym.getVariable("_p4c")).css( 'cursor', 'default' );
         $(sym.getVariable("_p4c_speech")).css( 'cursor', 'default' );
         sym.play('p4c_out');
         
         $(sym.getVariable("_p4a_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p4b_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p4c_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p4d_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p4e_back")).css( 'cursor', 'pointer' );
         sym.setVariable('foreground', false);
         sym.setVariable('p4c_state', undefined);
         
         var mp3_water = sym.getVariable("mp3_water");
         mp3_water.pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p4d_close}", "click", function(sym, e) {
         $(sym.getVariable("_p4d")).css( 'cursor', 'default' );
         $(sym.getVariable("_p4d_speech")).css( 'cursor', 'default' );
         sym.play('p4d_out');
         
         $(sym.getVariable("_p4a_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p4b_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p4c_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p4d_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p4e_back")).css( 'cursor', 'pointer' );
         sym.setVariable('foreground', false);
         sym.setVariable('p4d_state', undefined);
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p4e_close}", "click", function(sym, e) {
         $(sym.getVariable("_p4d")).css( 'cursor', 'default' );
         $(sym.getVariable("_p4d_speech")).css( 'cursor', 'default' );
         sym.play('p4d_out');
         
         $(sym.getVariable("_p4a_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p4b_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p4c_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p4d_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p4e_back")).css( 'cursor', 'pointer' );
         sym.setVariable('foreground', false);
         sym.setVariable('p4d_state', undefined);
         
         var mp3_swish = sym.getVariable("mp3_swish");
         mp3_swish.pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_p4a_front}", "touchstart", function(sym, e) {
         if ( sym.getVariable('foreground') === true ) {
         	sym.setVariable('swipe_start', e.originalEvent.changedTouches[0].clientX);
         	sym.setVariable('swiping', true);
         }
         // In iBooks we don't want the righthand page to be swiped into the margin.
         // Stop the click event from firing, and interpret a touchend that's too short
         // to be a swipe as a click instead.
         e.preventDefault();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p4a_front}", "touchend", function(sym, e) {
         if ( sym.getVariable('foreground') === true 
         	&& sym.getVariable('swiping') ) {
         	if ( Math.abs(e.originalEvent.changedTouches[0].clientX - sym.getVariable('swipe_start')) > 30 ) {
         		if ( e.originalEvent.changedTouches[0].clientX < sym.getVariable('swipe_start') ) {
         			$(sym.getVariable("_p4a")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p4a_speech")).css( 'cursor', 'default' );
         
         			sym.play('p4a_swipe_left');
         
         			$(sym.getVariable("_p4b")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p4b_speech")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p4a_speech_2")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p4b_close")).css( 'cursor', 'pointer' );
         
         			sym.setVariable('p4a_state', undefined);
         			sym.setVariable('p4b_state', 'p4b');
         
         		} else {
         			sym.setVariable('foreground', false);
         			$(sym.getVariable("_p4a")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p4a_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p4b_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p4c_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p4d_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p4e_back")).css( 'cursor', 'pointer' );
         			sym.play('p4a_out');
         
         			var mp3_flute = sym.getVariable("mp3_flute");
         			mp3_flute.pause();
         		}
         		sym.setVariable('swipe_start', '0');
         		sym.setVariable('swiping', false);
         	} else {
         		if ( sym.getVariable('p4a_state') === 'p4a' ) {
         			sym.setVariable('p4a_state', 'p4a_speech');
         			$(sym.getVariable("_p4a_speech")).css( 'cursor', 'pointer' );
         
         			sym.play('p4a_speech');
         
         		} else if ( sym.getVariable('p4a_state') === 'p4a_speech' ) {
         			sym.setVariable('p4a_state', 'p4a_speech_2');
         			$(sym.getVariable("_p4a_speech_2")).css( 'cursor', 'pointer' );
         
         			sym.play('p4a_speech_2');
         
         		} else if ( sym.getVariable('p4a_state') === 'p4a_speech_2' ) {
         			$(sym.getVariable("_p4a")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p4a_speech")).css( 'cursor', 'default' );
         
         			sym.play('p4a_swipe_left');
         
         			$(sym.getVariable("_p4b")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p4b_speech")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p4a_speech_2")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p4b_close")).css( 'cursor', 'pointer' );
         
         			sym.setVariable('p4a_state', undefined);
         			sym.setVariable('p4b_state', 'p4b');
         		}
         	}
         }
         
         
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_p4b_front}", "touchstart", function(sym, e) {
         if ( sym.getVariable('foreground') === true ) {
         	sym.setVariable('swipe_start', e.originalEvent.changedTouches[0].clientX);
         	sym.setVariable('swiping', true);
         }
         // In iBooks we don't want the righthand page to be swiped into the margin.
         // Stop the click event from firing, and interpret a touchend that's too short
         // to be a swipe as a click instead.
         e.preventDefault();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p4b_front}", "touchend", function(sym, e) {
         if ( sym.getVariable('foreground') === true 
         	&& sym.getVariable('swiping') ) {
         	if ( Math.abs(e.originalEvent.changedTouches[0].clientX - sym.getVariable('swipe_start')) > 30 ) {
         		if ( e.originalEvent.changedTouches[0].clientX < sym.getVariable('swipe_start') ) {
         			$(sym.getVariable("_p4b")).css( 'cursor', 'default' );
         
         			sym.play('p4b_swipe_left');
         
         			$(sym.getVariable("_p4c")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p4c_speech")).css( 'cursor', 'pointer' );
         
         			sym.setVariable('p4b_state', undefined);
         			sym.setVariable('p4c_state', 'p4c');
         
         			var mp3_flute = sym.getVariable("mp3_flute");
         			mp3_flute.pause();
         
         			/* Play audio */
         			var mp3 = new Audio();
         			mp3.src = "audio/water.mp3";
         			sym.setVariable("mp3_water", mp3);
         			var mp3_water = sym.getVariable("mp3_water");
         			if (typeof mp3_water.loop == 'boolean') {
         				mp3_water.loop = true;
         			}
         			mp3_water.play();
         
         		} else {
         			$(sym.getVariable("_p4b")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p4b_speech")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p4a")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p4a_speech")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p4a_speech_2")).css( 'cursor', 'pointer' );
         
         			sym.play('p4b_swipe_right');
         
         			sym.setVariable('p4b_state', undefined);
         			sym.setVariable('p4a_state', 'p4a_speech_2');
         		}
         		sym.setVariable('swipe_start', '0');
         		sym.setVariable('swiping', false);
         	} else {
         		// In iBooks we don't want the righthand page to be swiped into the margin.
         		// Stop the click event from firing, and interpret a touchend that's too short
         		// to be a swipe as a click instead.		
         		if ( sym.getVariable('p4b_state') === 'p4b' ) {
         			$(sym.getVariable("_p4b_speech")).css( 'cursor', 'pointer' );
         
         			sym.setVariable('p4b_state', 'p4b_speech');
         			sym.play('p4b_speech');
         
         		} else if ( sym.getVariable('p4b_state') === 'p4b_speech' ) {
         			$(sym.getVariable("_p4b")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p4b_speech")).css( 'cursor', 'default' );
         
         			$(sym.getVariable("_p4c")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p4c_speech")).css( 'cursor', 'pointer' );
         
         			sym.setVariable('p4b_state', undefined);
         			sym.setVariable('p4c_state', 'p4c');
         
         			var mp3_flute = sym.getVariable("mp3_flute");
         			mp3_flute.pause();
         
         			sym.play('p4b_swipe_left');
         
         			/* Play audio */
         			var mp3 = new Audio();
         			mp3.src = "audio/water.mp3";
         			sym.setVariable("mp3_water", mp3);
         			var mp3_water = sym.getVariable("mp3_water");
         			if (typeof mp3_water.loop == 'boolean') {
         				mp3_water.loop = true;
         			} else {
         				mp3_water.addEventListener('ended', function() {
         				  this.currentTime = 0;
         				  this.play();
         				}, false);
         			}
         			mp3_water.play();
         		}	
         	}
         }
         
         
         
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_p4c_front}", "touchstart", function(sym, e) {
         if ( sym.getVariable('foreground') === true ) {
         	sym.setVariable('swipe_start', e.originalEvent.changedTouches[0].clientX);
         	sym.setVariable('swiping', true);
         }
         // In iBooks we don't want the righthand page to be swiped into the margin.
         // Stop the click event from firing, and interpret a touchend that's too short
         // to be a swipe as a click instead.
         e.preventDefault();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p4c_front}", "touchend", function(sym, e) {
         if ( sym.getVariable('foreground') === true 
         	&& sym.getVariable('swiping') ) {
         	if ( Math.abs(e.originalEvent.changedTouches[0].clientX - sym.getVariable('swipe_start')) > 30 ) {
         		if ( e.originalEvent.changedTouches[0].clientX < sym.getVariable('swipe_start') ) {
         			$(sym.getVariable("_p4c")).css( 'cursor', 'default' );
         
         			sym.play('p4c_swipe_left');
         
         			$(sym.getVariable("_p4d")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p4d_speech")).css( 'cursor', 'pointer' );
         
         			sym.setVariable('p4c_state', undefined);
         			sym.setVariable('p4d_state', 'p4d');
         		} else {
         			$(sym.getVariable("_p4c")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p4c_speech")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p4b")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p4b_speech")).css( 'cursor', 'pointer' );
         
         			sym.play('p4c_swipe_right');
         
         			sym.setVariable('p4c_state', undefined);
         			sym.setVariable('p4b_state', 'p4b_speech');
         
         			/* Play audio */
         			var mp3 = new Audio();
         			mp3.src = "audio/flute.mp3";
         			sym.setVariable("mp3_flute", mp3);
         			var mp3_flute = sym.getVariable("mp3_flute");
         			mp3_flute.play();
         		}
         
         		var mp3_water = sym.getVariable("mp3_water");
         		mp3_water.pause();
         
         		sym.setVariable('swipe_start', '0');
         		sym.setVariable('swiping', false);
         	} else {
         		// In iBooks we don't want the righthand page to be swiped into the margin.
         		// Stop the click event from firing, and interpret a touchend that's too short
         		// to be a swipe as a click instead.
         		if ( sym.getVariable('p4c_state') === 'p4c' ) {
         			sym.setVariable('p4c_state', 'p4c_speech');
         			$(sym.getVariable("_p4c_speech")).css( 'cursor', 'pointer' );
         
         			sym.play('p4c_speech');
         
         		} else if ( sym.getVariable('p4c_state') === 'p4c_speech' ) {
         			$(sym.getVariable("_p4c")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p4c_speech")).css( 'cursor', 'default' );
         
         			var mp3_water = sym.getVariable("mp3_water");
         			mp3_water.pause();
         
         			sym.play('p4c_swipe_left');
         
         			$(sym.getVariable("_p4d")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p4d_speech")).css( 'cursor', 'pointer' );
         
         			sym.setVariable('p4c_state', undefined);
         			sym.setVariable('p4d_state', 'p4d');
         		}
         	}
         }
         
         
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_p4d_front}", "touchstart", function(sym, e) {
         if ( sym.getVariable('foreground') === true ) {
         	sym.setVariable('swipe_start', e.originalEvent.changedTouches[0].clientX);
         	sym.setVariable('swiping', true);
         }
         // In iBooks we don't want the righthand page to be swiped into the margin.
         // Stop the click event from firing, and interpret a touchend that's too short
         // to be a swipe as a click instead.
         e.preventDefault();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p4d_front}", "touchend", function(sym, e) {
         if ( sym.getVariable('foreground') === true 
         	&& sym.getVariable('swiping') ) {
         	if ( Math.abs(e.originalEvent.changedTouches[0].clientX - sym.getVariable('swipe_start')) > 30 ) {
         		if ( e.originalEvent.changedTouches[0].clientX < sym.getVariable('swipe_start') ) {
         			$(sym.getVariable("_p4d")).css( 'cursor', 'default' );
         
         			sym.play('p4d_swipe_left');
         
         			$(sym.getVariable("_p4e")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p4e_speech")).css( 'cursor', 'pointer' );
         
         			sym.setVariable('p4d_state', undefined);
         			sym.setVariable('p4e_state', 'p4e');
         		} else {
         			$(sym.getVariable("_p4d")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p4d_speech")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p4c")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p4c_speech")).css( 'cursor', 'pointer' );
         
         			sym.play('p4d_swipe_right');
         
         			/* Play audio */
         			var mp3 = new Audio();
         			mp3.src = "audio/water.mp3";
         			sym.setVariable("mp3_water", mp3);
         			var mp3_water = sym.getVariable("mp3_water");
         			mp3_water.play();
         
         			sym.setVariable('p4d_state', undefined);
         			sym.setVariable('p4c_state', 'p4c_speech');
         		}
         		sym.setVariable('swipe_start', '0');
         		sym.setVariable('swiping', false);
         	} else {
         		// In iBooks we don't want the righthand page to be swiped into the margin.
         		// Stop the click event from firing, and interpret a touchend that's too short
         		// to be a swipe as a click instead.
         		if ( sym.getVariable('p4d_state') === 'p4d' ) {
         			sym.setVariable('p4d_state', 'p4d_speech');
         			$(sym.getVariable("_p4d_speech")).css( 'cursor', 'pointer' );
         
         			sym.play('p4d_speech');
         
         		} else if ( sym.getVariable('p4d_state') === 'p4d_speech' ) {
         			$(sym.getVariable("_p4d")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p4d_speech")).css( 'cursor', 'default' );
         
         			sym.play('p4d_swipe_left');
         
         			$(sym.getVariable("_p4e")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p4e_speech")).css( 'cursor', 'pointer' );
         
         			sym.setVariable('p4e_state', undefined);
         			sym.setVariable('p4e_state', 'p4e');
         		}
         	}
         }
         
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_p4e_front}", "touchstart", function(sym, e) {
         if ( sym.getVariable('foreground') === true ) {
         	sym.setVariable('swipe_start', e.originalEvent.changedTouches[0].clientX);
         	sym.setVariable('swiping', true);
         }
         // In iBooks we don't want the righthand page to be swiped into the margin.
         // Stop the click event from firing, and interpret a touchend that's too short
         // to be a swipe as a click instead.
         e.preventDefault();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p4e_front}", "touchend", function(sym, e) {
         if ( sym.getVariable('foreground') === true 
         	&& sym.getVariable('swiping') ) {
         	if ( Math.abs(e.originalEvent.changedTouches[0].clientX - sym.getVariable('swipe_start')) > 30 ) {
         		if ( e.originalEvent.changedTouches[0].clientX < sym.getVariable('swipe_start') ) {
         			$(sym.getVariable("_p4e")).css( 'cursor', 'default' );
         
         			sym.play('p4e_out');
         
         			sym.setVariable('foreground', false);
         			sym.setVariable('p4e_state', undefined);
         		} else {
         			$(sym.getVariable("_p4e")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p4e_speech")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p4d")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p4d_speech")).css( 'cursor', 'pointer' );
         
         			sym.play('p4e_swipe_right');
         
         			sym.setVariable('p4e_state', undefined);
         			sym.setVariable('p4d_state', 'p4d_speech');
         		}
         		sym.setVariable('swipe_start', '0');
         		sym.setVariable('swiping', false);
         	} else {
         		// In iBooks we don't want the righthand page to be swiped into the margin.
         		// Stop the click event from firing, and interpret a touchend that's too short
         		// to be a swipe as a click instead.
         		if ( sym.getVariable('p4e_state') === 'p4e' ) {
         			sym.setVariable('p4e_state', 'p4e_speech');
         			$(sym.getVariable("_p4e_speech")).css( 'cursor', 'pointer' );
         
         			sym.play('p4e_speech');
         
         			/* Play audio */
         			var mp3 = new Audio();
         			mp3.src = "audio/swish.mp3";
         			sym.setVariable("mp3_swish", mp3);
         			var mp3_swish = sym.getVariable("mp3_swish");
         			mp3_swish.play();
         
         		} else if ( sym.getVariable('p4e_state') === 'p4e_speech' ) {
         			$(sym.getVariable("_p4e")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p4e_speech")).css( 'cursor', 'default' );
         
         			sym.play('p4e_out');
         
         			sym.setVariable('foreground', false);
         			sym.setVariable('p4e_state', undefined);
         		}
         	}
         }
         
         

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p4a_back}", "touchend", function(sym, e) {
         if ( sym.getVariable('foreground') !== true 
         	&& sym.getVariable('swiping') === true ) {
         	if ( Math.abs(e.originalEvent.changedTouches[0].clientX - sym.getVariable('swipe_start')) > 30 ) {
         		if ( e.originalEvent.changedTouches[0].clientX < sym.getVariable('swipe_start') ) {
         
         			sym.play('p4_swipe_left');
         			sym.play('p4_end');
         
         		} else {
         			sym.play('p4_swipe_right');
         			sym.play('p4_end');
         		}
         		sym.setVariable('swipe_start', '0');
         		sym.setVariable('swiping', false);
         	} else {
         		// In iBooks we don't want the righthand page to be swiped into the margin.
         		// Stop the click event from firing, and interpret a touchend that's too short
         		// to be a swipe as a click instead.
         		$(sym.getVariable("_p4a_back")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p4b_back")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p4c_back")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p4d_back")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p4e_back")).css( 'cursor', 'default' );
         		sym.play('p4_out');
         
         		$(sym.getVariable("_p4a")).css( 'cursor', 'pointer' );
         		$(sym.getVariable("_p4a_speech")).css( 'cursor', 'pointer' );
         		$(sym.getVariable("_p4a_speech_2")).css( 'cursor', 'pointer' );
         		$(sym.getVariable("_p4a_close")).css( 'cursor', 'pointer' );
         		sym.play('p4a_in');
         
         		/* Play audio */
         		var mp3 = new Audio();
         		mp3.src = "audio/flute.mp3";
         		sym.setVariable("mp3_flute", mp3);
         		var mp3_flute = sym.getVariable("mp3_flute");
         		mp3_flute.play();
         
         		/* http://adobe-edge.blogspot.in/2012/03/adobe-edge-audio.html */
         		//var playtxt=sym.getSymbol('playbtn').$('Text').html();
         		// var audioObj = sym.getVariable("audioObj");
         		//if(playtxt == 'Play') {
         			// audioObj.play();
         			//var playtxt=sym.getSymbol('playbtn').$('Text').html("Pause");
         			//sym.$('Text').html("Audio Playing..");
         		//}
         		//else {
         			//var playtxt=sym.getSymbol('playbtn').$('Text').html("Play");
         			//sym.$('Text').html("Audio Paused..");
         			//audioObj.pause();
         		//}
         
         		sym.setVariable('foreground', true);
         		sym.setVariable('p4a_state', 'p4a');
         	}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p4b_back}", "touchend", function(sym, e) {
         if ( sym.getVariable('foreground') !== true 
         	&& sym.getVariable('swiping') === true ) {
         	if ( Math.abs(e.originalEvent.changedTouches[0].clientX - sym.getVariable('swipe_start')) > 30 ) {
         		if ( e.originalEvent.changedTouches[0].clientX < sym.getVariable('swipe_start') ) {
         
         			sym.play('p4_swipe_left');
         			sym.play('p4_end');
         
         		} else {
         			sym.play('p4_swipe_right');
         			sym.play('p4_end');
         		}
         		sym.setVariable('swipe_start', '0');
         		sym.setVariable('swiping', false);
         	} else {
         		// In iBooks we don't want the righthand page to be swiped into the margin.
         		// Stop the click event from firing, and interpret a touchend that's too short
         		// to be a swipe as a click instead.
         		$(sym.getVariable("_p4a_back")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p4b_back")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p4c_back")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p4d_back")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p4e_back")).css( 'cursor', 'default' );
         
         		sym.play('p4_out');
         
         		$(sym.getVariable("_p4b")).css( 'cursor', 'pointer' );
         		$(sym.getVariable("_p4b_speech")).css( 'cursor', 'pointer' );
         		$(sym.getVariable("_p4a_speech_2")).css( 'cursor', 'pointer' );
         		$(sym.getVariable("_p4b_close")).css( 'cursor', 'pointer' );
         
         		sym.play('p4b_in');
         
         		/* Play audio */
         		var mp3 = new Audio();
         		mp3.src = "audio/flute.mp3";
         		sym.setVariable("mp3_flute", mp3);
         		var mp3_flute = sym.getVariable("mp3_flute");
         		mp3_flute.play();
         
         		sym.setVariable('foreground', true);
         		sym.setVariable('p4b_state', 'p4b');
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p4c_back}", "touchend", function(sym, e) {
         if ( sym.getVariable('foreground') !== true 
         	&& sym.getVariable('swiping') === true ) {
         	if ( Math.abs(e.originalEvent.changedTouches[0].clientX - sym.getVariable('swipe_start')) > 30 ) {
         		if ( e.originalEvent.changedTouches[0].clientX < sym.getVariable('swipe_start') ) {
         
         			sym.play('p4_swipe_left');
         			sym.play('p4_end');
         		} else {
         			sym.play('p4_swipe_right');
         			sym.play('p4_end');
         		}
         		sym.setVariable('swipe_start', '0');
         		sym.setVariable('swiping', false);
         	} else {
         		// In iBooks we don't want the righthand page to be swiped into the margin.
         		// Stop the click event from firing, and interpret a touchend that's too short
         		// to be a swipe as a click instead.
         		$(sym.getVariable("_p4a_back")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p4b_back")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p4c_back")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p4d_back")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p4e_back")).css( 'cursor', 'default' );
         		sym.play('p4_out');
         
         		$(sym.getVariable("_p4c")).css( 'cursor', 'pointer' );
         		$(sym.getVariable("_p4c_speech")).css( 'cursor', 'pointer' );
         		$(sym.getVariable("_p4c_close")).css( 'cursor', 'pointer' );
         
         		sym.play('p4c_in');
         
         			/* Play audio */
         		var mp3 = new Audio();
         		mp3.src = "audio/water.mp3";
         		sym.setVariable("mp3_water", mp3);
         		var mp3_water = sym.getVariable("mp3_water");
         		mp3_water.play();
         
         		sym.setVariable('foreground', true);
         		sym.setVariable('p4c_state', 'p4c');
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p4d_back}", "touchend", function(sym, e) {
         if ( sym.getVariable('foreground') !== true 
         	&& sym.getVariable('swiping') ) {
         	if ( Math.abs(e.originalEvent.changedTouches[0].clientX - sym.getVariable('swipe_start')) > 30 ) {
         		if ( e.originalEvent.changedTouches[0].clientX < sym.getVariable('swipe_start') ) {
         
         			sym.play('p4_swipe_left');
         			sym.play('p4_end');
         
         		} else {
         
         			sym.play('p4_swipe_right');
         			sym.play('p4_end');
         		}
         		sym.setVariable('swipe_start', '0');
         		sym.setVariable('swiping', false);
         	} else {
         		// In iBooks we don't want the righthand page to be swiped into the margin.
         		// Stop the click event from firing, and interpret a touchend that's too short
         		// to be a swipe as a click instead.
         		$(sym.getVariable("_p4a_back")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p4b_back")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p4c_back")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p4d_back")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p4e_back")).css( 'cursor', 'default' );
         		sym.play('p4_out');
         
         		$(sym.getVariable("_p4d")).css( 'cursor', 'pointer' );
         		$(sym.getVariable("_p4d_speech")).css( 'cursor', 'pointer' );
         		$(sym.getVariable("_p4d_close")).css( 'cursor', 'pointer' );
         
         		sym.play('p4d_in');
         
         		sym.setVariable('foreground', true);
         		sym.setVariable('p4d_state', 'p4d');
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p4e_back}", "touchend", function(sym, e) {
         if ( sym.getVariable('foreground') !== true 
         	&& sym.getVariable('swiping') === true ) {
         	if ( Math.abs(e.originalEvent.changedTouches[0].clientX - sym.getVariable('swipe_start')) > 30 ) {
         		if ( e.originalEvent.changedTouches[0].clientX < sym.getVariable('swipe_start') ) {
         
         			sym.play('p4_swipe_left');
         			sym.play('p4_end');
         
         		} else {
         			sym.play('p4_swipe_right');
         			sym.play('p4_end');
         		}
         		sym.setVariable('swipe_start', '0');
         		sym.setVariable('swiping', false);
         	} else {
         		// In iBooks we don't want the righthand page to be swiped into the margin.
         		// Stop the click event from firing, and interpret a touchend that's too short
         		// to be a swipe as a click instead.
         		$(sym.getVariable("_p4a_back")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p4b_back")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p4c_back")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p4d_back")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p4e_back")).css( 'cursor', 'default' );
         		sym.play('p4_out');
         
         		$(sym.getVariable("_p4e")).css( 'cursor', 'pointer' );
         		$(sym.getVariable("_p4e_speech")).css( 'cursor', 'pointer' );
         		$(sym.getVariable("_p4e_close")).css( 'cursor', 'pointer' );
         
         		sym.play('p4e_in');
         
         		sym.setVariable('foreground', true);
         		sym.setVariable('p4e_state', 'p4e');
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p4b_back}", "touchstart", function(sym, e) {
         if ( sym.getVariable('foreground') !== true ) {
         	sym.setVariable('swipe_start', e.originalEvent.changedTouches[0].clientX);
         	sym.setVariable('swiping', true);
         }
         // In iBooks we don't want the righthand page to be swiped into the margin.
         // Stop the click event from firing, and interpret a touchend that's too short
         // to be a swipe as a click instead.
         e.preventDefault();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p4c_back}", "touchstart", function(sym, e) {
         if ( sym.getVariable('foreground') !== true ) {
         	sym.setVariable('swipe_start', e.originalEvent.changedTouches[0].clientX);
         	sym.setVariable('swiping', true);
         }
         // In iBooks we don't want the righthand page to be swiped into the margin.
         // Stop the click event from firing, and interpret a touchend that's too short
         // to be a swipe as a click instead.
         e.preventDefault();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p4d_back}", "touchstart", function(sym, e) {
         if ( sym.getVariable('foreground') !== true ) {
         	sym.setVariable('swipe_start', e.originalEvent.changedTouches[0].clientX);
         	sym.setVariable('swiping', true);
         }
         // In iBooks we don't want the righthand page to be swiped into the margin.
         // Stop the click event from firing, and interpret a touchend that's too short
         // to be a swipe as a click instead.
         e.preventDefault();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p4e_back}", "touchstart", function(sym, e) {
         if ( sym.getVariable('foreground') !== true ) {
         	sym.setVariable('swipe_start', e.originalEvent.changedTouches[0].clientX);
         	sym.setVariable('swiping', true);
         }
         // In iBooks we don't want the righthand page to be swiped into the margin.
         // Stop the click event from firing, and interpret a touchend that's too short
         // to be a swipe as a click instead.
         e.preventDefault();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "p4");