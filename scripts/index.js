const container = document.querySelector('.container')
const slide = document.querySelector('.slide')
const trigger_w = document.querySelector('.trigger-white')
const trigger_b = document.querySelector('.trigger-black')


slide.addEventListener('click',()=>{
    container.classList.toggle('whiteToblack')
    container.classList.toggle('blackTowhite')
    slide.classList.toggle('white')
    if(!trigger_b.classList.contains('next-b')) {
        trigger_w.classList.add('next-w')
        trigger_b.classList.add('next-b')
           }else{
        trigger_b.classList.add('next-b-reverse')
        trigger_w.classList.add('next-w-reverse')
           }
    finishAnimation()
})
const finishAnimation = () => {
    slide.addEventListener('animationend', (ev) => {
        if(trigger_b.classList.contains('next-b-reverse')){
            trigger_b.classList.toggle('next-b-reverse')
            trigger_w.classList.toggle('next-w-reverse')
            trigger_w.classList.toggle('next-w')
            trigger_b.classList.toggle('next-b')
        }
    })
}

/*slide.addEventListener('click',()=>{
    if(slide.classList.contains('event')) {
        container.classList.toggle('blackTowhite')
        container.classList.toggle('whiteToblack')
        slide.classList.add('white')
        trigger_w.classList.add('next-w')
        trigger_b.classList.add('next-b')
        slide.classList.remove('event')
    }else{
        container.classList.toggle('blackTowhite')
        container.classList.toggle('whiteToblack')
        slide.classList.remove('white')
        trigger_b.classList.add('next-b-reverse')
        trigger_w.classList.add('next-w-reverse')
        slide.classList.add('event')
        slide.classList.add('finish')
    }
    finishAnimation()
})
const finishAnimation = () => {
    slide.addEventListener('animationend', (ev) => {
        if(slide.classList.contains('finish')){
            trigger_w.classList.remove('next-w-reverse')
            trigger_b.classList.remove('next-b-reverse')
            trigger_w.classList.remove('next-w')
            trigger_b.classList.remove('next-b')
        }
        slide.classList.remove('finish')
    })
}*/

