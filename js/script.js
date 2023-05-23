document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.nav-link');
    
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetSection = this.getAttribute('href');
        var targetElement = document.querySelector(targetSection);
        var targetOffset = targetElement.offsetTop;
        var scrollOptions = {
          top: targetOffset,
          behavior: 'smooth'
        };
        
        window.scrollTo(scrollOptions);
      });
    });
  });
  