var ham = document.querySelector('.ham');
var menu = document.querySelector('.menu');
var links = document.querySelectorAll('.menu li a');

ham.addEventListener("click", trans);
function trans()
{
  ham.classList.toggle("open");
  if (menu.style.left == "0px") {
      menu.style.left = "-900px";
    } else {
      menu.style.left = "0px";
    }
}
links.forEach(link => {
  link.addEventListener("click", trans);
});