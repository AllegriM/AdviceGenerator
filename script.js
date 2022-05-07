// ADVICE API GENERATOR //

let advNum = document.querySelector('#adv_Number');
let advContainer = document.querySelector('.advContainer');
let btnDice = document.querySelector('#btnAdv');

const fetchAdvice = async() => {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    btnDice.addEventListener('click', ()=>{
        advNum.innerHTML = `${data.slip.id}`;
        advContainer.innerHTML = `"${data.slip.advice}"`;
    })
}
