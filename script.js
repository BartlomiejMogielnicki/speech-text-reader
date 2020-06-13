const main = document.querySelector('main');
const textBox = document.getElementById('text-box');
const selectVoice = document.getElementById('select-voice');
const text = document.getElementById('text');
const toggleBtn = document.getElementById('btn-toggle');
const readBtn = document.getElementById('btn-read');
const closeBtn = document.getElementById('close');

// Create data
const data = [{
        image: './Image/thirsty.jpg',
        text: "I'm thirsty"
    },
    {
        image: './Image/hungry.jpg',
        text: "I'm hungry"
    },
    {
        image: './Image/tired.jpg',
        text: "I'm tired"
    },
    {
        image: './Image/hurt.jpg',
        text: "I'm hurt"
    },
    {
        image: './Image/happy.jpg',
        text: "I'm happy"
    },
    {
        image: './Image/angry.jpg',
        text: "I'm angry"
    },
    {
        image: './Image/sad.jpg',
        text: "I'm sad"
    },
    {
        image: './Image/scared.jpg',
        text: "I'm scared"
    },
    {
        image: './Image/outside.jpg',
        text: "I want to go outside"
    },
    {
        image: './Image/home.jpg',
        text: "I want to go home"
    },
    {
        image: './Image/school.jpg',
        text: "I want to go to school"
    },
    {
        image: './Image/grandma.jpg',
        text: "I want to go to grandma"
    },
]

// Create boxes
const createBox = (item) => {
    const boxEl = document.createElement('div');
    boxEl.classList.add('box');
    boxEl.innerHTML = `
    <img src="${item.image}" alt="Box picture">
    <h3 class="speech-text">${item.text}</h3>`

    main.appendChild(boxEl);
}

data.forEach(createBox);

// Get voices and store them in the array
let voices = [];

const getVoices = () => {
    voices = speechSynthesis.getVoices();

    voices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.textContent = `${voice.name} ${voice.lang}`

        selectVoice.appendChild(option);
    });
}

// Event listeners
// Show and hide text box
toggleBtn.addEventListener('click', () => {
    textBox.classList.toggle('hide');
})

// Hide text box with X
closeBtn.addEventListener('click', () => {
    textBox.classList.add('hide');
})

// Voices change
speechSynthesis.addEventListener('voiceschanged', getVoices);

getVoices();