// window.onload = function () {
//     //додавання Помідорів, сиру та Печива
//
//     let tomatoes = $("<div class=\"list-line\">\n" +
//         "\n" +
//         "            <div class=\"left\">\n" +
//         "\n" +
//         "                <div class=\"product-label\">\n" +
//         "Помідори" +
//         "                </div>\n" +
//         "\n" +
//         "            </div>\n" +
//         "\n" +
//         "            <div class=\"center\">\n" +
//         "                <button type=\"button\" class=\"minus\" onclick=\"minus();\"> -</button>\n" +
//         "                <input type=\"text\" value=\"1\" class=\"value\">\n" +
//         "                <button type=\"button\" class=\"plus\" onclick=\"plus();\"> +</button>\n" +
//         "            </div>\n" +
//         "\n" +
//         "            <div class=\"right\">\n" +
//         "                <button type=\"button\" class=\"bought-button\"> Куплено</button>\n" +
//         "                <button type=\"button\" class=\"cross\"> x</button>\n" +
//         "            </div>\n" +
//         "\n" +
//         "        </div>\n");
//
//     let cookies = $("<div class=\"list-line\">\n" +
//         "\n" +
//         "            <div class=\"left\">\n" +
//         "\n" +
//         "                <div class=\"product-label\">\n" +
//         "Печиво" +
//         "                </div>\n" +
//         "\n" +
//         "            </div>\n" +
//         "\n" +
//         "            <div class=\"center\">\n" +
//         "                <button type=\"button\" class=\"minus\"> -</button>\n" +
//         "                <input type=\"text\" value=\"1\" class=\"value\">\n" +
//         "                <button type=\"button\" class=\"plus\"> +</button>\n" +
//         "            </div>\n" +
//         "\n" +
//         "            <div class=\"right\">\n" +
//         "                <button type=\"button\" class=\"bought-button\"> Куплено</button>\n" +
//         "                <button type=\"button\" class=\"cross\"> x</button>\n" +
//         "            </div>\n" +
//         "\n" +
//         "        </div>\n");
//
//     let cheese = $("<div class=\"list-line\">\n" +
//         "\n" +
//         "            <div class=\"left\">\n" +
//         "\n" +
//         "                <div class=\"product-label\">\n" +
//         "Сир" +
//         "                </div>\n" +
//         "\n" +
//         "            </div>\n" +
//         "\n" +
//         "            <div class=\"center\">\n" +
//         "                <button type=\"button\" class=\"minus\"> -</button>\n" +
//         "                <input type=\"text\" value=\"1\" class=\"value\">\n" +
//         "                <button type=\"button\" class=\"plus\"> +</button>\n" +
//         "            </div>\n" +
//         "\n" +
//         "            <div class=\"right\">\n" +
//         "                <button type=\"button\" class=\"bought-button\"> Куплено</button>\n" +
//         "                <button type=\"button\" class=\"cross\"> x</button>\n" +
//         "            </div>\n" +
//         "\n" +
//         "        </div>\n");
//
//     $("#bl-list").append(tomatoes, cookies, cheese);
//
// // при натисканні кнопки додати, додаємо товар
//
//     $(".bl-label").click(function () {
//
//         let productName = document.getElementById("input-field").value;
//
//         let htmlOfNewProduct = $("<div class=\"list-line\">\n" +
//             "\n" +
//             "            <div class=\"left\">\n" +
//             "\n" +
//             "                <div class=\"product-label\">\n" +
//             productName +
//             "                </div>\n" +
//             "\n" +
//             "            </div>\n" +
//             "\n" +
//             "            <div class=\"center\">\n" +
//             "                <button type=\"button\" class=\"minus\" onclick=> -</button>\n" +
//             "                <input type=\"text\" value=\"1\" class=\"value\">\n" +
//             "                <button type=\"button\" class=\"plus\"> +</button>\n" +
//             "            </div>\n" +
//             "\n" +
//             "            <div class=\"right\">\n" +
//             "                <button type=\"button\" class=\"bought-button\"> Куплено</button>\n" +
//             "                <button type=\"button\" class=\"cross\"> x</button>\n" +
//             "            </div>\n" +
//             "\n" +
//             "        </div>\n");
//
//         $("#bl-list").append(htmlOfNewProduct);


// $(".plus").click(function() {
//     this.addEventListener("click",this.previousElementSibling.value++);
//
// });
//
// $(".minus").click(function() {
//     if(this.previousElementSibling.value !== 0) {
//         this.addEventListener("click", this.previousElementSibling.value--);
//     }
//
// });
//
// $(".cross").click(function () {
//     this.parentElement.parentElement.remove();
// });


// });


// $(".plus").click(function() {
//     this.addEventListener("click",this.previousElementSibling.value++);
//
// });

// $(".minus").click(function() {
//         this.addEventListener("click", this.previousElementSibling.value--);
// });
//
//
// $(".cross").click(function () {
//     this.parentElement.parentElement.remove();
// });
//
// };
//
// function plus(){
//    this.parentElement.find("input").value;
// }
//
// function minus(){
//     this.nextElementSibling.value--;
// }


