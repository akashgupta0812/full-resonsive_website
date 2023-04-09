const burger=document.getElementById("burger2");
const navbar=document.getElementById("navbar")
const rightnav=document.getElementById("rn");
const navlist=document.getElementById("ul")

// ul.className="aaaaaaaaaaaaaaaaaaaaaaaaaa"
// console.log("aka");
burger.addEventListener("click",fun)
function fun()
{
    navlist.classList.toggle('v-class')
    navbar.classList.toggle('h-var')
    rightnav.classList.toggle('v-class')
}