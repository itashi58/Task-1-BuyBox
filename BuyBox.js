window.onload = function () {
    let idCounter = 5;

    addFirstProducts("Помідори", 2);
    addFirstProducts("Печиво", 3);
    addFirstProducts("Сир", 4);

    /*
    Лісенер на кнопку "+"
     */
    $(".plus").click(
        function () {
            $(this).siblings("input").val(parseInt($(this).siblings("input").val()) + 1);
            $("#" + $(this).parent().parent().attr("id") + "buy").find("span").html(parseInt($(this).siblings("input").val()));
        });

    /*
   Лісенер на кнопку "-"
    */
    $(".minus").click(
        function () {
            if ($(this).siblings("input").val() != 1) {
                $(this).siblings("input").val(parseInt($(this).parent().children("input").val()) - 1);
                $("#" + $(this).parent().parent().attr("id") + "buy").find("span").html(parseInt($(this).siblings("input").val()));
            }
        });

    /*
   Лісенер на кнопку "x" (видалення)
    */
    $(".cross").click(function () {
        $("#" + $(this).parent().parent().attr("id") + "buy").slideUp(500);
        $(this).parent().parent().slideUp(500);
        setTimeout(function () {
            $(this).parent().parent().remove();
        }, 500);
    });

    /*
    Лісенер на кнопку "Додати" (додавання товару)
    */
    $(".bl-label").click(
        function () {
            if ($("#input-field").val() !== "") {
                let mainElement = $("#1").clone(true);
                mainElement.css("display", "block");
                mainElement.find("label").find("input").val($("#input-field").val());
                mainElement.attr("id", idCounter);

                let buyElement = $("#1buy").clone(true);
                buyElement.find("div").html($("#input-field").val());
                buyElement.css("display", "inline-block");
                buyElement.attr("id", idCounter + "buy");

                idCounter++;
                mainElement.appendTo("#bl-list");
                mainElement.hide().slideDown(500);
                buyElement.appendTo("#left-to-buy-list");
                buyElement.hide().slideDown(500);
                $("#input-field").val("");
            }
        }
    );

    /*
     *Лісенер на Enter при вводі тексту в поле додавання товару
     */
    $("#input-field").keydown(function (e) {
        if (e.keyCode === 13) {
            if ($("#input-field").val() !== "") {
                let mainElement = $("#1").clone(true);
                mainElement.css("display", "block");
                mainElement.find("label").find("input").val($("#input-field").val());
                mainElement.attr("id", idCounter);

                let buyElement = $("#1buy").clone(true);
                buyElement.find("div").html($("#input-field").val());
                buyElement.css("display", "inline-block");
                buyElement.attr("id", idCounter + "buy");

                idCounter++;
                mainElement.appendTo("#bl-list");
                mainElement.hide().slideDown(500);
                buyElement.appendTo("#left-to-buy-list");
                buyElement.hide().slideDown(500);
                $("#input-field").val("");
            }
        }
    });

    /*
   Лісенер на кнопку "Куплено" або "Не куплено"
    */
    $(".bought-button").click(function () {
        let buyElementId = $(this).parent().parent().attr("id") + "buy";
        let element = $("#" + buyElementId).clone(true);

        if ($(this).html() === "Куплено") {

            $(this).prop("disabled", true);
            $(this).parent().parent().find("label").find("input").css("text-decoration", "line-through");
            $(this).siblings($(".cross")).hide();
            $(this).parent().siblings(".center").find("button").hide();
            $(this).html("Не куплено");
            $("#" + buyElementId).slideUp(500, "linear");
            $("#" + buyElementId).remove();
            element.appendTo("#bought-list");
            element.hide().slideDown(500);
            $(this).prop("disabled", false);

        } else {

            $(this).prop("disabled", true);
            $(this).parent().parent().find("label").find("input").css("text-decoration", "none");
            $(this).siblings($(".cross")).show();
            $(this).parent().siblings(".center").find("button").show();
            $(this).html("Куплено");
            $("#" + buyElementId).slideUp(500, "linear");
            $("#" + buyElementId).remove();
            element.appendTo("#left-to-buy-list");
            element.hide().slideDown(500);
            $(this).prop("disabled", false);

        }
    });

    /*
    Лісенер на натискання на лейбл товару, щоб активувати input
     */
    $(".label").click(function () {
        $(this).children("input").removeAttr("disabled");
    });

    /*
    Лісенер на прибирання фокусу з input поля, щоб деактивувати його та змінити товар
     */
    $(".product-label").blur(function () {
        $(this).attr("disabled", true);
        $("#" + $(this).parent().parent().parent().attr("id") + "buy").children("div").html($(this).val());
    });

    /*
    Функція для додавання перших елементів
     */
    function addFirstProducts(product, id) {
        let mainElement = $("#1").clone(true);
        mainElement.find("label").find("input").val(product);
        mainElement.attr("id", id);
        mainElement.appendTo("#bl-list");
        $("#" + id).slideDown(500);

        let buyElement = $("#1buy").clone(true);
        buyElement.find("div").html(product);
        buyElement.attr("id", id + "buy");
        buyElement.appendTo("#left-to-buy-list");
        $("#" + id + "buy").slideDown(500);
        $("#" + id + "buy").css("display", "inline-block");
    }

};