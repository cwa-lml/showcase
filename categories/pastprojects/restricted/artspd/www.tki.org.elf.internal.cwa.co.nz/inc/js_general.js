
//WARNING: In some pages (possibly all) this function is overridden by a function of the same name in inc/tki.js! JR 2006-04-05
function popUp(wid,high,labell,link) {

	labell = window.open(link,labell,"toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width="+wid+",height="+high);
	
	if (labell.closed)
	{
		labell = window.open(link,labell,"toolbar=1,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width="+wid+",height="+high);
	}
	
	else {
		labell.focus();
	}
}

function parentWin(myURL) {
		window.opener.location.href=myURL;
		window.opener.focus(); 
		 
}

function on(img) {
	if (document.images) {
		document[img].src = eval(img + "on.src");		
	}
}

function off(img) {
	if (document.images) {
		document[img].src = eval(img + "off.src");		
	}
}

function MM_preloadImages() { //v2.0
    if (document.images) {
        var imgFiles = MM_preloadImages.arguments;
        if (document.preloadArray==null) document.preloadArray = new Array();
        var i = document.preloadArray.length;
        with (document) for (var j=0; j<imgFiles.length; j++) if (imgFiles[j].charAt(0)!="#"){
            preloadArray[i] = new Image;
            preloadArray[i++].src = imgFiles[j];
        }
    }
}

function login(option) {
	with (document.mylogin) {
		if (option == 'no') {
			//submit public login
			tkiuser.value = 'public';
			password.value = 'public';
			submit();
		} else {
			if (tkiuser.value == '' || password.value == '' ) {
				window.alert("Please enter a user name and password to log on to TKI");
				return false;
			} else {
				submit();
			}
		}
	}
}

//for unicode macrons 
function addMACRONS(data) {
	data = data.replace(/A`/g, "\u0100");
	data = data.replace(/a`/g, "\u0101");
	data = data.replace(/E`/g, "\u0112");
	data = data.replace(/e`/g, "\u0113");
	data = data.replace(/I`/g, "\u012A");
	data = data.replace(/i`/g, "\u012B");
	data = data.replace(/O`/g, "\u014C");
	data = data.replace(/o`/g, "\u014D");
	data = data.replace(/U`/g, "\u016A");
	data = data.replace(/u`/g, "\u016B");
	return data;
}