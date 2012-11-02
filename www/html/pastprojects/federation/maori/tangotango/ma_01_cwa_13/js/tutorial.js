function closeWin() {

	opener.window.focus();
	window.close();

}

function openGlossaryTerm(term) {

	window.open('../MA_01_CWA_17/html/glossary.html#'+term,'glossaryWin');

}