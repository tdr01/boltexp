function slideShow() {

	//opacity
	$('#gallery a').css({opacity: 0.0});
	
	//Get the first image and display it (set it to full opacity)
	$('#gallery a:first').css({opacity: 0.0});
	$('#gallery a:first').css({width: 960});
	$('#gallery a:first').animate({opacity: 1.0}, 2000);
	
	//caption background
	$('#gallery .caption').css({height: '0px', opacity: 0.0});
	$('#gallery .caption').animate({height: '305px', opacity: 0.7},3000 );
	
	//Get the caption of the first image from REL
	$('#gallery .content').html($('#gallery a:first').find('img').attr('rel')).css({opacity: 1.0});
	
	
	
	//Call the gallery function to run the slideshow
	setInterval('gallery()',10000);

	
}


function gallery() {
    
	//if no IMGs have the show class, grab the first image
	var current = ($('#gallery a.show')?  $('#gallery a.show') : $('#gallery a:first'));
	
	

	//Get next image, if it reached the end of the slideshow, rotate it back to the first image
	var next = ((current.next().length) ? ((current.next().hasClass('caption'))? $('#gallery a:first') :current.next()) : $('#gallery a:first'));	
	
	
	
	
	//Get next image caption
	var caption	 = next.find('img').attr('rel');
	
	
	
	//Set the fade in effect for the next image, show class has higher z-index
	next.css({opacity: 0.0, width: 960})
	.addClass('show')
	.animate({opacity: 1.0}, 2000);

	//Hide the current image
	current.animate({opacity: 0.0}, 2000)
	.removeClass('show');
	
	
	
	//Set the opacity to 0 and height to 1px
	$('#gallery .caption').animate({opacity: 0.0}, { queue:false, duration:0 }).animate({height: '1px'}, { queue:true, duration:0 });	
	
	
	
	//Animate the caption, opacity to 0.7 and heigth to 100px, a slide up effect
	$('#gallery .caption').animate({height: '305px', opacity: 0.7},3000 );
	
	
	
	//Display the content
	$('#gallery .content').html(caption);
	
	

	
}