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
         $(sym.getVariable("_p2a")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p2a_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p2b_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p2c_back")).css( 'cursor', 'pointer' );
         $(sym.getVariable("_p2d_back")).css( 'cursor', 'pointer' );
         sym.setVariable('foreground', false);
         sym.play('p2_in');
         
         // http://appcropolis.com/implementing-doubletap-on-iphones-and-ipads/
         $("#Stage_p2a_back").doubletap(
             /** doubletap-dblclick callback */
             function(event){
         		if ( ! sym.getVariable('foreground') ) {
         			$(sym.getVariable("_p2a_back")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p2b_back")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p2c_back")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p2d_back")).css( 'cursor', 'default' );
         			sym.play('p2_back_out');
         
         			$(sym.getVariable("_p2a")).css( 'cursor', 'pointer' );
         			sym.play('p2a_in');
         			sym.setVariable('foreground', true);
         		}
             },
             /** touch-click callback (touch) */
             function(event){
             },
             /** doubletap-dblclick delay (default is 500 ms) */
             400
         );
         
         
         $("#Stage_p2a").doubletap(
             /** doubletap-dblclick callback */
             function(event){
         		if ( sym.getVariable('foreground') === true ) {
         			$(sym.getVariable("_p2a")).css( 'cursor', 'default' );
         			sym.play('p2a_out');
         
         			$(sym.getVariable("_p2a_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p2b_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p2c_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p2d_back")).css( 'cursor', 'pointer' );
         			sym.setVariable('foreground', false);
         		}
             },
             /** touch-click callback (touch) */
             function(event){
             },
             /** doubletap-dblclick delay (default is 500 ms) */
             400
         );
         
         
         $("#Stage_p2b_back").doubletap(
             /** doubletap-dblclick callback */
             function(event){
         		if ( ! sym.getVariable('foreground') ) {
         			$(sym.getVariable("_p2a_back")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p2b_back")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p2c_back")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p2d_back")).css( 'cursor', 'default' );
         			sym.play('p2_back_out');
         
         			$(sym.getVariable("_p2b")).css( 'cursor', 'pointer' );
         			sym.play('p2b_in');
         			sym.setVariable('foreground', true);
         		}
             },
             /** touch-click callback (touch) */
             function(event){
             },
             /** doubletap-dblclick delay (default is 500 ms) */
             400
         );
         
         $("#Stage_p2b").doubletap(
             /** doubletap-dblclick callback */
             function(event){
         		if ( sym.getVariable('foreground') === true ) {
         			$(sym.getVariable("_p2b")).css( 'cursor', 'default' );
         			sym.play('p2b_out');
         
         			$(sym.getVariable("_p2a_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p2b_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p2c_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p2d_back")).css( 'cursor', 'pointer' );
         			sym.setVariable('foreground', false);
         		}
             },
             /** touch-click callback (touch) */
             function(event){
             },
             /** doubletap-dblclick delay (default is 500 ms) */
             400
         );
         
         
         $("#Stage_p2c_back").doubletap(
             /** doubletap-dblclick callback */
             function(event){
         		if ( ! sym.getVariable('foreground' === false) ) {
         			$(sym.getVariable("_p2a_back")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p2b_back")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p2c_back")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p2d_back")).css( 'cursor', 'default' );
         			sym.play('p2_back_out');
         
         			$(sym.getVariable("_p2c")).css( 'cursor', 'pointer' );
         			sym.play('p2c_in');
         			sym.setVariable('foreground', true);
         		}
             },
             /** touch-click callback (touch) */
             function(event){
             },
             /** doubletap-dblclick delay (default is 500 ms) */
             400
         );
         
         $("#Stage_p2c").doubletap(
             /** doubletap-dblclick callback */
             function(event){
         		if ( sym.getVariable('foreground') === true ) {
         			$(sym.getVariable("_p2c")).css( 'cursor', 'default' );
         			sym.play('p2c_out');
         
         			$(sym.getVariable("_p2a_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p2b_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p2c_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p2d_back")).css( 'cursor', 'pointer' );
         			sym.setVariable('foreground', false);
         		}
             },
             /** touch-click callback (touch) */
             function(event){
             },
             /** doubletap-dblclick delay (default is 500 ms) */
             400
         );
         
         
         $("#Stage_p2d_back").doubletap(
             /** doubletap-dblclick callback */
             function(event){
         		if ( ! sym.getVariable('foreground' === false) ) {
         			$(sym.getVariable("_p2a_back")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p2b_back")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p2c_back")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p2d_back")).css( 'cursor', 'default' );
         			sym.play('p2_back_out');
         
         			$(sym.getVariable("_p2d")).css( 'cursor', 'pointer' );
         			sym.play('p2d_in');
         			sym.setVariable('foreground', true);
         		}
             },
             /** touch-click callback (touch) */
             function(event){
             },
             /** doubletap-dblclick delay (default is 500 ms) */
             400
         );
         
         $("#Stage_p2d").doubletap(
             /** doubletap-dblclick callback */
             function(event){
         		if ( sym.getVariable('foreground') === true ) {
         			$(sym.getVariable("_p2d")).css( 'cursor', 'default' );
         			sym.play('p2d_out');
         
         			$(sym.getVariable("_p2a_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p2b_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p2c_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p2d_back")).css( 'cursor', 'pointer' );
         			sym.setVariable('foreground', false);
         		}
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

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p2a}", "touchstart", function(sym, e) {
         if ( sym.getVariable('foreground') === true ) {
         	sym.setVariable('swipe_start', e.originalEvent.changedTouches[0].clientX);
         	sym.setVariable('swiping', true);
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p2a}", "touchend", function(sym, e) {
         if ( sym.getVariable('foreground') === true 
         	&& sym.getVariable('swiping') ) {
         	if ( Math.abs(e.originalEvent.changedTouches[0].clientX - sym.getVariable('swipe_start')) > 100 ) {
         		if ( e.originalEvent.changedTouches[0].clientX < sym.getVariable('swipe_start') ) {
         			$(sym.getVariable("_p2a")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p2b")).css( 'cursor', 'pointer' );
         			sym.play('p2a_swipe_left');
         		} else {
         			sym.setVariable('foreground', false);
         			$(sym.getVariable("_p2a")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p2a_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p2b_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p2c_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p2d_back")).css( 'cursor', 'pointer' );
         			sym.play('p2a_out');
         		}
         		sym.setVariable('swipe_start', '0');
         		sym.setVariable('swiping', false);
         	}
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p2b}", "touchstart", function(sym, e) {
if ( sym.getVariable('foreground') === true ) {
	sym.setVariable('swipe_start', e.originalEvent.changedTouches[0].clientX);
	sym.setVariable('swiping', true);
}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p2b}", "touchend", function(sym, e) {
         if ( sym.getVariable('foreground') === true 
         	&& sym.getVariable('swiping') ) {
         	if ( Math.abs(e.originalEvent.changedTouches[0].clientX - sym.getVariable('swipe_start')) > 100 ) {
         		if ( e.originalEvent.changedTouches[0].clientX < sym.getVariable('swipe_start') ) {
         			$(sym.getVariable("_p2b")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p2c")).css( 'cursor', 'pointer' );
         			sym.play('p2b_swipe_left');
         		} else {
         			$(sym.getVariable("_p2b")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p2a")).css( 'cursor', 'pointer' );
         			sym.play('p2b_swipe_right');
         		}
         		sym.setVariable('swipe_start', '0');
         		sym.setVariable('swiping', false);
         	}
         }
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p2c}", "touchstart", function(sym, e) {
         if ( sym.getVariable('foreground') === true ) {
         	sym.setVariable('swipe_start', e.originalEvent.changedTouches[0].clientX);
         	sym.setVariable('swiping', true);
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p2c}", "touchend", function(sym, e) {
         if ( sym.getVariable('foreground') === true 
         	&& sym.getVariable('swiping') ) {
         	if ( Math.abs(e.originalEvent.changedTouches[0].clientX - sym.getVariable('swipe_start')) > 100 ) {
         		if ( e.originalEvent.changedTouches[0].clientX < sym.getVariable('swipe_start') ) {
         			$(sym.getVariable("_p2c")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p2d")).css( 'cursor', 'pointer' );
         			sym.play('p2c_swipe_left');
         		} else {
         			$(sym.getVariable("_p2c")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p2b")).css( 'cursor', 'pointer' );
         			sym.play('p2c_swipe_right');
         		}
         		sym.setVariable('swipe_start', '0');
         		sym.setVariable('swiping', false);
         	}
         }
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p2d}", "touchstart", function(sym, e) {
         if ( sym.getVariable('foreground') === true ) {
         	sym.setVariable('swipe_start', e.originalEvent.changedTouches[0].clientX);
         	sym.setVariable('swiping', true);
         }
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p2d}", "touchend", function(sym, e) {
         if ( sym.getVariable('foreground') === true 
         	&& sym.getVariable('swiping') ) {
         	if ( Math.abs(e.originalEvent.changedTouches[0].clientX - sym.getVariable('swipe_start')) > 100 ) {
         		if ( e.originalEvent.changedTouches[0].clientX < sym.getVariable('swipe_start') ) {
         			$(sym.getVariable("_p2d")).css( 'cursor', 'default' );
         			sym.play('p2d_out');
         
         			$(sym.getVariable("_p2a_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p2b_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p2c_back")).css( 'cursor', 'pointer' );
         			$(sym.getVariable("_p2d_back")).css( 'cursor', 'pointer' );
         			sym.setVariable('foreground', false);
         
         		} else {
         			$(sym.getVariable("_p2d")).css( 'cursor', 'default' );
         			$(sym.getVariable("_p2c")).css( 'cursor', 'pointer' );
         			sym.play('p2d_swipe_right');
         		}
         		sym.setVariable('swipe_start', '0');
         		sym.setVariable('swiping', false);
         	}
         }
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-2025636633");

/*!
 * jQuery Double Tap Plugin.
 *
 * Copyright (c) 2010 Raul Sanchez (http://www.appcropolis.com)
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($){
    // Determine if we on iPhone or iPad
    var isiOS = false;
    var agent = navigator.userAgent.toLowerCase();
    if(agent.indexOf('iphone') >= 0 || agent.indexOf('ipad') >= 0){
           isiOS = true;
    }
 
    $.fn.doubletap = function(onDoubleTapCallback, onTapCallback, delay){
        var eventName, action;
        delay = delay == null? 500 : delay;
        eventName = isiOS == true? 'touchend' : 'click';
 
        $(this).bind(eventName, function(event){
            var now = new Date().getTime();
            var lastTouch = $(this).data('lastTouch') || now + 1 /** the first time this will make delta a negative number */;
            var delta = now - lastTouch;
            clearTimeout(action);
            if(delta<500 && delta>0){
                if(onDoubleTapCallback != null && typeof onDoubleTapCallback == 'function'){
                    onDoubleTapCallback(event);
                }
            }else{
                $(this).data('lastTouch', now);
                action = setTimeout(function(evt){
                    if(onTapCallback != null && typeof onTapCallback == 'function'){
                        onTapCallback(evt);
                    }
                    clearTimeout(action);   // clear the timeout
                }, delay, [event]);
            }
            $(this).data('lastTouch', now);
        });
    };
})(jQuery);
