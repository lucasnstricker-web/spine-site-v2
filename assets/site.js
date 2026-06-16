/* ============================================================
   withspine.co — shared site JS (assets/site.js)
   Mobile nav hamburger toggle. Accessible, vanilla.
   Loaded by every page. Page-specific JS stays inline.
   ============================================================ */
(function(){
  "use strict";
  var burger=document.querySelector(".nav-burger");
  var menu=document.getElementById("nav-mobile");
  if(!burger||!menu)return;

  function setOpen(open){
    burger.setAttribute("aria-expanded",open?"true":"false");
    menu.classList.toggle("open",open);
    document.body.style.overflow=open?"hidden":"";
  }
  burger.addEventListener("click",function(){
    setOpen(burger.getAttribute("aria-expanded")!=="true");
  });
  /* close when a link is tapped */
  menu.addEventListener("click",function(e){
    if(e.target.closest("a"))setOpen(false);
  });
  /* close on Escape */
  document.addEventListener("keydown",function(e){
    if(e.key==="Escape"&&burger.getAttribute("aria-expanded")==="true"){setOpen(false);burger.focus()}
  });
  /* reset on resize back to desktop */
  window.addEventListener("resize",function(){
    if(window.innerWidth>980&&burger.getAttribute("aria-expanded")==="true")setOpen(false);
  });
})();
