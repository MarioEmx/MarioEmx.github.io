const d = document,
w=window;

export default function scrollTop(btnScroll){
    const $scroll_btn = d.querySelector(btnScroll);
    
    w.addEventListener("scroll",e=>{
       let scrollTop = w.scrollY;

       if(scrollTop>400){
           $scroll_btn.classList.remove("hidden");
       }else{
           $scroll_btn.classList.add("hidden");
       }
    });

    d.addEventListener("click",e=>{
        if(e.target.matches(btnScroll)){
            w.scrollTo(0,0)
        }
    });   
}