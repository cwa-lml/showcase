function qtPopUp(page,wid,high,link,title) {
	var scroll
	var winName
	var winWidth
	var winHeight

	if (link != "#"){
	  scroll = 0;
	  winName = 'qtwin';
	  winWidth=wid + 40;
	  winHeight=high + 100;
	}
	else {
	  scroll = 1;
	  winName = 'helpwin';
	  winWidth = wid;
	  winHeight = high;
	}  

	pop=window.open(page+'.php?movWidth='+wid+'&movHeight='+high+'&movURL='+link+'&movName='+title,winName,"toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars="+scroll+",resizable=1,width="+winWidth+",height="+winHeight);

	if (pop.closed)
	{
		pop=window.open(page+'.php?movWidth='+wid+'&movHeight='+high+'&movURL='+link+'&movName='+title,winName,"toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars="+scroll+",resizable=1,width="+winWidth+",height="+winHeight);

	}
	
	else {
	    pop.resizeTo(winWidth,winHeight);
		pop.focus();
	}
}

function qtPopUpNoVar(page,wid,high,title) {

	var scroll
	var winName
	var winWidth
	var winHeight
	
  	scroll = 1;
	winName = 'qtwin';
	winWidth=wid + 40;
	winHeight=high + 120;
	
	pop=window.open(page,winName,"toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars="+scroll+",resizable=1,width="+winWidth+",height="+winHeight);

	if (pop.closed)
	{
		pop=window.open(page,winName,"toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars="+scroll+",resizable=1,width="+winWidth+",height="+winHeight);

	}
	
	else {
	    pop.resizeTo(winWidth,winHeight);
		pop.focus();
	}
}