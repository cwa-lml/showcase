<!--

// Browser Detection: for Internet Explorer, Netscape and Mozilla
// returns :
// browserDetect.flavour (equals 'ie', 'ns' or 'mz')
// browserDetect.version (major version, ie '3', '4', or '5')
// browserDetect.platform (equals 'mac', 'win', 'nix' for UNIX, or 'lin' for Linux)
// browserDetect.full (String containing all browser properties for display)

// These MUST all be lower case!!!
var browserList = new Array('microsoft internet explorer', 'netscape', 'mozilla');
var browserCode = new Array('ie', 'ns', 'mz');
var osList = new Array('mac', 'win', 'nix', 'lin');


function browserDetect() {
	
	this.flavour = '';

	for (var i = 0; i < browserList.length; i++) {
		if (navigator.appName.toLowerCase().indexOf(browserList[i]) != -1) {
			this.flavour = browserCode[i];
		}
	}
	
	if (this.flavour == 'ie') {
		this.version = navigator.appVersion.charAt(navigator.appVersion.indexOf('IE') + 3);
		// alert( this.version );
	} else {
		this.version = navigator.appVersion.charAt(0);
	}	

	// platform support
	this.platform = '';
	
	// see osList at top
	for (var i = 0; i < osList.length; i++) {
		if (navigator.appVersion.toLowerCase().indexOf(osList[i]) != -1) {
			this.platform = osList[i];
			break;
		}
	}	

	this.toString = BDtoString;
	this.full = this.toString();
	return(this);
}

function BDtoString() {
	return(this.flavor + this.version + ':' + this.platform);
}

browser = new browserDetect();

// -->