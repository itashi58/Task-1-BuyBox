$('.plus').click(function () {
    var fieldID = $(this).prev().attr("id");
    $('#' + fieldID).val("hello world");
});