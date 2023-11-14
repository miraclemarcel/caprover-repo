// swiper js (testimonial section)// 


const swiper = new Swiper('.swiper', {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });


  const menuBtn = document.querySelector('#menu-btn');
  const closeBtn = document.querySelector('#close-btn');
  const menu = document.querySelector('nav .container ul');
//show menu ============
  menuBtn.addEventListener('click', () =>{
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
  })
//hide menu ==============
  closeBtn.addEventListener('click', () =>{
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
  })


  // read more content =======
  const readMoreBtn = document.querySelector(".read-more");
  const readMoreContent = document.querySelector(".read-more-content");

  readMoreBtn.addEventListener("click", () =>{
    readMoreContent.classList.toggle("show-content")
    if(readMoreContent.classList.contains("show-content")){
      readMoreBtn.textContent = "Show less";
    } else {
      readMoreBtn.textContent = "Show more";
    }
  })
 

    // show/hide Skills items =======
 const skillItems = document.querySelectorAll('section.skills .skill');

 skillItems.forEach(skills => {
  skill.querySelectorAll('.head').addEventListener('click', () => {
    skill.querySelectorAll('.items').classList.toggle('show-items');
  })
 })

// ===========skills accordion=========

$('.accordion-header').click(function() {
  $(this).toggleClass('active');
  $(this).next('.accordion-body').slideToggle();
});


//  ==========porfolio filter==============

 $(document).ready(function(){
  $('.list').click(function(){
      const value = $(this).attr('data-filter');
      if (value == 'all' ){
          $('.ItemBox').show('1000');
      }
      else{
          $('.ItemBox').not('.'+value).hide('1000');
          $('.ItemBox').filter('.'+value).show('1000');
      }
  })
});

// ======porfolio active class===============

$('.list').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
});


// ============end================


