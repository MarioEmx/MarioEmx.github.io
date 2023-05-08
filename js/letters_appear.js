const d = document;
export function letter(word) {
  let $letters = d.querySelectorAll(word);
  let counter = 825;
  $letters.forEach((e) => {
    e.style.transitionDelay = `${counter}ms`;
    counter += 80;
  });
}

let time = setTimeout(fade, 2000);
export function fade(text) {
  let $texto = d.querySelector(text);
  $texto.classList.toggle("animate");
  clearTimeout(time);
}
