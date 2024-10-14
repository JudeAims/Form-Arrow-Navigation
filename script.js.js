function arrowsNavigateForm(el) {
	//navigate form with up/dwn arrow keys
	let allInputs, allInputLen, index;
	allInputs = Array.from(document.querySelectorAll(el));
	allInputLen = allInputs.length;
	
	for (i = 0; i < allInputLen; i++) {
		allInputs[i].addEventListener("keydown", function(e) {
			let key = e.which || e.keyCode;
			index = allInputs.indexOf(e.currentTarget);
			
			if (key == 38 && index != 0) {
				allInputs[index - 1].focus();
			} else if (key == 40 && index != (allInputLen -1)) {
				allInputs[index + 1].focus();
			}
		});
	}
}