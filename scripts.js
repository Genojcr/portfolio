window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
  });

  var menu = document.querySelector('.menu');
  var menuBtn = document.querySelector('.menu-btn');
  var closeBtn = document.querySelector('.close-btn');

  menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
  });

let typed = new Typed(".auto-input", {
    strings: ["GENOJ C R", "Web Developer", "Web Designer", "Front-end Web Developer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  })








   
    const filterContainer = document.querySelector(".gallery-filter"),
galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) =>{
 if(event.target.classList.contains("filter-item")){
  
   filterContainer.querySelector(".active").classList.remove("active");
 
   event.target.classList.add("active");
   const filterValue = event.target.getAttribute("data-filter");
   galleryItems.forEach((item) =>{
     if(item.classList.contains(filterValue) || filterValue === 'all'){
      item.classList.remove("hide");
       item.classList.add("show");
     }
     else{
      item.classList.remove("show");
      item.classList.add("hide");
     }
   });
 }
});










var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}





  