$(function(){

    $("h1.centered,.first,.second,.third,.final,img#second_image").hide()
    $("body").click(function(){
            $("h1.centered").animate({
                top: '250px',
                height: 'toggle',
                width: '450px'
            });
        $("body").click(function(){
            $("h1.centered").hide()
            $(".first").show();

            $("body").click(function(){
                $(".first").hide()
                $(".second").show();

                $("body").click(function(){
                    $(".second").hide()
                    $(".third").show();

                    $("body").click(function(){
                        $(".third,img#first_image").hide()
                        $(".final,img#second_image").show();

                    });
                });
            });
        });
    })

});


