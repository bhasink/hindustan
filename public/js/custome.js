

 


 $(function() {
    var nav = $(".norm");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 50) {
            nav.removeClass('norm').addClass("navfixed");
        } else {
            nav.removeClass("navfixed").addClass('norm');
        }
    });
});





 $(function(){
  var tickerLength = $('.coursehnd ul li').length;
  var tickerHeight = $('.coursehnd ul li').outerHeight();
  $('.coursehnd ul li:last-child').prependTo('.coursehnd ul');
  $('.coursehnd ul').css('marginTop',-tickerHeight);
  function moveTop(){
    $('.coursehnd ul').animate({
      top : -tickerHeight
    },600, function(){
     $('.coursehnd ul li:first-child').appendTo('.coursehnd ul');
      $('.coursehnd ul').css('top','');
    });
   }
  setInterval( function(){
    moveTop();
  }, 3000);
  }); 
  



$(".opensrch").click(function (e) {
  e.stopPropagation();
  $(".srchbararea").toggleClass('closefrms');
});

$(".openhdas").click(function (e) {
  e.stopPropagation();
  $(".site-header").toggleClass('heightexps');
  $("body").toggleClass('fixbd');
});

$(".openhdas").click(function (e) {
  e.stopPropagation();
  $(".openhdas").toggleClass('crossshwos');
});

$(".cross").click(function (e) {
  e.stopPropagation();
  $(".site-header").removeClass('heightexps'); 
  $("body").removeClass('fixbd');
});


$(".megamenu ul li a").click(function (e) {
  e.stopPropagation();
  $(".site-header").removeClass('heightexps'); 
  $("body").removeClass('fixbd');
});


/* js for readmore */

$(".rdspecials").click(function (e) {
  e.stopPropagation();
  $(".lengtheds").toggleClass('expdspcs'); 
  
   if ($('.rdspecials').text() == "Read less") {
    $(this).text("Read more")
  } else {
    $(this).text("Read less")
  }
  
});


$(".fab-icon-holder").click(function (e) {
  e.stopPropagation();
  $(".fab-container").toggleClass('crosshow'); 
});


/* load more function */

