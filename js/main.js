 //ファーストビューのslider
 $('.slider').slick({
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 2000,
  fade: true,
  cssEase: 'linear'
});

$(function(){
  var imgHeight = $('.fv-inner').outerHeight();  //キービジュアルの画像の高さを取得
  // var bgHeight = $('.fv').outerHeight(); //ファーストビューの高さを取得
  
  // スクロールしたら、サイトロゴとハンバーガーボタンの色が変わる
  $(window).on('load scroll', function(){
    if ($(window).scrollTop() < imgHeight -50) {
      //メインビジュアル内にいるので、クラスを外す。
      $('.header').removeClass('black');
    }else {
      //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
      $('.header').addClass('black');
    }
 });
});

$(".openbtn").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});
$(".nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $(".nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});