function closeWin() {

	opener.window.focus();
	window.close();

}

function openGlosTerm(term) {
	
	open('./html/glossary.html#' + term,'glossaryWin');
	
}