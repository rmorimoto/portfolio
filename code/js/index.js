var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    effect: "cube",
    autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

  window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    var title = document.getElementsByClassName("wrap__fv__box__title")[0];
    if(scroll > 30){
      title.style.opacity="0";
    }else{
      title.style.opacity="1";
    }
    var text = document.getElementsByClassName("wrap__profile__box__text__name")[0];
    if(scroll > 450){
      text.style.opacity="1";
      text.style.transform="translateX(0)";
    }
    var hobby = document.getElementsByClassName("wrap__profile__box__text__hobby")[0];
    if(scroll > 450){
      hobby.style.opacity="1";
      hobby.style.transform="translateX(0)";
    }
    var content = document.getElementsByClassName("wrap__profile__box__text__content")[0];
    if(scroll > 450){
      content.style.opacity="1";
      content.style.transform="translateX(0)";
    }
    var life = document.getElementsByClassName("wrap_slide__life")[0];
    if(scroll > 820){
      life.style.opacity="1";
      life.style.transform="translateX(0)";
    }
    var swiper = document.getElementsByClassName("swiper")[0];
    if(scroll > 1200){
      swiper.style.opacity="1";
      swiper.style.transform="translateX(0)";
    }
    var work = document.getElementsByClassName("wrap__work__box__content__work")[0];
    if(scroll > 1750){
      work.style.opacity="1";
      work.style.transform="translateX(0)";
    }
    var year = document.getElementsByClassName("wrap__work__box__content__year")[0];
    if(scroll > 1800){
      year.style.opacity="1";
      year.style.transform="translateX(0)";
    }


    //作品一覧
    var items = document.getElementsByClassName("wrap__work__box__content__items")[0];
    if(scroll > 1950){
      items.style.opacity="1";
      items.style.transform="translateX(0)";
    }
    var items = document.getElementsByClassName("wrap__work__box__content__items")[1];
    if(scroll > 1950){
      items.style.opacity="1";
      items.style.transform="translateX(0)";
    }
    var items = document.getElementsByClassName("wrap__work__box__content__items")[2];
    if(scroll > 1950){
      items.style.opacity="1";
      items.style.transform="translateX(0)";
    }
    var items = document.getElementsByClassName("wrap__work__box__content__items")[3];
    if(scroll > 2200){
      items.style.opacity="1";
      items.style.transform="translateX(0)";
    }
  }
