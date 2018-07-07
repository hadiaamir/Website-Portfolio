// Scroll animation with bootstrap https://codepen.io/hasham7861/pen/qoZOrd

  $("html,body").hide();
  // grab the navbar div with nav inside
  var navbar = $("nav.navabar");
  var navbarButton = $("nav-button");

  $(document).ready(function(){
    // fade the website into the page
    $("html, body").fadeIn();

    // SCROLL SPY
    $("body").scrollspy({target:"#navbar", offset: 55});

    // NAV ANIMATION when going down
    $(window).scroll(function(){
      if($(this).scrollTop() > 15)navbar.addClass("barbar");
      else navbar.removeClass("barbar");
    });

    // SMOOTH SCROLL TO, when clicked on any tab
    $("#navbar ul li a[href^='#']").on("click", function(e){
      e.preventDefault();
      // grabs the link for the tab/section
      var hash = this.hash;

      // animate the the whole website to shift to id of section
      $("html,body").animate(
      {
        scrollTop:$(hash).offset().top
      },
      1000,
      "swing",
      function(){
        window.location.hash=hash;

      }
    );
  });
});