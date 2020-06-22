$(document).ready(function () {

    $("#menu-img").click(function () {
        $(".nav-design").show();
        $("#x").show();
        $(".nav-design").addClass("navclick-design");
    });

    $("#x").click(function () {
        $(".nav-design").hide();
        $(".nav-design").addClass("navclick-design");
        location.reload();
    });
});
