let cardContainers=[...document.querrySelectorAll('.card-container')];
let preBtns=[...document.querrySelectorAll('.pre-btn')];
let nxtBtns=[...document.querrySelectorAll('.nxt-btn')];

cardContainers.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth=containerDimensions.Width

    nxtBtns[i].addEventListener('click',()=>{
        item.scrollLeft+=containerWidth-200;
    })

    preBtns[i].addEventListener('click',()=>{
        item.scrollLeft-=containerWidth+200;
    })
})