//
// $(function(){
// //This	function	will	be	called
// //	after	the	DOM	was	loaded	and	ready
// //Here	we	can	place	all	jQuery	Code
//      window.onload = function () {
//          //додавання Помідорів, сиру та Печива
//          let counter = 3;
//          let arr = [0, 1, 2];
//
//     let tomatoes = $("<div class=\"list-line\" id=\"1\">\n" +
//         "\n" +
//         "            <div class=\"left\">\n" +
//         "\n" +
//         "                <div class=\"product-label\" id=\"1\">\n" +
//         "Помідори" +
//         "                </div>\n" +
//         "\n" +
//         "            </div>\n" +
//         "\n" +
//         "            <div class=\"center\">\n" +
//         "                <button type=\"button\" class=\"minus\" id=\"1\"> -</button>\n" +
//         "                <input type=\"text\" value=\"1\" class=\"value\" id=\"1\">\n" +
//         "                <button type=\"button\" class=\"plus\" id=\"1\"> +</button>\n" +
//         "            </div>\n" +
//         "\n" +
//         "            <div class=\"right\">\n" +
//         "                <button type=\"button\" class=\"bought-button\" id=\"1\"> Куплено</button>\n" +
//         "                <button type=\"button\" class=\"cross\" id=\"1\"> x</button>\n" +
//         "            </div>\n" +
//         "\n" +
//         "        </div>\n");
//
//     let cookies = $("<div class=\"list-line\" id=\"2\">\n" +
//         "\n" +
//         "            <div class=\"left\">\n" +
//         "\n" +
//         "                <div class=\"product-label\" id=\"2\">\n" +
//         "Печиво" +
//         "                </div>\n" +
//         "\n" +
//         "            </div>\n" +
//         "\n" +
//         "            <div class=\"center\">\n" +
//         "                <button type=\"button\" class=\"minus\" id=\"2\"> -</button>\n" +
//         "                <input type=\"text\" value=\"1\" class=\"value\" id=\"2\">\n" +
//         "                <button type=\"button\" class=\"plus\" id=\"2\"> +</button>\n" +
//         "            </div>\n" +
//         "\n" +
//         "            <div class=\"right\">\n" +
//         "                <button type=\"button\" class=\"bought-button\" id=\"2\"> Куплено</button>\n" +
//         "                <button type=\"button\" class=\"cross\" id=\"2\"> x</button>\n" +
//         "            </div>\n" +
//         "\n" +
//         "        </div>\n");
//
//     let cheese = $("<div class=\"list-line\" id=\"3\">\n" +
//         "\n" +
//         "            <div class=\"left\">\n" +
//         "\n" +
//         "                <div class=\"product-label\" id=\"3\">\n" +
//         "Сир" +
//         "                </div>\n" +
//         "\n" +
//         "            </div>\n" +
//         "\n" +
//         "            <div class=\"center\">\n" +
//         "                <button type=\"button\" class=\"minus\" id=\"3\"> -</button>\n" +
//         "                <input type=\"text\" value=\"1\" class=\"value\" id=\"3\">\n" +
//         "                <button type=\"button\" class=\"plus\" id=\"3\"> +</button>\n" +
//         "            </div>\n" +
//         "\n" +
//         "            <div class=\"right\">\n" +
//         "                <button type=\"button\" class=\"bought-button\" id=\"3\"> Куплено</button>\n" +
//         "                <button type=\"button\" class=\"cross\" id=\"3\"> x</button>\n" +
//         "            </div>\n" +
//         "\n" +
//         "        </div>\n");
//     $("#bl-list").append(tomatoes, cookies, cheese);
//
//
//          $(".plus").click(function(){
//              let id = $(this).id;
//              $(".plus").hide();
//
//          });
//
//      };
//
//
//
//
// });


window.onload = function () {
    let idCounter = 5;

    addFirstLines("Помідори", 2);
    addFirstLines("Печиво", 3);
    addFirstLines("Сир", 4);

    $(".plus").click(
        function () {
            // $(this).parent().children("input").val(parseInt($(this).parent().children("input").val()) + 1);
            $(this).siblings("input").val(parseInt($(this).siblings("input").val()) + 1);
        });

    $(".minus").click(
        function () {
            if ($(this).parent().children("input").val() != 1) {
                $(this).parent().children("input").val(parseInt($(this).parent().children("input").val()) - 1);
            }
        });

    $(".cross").click(function () {
        this.parentElement.parentElement.remove();
    });


    $(".bl-label").click(
        function () {
            let a = $("#1").clone(true);
            let b = $("#2buy").clone(true);
            a.css("display", "block");
            a.find("label").find("input").val($("#input-field").val());
            a.attr("id", idCounter);
            idCounter++;
            a.appendTo("#bl-list");
            b.appendTo("#left-to-buy-list");
            $("#input-field").val("");
        }
    );


    function addFirstLines(product, id) {
        let a = $("#1").clone(true);
        a.css("display", "block");
        a.find("label").find("input").val(product);
        a.attr("id", id);
        a.appendTo("#bl-list");
    }


};