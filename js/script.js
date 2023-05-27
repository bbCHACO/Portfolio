$(function(){
    $(".drawer-icon").on("click", function (e) {
    //ハンバーガーメニューをクリックするとdrawer等がopenになる
        e.preventDefault();
        $(".drawer-icon").toggleClass("is-active");
        $(".drawer-nav").toggleClass("is-active");
        $(".drawer-overlay").toggleClass("is-active");
        return false;
      });
    
    //drawer-menuのaタグをクリックしたらdrawer等が閉じる
      $(".header-menu-item").on("click", function () {
        $(".drawer-icon").removeClass("is-active");
        $(".drawer-nav").removeClass("is-active");
        $(".drawer-overlay").removeClass("is-active");
        return false;
      });

    //   const initSwiper = () => {
      const swiperCard = new Swiper('.swiper-card', {
        // Optional parameters
        loop: true,
        // loopedSlides: 3,
        // width: 500,
        slidesPerView: 1.3,
        spaceBetween: 24,
        centeredSlides: true,
        // centeredSlidesBounds:true,
        // autoplay:{
        //     delay:1,
        //     disableOnInteraction:false,
        // },
        // speed:4000,
        effect:"slide",
        touchStartPreventDefault:false,
        passiveListeners:false,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination-card',
          clickable:true,
        },
        
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next-card',
          prevEl: '.swiper-button-prev-card',
        },

        breakpoints:{
            768:{
                slidesPerView: 2,
                spaceBetween: 40,
                
            }
    
        }
      

    });//swiperCard
    

// };//initSwiper
    // window.addEventListener('load', function(){
    //   initSwiper(); // ページ読み込み後に初期化
    // });

    $(".sobolon").on("click", function () {
        var imgSrc = $(this).attr("src");
        $(".bigimg").children().attr("src", imgSrc);
        $("#modal").fadeIn();
        $("body,html").css("overflow-y", "hidden"); //画面の縦スクロールをさせないようにする処理
        return false;
      });

      $("#modal").on("click", function () {
        $("#modal").fadeOut();
        $("body,html").css("overflow-y", "visible");
        return false;
      });

      $(".bigimg").on("click", function (e) {
        e.stopPropagation();
      });

    //topへ戻る、スクロール
    $('a[href^="#"]').on("click",function(){

        var header = $("header").outerHeight();
        var id = $(this).attr("href");
        var position = 0;
  
        if(id !=="#"){
          var position = $(id).offset().top - header;
        };
          $("html,body").animate({
            scrollTop:position
          },
          300);
        
      });
  
      $(window).on("scroll",function(){
        if(100 < $(this).scrollTop()){
          $(".button-return-div").addClass("is-show");
        }else{
          $(".button-return-div").removeClass("is-show");
        }
      });
 
});//function

