$(function() {


    /* Filter
    =========================*/
    var filter = $("[data-filter]");

    filter.on("click", function() {
        event.preventDefault();

        var cat = $(this).data('filter');

        if(cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
                    $("[data-cat]").each(function() {

            var workCat = $(this).data('cat');

            if(workCat != cat) {
                $(this).addClass('hide');
            } else {
                $(this).removeClass('hide');
            }

        });
        }


    });


        /* Modal
    =========================*/


    var modalCall = $("[data-modal]");
    var modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        var $this = $(this);
        var modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
    });

    modalClose.on("click", function(event) {
        event.preventDefault();

        var $this = $(this);
        var modalParent = $this.parents('.modal');

        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');
    });


    $(".modal").on("click", function(event) {
        $(this).removeClass('show');
        $("body").removeClass('no-scroll');
    });

        $(".modal__dialog").on("click", function(event) {
        event.stopPropagation
        $(this).removeClass('show');
        $("body").removeClass('no-scroll');
    });

});
