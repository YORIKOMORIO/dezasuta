//ハンバーガーメニュー 
$(function () {
    $('.sp_btn,.sp_nav li').on('click', function () {
        $('.sp_nav').fadeToggle();
        $('.sp_btn').toggleClass('open');
    });

    $(function () {
        // $('.loading').addClass('is-active')
       
        // setTimeout(function(){
        //     $('.loading').fadeOut();
        // },3300);            
        });
        
    $(function () { 
     var fadeIn = $('.fade-down');
    $(window).on('scroll', function () {
        $(fadeIn).each(function () {
        var offset = $(this).offset().top;
        var scroll = $(window).scrollTop(); 
        var windowHeight = $(window).height();
        if (scroll > offset - windowHeight + 350) {
        $(this).addClass("scroll-in");
        }
        });
    })
    });
    $(function () {
    var fadeIn = $('.fadeLeft');
    $(window).on('scroll', function () {
        $(fadeIn).each(function () {
        var offset = $(this).offset().top;
        var scroll = $(window).scrollTop(); 
        var windowHeight = $(window).height();
        if (scroll > offset - windowHeight + 350) {
        $(this).addClass("scroll-left");
        }
    });
    })
    });
    $(function () {
        var fadeIn = $('.fadeTrigger');
        $(window).on('scroll', function () {
            $(fadeIn).each(function () {
            var offset = $(this).offset().top;
            var scroll = $(window).scrollTop(); 
            var windowHeight = $(window).height();
            if (scroll > offset - windowHeight + 350) {
            $(this).addClass("fade-in");
            }
        });
        })
        });

    setTimeout(() => {
        $('.loading_m').fadeIn();
    }, 2000);
    setTimeout(() => {
    $('.fv_1').addClass('is-show');
    }, 1400);
    setTimeout(() => {
        $('.fv_2').addClass('is-show');
        }, 1400);
        setTimeout(() => {
            $('.fv_3').addClass('is-show');
            }, 1400);
            setTimeout(() => {
                $('.fv_4').addClass('is-show');
                }, 1400);
                setTimeout(() => {
                    $('.fv_5').addClass('is-show');
                    }, 1400);
                    setTimeout(() => {
                        $('.fv_6').addClass('is-show');
                        }, 2300);
                        setTimeout(() => {
                            $('.fv_7').addClass('is-show');
                            }, 2300);
                            setTimeout(() => {
                                $('.fv_8').addClass('is-show');
                                }, 2300);
                                setTimeout(() => {
                                    $('.fv_9').addClass('is-show');
                                    }, 2300);
                                    setTimeout(() => {
                                        $('.fv_10').addClass('is-show');
                                        }, 2300);
                                
                                
      
}); 