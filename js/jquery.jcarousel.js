(function($) {
	$.fn.jcarouselOwnStyle = function(options) {

    var defaults = {
    	borderColor: '#fff',
    	borderWidth: 1,
    	amountImages: 1,
    	animateSpeed: 400,
    	beziers: 'easeInOutCubic' 	
    };
    var settings = $.extend(defaults, options);    
    
    var goLeft = $('.jcarousel-prev');
    var goRight = $('.jcarousel-next');
    var elementsList = $('ul');
    var divJcarousel = $('.jcarousel');
    var jcarouselPrev = $('.jcarousel-prev');
    var jcarouselNext = $('.jcarousel-next'); 
    var pixelsOffset = Math.round(1152/defaults.amountImages);
    
    if (defaults.amountImages == 1) {       	    
       	    divJcarousel.css({
       	    	width: 900 + 'px',
       	    	paddingTop: 50 + 'px',
       	    	paddingBottom: 50 + 'px'
       	    });
       	    pixelsOffset = 900;
       	    jcarouselPrev.css({
       	    	left: 8 + '%'
       	    });
       	    jcarouselNext.css({
       	    	right: 8 + '%'
       	    });
       	    
        };  
 
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - defaults.amountImages) * pixelsOffset);
    var maximumOffset = 0; 
    var elements = $('li');
    elements.css({
    	width: pixelsOffset + 'px',
    	borderWidth: settings.borderWidth + 'px',
    	borderColor: settings.borderColor
    });     
 
    goLeft.click(function() {        
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += pixelsOffset;
            elementsList.animate({ left : currentLeftValue + "px"}, defaults.animateSpeed, defaults.beziers);          
        }               
    });
 
    goRight.click(function() {        
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= pixelsOffset;
            elementsList.animate({ left : currentLeftValue + "px"}, defaults.animateSpeed, defaults.beziers);
        }        
    });    
};
})(jQuery);


