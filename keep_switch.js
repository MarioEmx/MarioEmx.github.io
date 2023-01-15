const d = document,
  ls = localStorage;

export default function keep_switch(btn_mode, off, on, ball) {
  const $selectors = d.querySelectorAll("[data-off]"),
    $selectors2 = d.querySelectorAll("[data-on]");
  let $toggle = d.querySelector(ball);

  const onMode = () => {
    $selectors.forEach((el) => el.classList.remove(off));
    $selectors2.forEach((el) => el.classList.add(on));
    ls.setItem("toggle", "on");
    console.log("on")
  };

  const offMode = () => {
    $selectors.forEach((el) => el.classList.add(off));
    $selectors2.forEach((el) => el.classList.remove(on));
    ls.setItem("toggle", "off");
    console.log("off")
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn_mode) || e.target.matches(ball)) {
      if ($toggle.classList.contains(off)) {
        onMode();
      } else {
        offMode();
      }
    }
  });

    if (ls.getItem("toggle") === null) ls.setItem("toggle", "on");
    if (ls.getItem("toggle") === "on") onMode();
    if (ls.getItem("toggle") === "off") offMode(); 
}
