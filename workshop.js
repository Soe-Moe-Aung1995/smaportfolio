
//Box Shadow Selectors
const shadowOne = document.querySelector('.shadow-one');
const shadowTwo = document.querySelector('.shadow-two');
const shadowBlur = document.querySelector('.shadow-blur');
const shadowSpread = document.querySelector('.shadow-spread');

//Box Shadow Text Input Selector;
const shadowHorizontal = document.querySelector('.horizontal');
const shadowVertical = document.querySelector('.vertical');
const shadowBlurText = document.querySelector('.blur');
const shadowSpreadText = document.querySelector('.spread');

//Radius Sliders Selectors
const topRadius = document.querySelector('.top-radius');
const rightRadius = document.querySelector('.right-radius');
const botRadius = document.querySelector('.bottom-radius');
const leftRadius = document.querySelector('.left-radius');

//Radius TextInput Selectors
const topTextRad = document.querySelector('.top-rad');
const rightTextRad = document.querySelector('.right-rad');
const botTextRad = document.querySelector('.bot-rad');
const leftTextRad = document.querySelector('.left-rad');

//Preview Object
const panelView = document.querySelector('.panel');
const panelOne = document.querySelector('.panel-one');

//Color Picker Selectors
const dammy = document.querySelector('.dammy');
const dammyOne = document.querySelector('.dammy-one');
const dammyTwo = document.querySelector('.dammy-two');
const panelColor = document.querySelector('.panel-color');

//Copy Section
const clipMe = document.getElementById('clipMe');
const copy = document.querySelector('.copy');
const toolTip = document.querySelector('.tooltiptext')

let topRad = topRadius.value;
let rightRad = rightRadius.value;
let botRad = botRadius.value;
let leftRad = leftRadius.value;

let topTxtRad = topTextRad.value;
let rightTxtRad = rightTextRad.value;
let botTxtRad = botTextRad.value;
let leftTxtRad = leftTextRad.value;

let boxColor = dammy.value;
let textColor = dammyOne.value;
let shadowColor = dammyTwo.value;
let panelPick = panelColor.value;

let shdwOne = shadowOne.value;
let shdwTwo = shadowTwo.value;
let shdwBlur = shadowBlur.value;
let shdwSpread = shadowSpread.value;


//Color Picker Events
dammy.addEventListener('input', (e) => {
    boxColor = e.target.value;
    panelOne.style.background = boxColor;
    clipBoard();
});

dammyOne.addEventListener('input', (e) => {
    textColor = e.target.value;
    panelOne.style.color = textColor;
    clipBoard();
});

dammyTwo.addEventListener('input', (e) => {
    shadowColor = e.target.value;
    panelOne.style.boxShadow = shadowColor;
    clipBoard();
});


//Shadow Events
shadowOne.addEventListener('input', (e) => {
    shdwOne = e.target.value;
    shadowHorizontal.value = shdwOne;
    panelOne.style.boxShadow = `${shdwOne}px ${shdwTwo}px ${shdwBlur}px ${shdwSpread}px ${shadowColor}`;
    clipBoard();
});

shadowTwo.addEventListener('input', (e) => {
    shdwTwo = e.target.value;
    shadowVertical.value = shdwTwo;
    panelOne.style.boxShadow = `${shdwOne}px ${shdwTwo}px ${shdwBlur}px ${shdwSpread}px ${shadowColor}`;
    clipBoard();
});

shadowBlur.addEventListener('input', (e) => {
    shdwBlur = e.target.value;
    shadowBlurText.value = shdwBlur;
    panelOne.style.boxShadow = `${shdwOne}px ${shdwTwo}px ${shdwBlur}px ${shdwSpread}px ${shadowColor}`;
    clipBoard();
});

shadowSpread.addEventListener('input', (e) => {
    shdwSpread = e.target.value;
    shadowSpreadText.value = shdwSpread;
    panelOne.style.boxShadow = `${shdwOne}px ${shdwTwo}px ${shdwBlur}px ${shdwSpread}px ${shadowColor}`;
    clipBoard();
});

shadowHorizontal.addEventListener('input', (e) => {
    shdwOne = e.target.value;
    shadowOne.value = shdwOne;
    if(shadowHorizontal.value == ''){
        shadowOne.value = 0;
    }
    panelOne.style.boxShadow = `${shdwOne}px ${shdwTwo}px ${shdwBlur}px ${shdwSpread}px ${shadowColor}`;
    clipBoard();
});

