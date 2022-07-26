(function(){

    let sliders = [...document.querySelectorAll(`.testimonyBody`)]
    let buttonNext = document.querySelector(`#next`)
    let buttonBefore = document.querySelector(`#before`)
    let value

    buttonNext.addEventListener(`click`,()=>{
        changePosition(1)
    })

    buttonBefore.addEventListener(`click`,()=>{
        changePosition(-1)
    })

    let changePosition = (add)=>{
        let currentTestimony = document.querySelector(`.testimonyBody--show`).dataset.id
        value = Number(currentTestimony)
        value+= add
    
        sliders[Number(currentTestimony)-1].classList.remove(`testimonyBody--show`)
        if(value === sliders.length+1 || value === 0){
        value = value === 0 ? sliders.length : 1
    }

    sliders[value-1].classList.add(`testimonyBody--show`)

}

})()