$('.map-container')
	.click(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')}); 

   $(document).ready(function(){
	   $(window).bind('scroll', function() {
           var navHeight = $( '#cover-page' ).outerHeight(); 
           if ($(window).scrollTop() > navHeight) {
				 $('nav').addClass('fixed');
                 $('#menu-dropdown').addClass('dropdown').removeClass('dropup');
			 }
			 else {
				 $('nav').removeClass('fixed');
                 $('#menu-dropdown').removeClass('dropdown').addClass('dropup');
			 }
		});
	});
