$(document).ready(function(){
    //mobile menu toggling
    $("#menu_icon").click(function(){
        $("header nav ul").toggleClass("show_menu");
        $("#menu_icon").toggleClass("close_menu");
        return false;
    });

});