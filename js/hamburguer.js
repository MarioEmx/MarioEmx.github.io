const d = document;
export default function toggleMenu(btn, menu) {
  const $btn = d.querySelector(btn);
  const $menu = d.querySelector(menu);

  d.addEventListener(
    "click",
    (e) => {
      if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
        $btn.classList.toggle("is-active");
        $menu.classList.toggle("menu-active");
      }
    },

    d.addEventListener("click", (e) => {
      if (e.target.matches(menu) || e.target.matches(`${menu} *`)) {
        $menu.classList.toggle("menu-active");
        $btn.classList.toggle("is-active");
      }
    })
  );
}
