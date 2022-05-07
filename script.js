// ADVICE API GENERATOR //

let advContainer = document.querySelector('.advContainer');
let advNumber = document.querySelector('#adv_Number');
let btn = document.querySelector('.diceBtn');

fetch('https://api.adviceslip.com/advice')
    .then( (resp) => resp.json() )
    .then((data)=>{
        let advNum = data.slip.id;
        let advText =  data.slip.advice;
        let advEl = document.createElement('p');
        advEl.innerHTML = advText;
        advContainer.appendChild(advEl);
        advNumber.innerHTML = advNum;
        btn.addEventListener('click', createAdvice)
})

function createAdvice() {
    
}