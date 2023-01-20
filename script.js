const questions = document.querySelectorAll('li');
const answers = document.querySelectorAll('view');

questions.forEach(question => { 
    question.addEventListener('click', (e) => {
        const clicked = e.target.closest('li');
        questions.forEach(element => {
            if(element.classList.contains("show") && element != clicked)
            {
                element.classList.remove("show");
            }
        })
        clicked.classList.toggle("show");

    })   
});