$(function () {
	
    if ( $(window).width() < 767 ) {
     $(".trendone .col-lg-4").slice(0, 2).show();
    } 
	
	else if ( $(window).width() > 767 ) {
     $(".trendone .col-lg-4").slice(0, 6).show();
    } 


		$("body").on('click touchstart', '.load-more', function (e) {
			e.preventDefault();
			$(".trendone .col-lg-4:hidden").slice(0, 3).slideDown();
			if ($(".trendone .col-lg-4:hidden").length == 0) {
				$(".showctmore").css('display', 'none');
			}
			$('html,body').animate({
				scrollTop: $(this).offset().top
			}, 1000);
		});
	});
	
	
	
	$(function () {
	
    if ( $(window).width() < 767 ) {
     $(".allprotwo .col-lg-4").slice(0, 2).show();
    } 
	
	else if ( $(window).width() > 767 ) {
     $(".allprotwo .col-lg-4").slice(0, 6).show();
    } 


		$("body").on('click touchstart', '.load-morenew', function (e) {
			e.preventDefault();
			$(".allprotwo .col-lg-4:hidden").slice(0, 3).slideDown();
			if ($(".allprotwo .col-lg-4:hidden").length == 0) {
				$(".showctmore2").css('display', 'none');
			}
			$('html,body').animate({
				scrollTop: $(this).offset().top
			}, 1000);
		});
	});
	
	
	$(function () {
	
    if ( $(window).width() < 767 ) {
     $(".mstload .col-lg-4").slice(0, 2).show();
    } 
	
	else if ( $(window).width() > 767 ) {
     $(".mstload .col-lg-4").slice(0, 3).show();
    } 


		$("body").on('click touchstart', '.load-morenewms', function (e) {
			e.preventDefault();
			$(".mstload .col-lg-4:hidden").slice(0, 3).slideDown();
			if ($(".mstload .col-lg-4:hidden").length == 0) {
				$(".showctmorems2").css('display', 'none');
			}
			$('html,body').animate({
				scrollTop: $(this).offset().top
			}, 1000);
		});
	});
	
	
	
	$(function () {
	
    if ( $(window).width() < 767 ) {
     $(".batchlastfl .col-lg-4").slice(0, 2).show();
    } 
	
	else if ( $(window).width() > 767 ) {
     $(".batchlastfl .col-lg-4").slice(0, 2).show();
    } 


		$("body").on('click touchstart', '.load-morenewbtc', function (e) {
			e.preventDefault();
			$(".batchlastfl .col-lg-4:hidden").slice(0, 3).slideDown();
			if ($(".batchlastfl .col-lg-4:hidden").length == 0) {
				$(".showctmorebt2").css('display', 'none');
			}
			$('html,body').animate({
				scrollTop: $(this).offset().top
			}, 1000);
		});
	});
	
	
	
	$(function () {
	
    if ( $(window).width() < 767 ) {
     $(".otherextone .col-lg-4").slice(0, 2).show();
    } 
	
	else if ( $(window).width() > 767 ) {
     $(".otherextone .col-lg-4").slice(0, 3).show();
    } 


		$("body").on('click touchstart', '.load-othernewbtc', function (e) {
			e.preventDefault();
			$(".otherextone .col-lg-4:hidden").slice(0, 3).slideDown();
			if ($(".otherextone .col-lg-4:hidden").length == 0) {
				$(".otherctmorebt2").css('display', 'none');
			}
			
		});
	});
	
	
	$(function () {
	
    if ( $(window).width() < 767 ) {
     $(".otherlastcl .col-lg-4").slice(0, 2).show();
    } 
	
	else if ( $(window).width() > 767 ) {
     $(".otherlastcl .col-lg-4").slice(0, 3).show();
    } 


		$("body").on('click touchstart', '.load-otherlastbtc', function (e) {
			e.preventDefault();
			$(".otherlastcl .col-lg-4:hidden").slice(0, 3).slideDown();
			if ($(".otherlastcl .col-lg-4:hidden").length == 0) {
				$(".otherctlastbt2").css('display', 'none');
			}
			
		});
	});



$(function(){
    
   $('ul.accordion li .social-links ').click(function(){
      var item=$(this).parent();
       $('ul li').removeClass('current');
       item.addClass("current")
    });
	
	
	$('.landingoptions ul li a ').click(function(){
      var item=$(this).parent();
       $('.landingoptions ul li').removeClass('active');
       item.addClass("active")
    });
	
	
	$('.octagonshapes ul li a ').click(function(){
      var item=$(this).parent();
       $('.octagonshapes ul li').removeClass('active');
       item.addClass("active")
    });
	
	
	
});




/* tab css */

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

/*$('.cvicontops .row .col-md-4 .cvdisc a ').click(function(){
      var item=$(this).parent();
       $('.cvicontops .row .col-md-4 .cvdisc').removeClass('current');
       item.addClass("current")
    });*/
	


$(document).ready(function () {
  var owl = $('.homefirstbbn');
  owl.owlCarousel({
    items: 5,
    loop: true,
    nav:false,
    margin: 40,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true
      },
      300: {
        items: 1,
        nav: true,
       dots: true,
        loop: true
      },

      766: {
        items: 1,
        nav: false,
        dots: false,
        loop: true
      },

      1200: {
        items: 1,
        nav: true,
        dots: true,
		center: true,
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })


})


$(document).ready(function () {
  var owl = $('.homefirstbbnnews');
  owl.owlCarousel({
    items: 5,
    loop: true,
    nav:false,
    margin: 5,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true
      },
      300: {
        items: 1,
        nav: false,
       dots: true,
        loop: true
      },

      766: {
        items: 1,
        nav: false,
        dots: false,
        loop: true
      },

      1200: {
        items: 3,
		loop:true,
        nav: false,
        dots: true,
		center: false,
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })


})






