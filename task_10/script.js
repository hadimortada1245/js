let buttonOpen=document.getElementById("openBtn");
buttonOpen.addEventListener("click",open);
let modal=document.getElementById("modal");
function open(){
    modal.style.display="block";
  
}
let cl=document.getElementById("closeBtn");
cl.addEventListener("click",close);
function close(){
    modal.style.display="none";
}
window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
  let newtitle=prompt("Enter a new title");
  let p1=document.getElementById("modalTitle");