shadowVertical.addEventListener('input', (e) => {
    shdwTwo = e.target.value;
    shadowTwo.value = shdwTwo;
    if(shadowVertical.value == ''){
        shadowOne.value = 0;
    }
    panelOne.style.boxShadow = `${shdwOne}px ${shdwTwo}px ${shdwBlur}px ${shdwSpread}px ${shadowColor}`;
    clipBoard();
});

shadowBlurText.addEventListener('input', (e) => {
    shdwBlur = e.target.value;
    shadowBlur.value = shdwBlur;
    if(shadowBlurText.value == ''){
        shadowBlur.value = 0;
    }
    panelOne.style.boxShadow = `${shdwOne}px ${shdwTwo}px ${shdwBlur}px ${shdwSpread}px ${shadowColor}`;
    clipBoard();
});

shadowSpreadText.addEventListener('input', (e) => {
    shdwSpread = e.target.value;
    shadowSpread.value = shdwSpread;
    if(shadowSpreadText.value == ''){
        shadowSpread.value = 0;
    }
    panelOne.style.boxShadow = `${shdwOne}px ${shdwTwo}px ${shdwBlur}px ${shdwSpread}px ${shadowColor}`;
    clipBoard();
});

//Radius Events
topRadius.addEventListener('input', (e) => {
    topRad = e.target.value;
    topTextRad.value= topRad;
    panelOne.style.borderRadius = `${topRad}px ${rightRad}px ${botRad}px ${leftRad}px`;
    clipBoard();
}); 

rightRadius.addEventListener('input', (e) => {
    rightRad = e.target.value;
    rightTextRad.value = rightRad;
    panelOne.style.borderRadius = `${topRad}px ${rightRad}px ${botRad}px ${leftRad}px`;
    clipBoard();
});

botRadius.addEventListener('input', (e) => {
    botRad = e.target.value;
    botTextRad.value = botRad;
    panelOne.style.borderRadius = `${topRad}px ${rightRad}px ${botRad}px ${leftRad}px`;
    clipBoard();
});

leftRadius.addEventListener('input', (e) => {
    leftRad = e.target.value;
    leftTextRad.value = leftRad;
    panelOne.style.borderRadius = `${topRad}px ${rightRad}px ${botRad}px ${leftRad}px`;
    clipBoard();
});

//Radius TextInput Events
topTextRad.addEventListener('input', (e) => {
    topRad = e.target.value;
    topRadius.value = topRad;
    if(topTextRad.value == ""){
        topRadius.value = 0;
    }
    panelOne.style.borderRadius = `${topRad}px ${rightRad}px ${botRad}px ${leftRad}px`;
    clipBoard();
});

rightTextRad.addEventListener('input', (e) => {
    rightRad = e.target.value;
    rightRadius.value = rightRad;
    if(rightTextRad.value == ""){
        rightRadius.value = 0;
    }
    panelOne.style.borderRadius = `${topRad}px ${rightRad}px ${botRad}px ${leftRad}px`;
    clipBoard();
});

botTextRad.addEventListener('input', (e) => {
    botRad = e.target.value;
    botRadius.value = botRad;
    if(botTextRad.value == ""){
        botRadius.value = 0;
    }
    panelOne.style.borderRadius = `${topRad}px ${rightRad}px ${botRad}px ${leftRad}px`;
    clipBoard();
});

leftTextRad.addEventListener('input', (e) => {
    leftRad = e.target.value;
    leftRadius.value = leftRad;
    if(leftTextRad.value == ""){
        leftRadius.value = 0;
    }
    panelOne.style.borderRadius = `${topRad}px ${rightRad}px ${botRad}px ${leftRad}px`;
    clipBoard();
});

function clipBoard(){
    clipMe.value = `.panel-one{   
        color: ${textColor};
        background: ${boxColor};
        box-shadow: ${shdwOne}px ${shdwTwo}px ${shdwBlur}px ${shdwSpread}px ${shadowColor};
        border-radius: ${topRad}px ${rightRad}px ${botRad}px ${leftRad}px;
}`;
}
clipBoard();

copy.addEventListener('click', (e) => {
    clipMe.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(clipMe.value);
    toolTip.classList.add('copied');
    setTimeout(function(){
       toolTip.classList.remove('copied');
    }, 2500);
});

panelColor.addEventListener('input', (e) => {
    panelPick = e.target.value;
    panelView.style.background = panelPick;
});











