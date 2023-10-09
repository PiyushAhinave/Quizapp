//this is array of objects
const question = [{
        'que': 'Which of the following is mark up language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'

},
{
    'que': 'What symbol is used for css id selector?',
    'a': '*',
    'b': '?',
    'c': '.',
    'd': '#',
    'correct': 'c'
},
{
    'que': 'What symbol is used for CSS class selctor?',
    'a': '*',
    'b': '/',
    'c': '.',
    'd': '#',
    'correct': 'd'
}
]

//this is arrow fuction in js
let index = 0;
let total = question.length;
let right = 0;
    wrong = 0;
const quebox = document.getElementById("quebox")
const optionInput = document.querySelectorAll('.options')
const LoadQuestion = () => {
    if(index === total){
        return endquiz()
    }
    reset();
    const data = question[index]
    
    quebox.innerText = `${index+1} ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;


}

const submitquiz = () => {
    const data = question[index];
    const answer = getans() 
    if (answer == data.correct){
        right++;
    } else {
        wrong++;
    }
    index++;
    LoadQuestion();
    return;
}

const getans = () => {
    let answer;
    optionInput.forEach(
        
        (input) => {
            if (input.checked){
                answer = input.value;
            }
        } 
        
    )
    return answer;
}

const reset = () => {
    optionInput.forEach(
        
        (input) => {
            input.checked = false;
        } 
        
    )
}

const endquiz = () => {
    document.getElementById("box").innerHTML = `
    <h3> Thanks for playing </h3>
    <h2>${right} / ${total} are correct</h2>
    `
}
//this is initial call 
LoadQuestion();