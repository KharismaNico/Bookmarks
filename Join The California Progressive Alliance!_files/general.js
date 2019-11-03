jQuery(document).ready(function() {

    // Get all thumbs containers
    jQuery(".mbyte-rating-container").each(function(index) {

        // Get data attribute
        var content_id = jQuery(this).data('content-id');
        var item_name = "mbyterating" + content_id;

        // Check if this content has localstorage
        if (localStorage.getItem(item_name)) {

            // Check if it's Up or Down vote
            if (localStorage.getItem("mbyterating" + content_id + "-1")) {
                jQuery(this).find('.mbyte-rating-up').addClass('mbyte-rating-voted');
            }
            if (localStorage.getItem("mbyterating" + content_id + "-0")) {
                jQuery(this).find('.mbyte-rating-down').addClass('mbyte-rating-voted');
            }
        }
    });
});

function mbyte_rating_vote(ID, type) {
    // LocalStorage items
    var item_name = "mbyterating" + ID;
    var container = '#mbyte-rating-' + ID;

    // is value not exists in LocalStorage?
    if (!localStorage.getItem(item_name)) {
        // Set LocalStorage item, so the user can not vote again.
        localStorage.setItem(item_name, true);

        // Set the localStorage type as well
        var type_item_name = "mbyterating" + ID + "-" + type;
        localStorage.setItem(type_item_name, true);

        // Data for the Ajax Request
        var data = {
            action: 'mbyte_rating_add_vote',
            postid: ID,
            type: type,
            nonce: mbyte_rating_ajax.nonce
        };

        jQuery.post(mbyte_rating_ajax.ajax_url, data, function(resp) {
            var object = jQuery(container);
            jQuery(container).html('');
            jQuery(container).append(resp);

            // Remove the class and ID so we don't have 2 DIVs with the same ID
            jQuery(object).removeClass('mbyte-rating-container');
            jQuery(object).attr('id', '');

            // Add the class to the clicked element
            var new_container = '#mbyte-rating-' + ID;

            // Check the type
            if (type == 1) mbyte_rating_class = ".mbyte-rating-up";
            else mbyte_rating_class = ".mbyte-rating-down";

            jQuery(new_container + mbyte_rating_class).addClass('mbyte-rating-voted');
        });
    } else {
        // Display message if user vote is stored already
        jQuery('#mbyte-rating-' + ID + ' .mbyte-rating-already-voted').fadeIn();
    }
}
