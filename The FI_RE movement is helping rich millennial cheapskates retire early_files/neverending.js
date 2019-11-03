jQuery( document.body ).on( 'post-load', function() {
	if ( typeof twttr == 'object' && twttr.widgets && twttr.widgets.load )
		twttr.widgets.load();
});