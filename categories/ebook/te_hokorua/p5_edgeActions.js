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
         $(sym.getVariable("_p5a")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p5a_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p5b_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p5c_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p5d_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p5e_back")).css( 'cursor', 'pointer' );
         
         sym.setVariable('foreground', false);
         sym.play('p5_in');
         
         // http://appcropolis.com/implementing-doubletap-on-iphones-and-ipads/
         $("#Stage_p5a_back").doubletap(
             /** doubletap-dblclick callback */
             function(event){
             },
             /** touch-click callback (touch) */
             function(event){
             },
             /** doubletap-dblclick delay (default is 500 ms) */
             400
         );

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5a_back}", "touchstart", function(sym, e) {
         if ( sym.getVariable('foreground') !== true ) {
         	sym.setVariable('swipe_start', e.originalEvent.changedTouches[0].clientX);
         	sym.setVariable('swiping', true);
         }

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

      Symbol.bindElementAction(compId, symbolName, "${_p5a_back}", "click", function(sym, e) {
         		if ( sym.getVariable('foreground') !== true 
         			&& sym.getVariable('swiping') === true) {
         			$(sym.getVariable("_p5a_back")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p5b_back")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p5c_back")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p5d_back")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p5e_back")).css( 'cursor', 'default' );
         			sym.play('p5_out');
         		
         			$(sym.getVariable("_p5a")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p5a_speech")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p5a_close")).css( 'cursor', 'pointer' );
         			sym.play('p5a_in');
         			sym.setVariable('foreground', true);
         			sym.setVariable('p5a_state', 'p5a');
         		}
         		

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

      

      Symbol.bindElementAction(compId, symbolName, "${_p5a_close}", "click", function(sym, e) {
         	$(sym.getVariable("_p5a")).css( 'cursor', 'default' );
         	$(sym.getVariable("_p5a_speech")).css( 'cursor', 'default' );
         	sym.play('p5a_out');
         	
         	$(sym.getVariable("_p5a_back")).css( 'cursor', 'pointer' );
         	$(sym.getVariable("_p5b_back")).css( 'cursor', 'pointer' );
         	$(sym.getVariable("_p5c_back")).css( 'cursor', 'pointer' );
         	$(sym.getVariable("_p5d_back")).css( 'cursor', 'pointer' );
         	$(sym.getVariable("_p5e_back")).css( 'cursor', 'pointer' );
         	sym.setVariable('foreground', false);
         	sym.setVariable('p5a_state', undefined);

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

      Symbol.bindElementAction(compId, symbolName, "${_p5b_close}", "click", function(sym, e) {
         $(sym.getVariable("_p5b")).css( 'cursor', 'default' );
         $(sym.getVariable("_p5b_speech")).css( 'cursor', 'default' );
         sym.play('p5b_out');
         
         $(sym.getVariable("_p5a_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p5b_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p5c_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p5d_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p5e_back")).css( 'cursor', 'pointer' );
         sym.setVariable('foreground', false);
         sym.setVariable('p5b_state', undefined);
         
         

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

      Symbol.bindElementAction(compId, symbolName, "${_p5c_back}", "click", function(sym, e) {
         if ( sym.getVariable('foreground') !== true 
         	&& sym.getVariable('swiping') === true) {
         	$(sym.getVariable("_p5a_back")).css( 'cursor', 'default' );
         	$(sym.getVariable("_p5b_back")).css( 'cursor', 'default' );
         	$(sym.getVariable("_p5c_back")).css( 'cursor', 'default' );
         	$(sym.getVariable("_p5d_back")).css( 'cursor', 'default' );
         	$(sym.getVariable("_p5e_back")).css( 'cursor', 'default' );
         	sym.play('p5_out');
         
         	$(sym.getVariable("_p5c")).css( 'cursor', 'pointer' );
         	$(sym.getVariable("_p5c_speech")).css( 'cursor', 'pointer' );
         	$(sym.getVariable("_p5c_close")).css( 'cursor', 'pointer' );
         
         	sym.play('p5c_in');
         
         	sym.setVariable('foreground', true);
         	sym.setVariable('p5c_state', 'p5c');
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5c_close}", "click", function(sym, e) {
         $(sym.getVariable("_p5c")).css( 'cursor', 'default' );
         $(sym.getVariable("_p5c_speech")).css( 'cursor', 'default' );
         sym.play('p5c_out');
         
         $(sym.getVariable("_p5a_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p5b_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p5c_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p5d_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p5e_back")).css( 'cursor', 'pointer' );
         sym.setVariable('foreground', false);
         sym.setVariable('p5c_state', undefined);
         
         
         

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

      Symbol.bindElementAction(compId, symbolName, "${_p5d_close}", "click", function(sym, e) {
         $(sym.getVariable("_p5d")).css( 'cursor', 'default' );
         $(sym.getVariable("_p5d_speech")).css( 'cursor', 'default' );
         sym.play('p5d_out');
         
         $(sym.getVariable("_p5a_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p5b_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p5c_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p5d_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p5e_back")).css( 'cursor', 'pointer' );
         sym.setVariable('foreground', false);
         sym.setVariable('p5d_state', undefined);
         
         
         

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

      Symbol.bindElementAction(compId, symbolName, "${_p5e_close}", "click", function(sym, e) {
         $(sym.getVariable("_p5e")).css( 'cursor', 'default' );
         $(sym.getVariable("_p5e_speech")).css( 'cursor', 'default' );
         sym.play('p5e_out');
         
         $(sym.getVariable("_p5a_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p5b_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p5c_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p5d_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p5e_back")).css( 'cursor', 'pointer' );
         sym.setVariable('foreground', false);
         sym.setVariable('p5e_state', undefined);
         
         
         

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

      Symbol.bindElementAction(compId, symbolName, "${_p5a_front}", "click", function(sym, e) {
         if ( sym.getVariable('foreground') === true ) {
         
         	if ( sym.getVariable('p5a_state') === 'p5a' ) {
         		sym.setVariable('p5a_state', 'p5a_speech');
         		$(sym.getVariable("_p5a_speech")).css( 'cursor', 'pointer' );
         
         		sym.play('p5a_speech');
         
         	} else if ( sym.getVariable('p5a_state') === 'p5a_speech' ) {
         		$(sym.getVariable("_p5a")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p5a_speech")).css( 'cursor', 'default' );
         
         		sym.play('p5a_swipe_left');
         
         		$(sym.getVariable("_p5b")).css( 'cursor', 'pointer' );
         		$(sym.getVariable("_p5b_speech")).css( 'cursor', 'pointer' );
         		$(sym.getVariable("_p5b_close")).css( 'cursor', 'pointer' );
         
         		sym.setVariable('p5a_state', undefined);
         		sym.setVariable('p5b_state', 'p5b');
         	}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5a_front}", "touchstart", function(sym, e) {
         if ( sym.getVariable('foreground') === true ) {
         	sym.setVariable('swipe_start', e.originalEvent.changedTouches[0].clientX);
         	sym.setVariable('swiping', true);
         }
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5a_front}", "touchend", function(sym, e) {
         if ( sym.getVariable('foreground') === true 
         	&& sym.getVariable('swiping') ) {
         	if ( Math.abs(e.originalEvent.changedTouches[0].clientX - sym.getVariable('swipe_start')) > 30 ) {
         		if ( e.originalEvent.changedTouches[0].clientX < sym.getVariable('swipe_start') ) {
         			$(sym.getVariable("_p5a")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p5a_speech")).css( 'cursor', 'default' );
         
         			sym.play('p5a_swipe_left');
         
         			$(sym.getVariable("_p5b")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p5b_speech")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p5b_close")).css( 'cursor', 'pointer' );
         
         			sym.setVariable('p5a_state', undefined);
         			sym.setVariable('p5b_state', 'p5b');
         
         		} else {
         			sym.setVariable('foreground', false);
         			$(sym.getVariable("_p5a")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p5a_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p5b_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p5c_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p5d_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p5e_back")).css( 'cursor', 'pointer' );
         			sym.play('p5a_out');
         		}
         		sym.setVariable('swipe_start', '0');
         		sym.setVariable('swiping', false);
         	}
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5b_front}", "click", function(sym, e) {
         if ( sym.getVariable('foreground') === true ) {
         
         	if ( sym.getVariable('p5b_state') === 'p5b' ) {
         		$(sym.getVariable("_p5b_speech")).css( 'cursor', 'pointer' );
         
         		sym.setVariable('p5b_state', 'p5b_speech');
         		sym.play('p5b_speech');
         
         	} else if ( sym.getVariable('p5b_state') === 'p5b_speech' ) {
         		$(sym.getVariable("_p5b")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p5b_speech")).css( 'cursor', 'default' );
         
         		$(sym.getVariable("_p5c")).css( 'cursor', 'pointer' );
         		$(sym.getVariable("_p5c_speech")).css( 'cursor', 'pointer' );
         
         		sym.setVariable('p5b_state', undefined);
         		sym.setVariable('p5c_state', 'p5c');
         
         		sym.play('p5b_swipe_left');
         	}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5b_front}", "touchstart", function(sym, e) {
         if ( sym.getVariable('foreground') === true ) {
         	sym.setVariable('swipe_start', e.originalEvent.changedTouches[0].clientX);
         	sym.setVariable('swiping', true);
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5b_front}", "touchend", function(sym, e) {
         if ( sym.getVariable('foreground') === true 
         	&& sym.getVariable('swiping') ) {
         	if ( Math.abs(e.originalEvent.changedTouches[0].clientX - sym.getVariable('swipe_start')) > 30 ) {
         		if ( e.originalEvent.changedTouches[0].clientX < sym.getVariable('swipe_start') ) {
         			$(sym.getVariable("_p5b")).css( 'cursor', 'default' );
         
         			sym.play('p5b_swipe_left');
         
         			$(sym.getVariable("_p5c")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p5c_speech")).css( 'cursor', 'pointer' );
         
         			sym.setVariable('p5b_state', undefined);
         			sym.setVariable('p5c_state', 'p5c');
         		} else {
         			$(sym.getVariable("_p5b")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p5b_speech")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p5a")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p5a_speech")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p5a_speech_2")).css( 'cursor', 'pointer' );
         
         			sym.play('p5b_swipe_right');
         
         			sym.setVariable('p5b_state', undefined);
         			sym.setVariable('p5a_state', 'p5a_speech_2');
         		}
         		sym.setVariable('swipe_start', '0');
         		sym.setVariable('swiping', false);
         	}
         }
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5c_front}", "click", function(sym, e) {
         if ( sym.getVariable('foreground') === true ) {
         
         	if ( sym.getVariable('p5c_state') === 'p5c' ) {
         		sym.setVariable('p5c_state', 'p5c_speech');
         		$(sym.getVariable("_p5c_speech")).css( 'cursor', 'pointer' );
         
         		sym.play('p5c_speech');
         
         	} else if ( sym.getVariable('p5c_state') === 'p5c_speech' ) {
         		$(sym.getVariable("_p5c")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p5c_speech")).css( 'cursor', 'default' );
         
         		sym.play('p5c_swipe_left');
         
         		$(sym.getVariable("_p5d")).css( 'cursor', 'pointer' );
         		$(sym.getVariable("_p5d_speech")).css( 'cursor', 'pointer' );
         
         		sym.setVariable('p5c_state', undefined);
         		sym.setVariable('p5d_state', 'p5d');
         	}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5c_front}", "touchstart", function(sym, e) {
         if ( sym.getVariable('foreground') === true ) {
         	sym.setVariable('swipe_start', e.originalEvent.changedTouches[0].clientX);
         	sym.setVariable('swiping', true);
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5c_front}", "touchend", function(sym, e) {
         if ( sym.getVariable('foreground') === true 
         	&& sym.getVariable('swiping') ) {
         	if ( Math.abs(e.originalEvent.changedTouches[0].clientX - sym.getVariable('swipe_start')) > 30 ) {
         		if ( e.originalEvent.changedTouches[0].clientX < sym.getVariable('swipe_start') ) {
         			$(sym.getVariable("_p5c")).css( 'cursor', 'default' );
         
         			sym.play('p5c_swipe_left');
         
         			$(sym.getVariable("_p5d")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p5d_speech")).css( 'cursor', 'pointer' );
         
         			sym.setVariable('p5c_state', undefined);
         			sym.setVariable('p5d_state', 'p5d');
         		} else {
         			$(sym.getVariable("_p5c")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p5c_speech")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p5b")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p5b_speech")).css( 'cursor', 'pointer' );
         
         			sym.play('p5c_swipe_right');
         
         			sym.setVariable('p5c_state', undefined);
         			sym.setVariable('p5b_state', 'p5b_speech');
         		}
         		sym.setVariable('swipe_start', '0');
         		sym.setVariable('swiping', false);
         	}
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5d_front}", "click", function(sym, e) {
         if ( sym.getVariable('foreground') === true ) {
         
         	if ( sym.getVariable('p5d_state') === 'p5d' ) {
         		sym.setVariable('p5d_state', 'p5d_speech');
         		$(sym.getVariable("_p5d_speech")).css( 'cursor', 'pointer' );
         
         		sym.play('p5d_speech');
         
         	} else if ( sym.getVariable('p5d_state') === 'p5d_speech' ) {
         		$(sym.getVariable("_p5d")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p5d_speech")).css( 'cursor', 'default' );
         
         		sym.play('p5d_swipe_left');
         
         		$(sym.getVariable("_p5e")).css( 'cursor', 'pointer' );
         		$(sym.getVariable("_p5e_speech")).css( 'cursor', 'pointer' );
         
         		sym.setVariable('p5e_state', undefined);
         		sym.setVariable('p5e_state', 'p5e');
         	}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5d_front}", "touchstart", function(sym, e) {
         if ( sym.getVariable('foreground') === true ) {
         	sym.setVariable('swipe_start', e.originalEvent.changedTouches[0].clientX);
         	sym.setVariable('swiping', true);
         }
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5d_front}", "touchend", function(sym, e) {
         if ( sym.getVariable('foreground') === true 
         	&& sym.getVariable('swiping') ) {
         	if ( Math.abs(e.originalEvent.changedTouches[0].clientX - sym.getVariable('swipe_start')) > 30 ) {
         		if ( e.originalEvent.changedTouches[0].clientX < sym.getVariable('swipe_start') ) {
         			$(sym.getVariable("_p5d")).css( 'cursor', 'default' );
         
         			sym.play('p5d_swipe_left');
         
         			$(sym.getVariable("_p5e")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p5e_speech")).css( 'cursor', 'pointer' );
         
         			sym.setVariable('p5d_state', undefined);
         			sym.setVariable('p5e_state', 'p5e');
         		} else {
         			$(sym.getVariable("_p5d")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p5d_speech")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p5c")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p5c_speech")).css( 'cursor', 'pointer' );
         
         			sym.play('p5d_swipe_right');
         
         			sym.setVariable('p5d_state', undefined);
         			sym.setVariable('p5c_state', 'p5c_speech');
         		}
         		sym.setVariable('swipe_start', '0');
         		sym.setVariable('swiping', false);
         	}
         }
         
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5e_front}", "click", function(sym, e) {
         if ( sym.getVariable('foreground') === true ) {
         
         	if ( sym.getVariable('p5e_state') === 'p5e' ) {
         		sym.setVariable('p5e_state', 'p5e_speech');
         		$(sym.getVariable("_p5e_speech")).css( 'cursor', 'pointer' );
         
         		sym.play('p5e_speech');
         
         	} else if ( sym.getVariable('p5e_state') === 'p5e_speech' ) {
         		$(sym.getVariable("_p5e")).css( 'cursor', 'default' );
         		$(sym.getVariable("_p5e_speech")).css( 'cursor', 'default' );
         
         		sym.play('p5e_out');
         
         		sym.setVariable('foreground', false);
         		sym.setVariable('p5e_state', undefined);
         	}
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5e_front}", "touchstart", function(sym, e) {
         if ( sym.getVariable('foreground') === true ) {
         	sym.setVariable('swipe_start', e.originalEvent.changedTouches[0].clientX);
         	sym.setVariable('swiping', true);
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5e_front}", "touchend", function(sym, e) {
         if ( sym.getVariable('foreground') === true 
         	&& sym.getVariable('swiping') ) {
         	if ( Math.abs(e.originalEvent.changedTouches[0].clientX - sym.getVariable('swipe_start')) > 30 ) {
         		if ( e.originalEvent.changedTouches[0].clientX < sym.getVariable('swipe_start') ) {
         			$(sym.getVariable("_p5e")).css( 'cursor', 'default' );
         
         			sym.play('p5e_out');
         
         			sym.setVariable('foreground', false);
         			sym.setVariable('p5e_state', undefined);
         		} else {
         			$(sym.getVariable("_p5e")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p5e_speech")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p5d")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p5d_speech")).css( 'cursor', 'pointer' );
         
         			sym.play('p5e_swipe_right');
         
         			sym.setVariable('p5e_state', undefined);
         			sym.setVariable('p5d_state', 'p5d_speech');
         		}
         		sym.setVariable('swipe_start', '0');
         		sym.setVariable('swiping', false);
         	}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5d_back}", "click", function(sym, e) {
         if ( sym.getVariable('foreground') !== true 
         	&& sym.getVariable('swiping') === true) {
         	$(sym.getVariable("_p5a_back")).css( 'cursor', 'default' );
         	$(sym.getVariable("_p5b_back")).css( 'cursor', 'default' );
         	$(sym.getVariable("_p5c_back")).css( 'cursor', 'default' );
         	$(sym.getVariable("_p5d_back")).css( 'cursor', 'default' );
         	$(sym.getVariable("_p5e_back")).css( 'cursor', 'default' );
         	sym.play('p5_out');
         
         	$(sym.getVariable("_p5d")).css( 'cursor', 'pointer' );
         	$(sym.getVariable("_p5d_speech")).css( 'cursor', 'pointer' );
         	$(sym.getVariable("_p5d_close")).css( 'cursor', 'pointer' );
         
         	sym.play('p5d_in');
         
         	sym.setVariable('foreground', true);
         	sym.setVariable('p5d_state', 'p5d');
         }
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5e_back}", "click", function(sym, e) {
         if ( sym.getVariable('foreground') !== true 
         	&& sym.getVariable('swiping') === true) {
         	$(sym.getVariable("_p5a_back")).css( 'cursor', 'default' );
         	$(sym.getVariable("_p5b_back")).css( 'cursor', 'default' );
         	$(sym.getVariable("_p5c_back")).css( 'cursor', 'default' );
         	$(sym.getVariable("_p5d_back")).css( 'cursor', 'default' );
         	$(sym.getVariable("_p5e_back")).css( 'cursor', 'default' );
         	sym.play('p5_out');
         
         	$(sym.getVariable("_p5e")).css( 'cursor', 'pointer' );
         	$(sym.getVariable("_p5e_speech")).css( 'cursor', 'pointer' );
         	$(sym.getVariable("_p5e_close")).css( 'cursor', 'pointer' );
         
         	sym.play('p5e_in');
         
         	sym.setVariable('foreground', true);
         	sym.setVariable('p5e_state', 'p5e');
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

      Symbol.bindElementAction(compId, symbolName, "${_p5a_back}", "touchend", function(sym, e) {
         if ( sym.getVariable('foreground') !== true 
         	&& sym.getVariable('swiping') ) {
         	if ( Math.abs(e.originalEvent.changedTouches[0].clientX - sym.getVariable('swipe_start')) > 30 ) {
         		if ( e.originalEvent.changedTouches[0].clientX < sym.getVariable('swipe_start') ) {
         
         			sym.play('p5_swipe_left');
         			sym.play('p5_end');
         
         		} else {
         			sym.play('p5_swipe_right');
         			sym.play('p5_end');
         		}
         		sym.setVariable('swipe_start', '0');
         		sym.setVariable('swiping', false);
         	}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5b_back}", "touchend", function(sym, e) {
         if ( sym.getVariable('foreground') !== true 
         	&& sym.getVariable('swiping') ) {
         	if ( Math.abs(e.originalEvent.changedTouches[0].clientX - sym.getVariable('swipe_start')) > 30 ) {
         		if ( e.originalEvent.changedTouches[0].clientX < sym.getVariable('swipe_start') ) {
         
         			sym.play('p5_swipe_left');
         			sym.play('p5_end');
         
         		} else {
         			sym.play('p5_swipe_right');
         			sym.play('p5_end');
         		}
         		sym.setVariable('swipe_start', '0');
         		sym.setVariable('swiping', false);
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5c_back}", "touchend", function(sym, e) {
         if ( sym.getVariable('foreground') !== true 
         	&& sym.getVariable('swiping') ) {
         	if ( Math.abs(e.originalEvent.changedTouches[0].clientX - sym.getVariable('swipe_start')) > 30 ) {
         		if ( e.originalEvent.changedTouches[0].clientX < sym.getVariable('swipe_start') ) {
         
         			sym.play('p5_swipe_left');
         			sym.play('p5_end');
         
         		} else {
         			sym.play('p5_swipe_right');
         			sym.play('p5_end');
         		}
         		sym.setVariable('swipe_start', '0');
         		sym.setVariable('swiping', false);
         	}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5d_back}", "touchend", function(sym, e) {
         if ( sym.getVariable('foreground') !== true 
         	&& sym.getVariable('swiping') ) {
         	if ( Math.abs(e.originalEvent.changedTouches[0].clientX - sym.getVariable('swipe_start')) > 30 ) {
         		if ( e.originalEvent.changedTouches[0].clientX < sym.getVariable('swipe_start') ) {
         
         			sym.play('p5_swipe_left');
         			sym.play('p5_end');
         
         		} else {
         			sym.play('p5_swipe_right');
         			sym.play('p5_end');
         		}
         		sym.setVariable('swipe_start', '0');
         		sym.setVariable('swiping', false);
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5e_back}", "touchend", function(sym, e) {
         if ( sym.getVariable('foreground') !== true 
         	&& sym.getVariable('swiping') ) {
         	if ( Math.abs(e.originalEvent.changedTouches[0].clientX - sym.getVariable('swipe_start')) > 30 ) {
         		if ( e.originalEvent.changedTouches[0].clientX < sym.getVariable('swipe_start') ) {
         
         			sym.play('p5_swipe_left');
         			sym.play('p5_end');
         
         		} else {
         			sym.play('p5_swipe_right');
         			sym.play('p5_end');
         		}
         		sym.setVariable('swipe_start', '0');
         		sym.setVariable('swiping', false);
         	}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5b_back}", "touchstart", function(sym, e) {
         if ( sym.getVariable('foreground') !== true ) {
         	sym.setVariable('swipe_start', e.originalEvent.changedTouches[0].clientX);
         	sym.setVariable('swiping', true);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5c_back}", "touchstart", function(sym, e) {
         if ( sym.getVariable('foreground') !== true ) {
         	sym.setVariable('swipe_start', e.originalEvent.changedTouches[0].clientX);
         	sym.setVariable('swiping', true);
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5d_back}", "touchstart", function(sym, e) {
         if ( sym.getVariable('foreground') !== true && ! sym.getVariable('swiping') ) {
         	sym.setVariable('swipe_start', e.originalEvent.changedTouches[0].clientX);
         	sym.setVariable('swiping', true);
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5e_back}", "touchstart", function(sym, e) {
         if ( sym.getVariable('foreground') !== true && ! sym.getVariable('swiping') ) {
         	sym.setVariable('swipe_start', e.originalEvent.changedTouches[0].clientX);
         	sym.setVariable('swiping', true);
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p5b_back}", "click", function(sym, e) {
         if ( sym.getVariable('foreground') !== true 
         	&& sym.getVariable('swiping') === true) {
         	$(sym.getVariable("_p5a_back")).css( 'cursor', 'default' );
         	$(sym.getVariable("_p5b_back")).css( 'cursor', 'default' );
         	$(sym.getVariable("_p5c_back")).css( 'cursor', 'default' );
         	$(sym.getVariable("_p5d_back")).css( 'cursor', 'default' );
         	$(sym.getVariable("_p5e_back")).css( 'cursor', 'default' );
         	sym.play('p5_out');
         
         	$(sym.getVariable("_p5b")).css( 'cursor', 'pointer' );
         	$(sym.getVariable("_p5b_speech")).css( 'cursor', 'pointer' );
         	$(sym.getVariable("_p5a_speech_2")).css( 'cursor', 'pointer' );
         	$(sym.getVariable("_p5b_close")).css( 'cursor', 'pointer' );
         	sym.play('p5b_in');
         	sym.setVariable('foreground', true);
         	sym.setVariable('p5b_state', 'p5b');
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "p5");