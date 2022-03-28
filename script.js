counter = 0

// content
const screenContent = document.querySelectorAll('.container__screen')

// buttons
const historyBack = document.querySelector('#historyBack')
const socialToggle = document.querySelector('#socialToggle')
const socialContainerSvg = document.querySelector('.container__social_svg')
const socialArrow = document.querySelector('.social__arrow')
const nextContent = document.querySelectorAll('#nextContent')
const previousContent = document.querySelectorAll('#previousContent')


// swap content
previousContent.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        if (counter == 0) {
            return null
        }
        else {
            const prevContent = screenContent[counter]
            prevContent.classList.add('display__none')
            counter -= 1
            const nextContent = screenContent[counter]
            nextContent.classList.remove('display__none')
        }
    })
})

nextContent.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        if (counter == screenContent.length - 1) {
            return null
        }
        else {
            const prevContent = screenContent[counter]
            prevContent.classList.add('display__none')
            counter += 1
            const nextContent = screenContent[counter]
            nextContent.classList.remove('display__none')
        }
    })
})

// history back
historyBack.addEventListener('click', (event) => {
    event.preventDefault();
    window.history.back();
})

// show login via social networks
socialToggle.addEventListener('click', (event) => {
    socialContainerSvg.classList.toggle('opacity__visible')
    socialArrow.classList.toggle('arrow__rotate')
})

