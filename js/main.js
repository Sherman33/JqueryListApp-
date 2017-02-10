$(document).ready(function() {

    main(); //Call the unique function when document is ready

});

var main = function (item) {
    var input_item = $("#item"),
        counter = 0,
        itemsCounter = $("#item-counter");
    $("#button").on('click', function() { //Event Click
        if (input_item.val() !== "") { //Input must be complete
            var elements = $("ul li"); //all elements
            itemsCounter.text(counter += 1); //Items Counter
            if (elements.length <= -1) { //Disappear 'No items found' message if items exist
                $("#items-empty").css('display', 'block')
            } else {
                $("#items-empty").css('display', 'none');
            }
            //Element Created
            $("<span></span>").addClass("fa fa-times").attr('id', 'delete').appendTo($("<li>" + input_item.val() + "</li>").addClass('list-group-item').appendTo("ul"));
            input_item.val(""); //Input value empty when element is created
            $(".error").css('display', 'none');
        } else {
            $(".error").css('display', 'block');
            return false;
        }
    });

    //Delete Item
    $("#ul").on('click', 'li', function() { //Remove
        $(this).remove(); //When li(item) is clicked delete
        itemsCounter.text(counter -= 1);
        if (counter === 0) { //Now, appear message 'No items found' message if items is equal to zero
            $("#items-empty").css('display', 'block');
        } else {
            $("#items-empty").css('display', 'none');
        }
    });
};

//By Sherman