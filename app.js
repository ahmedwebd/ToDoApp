$(document).ready(function () {

var container = document.querySelector("#container-id");
var enterButton = document.getElementById('enter');
var input = document.getElementById('userInput');
var ul = document.querySelector('ul');
var item = document.getElementsByTagName('li');

function inputLength() {
  return input.value.length;  
}
function listLength() {
  return item.length;  
}

function createListElement() {
    var li = document.createElement('li'); //creates an Element 'li
    li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
    ul.appendChild(li);// adds li to ul
    input.value= ""; //resets the input value to none
    


    
    
  //START STRIKETHROUGH
	// because it's in the function, it only adds it for new items
    function crossOut() {
      li.class.toggle("done");
    }
  
    li.addEventListener("click",crossOut);
    //END STRIKETHROUGH

  
    // START ADD DELETE BUTTON
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// END ADD DELETE BUTTON


	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
    li.classList.add("delete")
  
	}
	//END ADD CLASS DELETE
  

  

}

function addAfterClick(){
  if(inputLength()>0){ //making sure that an empty input field doesnt create an  li
    createListElement();
    
  }else{
    input.className +='animated shake'}
}

function addListAfterKeyPress(event) {
  if(inputLength() >0 && event.which ===13){
    createListElement();
  }
}




first.addEventListener('mousemove', function () {
  document.getElementById('first').className += 'animated shake',setTimeout(2000); 
})

enterButton.addEventListener("click",addAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);




 


  });// jquery function main load ends here..