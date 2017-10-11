$(function () {

    $.ajaxSetup({
        type: "GET",
        global: true
    });

    $(document).on({
        "ajaxStart": function () {
            // Показать #log с эффектом возникновения за 1c.
            $("#log").fadeIn(1000);
        },

        "ajaxComplete": function (event, xhr, ajaxOptions) {
            // добавлять в #log фразу "Request to " + тут надо получить ссылку запроса + " completed"
            $("#log").append("<li>Request to " + ajaxOptions.url + " completed</li>");
        },

        "ajaxStop": function () {
            // Спрятать #log c эффектом растворения за 1c
            $("#log").fadeOut(1000);
        }
    });

    // load xml
    $("#b1").on("click", function () {
        $.ajax({
            url: "./data/xml.xml",
            dataType: "xml",
            global: false,

            success: function (data) {
                const $xml = $(data);
                const $result = $xml.find("shop_name");
                $("#xmlContent").text($result.text());
            }
        });



    });

    // load html
    $("#b2").on("click", function () {
        $("#htmlContent").load("./data/html.html");
    });

    // load json
    $("#b3").on("click", function () {
        $.ajax({
            url: "./data/json.json",
            dataType: "json",
            success: function (data) {
                $("#jsonContent").text(data.a);
            }
        });
    });

    // run script
    $("#b4").on("click", function () {
        $.ajax({
            url: "./data/js.js",
            dataType: "script",
            success: function (data) {
                console.log(data);
                myAlert();
            }
        });
    });

});