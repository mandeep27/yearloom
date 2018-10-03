jQuery(window).on('load', function () {
	jQuery("#preloader").fadeOut();
});
jQuery(function (jQuery) {
	//Preloader
	// Wow 
		wow = new WOW({
		boxClass: 'wow', // default
		animateClass: 'animated', // default
		offset: 0, // default
		mobile: false, // default
		live: true // default
	})
	wow.init();

	
	// Bootstrap Slider 
	jQuery('.carousel').carousel({
		interval: 3000
		, cycle: true
	});

	/**** Team Slider ****/
 var owl = jQuery("#home_testi");
    owl.owlCarousel({
        itemsCustom: [
                [768, 1]
                , [992, 1]
                , [1200, 1]
                , [2000, 1]]
        , navigation: true
        , pagination: false
        , slideSpeed: 1000
        , scrollPerPage: true
		, autoPlay: true
    });
	var owl = jQuery("#home_testi1");
    owl.owlCarousel({
        itemsCustom: [
                [768, 1]
                , [992, 1]
                , [1200, 1]
                , [2000, 1]]
        , navigation: true
        , pagination: false
        , slideSpeed: 1000
        , scrollPerPage: true
		, autoPlay: true
    });
	
		/**** Select Placeholder ****/
	jQuery('select').change(function () {
		if (jQuery(this).children('option:first-child').is(':selected')) {
			jQuery(this).addClass('placeholder1');
		}
		else {
			jQuery(this).removeClass('placeholder1');
		}
	});
	/**** Textarea First Letter Capital ****/
	jQuery('textarea.form_control').on('keypress', function (event) {
		var $this = jQuery(this)
			, thisVal = $this.val()
			, FLC = thisVal.slice(0, 1).toUpperCase();
		con = thisVal.slice(1, thisVal.length);
		jQuery(this).val(FLC + con);
	});
});



jQuery(window).on('load', function () {
	setTimeout(function () {
		jQuery('body').addClass('loaded');
	}, 100);
});
// grab the initial top offset of the navigation 
var stickyNavTop = jQuery('body').offset().top;
// our function that decides weather the navigation bar should have "fixed" css position or not.
var stickyNav = function () {
	var scrollTop = jQuery(window).scrollTop(); // our current vertical position from the top
	// if we've scrolled more than the navigation, change its position to fixed to stick to top,
	// otherwise change it back to relative
	if (scrollTop > 10) {
		jQuery('header').addClass('sticky animated fadeInDown');
	}
	else {
		jQuery('header').removeClass('sticky fadeInDown');
	}
};
stickyNav();
// and run it again every time you scroll
jQuery(window).scroll(function () {
	stickyNav();
});

