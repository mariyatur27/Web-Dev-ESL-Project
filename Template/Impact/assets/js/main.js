/**
* Template Name: Impact - v1.1.1
* Template URL: https://bootstrapmade.com/impact-bootstrap-business-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

/*
Custom JS - START
*/

async function outputSearch(input){
  if (!dataFetched){
    await fetchData();
  }

  var containers = document.getElementsByClassName('portion-1');
  var new_containers = document.getElementsByClassName('course-container')

  if (input !== ''){
    for(const info of ap_resources){
      if (input.trim().toLowerCase() == info.name.toLowerCase()){

        for(var i = 0; i < containers.length; i++){
          containers[i].style.display = 'none';
        }

        buildBox(info);

      }

      if (input.trim().toLowerCase() !== info.name.toLowerCase()){
        //document.getElementById('warning-message-2').style.display = 'block';
      }

    }
  }
  
  if (input == ''){
    for(var i = 0; i < new_containers.length; i++){
      new_containers[i].style.display = 'none';
    }
    for(var i = 0; i < containers.length; i++){
      containers[i].style.display = 'block';
    }
  }

}

const buildBox = (info) => {
  var course_container = document.createElement('div'); course_container.classList.add('course-container'); course_container.id = info.id + "-box";
      let course_name = document.createElement('h4'); course_name.innerHTML = info.name;
      let course_code = document.createElement('h6'); course_code.innerHTML = info.course_code;
      course_container.appendChild(course_name);
      course_container.appendChild(course_code);
      let openup_container = document.createElement('div');
          let course_description = document.createElement('p'); course_description.innerHTML = info.course_description;
          openup_container.appendChild(course_description);
          let info_block = document.createElement('div'); info_block.classList.add('info-block');
              let grade = document.createElement('p'); grade.innerHTML = "Grade: ".concat(info.grade);
              let dep = document.createElement('p'); dep.innerHTML = "Department: ".concat(info.course_type);
              info_block.appendChild(grade);
              info_block.appendChild(dep);
          openup_container.appendChild(info_block);
      let requirements = document.createElement('p'); requirements.innerHTML = "Prerequisits: ".concat(info.prerequisits); requirements.style.fontWeight = '500';
      openup_container.appendChild(requirements);
      course_container.appendChild(openup_container);
    document.getElementById('ap-resources-content').appendChild(course_container);
}

document.getElementById('show-more-btn').addEventListener('click', function() {
  var portion_2 = document.getElementsByClassName('portion-2');

  for (var i = 0; i < portion_2.length; i++){
    portion_2[i].classList.toggle('hide');
  }

  if (document.getElementById('show-more-btn').innerHTML = "Show More"){
    document.getElementById('show-more-btn').innerHTML = "Show Less"
  }

})

async function showInstructions(){
  if (!dataFetched){
    await fetchData();
  }
  getInputfromSelect();
}

function displayPrerequisits(value){
  document.getElementById('prerequisits-box').innerHTML = "";
  for(const info of ap_resources){
    if(info.name.trim().toLowerCase() == value){
      var box = document.getElementById('prerequisits-box');
      box.style.opacity = '1';
      var title_1 = document.createElement('h5'); title_1.innerHTML = "Course Description for " + info.name + ":";
      box.appendChild(title_1);
      var course_dscr = document.createElement('p'); course_dscr.innerHTML = info.course_description;
      box.appendChild(course_dscr);
      var title_2 = document.createElement('h5'); title_2.innerHTML = "Prerequisits for " + info.name + ":";
      box.appendChild(title_2);
      var list = document.createElement('ul');
      box.appendChild(list);
      for(var i = 0; i < info.prerequisits.length; i++){
        var prerequisits_text = document.createElement('li'); prerequisits_text.innerHTML = info.prerequisits[i];
        box.appendChild(prerequisits_text);
      }
    }
  }
}

