function closeWin() {

	opener.window.focus();
	window.close();

}
function openGlossaryTerm(term) {

	window.open('../ma_01_cwa_20/html/glossary.html#'+term,'glossaryWin');

}