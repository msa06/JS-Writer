//Load Value from Storage
loadFromStorage();


//UI Elements
const save = document.getElementById("save"),
      clear = document.getElementById("clear"),
      clipboard = document.getElementById('clipboard');


//Add Event Listner
save.addEventListener('click',saveText);

//Clear Event Listner
clear.addEventListener('click',clearText);

//Copy to Clipboard
clipboard.addEventListener('click',copyToClipboard);

function saveText(){
  localStorage["title"] = document.getElementById("heading").innerHTML; // heading div
  localStorage["text"] = document.getElementById("content").innerHTML; // content div
}
function clearText(){
  document.getElementById("heading").innerHTML = getDate();
  localStorage["title"] = "";
document.getElementById("content").innerHTML = "Content Goes Here!!"
  localStorage["text"] = ""; // default text
}
function loadFromStorage(){
  document.getElementById("heading").innerHTML =
  localStorage["title"] || getDate(); // default text
document.getElementById("content").innerHTML =
  localStorage["text"] || "This text is automatically saved every second :) "; // default text
}

function copyToClipboard() {
  console.log('We are Here');
  var copyText = document.getElementById("content");
  window.getSelection().selectAllChildren( copyText);
  document.execCommand('copy');

}

function getDate(){
  let date = new Date();
  return date.getDay()
        + "/"
        + date.getMonth()
        + "/"
        + date.getFullYear();

}

