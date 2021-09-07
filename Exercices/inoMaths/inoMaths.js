

    function getRandomInt(min, max) {
        //math.ceil
        // this function always rounds a number up to the next largest integer
        min = Math.ceil(min);
        //Math.floor
        // function return the largest integer less than or equal to a given number
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function gen_calc(min_chf_1, max_chf_1, op, min_chf_2, max_chf_2) {
        var chf_1 = getRandomInt(min_chf_1,max_chf_1);
        var chf_2 = getRandomInt(min_chf_2,max_chf_2);

        var str = "";

        str = str + "<div class='calcul'>";
        str = str + "<span class='operation_'+ $(\".calcul\").length>";
        str = str +  chf_1 + " " + op + " " + chf_2;
        str = str + "</span>";
        str = str + "<span class='reponse_'+ $(\".calcul\").length>";
        str = str + "<input type=\"number\">";
        str = str + "<label class=\"correction\">";
        str = str + "</span>";
        str = str + "</div>";

        $(".calculs").append(str);

    }
    $(function (){
        $('#corriger').on("click",function (){
            $('.calcul').each(function(index,item){
                if(eval($("#num_"+index+ " .calculs").html()) == $("#num_"+index+" .reponse").val()){
                    $("#num_"+index + " .correction").html("✔");
                }else{
                    $("#num_"+index + " .correction").html("❌");
                }
            })
        })
    });