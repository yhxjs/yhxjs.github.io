export default function initBookmarkNav(){const t=document.querySelectorAll(".bookmark-nav-item"),o=document.querySelectorAll("section[id]");function e(){const n=window.scrollY+100;let r=null;o.forEach(t=>{var o=t.offsetTop,e=t.offsetHeight;n>=o&&n<o+e&&(r=t)}),t.forEach(t=>{t.classList.remove("bg-second-background-color"),r&&t.getAttribute("data-category")===r.getAttribute("id")&&t.classList.add("bg-second-background-color")})}t.length&&o.length&&(window.addEventListener("scroll",function(o,e){let n;return function(){var t=arguments;n||(o.apply(this,t),n=!0,setTimeout(()=>n=!1,e))}}(e,100)),e())}try{swup.hooks.on("page:view",initBookmarkNav)}catch(t){}document.addEventListener("DOMContentLoaded",initBookmarkNav);