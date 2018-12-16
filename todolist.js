

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function removeElement() {

  // var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
 

  var removeItem = document.querySelectorAll(`.myUL li`);
 
  // console.log(removeItem);
  // console.log(removeItem[0]);

  for (i = 0; i < removeItem.length; i++) {
    if(removeItem[i].textContent === inputValue ){
     
       var div = this.parentElement;
      removeItem[i].style.display = "none";
    }
  }
}