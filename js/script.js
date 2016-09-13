$(function(){
	//carousel and its options
	$('div.jcarousel').jcarouselOwnStyle({
		amountImages: 4,
		borderColor: '#fff',
		borderWidth: 1,
		animateSpeed: 3800,
		beziers: 'easeInOutBack'		
	});
    //template
    var html = $('#my-page').html();
    var articles = [
    {
    	image: '<img src="img/img1.jpg">',
    	title: 'Polar bear',
    	article: 'The polar bear (Ursus maritimus)\
    	         is a carnivorous bear whose native\
    	         range lies largely within the\
    	         Arctic Circle, encompassing the\
    	         Arctic Ocean, its surrounding\
    	         seas and surrounding land masses.\
    	         It is a large bear, approximately\
    	         the same size as the omnivorous\
    	         Kodiak bear (Ursus arctos middendorffi).\
    	         A boar (adult male) weighs around\
    	         350–700 kg (772–1,543 lb), while\
    	         a sow (adult female) is about half\
    	         that size. Although it is the sister\
    	         species of the brown bear, it has\
    	         evolved to occupy a narrower ecological\
    	         niche, with many body characteristics\
    	         adapted for cold temperatures, for\
    	         moving across snow, ice, and open\
    	         water, and for hunting seals, which\
    	         make up most of its diet...',
        link: 'KNOW MORE',
        linkUrl: 'https://en.wikipedia.org/wiki/Polar_bear'
    },
    {
    	image: '<img src="img/img2.jpg">',
    	title: 'Leopard',
    	article: 'The leopard (Panthera pardus)\
    	         (English pronunciation: /ˈlɛpərd/)\
    	         is one of the five "big cats" in\
    	         the genus Panthera. It is a member\
    	         of the family Felidae with a wide\
    	         range in sub-Saharan Africa and\
    	         parts of Asia. Fossil records found\
    	         in Italy suggest that in the\
    	         Pleistocene it ranged as far as\
    	         Europe and Japan...',
    	link: 'KNOW MORE',
    	linkUrl: 'https://en.wikipedia.org/wiki/Leopard'         
    },
    {
    	image: '<img src="img/img9.jpg">',
    	title: 'Great white shark',
    	article: 'The great white shark (Carcharodon carcharias),\
    	         also known as the great white,\
    	         white pointer, white shark, or\
    	         white death, is a species of large\
    	         lamniform shark which can be found\
    	         in the coastal surface waters of all\
    	         the major oceans. The great white\
    	         shark is notable for its size, with\
    	         mature female individuals growing up\
    	         to 6.1 m (20 ft) in length and 1,950 kg\
    	         (4,300 lb) in weight. However most are\
    	         smaller, males measuring 3.35 to 3.96 m\
    	         (11 ft 0 in to 13 ft 0 in) and\
    	         females 4.57 to 4.88 m\
    	         (15 ft 0 in to 16 ft 0 in) on average...',
    	link: 'KNOW MORE',
        linkUrl: 'https://en.wikipedia.org/wiki/Great_white_shark'
    }
    ];   

    var content = tmpl(html, {
    	data: articles}
    	);

    $('body').append(content);

    var link = $('.link');    
    for (i = 0; i < articles.length; i++) {         	
    $(link[i]).attr('href', articles[i].linkUrl);     
    };
});
