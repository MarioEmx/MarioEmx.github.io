const d = document,
  ls = localStorage;

export default function modo_oscuro(btn_mode, dark, light, ball) {
  const $selectors = d.querySelectorAll("[data-dark]"),
    $selectors2 = d.querySelectorAll("[data-light]");
  let $html = d.querySelector(".html");


  const lightMode = () => {
    //console.log("luz")
    $selectors.forEach((el) => el.classList.remove(dark));
    $selectors2.forEach((el) => el.classList.add(light));
    ls.setItem("theme", "light");
  };

  const darkMode = () => {
    //console.log("dark")
    $selectors.forEach((el) => el.classList.add(dark));
    $selectors2.forEach((el) => el.classList.remove(light));
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn_mode) || e.target.matches(ball)) {
      
      if ($html.classList.contains(dark)) {
        lightMode();
      } else {
        darkMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", () => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    if (ls.getItem("theme") === "light") lightMode();
    if (ls.getItem("theme") === "dark") darkMode();
  });
}
