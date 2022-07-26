(function(){
    let titleQuestions = [...document.querySelectorAll(`.questionsTitle`)]
    console.log(titleQuestions)

    titleQuestions.forEach(question => {
        question.addEventListener(`click`, ()=>{
            let height = 0
            let answer = question.nextElementSibling
            let addPadding = question.parentElement.parentElement

            addPadding.classList.toggle(`questionsPadding--add`)
            question.children[0].classList.toggle(`questionsArrow--rotate`)

            if(answer.clientHeight === 0) {
                height = answer.scrollHeight
            }

            answer.style.height = `${height}px`
        })
    })
})();