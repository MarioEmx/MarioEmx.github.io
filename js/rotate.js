const d = document;
export default function rotar(item) {
  const items = d.querySelectorAll(item);
  let rotate = 0;
  let z = 300;

  const query = window.matchMedia("(max-width: 1200px)");
  const query2 = window.matchMedia("(max-width: 520px)");
  query.onchange = (evt) => {
    if (query.matches) {
      z =200;
      items.forEach((e) => {
        e.style.transform = `rotateY(${rotate}deg) translateZ(${z}px)`;
        rotate += 45;
      });
    }
    else {
      items.forEach((e) => {
        z=300;
        e.style.transform = `rotateY(${rotate}deg) translateZ(${z}px)`;
        rotate += 45;
      });
    }
  };
  query2.onchange = () =>{
    if(query2.matches){
    z = 150;
      items.forEach((e) => {
        e.style.transform = `rotateY(${rotate}deg) translateZ(${z}px)`;
        rotate += 45;
  });
}
}
  query.onchange();
  query2.onchange();
  
}
