function closeWin() {

	opener.window.focus();
	window.close();

}

function openGlossaryTerm(term) {

	window.open('glossary.html#'+term,'glossaryWin');

}