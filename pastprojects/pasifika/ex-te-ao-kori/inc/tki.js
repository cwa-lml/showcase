// JavaScript Document

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


// legacy support..
function popWin(wid,high,labell,link) {
	
	labell = window.open(link,labell,"toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width="+wid+",height=350");
	
	labell.opener = window;
	
	if (labell.closed)
	{
		labell = window.open(link,labell,"toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width="+wid+",height="+high);
	}
	
	else {
		labell.focus();
	}

}