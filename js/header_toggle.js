const d = document,
  ls = localStorage;

export default function header_theme() {
  const $header = d.querySelector(".menu_nav");

  if (ls.getItem("theme") === "dark") {
    $header.classList.add("dark");
    $header.classList.remove("light");
  }
  if (ls.getItem("theme") === "light") {
    $header.classList.remove("dark");
    $header.classList.add("light");
  }
  d.addEventListener("click", (e) => {
    if (e.target.matches(".checkbox-label") || e.target.matches(".ball")) {
      if (ls.getItem("theme") === "dark") {
        console.log($header);
        $header.classList.add("dark");
        $header.classList.remove("light");
      } else {
        console.log($header);
        $header.classList.remove("dark");
        $header.classList.add("light");
      }
    }
  });
}
