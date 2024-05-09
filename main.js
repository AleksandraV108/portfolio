 const nextIcon = '<img src="images/right-arrow.png">';
 const prevIcon = '<img src="images/left-arrow.png">';

$('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      autoplay: false,
      autoplayTimeout: 5000,
      stagePadding: 10,
      nav: true,
      dots:true,
	   navText:[
		   'prev',
		   'next'
	   ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
        
    })