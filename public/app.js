document.addEventListener('DOMContentLoaded', (event)=>{



let bodyLoading = document.querySelector("#loading-page");
setTimeout(function() {
    bodyLoading.style.display = 'block';
    // document.body.style.display = 'block';
    console.log('it have passed 1000 milisecond to load the page')
}, 1000);


window.onload = function() {
    // document.body.style.display = 'none';
    
    bodyLoading.style.display = 'none';
};


let bodyImage = document.querySelector("#body-image");




 
// let image = document.querySelector("#image");

// image.addEventListener('mouseover', function(){

//     image.src = 'https://images.pexels.com/photos/2145931/pexels-photo-2145931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
//     console.log('chosed')
// })

// let image_1 = document.querySelector("#image");

// image_1.addEventListener('mouseout', function(){
//     image.src = 'https://images.pexels.com/photos/2126090/pexels-photo-2126090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
    
//     console.log('chosed')
// })


})