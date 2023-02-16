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

