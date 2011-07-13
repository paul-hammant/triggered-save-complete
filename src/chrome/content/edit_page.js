/* oncommand event */
function save_page_setup() {
	
	jQuery.noConflict();
	$ = function(selector,context) { 
	    return new jQuery.fn.init(selector,context||window._content.document); 
	};
	$.fn = $.prototype = jQuery.fn;

    window.alert("Hello1 " + $('title').text());

	function timerCallback() {
		
		var signal = $('body').attr('signal');
		
		if(signal == undefined) {
			$('body').attr('signal', "true")
	         window.alert("Hello3!!!");
	    }
	}

    setInterval(timerCallback, 10000);

}
