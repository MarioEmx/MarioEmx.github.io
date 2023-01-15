import  change_lan  from "./change_lan.js";
import toggleMenu from "./hamburguer.js";
import {letter,fade} from "./letters_appear.js";
import shrinkMenu from "./menu_shrink.js"
import rotar from  "./rotate.js"
import scrollTop from "./scrollTop.js";
import scrollSpy from "./scroll_espia.js";
import modo_oscuro from "./toggle_theme.js";
import keep_switch from "./keep_switch.js";

const d = document;
d.addEventListener("DOMContentLoaded",(e)=>{
    letter(".text-anim span");
    fade(".text-anim");
    rotar(".item");
    scrollTop(".btn-scroll");
    scrollSpy();
    toggleMenu(".hamburger",".menu_responsive");
    keep_switch(".checkbox-label", "on", "off", ".ball");
});

change_lan(".usa",".mx");
modo_oscuro(".checkbox-label","dark","light",".ball"); 

window.onscroll = function() {shrinkMenu(".menu_nav")};
