
      // Menu-toggle button

      $(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      });

      // Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }
      })

      $(document).ready(function() {
		$('a[href^="#"]').click(function() {
		    var hash = $(this).attr('href');
		    $('html, body').animate({
		           scrollTop: $(hash).offset().top
		    }, 1500);
		        return false;
		    });
	});



