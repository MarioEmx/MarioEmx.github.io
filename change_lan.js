import rotar from  "./rotate.js";
import keep_switch from "./keep_switch.js";
import toggleMenu from "./hamburguer.js";
import { letter,fade } from "./letters_appear.js";
import header_theme from "./header_toggle.js";
const d = document,
  $main = d.querySelector("html");
  

export default function change_lan(usa,mx) {
  const getAll = (options) => {
    let { url, success, error } = options;
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;
      
      if (xhr.status >= 200 && xhr.status < 300) {
        let html = xhr.responseText;
        success(html);
        rotar(".item");
        keep_switch(".checkbox-label", "on", "off", ".ball");
        toggleMenu(".hamburger",".menu_responsive");
        letter(".text-anim span");
        fade(".text-anim");
        header_theme()
      } else {
        let message = xhr.statusText || "Ocurrio un error";
        error(`Error: ${xhr.status} - ${message}`);
      }
    });
    xhr.open("GET", url);
    xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
    xhr.send();
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(usa)) {
      e.preventDefault();
      getAll({
        url: "index-en.html",
        success: (html) => ($main.innerHTML = html),
        error: (err) => ($main.innerHTML = `<h1>${err}</h1>`),
      });
    }
    if (e.target.matches(mx)){
        e.preventDefault();
      getAll({
        url: "index.html",
        success: (html) => ($main.innerHTML = html),        
        error: (err) => ($main.innerHTML = `<h1>${err}</h1>`),
      });
    }
  });
}
