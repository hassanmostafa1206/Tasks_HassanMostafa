console.log(document.body)
window.addEventListener('scroll' , ()=>{
    var upArrow = document.getElementById('upArrow')
    console.log('scrolling')
    console.log(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop > 300) upArrow.classList.remove('d-none')
        else upArrow.classList.add('d-none')
})

document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animate-right, .animate-left, .animate-up, .animate-down")

    function handleScroll() {
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect()
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("animate-show")
            }
        })
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
})

$(document).ready(function () {
  	$(".owl-carousel").owlCarousel({
    	items: 5,
    	loop: true,
		nav: false,
		dots: false,
		autoHeight: true
  	});

	document.querySelector('.carousel-arrow.fa-angle-left').addEventListener('click', () => {
    	$('.owl-carousel').trigger('prev.owl.carousel');
  	});

  	document.querySelector('.carousel-arrow.fa-angle-right').addEventListener('click', () => {
    	$('.owl-carousel').trigger('next.owl.carousel');
  	});
});

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll("#carouselExampleCaptions .carousel-item");
  const indicators = document.querySelectorAll("#carouselExampleCaptions .carousel-indicators button");
  let currentIndex = 0;
  let interval;

  function showSlide(index) {
    items.forEach((item, i) => {
      item.classList.remove("active", "outgoing");
      if (i === currentIndex) {
        item.classList.add("outgoing");
      }
    });

    items[index].classList.add("active");

    indicators.forEach(btn => btn.classList.remove("active"));
    indicators[index].classList.add("active");

    currentIndex = index;
  }

  function nextSlide() {
    let nextIndex = (currentIndex + 1) % items.length;
    showSlide(nextIndex);
  }

  interval = setInterval(nextSlide, 5000);

  indicators.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      clearInterval(interval);
      showSlide(i);
      interval = setInterval(nextSlide, 5000);
    });
  });

  showSlide(currentIndex);
});

document.addEventListener("DOMContentLoaded", function () {
	const slider = document.getElementById("imageSlider");

	setInterval(() => {
		const last = slider.lastElementChild;
		const clone = last.cloneNode(true);

		slider.style.transition = "transform 0.5s ease";
		slider.style.transform = "translateX(16.666%)";

		setTimeout(() => {
			slider.style.transition = "none";
			slider.style.transform = "none";
			slider.insertBefore(clone, slider.firstElementChild);
			slider.removeChild(last);
		}, 	500); 
	}, 5000); 
});