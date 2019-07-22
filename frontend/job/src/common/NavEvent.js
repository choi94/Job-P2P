  //스크롤 매서드 처리 고민하기.

  
  scrollToTop = e =>{
    let scroll = document.getElementsByClassName("Header");
      if(window.scrollToTop>=50)
      {
        scroll.addClass('.HeaderScroll')
      }
      else{
        scroll.removeClass('.HeaderScroll')
      }
  };
  