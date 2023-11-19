const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const quantity = document.querySelector('.quantity_number');
const newPrice = document.querySelector('.new_price').innerText;

const cartPopup = document.querySelector('.cart-popup');
const cart = document.querySelector('.cart');
const cartBtn = document.querySelector('.cart-btn');

const cartMain = document.querySelector('.cart-main');
const itemTitle = document.querySelector('.item_text_title').textContent;


minusBtn.addEventListener('click', ()=>{
    let sum = quantity.innerText;
    if(sum>1){
        sum = sum - 1;
        quantity.innerText = sum;
    }
})
plusBtn.addEventListener('click', ()=>{
    let sum = +quantity.innerText;
        sum = sum + 1;
        quantity.innerText = sum;
})

// Cart popup
cart.addEventListener('click', ()=>{
    cartPopup.classList.toggle('hide');
});

cartBtn.addEventListener('click', ()=>{
    let oldPriceCart = newPrice.slice(1)
    cartMain.innerHTML = `
    <div class="cart-item">
                        <img src="/ecommerce-product-page-main/images/image-product-1-thumbnail.jpg" alt="">
                        <div class="item-text">
                        <p>${itemTitle}</p>
                        <p>$${oldPriceCart} x ${quantity.innerText} <b>$${oldPriceCart * quantity.innerText}</b></p>
                        </div>
                        <button class="delete-cart"><img src="/ecommerce-product-page-main/images/icon-delete.svg" alt=""></button>
                    </div>
                    <button class="cart-btn">Checkout</button>
    `;
    let deleteBtn = document.querySelector('.delete-cart');
    deleteBtn.addEventListener('click', ()=>{
        cartMain.innerHTML = `
            <p>Yor cart is empty</p>
        `;
    })

    cartPopup.classList.toggle('hide');
    // setTimeout(
    //     function(){
    //         cartPopup.classList.toggle('hide');
    //     }, 5000);
});

// Change pictures
const photoIcons = document.querySelector('.small-icons-main-page');
const bigPhoto = document.querySelector('.big-photo-main-page');


photoIcons.addEventListener('click', (e)=>{
    switch (e.target.classList.value){
        case 'image-1':
        bigPhoto.setAttribute('src', './images/image-product-1.jpg')
        break;
        case 'image-2':
        bigPhoto.setAttribute('src', './images/image-product-2.jpg')
        break;
        case 'image-3':
        bigPhoto.setAttribute('src', './images/image-product-3.jpg')
        break;
        case 'image-4':
        bigPhoto.setAttribute('src', './images/image-product-4.jpg')
        break;
    }
})

// Zoom photo
bigPhoto.addEventListener('click', ()=>{
    document.querySelector('.photo-wrapper').style.display = 'block';
});
// const popupMainPhoto = document.querySelector('.popup-main-photo');


// popupSmallIcons.addEventListener('click', (e)=>{
//     switch (e.target.classList.value){
//         case 'image-1':
//         popupMainPhoto.setAttribute('src', './images/image-product-1.jpg')
//         break;
//         case 'image-2':
//         popupMainPhoto.setAttribute('src', './images/image-product-2.jpg')
//         break;
//         case 'image-3':
//         popupMainPhoto.setAttribute('src', './images/image-product-3.jpg')
//         break;
//         case 'image-4':
//         popupMainPhoto.setAttribute('src', './images/image-product-4.jpg')
//         break;
//     }
// })

// Select all slides
const slides = document.querySelectorAll(".popup-main-photo");

// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
  });

// current slide counter
let curSlide = 0;

// select next slide button
const nextSlide = document.querySelector(".btn-next");
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and next slide functionality
nextSlide.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select prev slide button
const prevSlide = document.querySelector('.btn-prev');
// add event listener and navigation functionality
prevSlide.addEventListener('click', function(){
    if (curSlide === 0){
        curSlide = maxSlide;
    } else {
        curSlide--
    }

    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`
    })
})


const smallIcons = document.querySelectorAll('.popup-icon');
smallIcons.forEach((icon, index) => {
    // console.log(icon, index)

    icon.addEventListener('click', ()=>{
        let iconIndex = index;
        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - iconIndex)}%)`
        })
    })
})

// Close popup
document.querySelector('.btn-close').addEventListener('click', ()=>{
    document.querySelector('.photo-wrapper').style.display = 'none';
})