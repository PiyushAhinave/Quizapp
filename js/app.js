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
const quebox = document.getElementById("quebox")
const optionInput = document.querySelectorAll('.options')
const LoadQuestion = () => {

    const data = question[index]
    console.log(data)
    quebox.innerText = `${index+1} ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;


}

//this is initial call 
LoadQuestion();