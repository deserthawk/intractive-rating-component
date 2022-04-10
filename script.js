$(document).ready(function () {
    $(".rating").click(function () {
        resetRating();
        $(this).addClass("selected");
    });
    function resetRating() {
        $(".rating").removeClass("selected");
    }
    $(".submit-btn").click(function () {
        if (!isNaN(parseInt($(".selected").text()))) {
            $(".component").css("display", "none");
            $(".result").css("display", "inline");
            $("#theRating").text($(".selected").text());
        }
    });
});