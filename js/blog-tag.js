(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
    
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
  
    /**
     * Initiate  glightbox 
     */
    // const glightbox = GLightbox({
    //   selector: '.glightbox'
    // });
  
  
    /**
     * Porfolio isotope and filter
     */
    window.addEventListener('load', () => {
      let blogContainer = select('.blog-container');
      if (blogContainer) {
        let blogIsotope = new Isotope(blogContainer, {
          itemSelector: '.blog-item'
        });
  
        let blogFilters = select('#blog-flters li', true);
  
        on('click', '#blog-flters li', function(e) {
          e.preventDefault();
          blogFilters.forEach(function(el) {
            el.classList.remove('filter-active');
          });
          this.classList.add('filter-active');
  
          blogIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          blogIsotope.on('arrangeComplete', function() {
            AOS.refresh()
          });
        }, true);
      }
  
    });
  
   
  
    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false
      });
    });
  
  })()