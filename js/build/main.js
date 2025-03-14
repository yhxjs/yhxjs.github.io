import _ from"./utils.js";import e from"./plugins/typed.js";import t from"./tools/lightDarkSwitch.js";import o from"./layouts/lazyload.js";import r from"./tools/scrollTopBottom.js";import n from"./tools/localSearch.js";import a from"./tools/codeBlock.js";import i from"./layouts/bookmarkNav.js";const main={themeInfo:{theme:"Redefine v"+theme.version,author:"EvanNotFound",repository:"https://github.com/EvanNotFound/hexo-theme-redefine"},localStorageKey:"REDEFINE-THEME-STATUS",styleStatus:{isExpandPageWidth:!1,isDark:theme.colors.default_mode&&"dark"===theme.colors.default_mode,fontSizeLevel:0,isOpenPageAside:!0},printThemeInfo:()=>{console.log('      ______ __  __  ______  __    __  ______                       \r\n     /\\__  _/\\ \\_\\ \\/\\  ___\\/\\ "-./  \\/\\  ___\\                      \r\n     \\/_/\\ \\\\ \\  __ \\ \\  __\\\\ \\ \\-./\\ \\ \\  __\\                      \r\n        \\ \\_\\\\ \\_\\ \\_\\ \\_____\\ \\_\\ \\ \\_\\ \\_____\\                    \r\n         \\/_/ \\/_/\\/_/\\/_____/\\/_/  \\/_/\\/_____/                    \r\n                                                               \r\n ______  ______  _____   ______  ______ __  __   __  ______    \r\n/\\  == \\/\\  ___\\/\\  __-./\\  ___\\/\\  ___/\\ \\/\\ "-.\\ \\/\\  ___\\   \r\n\\ \\  __<\\ \\  __\\\\ \\ \\/\\ \\ \\  __\\\\ \\  __\\ \\ \\ \\ \\-.  \\ \\  __\\   \r\n \\ \\_\\ \\_\\ \\_____\\ \\____-\\ \\_____\\ \\_\\  \\ \\_\\ \\_\\\\"\\_\\ \\_____\\ \r\n  \\/_/ /_/\\/_____/\\/____/ \\/_____/\\/_/   \\/_/\\/_/ \\/_/\\/_____/\r\n                                                               \r\n')},setStyleStatus:()=>{localStorage.setItem(main.localStorageKey,JSON.stringify(main.styleStatus))},getStyleStatus:()=>{var _=localStorage.getItem(main.localStorageKey);if(_){for(var t in _=JSON.parse(_),main.styleStatus)main.styleStatus[t]=_[t];return _}return null},refresh:()=>{_(),t(),r(),i(),0!==theme.home_banner.subtitle.text.length&&location.pathname===config.root&&e("subtitle"),!0===theme.navbar.search.enable&&n(),!0===theme.articles.code_block.copy&&a(),!0===theme.articles.lazyload&&o()}};function initMain(){main.printThemeInfo(),main.refresh()}document.addEventListener("DOMContentLoaded",initMain);try{swup.hooks.on("page:view",()=>{main.refresh()})}catch(_){}export{main,initMain};