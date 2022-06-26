searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
	searchform.classList.toggle('active');
}

let menu = document.querySelector('#menu-btn');
let navber = document.querySelector('.navber');

menu.onclick = () =>{
	menu.classList.toggle('fa-times');
	navber.classList.toggle('active');
}



    let formBtn = document.querySelector('#login-btn');
    let loginForm = document.querySelector('.login-form-container');
    let formClose = document.querySelector('#close-login-btn');
    
    formBtn.addEventListener('click',()=>{
       loginForm.classList.add('active');
    });
    formClose.addEventListener('click',()=>{
       loginForm.classList.remove('active');
    });

window.onscroll = () => {

	searchform.classList.remove('active');

	if(window.scrollY > 80){
		document.querySelector('.header .header2').classList.add('active');
	}else{
		document.querySelector('.header .header2').classList.remove('active');
	}
}

window.onload = () =>{

	if(window.scrollY > 80){
		document.querySelector('.header .header2').classList.add('active');
	}else{
		document.querySelector('.header .header2').classList.remove('active');
	}
	fadeOut();
}
function loader(){
	document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
	setTimeout(loader, 4000);
}


var swiper = new Swiper(".featured-slider", {
	spaceBetween: 10,
	loop:true,
	centeredslides: true,
	autoplay: {
		delay: 9500,
		disableOnInteraction: false,
	},
	   navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
         0: {
            slidesPerView: 1,
          },
          450: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        },
      });

var swiper = new Swiper(".slidesPerView", {
	loop:true,
	centeredslides: true,
	autoplay: {
		delay: 9500,
		disableOnInteraction: false,
	},
        breakpoints: {
         0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        },
      });


var swiper = new Swiper(".arrivals-slider", {
	spaceBetween: 10,
	loop:true,
	centeredslides: true,
	autoplay: {
		delay: 9500,
		disableOnInteraction: false,
	},
        breakpoints: {
         0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });





var noti = document.querySelector('a');
var btn = document.getElementsByTagName('btn');
for(but of btn)
{
  but.addEventListener('click', (e)=>{
    var add = Number(noti.getAttribute('data-count')|| 0);
    noti.setAttribute('data-count', add + 1);
    noti.classList.add('zero');
  })
}




 let add_to_cart = document.getElementsByClassName('btn')

    for(let i = 0; i < add_to_cart.length; i++){
        add_to_cart[i].addEventListener('click', addToCart)
    }

    function addToCart(event){

      let btn = event.target
      let btn_parent = btn.parentElement
      let btn_grandparent = btn.parentElement.parentElement
      let itemName = btn_parent.children[0].innerText
      let itemPrice = btn_parent.children[1].innerText
      let itemimage = btn_grandparent.children[0].src

      let itemContainer = document.createElement('tr')

      console.log(itemName)
    }


















    


