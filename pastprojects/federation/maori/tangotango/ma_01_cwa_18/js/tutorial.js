function closeWin() {
	window.close();
	if(opener){
		opener.window.focus();
	}
}

function openGlossaryTerm(term) {

	window.open('../../ma_01_cwa_17/html/glossary.html#'+term,'glossaryWin');

}