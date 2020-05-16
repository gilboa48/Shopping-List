var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var delButton = document.createElement ("button");
	li.appendChild(document.createTextNode(input.value));
	delButton.appendChild(document.createTextNode("DELETE"));
	li.appendChild(delButton);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

/*toggling to erase when list item clicked and delete list item with delete button*/

function deleteItem() {
	var x = event.target;
	if ("LI"===x.tagName) {
	x.classList.toggle("done");
	} else if ("LI" === x.parentElement.tagName) {
		x.parentElement.remove();
	}

}
ul.addEventListener ("click", deleteItem);

/*another way to write the deleteItem function*/

/*ul.onclick = function () {
	var x = event.target;
	if ("LI"===x.tagName) {
	x.classList.toggle("done");
	} else if ("LI" === x.parentElement.tagName) {
		x.parentElement.remove();
	}
}*/  

/*create DELETE button for existing elements*/
for (i=0; i<listItem.length ; i++) {
	var delButton = document.createElement ("button");
	delButton.appendChild(document.createTextNode("DELETE"));
	listItem[i].appendChild(delButton);	
}


	
	
