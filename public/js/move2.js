$(function(){
   
   const imgs = $(".box1 img"); 
   const texT = $(".texT .text1");
   const imgs2 = $(".right img");
   
    imgs.eq(0).on("click",function(){
        texT.eq(0).addClass("on");
    });

    imgs.eq(1).on("click",function(){
        texT.eq(1).addClass("on");
    });

    imgs.eq(2).on("click",function(){
        texT.eq(2).addClass("on");
    });

    imgs.eq(3).on("click",function(){
        texT.eq(3).addClass("on");
    });

    imgs.eq(4).on("click",function(){
        texT.eq(4).addClass("on");
    });

    imgs.eq(5).on("click",function(){
        texT.eq(5).addClass("on");
    });

    imgs.eq(6).on("click",function(){
        texT.eq(6).addClass("on");
    });

    imgs.eq(7).on("click",function(){
        texT.eq(7).addClass("on");
    });
   

    imgs2.on("click",function(){
        let a = $(this).attr("src");
        $(".left img").attr("src",a);
    });
   
});