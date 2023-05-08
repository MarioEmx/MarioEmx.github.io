const d = document;
export default function shrinkMenu(nav){
    if (d.body.scrollTop > 50 || d.documentElement.scrollTop > 50) {
        d.querySelector(nav).style.paddingTop = "2px";
        d.querySelector(nav).style.paddingBottom = "2px";
        
      } else {
        d.querySelector(nav).style.paddingTop = "7px";
        d.querySelector(nav).style.paddingBottom = "7px";
      }
};