function getInputfromSelect() {
  var options = document.getElementById('student-type');
  var value = options.value;
  var container = document.getElementById('instructions-container');
  container.style.opacity = '1';
  container.innerHTML="";
    for(const info of ap_instructions){
      if (info.type == value){
        for (var i = 0; i < info.steps.length; i++){
          let box = document.createElement('div'); box.classList.add('together');
            let checkbox = document.createElement('input'); checkbox.type = 'checkbox'; checkbox.name = value; checkbox.id=i;
            let label = document.createElement('label'); label.innerHTML = info.steps[i]; label.id = i + "-label";
            box.appendChild(checkbox);
            box.appendChild(label);
          container.appendChild(box);
          let linebreak = document.createElement('br');
          container.appendChild(linebreak);

          //adding a function to the checkboxes
          checkbox.addEventListener('change', function() {
            if (this.checked){
              document.getElementById(checkbox.id + "-label").classList.toggle('instructions-read-styles');
            }
            else{
              document.getElementById(checkbox.id + "-label").classList.toggle('instructions-read-styles');
            }
          })
        }
      }
    }
}



/*
Custom JS - END
*/

document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky Header on Scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop;
    let nextElement = selectHeader.nextElementSibling;

    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('sticked');
        if (nextElement) nextElement.classList.add('sticked-header-offset');
      } else {
        selectHeader.classList.remove('sticked');
        if (nextElement) nextElement.classList.remove('sticked-header-offset');
      }
    }
    window.addEventListener('load', headerFixed);
    document.addEventListener('scroll', headerFixed);
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  let portfolionIsotope = document.querySelector('.portfolio-isotope');

  if (portfolionIsotope) {

    let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';
    let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';
    let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';

    window.addEventListener('load', () => {
      let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
        itemSelector: '.portfolio-item',
        layoutMode: portfolioLayout,
        filter: portfolioFilter,
        sortBy: portfolioSort
      });

      let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
      menuFilters.forEach(function(el) {
        el.addEventListener('click', function() {
          document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aos_init === 'function') {
            aos_init();
          }
        }, false);
      });

    });

  }

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});


//The function will calculate the number of resources we have on our website.
async function countResources() {
  if(!dataFetched){
      await fetchData();
  }
  
  var club_count = clubs.length;
  var ap_resources_count = ap_instructions.length;
  var english_examination_count = english_examination_resources.length;

  document.getElementById('ele-1-count').setAttribute('data-purecounter-end', english_examination_count);
  document.getElementById('ele-2-count').setAttribute('data-purecounter-end', club_count);
  document.getElementById('ele-3-count').setAttribute('data-purecounter-end', ap_resources_count);

}

//The function will output the correct guidance person according to the last name

function displayGuidance(array, letter){
  if (array[1].includes(letter)){
    var ele = document.getElementsByClassName('member');
    for (var i = 0; i < ele.length; i++){
      console.log(ele[i])
      ele[i].style.display = 'none';
    }
    console.log(document.getElementById(array[0]))
    document.getElementById(array[0]).style.display = 'block';
  }
}

function searchGuidance(input){
  if (input != ""){
    var letter = input[0].toUpperCase();
    var crosby = ['crosby', ['A']];
    var gowing = ['gowing', ['G', 'H', 'I', 'L', 'O', 'Q']];
    var prentice = ['prentice', ['M', 'E', 'F', 'J', 'K', 'M', 'N', 'P']];
    var nosal = ['nosal', ['B', 'C', 'R']];
    var cresswell = ['cresswell', ['S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']];

    var guidance = [crosby, gowing, prentice, nosal, cresswell];
    for(var i = 0; i < guidance.length; i++){
      displayGuidance(guidance[i], letter)
    }
  }
  else{
    var ele = document.getElementsByClassName('member');
    for (var i = 0; i < ele.length; i++){
      console.log(ele[i])
      ele[i].style.display = 'block';
    }
  }
}