$(document).ready(function () {
  var owl = $('.trustcmpcarso');
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav:false,
    margin: 40,
    dots: true,
    autoplay: true,
	autoplaySpeed: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true
      },
      300: {
        items: 1,
       nav: false,
        dots: true,
		margin: 10,
        loop: true
      },

      766: {
        items: 1,
       nav: false,
      dots: false,
        loop: true
      },

      1200: {
        items: 1,
        nav: false,
        dots: true, 
        loop: true
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })


})



$(document).ready(function () {
  var owl = $('.trustcmpcarsomobs');
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav:false,
    margin: 40,
    dots: true,
    autoplay: true,
	autoplaySpeed: 3000,
		animateOut: 'slideInLeft',
	animateIn: 'slideInLeft',
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true
      },
      300: {
        items: 1,
       nav: false,
        dots: true,
		margin: 10,
		autoplaySpeed: 6000,
	animateOut: 'slideOutUp',
	animateIn: 'slideInUp',
        loop: true
      },

      766: {
        items: 1,
       nav: false,
      dots: false,
        loop: true
      },

      1200: {
        items: 1,
        nav: false,
        dots: true, 
        loop: true
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })


})



$(document).ready(function () {
  var owl = $('.highlightsmobflos');
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav:false,
    margin: 30,
    dots: true,
    autoplay: true,
	autoplaySpeed: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true
      },
      300: {
        items: 1,
       nav: false,
        dots: true,
		margin: 10,
		autoplaySpeed: 6000,
        loop: true
      },

      766: {
        items: 1,
       nav: false,
      dots: false,
        loop: true
      },

      1200: {
        items: 1,
        nav: false,
        dots: true, 
        loop: true
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })


})






$(document).ready(function () {
  var owl = $('.featuredslide');
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav:false,
    margin: 20,
    dots: false,
    autoplay: true,
	autoplaySpeed: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: false,
        loop: true
      },
      300: {
        items: 2,
        nav: false,
       dots: true,
	       margin: 10,
        loop: true
      },

      766: {
        items: 2,
        nav: true,
        dots: false,
        loop: true
      },

      1200: {
        items: 3,
        nav: true,
		center:true,
        dots: false,
        loop: true
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })


})


$(document).ready(function () {
  var owl = $('.userreview');
  owl.owlCarousel({
    items: 5,
    loop: true,
    nav:false,
    margin: 40,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    center: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true
      },
      300: {
        items: 1,
        nav: true,
       dots: false,
        loop: true
      },

      766: {
        items:3,
        nav: true,
        dots: false,
        loop: true
      },

      1200: {
        items: 3,
        nav: false,
        dots: true
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })


})


$(document).ready(function () {
  var owl = $('.reviewtestim');
  owl.owlCarousel({
    items: 3,
    loop: true,
    nav:false,
    margin: 40,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true
      },
      300: {
        items: 1,
        nav: true,
       dots: false,
        loop: true
      },

      766: {
        items:3,
        nav: true,
        dots: false,
        loop: true
      },

      1200: {
        items: 3,
        nav: true,
        dots: false
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })


})



$(document).ready(function () {
  var owl = $('.advantfeat');
  owl.owlCarousel({
    items: 3,
    loop: true,
    nav:false,
    margin: 20,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true
      },
      300: {
        items: 1,
        nav: false,
       dots: true,
        loop: true
      },

      766: {
        items:3,
        nav: true,
        dots: false,
        loop: true
      },

      1200: {
        items: 3,
        nav: true,
		center:true,
        dots: true
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })


})



