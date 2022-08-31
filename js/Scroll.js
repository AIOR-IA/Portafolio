$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1500, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

    $(window).scroll(function () {
      onScrollHandle();
  });

  function onScrollHandle() {
      var currentScrollPos = $(document).scrollTop();

      $('.nav-main-navbar > ul > li > a').each(function () {
          var curLink = $(this);
          var refElem = $(curLink.attr('href'));
          if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
              $('.nav-main-navbar > ul > li > a').removeClass("a-active");
              curLink.parent().addClass("a-active");
          }
          else {
              curLink.parent().removeClass("a-active");
          }
      });
  }

  });
  