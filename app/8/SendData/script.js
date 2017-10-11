$(document).ready(function(){

    // variable to hold request
    let request;

    // bind to the submit event of our form
    $("#frm").on("submit", function( evt ){
        // prevent default posting of form
        evt.preventDefault();

        // abort any pending request
        if (request && request.readyState != 4) {
            request.abort();
        }

        // setup some local variables
        const $form = $(this);

        // let's select and cache all the fields
        const $inputs = $form.find("input, select, button, textarea");

        // serialize the data in the form
        const serializedData = $form.serialize();

        // let's disable the inputs for the duration of the ajax request
        $inputs.prop("disabled", true);

        // fire off the request to /form.php
        request = $.ajax({
            url: "http://www.vitava.com.ua/files/jquery/ajax-scripts/send-data.php",
            type: "get",
            dataType: "jsonp",
            data: serializedData
        });

        // callback handler that will be called on success
        request.done(function (response, textStatus, jqXHR){
            // log a message to the console
            console.log("Hooray, it worked!");
            console.log( response );
        });

        // callback handler that will be called on failure
        request.fail(function (jqXHR, textStatus, errorThrown){
            // log the error to the console
            console.error(
                "The following error occured: "+
                textStatus, errorThrown
            );
        });

        // callback handler that will be called regardless
        // if the request failed or succeeded
        request.always(function () {
            // reenable the inputs
            $inputs.prop("disabled", false);
        });


    });
});