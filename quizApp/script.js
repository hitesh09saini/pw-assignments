const Qbody = document.getElementById("Q-body");
const qn = document.getElementById('qn');
const tq = document.getElementById('tq');
const score = document.getElementById('score');

const q = [
    '<div class="w-11/12 mt-5"><p class="text-xl">Q1. What is 2+1 ?</p><div class="selecter"><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">3</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">6</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">9</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">22</div></div></div>',
    '<div class="w-11/12 mt-5"><p class="text-xl">Q2. What is 2+2 ?</p><div class="selecter"><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">4</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">6</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">9</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">22</div></div></div>',
    '<div class="w-11/12 mt-5"><p class="text-xl">Q3. What is 2+3 ?</p><div class="selecter"><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">4</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">5</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">9</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">22</div></div></div>',
    '<div class="w-11/12 mt-5"><p class="text-xl">Q4. What is 2+4 ?</p><div class="selecter"><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">4</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">12</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">6</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">22</div></div></div>',
    '<div class="w-11/12 mt-5"><p class="text-xl">Q5. What is 2+5 ?</p><div class="selecter"><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">4</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">7</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">9</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">22</div></div></div>',
    '<div class="w-11/12 mt-5"><p class="text-xl">Q6. What is 2+6 ?</p><div class="selecter"><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">8</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">6</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">9</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">22</div></div></div>',
    '<div class="w-11/12 mt-5"><p class="text-xl">Q7. What is 2+7 ?</p><div class="selecter"><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">4</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">6</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">9</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">22</div></div></div>',
    '<div class="w-11/12 mt-5"><p class="text-xl">Q8. What is 2+8 ?</p><div class="selecter"><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">4</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">6</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">9</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">10</div></div></div>',
    '<div class="w-11/12 mt-5"><p class="text-xl">Q9. What is 2+9 ?</p><div class="selecter"><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">11</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">6</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">9</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">22</div></div></div>',
    '<div class="w-11/12 mt-5"><p class="text-xl">Q10. What is 2+10 ?</p><div class="selecter"><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">4</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">6</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">9</div><div onclick="check(this)" class="shadow border border-2 rounded m-3 p-2">12</div></div></div>'
]

const ans = [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
]

document.addEventListener('DOMContentLoaded', () => {
    Qbody.innerHTML = q[0];
    qn.innerText = 1;
    tq.innerHTML = q.length;
    score.innerText = 0;
})

const btn = document.getElementById('btn')

function next() {
    let v = parseInt(qn.innerText);
    if (v === q.length - 1) {
        btn.innerHTML = 'Submit'
    }

    if (v === q.length) {
        btn.innerHTML = 'Restart'
        btn.onclick = restart;
        Qbody.innerHTML = '<h1 class="mt-6 text-center text-4xl"> Submited !</h1>'
        return;
    }


    Qbody.innerHTML = q[v];
    qn.innerText = v + 1;
}


function restart() {
    alert('Restart Quiz');
    Qbody.innerHTML = q[0];
    qn.innerText = 1;
    tq.innerHTML = q.length;
    score.innerText = 0;
}


function check(selectedOption) {
    if(score.innerText>= parseInt(qn.innerText))
    {
        alert("Don't allow ")
        return;
    }
    
    const options = document.querySelectorAll('.selecter .shadow');
    options.forEach((opt) => {
        opt.classList.remove('border-green-600');
    });

    let v = parseInt(qn.innerText) - 1;
    const isCorrect = parseInt(selectedOption.textContent.trim()) === ans[v];
    if (isCorrect) {

        score.innerText = parseInt(score.innerText) + 1;
        selectedOption.classList.add('border-green-600');
    }
}
