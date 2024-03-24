const j= document.querySelector(h1);
const h =getComputedStyle(j);
j.addEventListener("click",function()
{
    h.backgroundColor="red";
    h.color="white";
    j.innerText="You clicked me !!! :[e"
})