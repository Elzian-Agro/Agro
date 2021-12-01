
const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");
const facSideBtn = document.querySelector(".facebook-side-btn");
const twiSideBtn = document.querySelector(".twitter-side-btn");
const whaSideBtn = document.querySelector(".whatsapp-side-btn");
const linSideBtn = document.querySelector(".linkedin-side-btn");

function init() {
  

  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Hi everyone, please check this out: ");

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  facSideBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );


  twitterBtn.setAttribute(
    "href",
    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  twiSideBtn.setAttribute(
    "href",
    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );


  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );

  linSideBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );


  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle} ${postUrl}`
  );

  whaSideBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle} ${postUrl}`
  );

}

init();




jQuery(document).ready(function($) {

	'use strict';

        $(function() {
  
          // Vars
          var modBtn  = $('#modBtn'),
              modal   = $('#modal'),
              close   = modal.find('.close-btn img'),
              modContent = modal.find('.modal-content');
          
          // open modal when click on open modal button 
          modBtn.on('click', function() {
            modal.css('display', 'block');
            modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
          });
          
          // close modal when click on close button or somewhere out the modal content 
          $(document).on('click', function(e) {
            var target = $(e.target);
            if(target.is(modal) || target.is(close)) {
              modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
                modal.css('display', 'none');
                next();
              });
            }
          });
          
        });

        // on click event on all anchors with a class of scrollTo
        $('a.scrollTo').on('click', function(){
          
          // data-scrollTo = section scrolling to name
          var scrollTo = $(this).attr('data-scrollTo');
          
          
          // toggle active class on and off. added 1/24/17
          $( "a.scrollTo" ).each(function() {
            if(scrollTo == $(this).attr('data-scrollTo')){
              $(this).addClass('active');
            }else{
              $(this).removeClass('active');
            }
          });
          
          
          // animate and scroll to the section 
          $('body, html').animate({
            
            // the magic - scroll to section
            "scrollTop": $('#'+scrollTo).offset().top
          }, 1000 );
          return false;
          
        })
 

        $(".menu-icon").click(function() {
          $(this).toggleClass("active");
          $(".overlay-menu").toggleClass("open");
        });

});




       