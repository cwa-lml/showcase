function closeWin() {
	window.close();
	if(opener){
		opener.window.focus();
	}
}

function openGlossaryTerm(term) {

	window.open('../../MA_01_CWA_05/html/glossary.html#'+term,'glossaryWin');

}