//ハンバーガーメニュー 
$(function () {
    $('.sp_btn,.sp_nav li').on('click', function () {
        $('.sp_nav').fadeToggle();
        $('.sp_btn').toggleClass('open');
        // spボタンにopen classをつけたり外したりしたいので上記を追加
    });
    // slick
    $('.works_slider').slick({    // ('')内はスライダーにしたいclass名を記述
        // ,忘れ注意
        autoplay: true,  // 自動で画像がスライドする
        autoplaySpeed: 3500, // 自動でスライドする時の秒数を指定
        dots: true,  // 画像の下にあるドットを表示させる
        arrows: false,  // デフォルトの矢印を消す
        // スライドしているところとボタンの色を変えたいのでcssも変更する
    });
    // 課題６
    $('.gallery_wrap').slick({
        autoplay: true,  // 　自動で画像がスライドする
        autoplaySpeed: 2000,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                },
            },
        ],
    });
    $(function () {
        $('.loading').addClass(is-active);
        setTimeout(function(){
            $('.loading').fedeOut();
        },5000);            
        });
    
    
}); 