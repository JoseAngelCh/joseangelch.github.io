(function(){
    let openButtom = document.querySelector(`.navMenu`)
    let menu = document.querySelector(`.navLink`)
    let closeMenu = document.querySelector(`.navClose`)

    openButtom.addEventListener(`click`, ()=>{
        menu.classList.add(`navLink--show`)
    })

    closeMenu.addEventListener(`click`, ()=>{
        menu.classList.remove(`navLink--show`)
    })
})()