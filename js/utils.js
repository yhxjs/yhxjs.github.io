import{navbarShrink}from"./layouts/navbarShrink.js";import{initTOC}from"./layouts/toc.js";import{main}from"./main.js";import imageViewer from"./tools/imageViewer.js";const navigationState={isNavigating:!1};export default function initUtils(){var e={html_root_dom:document.querySelector("html"),pageContainer_dom:document.querySelector(".page-container"),pageTop_dom:document.querySelector(".main-content-header"),homeBanner_dom:document.querySelector(".home-banner-container"),homeBannerBackground_dom:document.querySelector(".home-banner-background"),scrollProgressBar_dom:document.querySelector(".scroll-progress-bar"),pjaxProgressBar_dom:document.querySelector(".pjax-progress-bar"),backToTopButton_dom:document.querySelector(".tool-scroll-to-top"),toolsList:document.querySelector(".hidden-tools-list"),toggleButton:document.querySelector(".toggle-tools-list"),innerHeight:window.innerHeight,pjaxProgressBarTimer:null,prevScrollValue:0,fontSizeLevel:0,triggerViewHeight:.5*window.innerHeight,isHasScrollProgressBar:!0===theme.global.scroll_progress.bar,isHasScrollPercent:!0===theme.global.scroll_progress.percentage,updateScrollStyle(){var e=window.pageYOffset||document.documentElement.scrollTop,t=document.documentElement.scrollHeight,o=window.innerHeight||document.documentElement.clientHeight,t=this.calculatePercentage(e,t,o);this.updateScrollProgressBar(t),this.updateScrollPercent(t),this.updatePageTopVisibility(e,o),this.prevScrollValue=e},updateScrollProgressBar(e){var t;this.isHasScrollProgressBar&&(t=e.toFixed(3),this.scrollProgressBar_dom.style.visibility=0===e?"hidden":"visible",this.scrollProgressBar_dom.style.width=t+"%")},updateScrollPercent(e){var t;this.isHasScrollPercent&&(t=this.backToTopButton_dom.querySelector(".percent"),this.backToTopButton_dom.classList.toggle("show",0!==e&&void 0!==e&&e==e),t.innerHTML=e.toFixed(0))},updatePageTopVisibility(e,t){var o;theme.navbar.auto_hide?(o=this.prevScrollValue,this.pageTop_dom.classList.toggle("hide",t<o&&o<e)):this.pageTop_dom.classList.remove("hide")},calculatePercentage(e,t,o){return Math.round(e/(t-o)*100)},registerWindowScroll(){window.addEventListener("scroll",()=>{this.updateScrollStyle(),this.updateTOCScroll(),this.updateNavbarShrink(),this.updateAutoHideTools()}),window.addEventListener("scroll",this.debounce(()=>this.updateHomeBannerBlur(),20))},updateTOCScroll(){theme.articles.toc.enable&&initTOC().hasOwnProperty("updateActiveTOCLink")&&initTOC().updateActiveTOCLink()},updateNavbarShrink(){navigationState.isNavigating||navbarShrink.init()},debounce(e,t){let o;return function(){clearTimeout(o),o=setTimeout(()=>e.apply(this,arguments),t)}},updateHomeBannerBlur(){if(this.homeBannerBackground_dom&&"fixed"===theme.home_banner.style&&location.pathname===config.root){const e=(window.scrollY||window.pageYOffset)>=this.triggerViewHeight?15:0;try{requestAnimationFrame(()=>{this.homeBannerBackground_dom.style.filter=`blur(${e}px)`,this.homeBannerBackground_dom.style.webkitFilter=`blur(${e}px)`})}catch(e){console.error("Error updating banner blur:",e)}}},updateAutoHideTools(){var t=window.scrollY,o=document.body.scrollHeight,n=window.innerHeight,i=document.getElementsByClassName("right-side-tools-container"),r=document.getElementById("aplayer");for(let e=0;e<i.length;e++){var a=i[e];t<=100?location.pathname===config.root&&(a.classList.add("hide"),null!==r)&&r.classList.add("hide"):o-20<=t+n?(a.classList.add("hide"),null!==r&&r.classList.add("hide")):(a.classList.remove("hide"),null!==r&&r.classList.remove("hide"))}},toggleToolsList(){this.toggleButton.addEventListener("click",()=>{this.toolsList.classList.toggle("show")})},fontAdjPlus_dom:document.querySelector(".tool-font-adjust-plus"),fontAdMinus_dom:document.querySelector(".tool-font-adjust-minus"),globalFontSizeAdjust(){const o=this.html_root_dom;var e=this.fontAdjPlus_dom,t=this.fontAdMinus_dom,n=document.defaultView.getComputedStyle(document.body).fontSize;const i=parseFloat(n);let r=0;n=main.getStyleStatus();function a(e){var t=i*(1+.05*e);o.style.fontSize=t+"px",main.styleStatus.fontSizeLevel=e,main.setStyleStatus()}n&&a(r=n.fontSizeLevel),e.addEventListener("click",function(){a(r=Math.min(r+1,5))}),t.addEventListener("click",function(){a(r=Math.max(r-1,0))})},goComment(){this.goComment_dom=document.querySelector(".go-comment"),this.goComment_dom&&this.goComment_dom.addEventListener("click",()=>{var e=document.querySelector("#comment-anchor");e&&(e=e.getBoundingClientRect().top+window.scrollY,window.scrollTo({top:e,behavior:"smooth"}))})},getElementHeight(e){e=document.querySelector(e);return e?e.getBoundingClientRect().height:0},inithomeBannerHeight(){this.homeBanner_dom&&(this.homeBanner_dom.style.height=this.innerHeight+"px")},initPageHeightHandle(){var e,t,o;this.homeBanner_dom||(e=this.getElementHeight(".main-content-header")+this.getElementHeight(".main-content-body")+this.getElementHeight(".main-content-footer"),o=window.innerHeight,t=document.querySelector(".main-content-footer"),e<o&&0<(o=Math.floor(o-e))&&(t.style.marginTop=o-2+"px"))},setHowLongAgoLanguage(e,t){return t.replace(/%s/g,e)},getHowLongAgo(e){var t=lang_ago,o=Math.floor(e/2592e3/12),n=Math.floor(e/2592e3),i=Math.floor(e/86400/7),r=Math.floor(e/86400),a=Math.floor(e/3600%24),l=Math.floor(e/60%60),e=Math.floor(e%60);return 0<o?this.setHowLongAgoLanguage(o,t.year):0<n?this.setHowLongAgoLanguage(n,t.month):0<i?this.setHowLongAgoLanguage(i,t.week):0<r?this.setHowLongAgoLanguage(r,t.day):0<a?this.setHowLongAgoLanguage(a,t.hour):0<l?this.setHowLongAgoLanguage(l,t.minute):0<e?this.setHowLongAgoLanguage(e,t.second):void 0},relativeTimeInHome(){var e=document.querySelectorAll(".home-article-meta-info .home-article-date"),t=theme.home.article_date_format;"relative"===t?e&&e.forEach(e=>{var t=Date.now(),o=new Date(e.dataset.date.split(" GMT")[0]).getTime();e.innerHTML=this.getHowLongAgo(Math.floor((t-o)/1e3))}):"auto"===t&&e&&e.forEach(e=>{var t=Date.now(),o=new Date(e.dataset.date.split(" GMT")[0]).getTime();Math.floor((t-o)/864e5)<7&&(e.innerHTML=this.getHowLongAgo(Math.floor((t-o)/1e3)))})}};e.updateAutoHideTools(),e.registerWindowScroll(),e.toggleToolsList(),e.globalFontSizeAdjust(),e.goComment(),e.initPageHeightHandle(),e.inithomeBannerHeight(),e.relativeTimeInHome(),imageViewer()}export{navigationState};