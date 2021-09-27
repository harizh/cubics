
$("#banking .slideLink").click(function () {
    $(".projectDet").removeClass("active");
    $("#retail").addClass("active");
});
$("#retail .slideLink").click(function () {
    $(".projectDet").removeClass("active");
    $("#corporate").addClass("active");
});
$("#corporate .slideLink").click(function () {
    $(".projectDet").removeClass("active");
    $("#healthcare").addClass("active");
    
});
$("#healthcare .slideLink").click(function () {
    $(".projectDet").removeClass("active");
    $("#banking").addClass("active");
});