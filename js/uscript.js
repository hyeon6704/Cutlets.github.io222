    $(function(){
        $("#showCat").click(function(){
            $("#hideCat").css({"display":"block"});
            $("#nav_menu").css({"display":"block"});

            $("#showCat").css({"display":"none"});
        });

        $("#hideCat").click(function(){
            $("#hideCat").css({"display":"none"});
            $("#nav_menu").css({"display":"none"});

            $("#showCat").css({"display":"block"});
        });
    });