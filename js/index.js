let counter = 0

//When I CLICK on .Next,
    //counter increases in 1

const sliderNext = document.querySelector('.Next')
const sliderPrev = document.querySelector('.Prev')
const sliderImages = document.querySelectorAll('.Slider-images')
const sliderDots = document.querySelectorAll('.Slider-dot')
console.log(sliderNext)
console.log(sliderImages)
console.log(sliderDots)
console.log(sliderPrev)

sliderNext.addEventListener('click',()=>{
    counter = counter + 1

    if(counter >= 3){
        counter = 0
    }

    sliderImages.forEach((eachImage, i)=>{
        sliderImages[i].classList.remove('isActive')
    })
    sliderImages[counter].classList.add('isActive')

    sliderDots.forEach((eachDot, j)=>{
        sliderDots[j].classList.remove('isActive')
    })
    sliderDots[counter].classList.add('isActive')
})

//When I CLICK on .Prev,
    //counter decreases in 1

sliderPrev.addEventListener('click',()=>{
    counter = counter - 1

    if(counter < 0){
        counter = 2
    }
    sliderImages.forEach((eachImage, i)=>{
        sliderImages[i].classList.remove('isActive')
    })
    sliderImages[counter].classList.add('isActive')

    sliderDots.forEach((eachImage, j)=>{
        sliderDots[j].classList.remove('isActive')
    })
    sliderDots[counter].classList.add('isActive')
})

//When I CLICK on .Slider-dot
    //counter is equal to .Slider-dot
    
sliderDots.forEach((eachDot, i)=>{
    sliderDots[i].addEventListener('click', ()=>{
        counter = i

        sliderImages.forEach((eachImage, j)=>{
            sliderImages[j].classList.remove('isActive')
        })
        sliderImages[counter].classList.add('isActive')

        sliderDots.forEach((eachDot, k)=>{
            sliderDots[k].classList.remove('isActive')
        })
        sliderDots[counter].classList.add('isActive')
    })
})