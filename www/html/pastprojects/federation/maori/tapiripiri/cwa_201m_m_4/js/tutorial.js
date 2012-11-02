function closeWin() {

	opener.window.focus();
	window.close();

}

function openGlosTerm(term) {
	
	open('glossary.html#' + term,'glossaryWin');
	
}