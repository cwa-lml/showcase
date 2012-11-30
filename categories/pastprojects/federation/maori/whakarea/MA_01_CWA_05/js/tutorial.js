function closeWin() {
	window.close();
	if(opener){
		opener.window.focus();
	}
}

function openGlossaryTerm(term) {

	window.open('glossary.html#'+term,'glossaryWin');

}