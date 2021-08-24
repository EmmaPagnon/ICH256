$(function() {
        var change = true

        $("img").on( 'click', function (){

                if (change ==true){
                        $("#content,p").css("background-color", "gray")
                        $("h1,h2").css("color", "red")
                        $("h1,h2,p").css("border-color", "red")
                        $("h2.anecdote+p").css("color", "white")
                        $("body").css("color", "black")
                        change= false;
                        $(".anecdote+p").hide();
                }
                else {

                        location.reload();
                        change = true;
                }
        });
});