$(document).ready(function () {
  var owl = $('.hrngcomps');
  owl.owlCarousel({
    items: 3,
    loop: true,
    nav:false,
    margin: 10,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    center: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true
      },
      300: {
        items: 3,
        nav: false,
       dots: true,
        loop: true
      },

      766: {
        items:3,
        nav: true,
        dots: false,
        loop: true
      },

      1200: {
        items: 6,
        nav: false,
		center:false,
        dots: true
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })


})



$(document).ready(function () {
  var owl = $('.lrnmethods');
  owl.owlCarousel({
    items: 5,
    loop: true,
    nav:false,
    margin: 5,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true
      },
      300: {
        items: 1,
        nav: false,
       dots: true,
        loop: true
      },

      766: {
        items: 1,
        nav: false,
        dots: false,
        loop: true
      },

      1200: {
        items: 1,
		loop:true,
        nav: false,
        dots: true,
		center: false,
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })


})

  
  /*
	Smooth scroll functionality for anchor links (animates the scroll
	rather than a sudden jump in the page)
*/
$('.js-anchor-link').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top;
    $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
  }
});


/* custom tabs js */

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}




/* js for page loader 

const loaderEl = document.getElementsByClassName('fullpage-loader')[0];
document.addEventListener('readystatechange', (event) => {
	// const readyState = "interactive";
	const readyState = "complete";
    
	if(document.readyState == readyState) {
		// when document ready add lass to fadeout loader
		loaderEl.classList.add('fullpage-loader--invisible');
		
		// when loader is invisible remove it from the DOM
		setTimeout(()=>{
			loaderEl.parentNode.removeChild(loaderEl);
		}, 1000)
	}
});
*/


$('.mnptsd.nofx ul li a ').click(function(){
      var item=$(this).parent();
       $('.mnptsd.nofx ul li').removeClass('active');
       item.addClass("active")
});


$('.megamenu ul li a ').click(function(){
      var item=$(this).parent();
       $('.megamenu ul li').removeClass('active');
       item.addClass("active")
});


$('.ctypcustm .custom-control.custom-radio .custom-control-label').click(function(){
      var item=$(this).parent();
       $('.ctypcustm .custom-control.custom-radio').removeClass('active');
       item.addClass("active")
});


$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Read less") {
    $(this).text("Read more")
  } else {
    $(this).text("Read less")
  }
});

$('.moreless-button2').click(function() {
  $('.moretext2').slideToggle();
  if ($('.moreless-button2').text() == "Read less") {
    $(this).text("Read more")
  } else {
    $(this).text("Read less")
  }
});


  $(function() {
    var nav = $(".floatnrm");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 250) {
            nav.removeClass('floatnrm').addClass("soundfixed");
        } else {
            nav.removeClass("soundfixed").addClass('floatnrm');

        }
    });
});






$(document).ready(function() {
    function onHashChange() {
        var hash = window.location.hash;

        if (hash) {
            // using ES6 template string syntax
            $(`[data-toggle="tab"][href="${hash}"]`).trigger('click');
        }
    }

    window.addEventListener('hashchange', onHashChange, false);
    onHashChange();
});




$(document).ready(function() {
  if ( $(window).width() < 767 ) {
    startCarousel();
  } else {
    $('#owl_about_main_slider').addClass('off');
  }
});

$(window).resize(function() {
    if ( $(window).width() < 767 ) {
      startCarousel();
    } else {
      stopCarousel();
    }
});

function startCarousel(){
  $("#owl_about_main_slider").owlCarousel({
     navigation : true, // Show next and prev buttons
     slideSpeed : 500,
     margin:0,
     paginationSpeed : 400,
     autoplay:true,
     items : 1,
     itemsDesktop : false,
     itemsDesktopSmall : false,
     itemsTablet: false,
     itemsMobile : false,
     loop:true,
	 dots:true,
     nav:false,
     navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
  });
}
function stopCarousel() {
  var owl = $('#owl_about_main_slider');
  owl.trigger('destroy.owl.carousel');
  owl.addClass('off');
}
