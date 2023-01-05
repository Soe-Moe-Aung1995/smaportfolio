//Encrypted Messages Generator

//Selectors
const encryptMessages = document.getElementById('encryption');
const encryptBtn = document.querySelector('.encrypt-btn');
const decryptMessages = document.getElementById('decryption');
const decryptBtn = document.querySelector('.decrypt-btn');
let tempKeys = '';
let frontCut = '';
let addString = '';
let reConnect = '';
let cipherSymbols = 'ᚙᚕᚎᚓᚘᚚᚖᚗᚅ';

//Getting Date
let date = new Date();
let day = date.getDate();
if(day < 10){
    day = "0" + day;
}
let month = date.getMonth()+1;
if(month < 10){
    month = "0" + month;
}
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;


//Encryption Part
encryptBtn.addEventListener('click', (e) => {
    function autoCorrect(text, encryptionKeys) {
        
        const reg = new RegExp(Object.keys(encryptionKeys).join("|"), "g");
        return text.replace(reg, (matched) => encryptionKeys[matched] + cipherSymbols[Math.floor(Math.random() * cipherSymbols.length)]);
    }

    function convert(text, encryptionKeys) {
        
        const reg = new RegExp(Object.keys(encryptionKeys).join("|"), "g");
        return text.replace(reg, (matched) => encryptionKeys[matched]);
    }


    // Consume the function as follows
    tempKeys = encryptMessages.value;

      let encryptionKeys = {
        "a" : "ᛞ",
        "b" : "⍾",
        "c" : "⎍",
        "d" : "⟟",
        "e" : "⏃",
        "f" : "⋉",
        "g" : "¢",
        "h" : "⏁",
        "i" : "⌖",
        "j" : "⋏",
        "k" : "ᛝ",
        "l" : "☍",
        "m" : "⍙",
        "n" : "⍜",
        "o" : "⎅",
        "p" : "ᚠ",
        "q" : "⎎",
        "r" : "⌰",
        "s" : "¶",
        "t" : "☊",
        "u" : "⋔",
        "v" : "⏚",
        "w" : "☌",
        "x" : "⊑",
        "y" : "⌇",
        "z" : "⊬",
        [" "] : "𒐙",
        "1" : "𒐐",
        "2" : "𒐏",
        "3" : "𒌍",
        "4" : "𒎙",
        "5" : "𒌋",
        "6" : "𒐝",
        "7" : "𒐕",
        "8" : "𒐗",
        "9" : "𒐘",
        "0" : "𒐛"
        };

    const correctedText = autoCorrect(tempKeys, encryptionKeys);
    if(correctedText.length >= 5){
        frontCut = correctedText.slice(0,3);
        let subStractFront = correctedText.slice(frontCut.length);
        let convertDate = convert(currentDate, encryptionKeys);
        addString = convertDate + subStractFront + frontCut;
        decryptMessages.value = addString;
    }else{
        decryptMessages.value = correctedText;
    }
    encryptMessages.value = '';
});


//Decryption Part
decryptBtn.addEventListener('click', (e) => {

    function autoCorrect(text, decryptionKeys) {
        
        const reg = new RegExp(Object.keys(decryptionKeys).join("|"), "g");
        return text.replace(reg, (matched) => decryptionKeys[matched]);
    };

    function signsRemove(text, cipherSigns) {
        
        const reg = new RegExp(Object.keys(cipherSigns).join("|"), "g");
        return text.replace(reg, (matched) => cipherSigns[matched]);
    };

      tempKeys = decryptMessages.value;

    let cipherSigns = {
        "ᚙ" : "",
        "ᚕ" : "",
        "ᚎ" : "",
        "ᚓ" : "",
        "ᚘ" : "",
        "ᚚ" : "",
        "ᚖ" : "",
        "ᚗ" : "",
        "ᚅ" : ""
    }

    let decryptionKeys = {
        "ᛞ" : "a",
        "⍾" : "b",
        "⎍" : "c",
        "⟟" : "d",
        "⏃" : "e",
        "⋉" : "f",
        "¢" : "g",
        "⏁" : "h",
        "⌖" : "i",
        "⋏" : "j",
        "ᛝ" : "k",
        "☍" : "l",
        "⍙" : "m",
        "⍜" : "n",
        "⎅" : "o",
        "ᚠ" : "p",
        "⎎" : "q",
        "⌰" : "r",
        "¶" : "s",
        "☊" : "t",
        "⋔" : "u",
        "⏚" : "v",
        "☌" : "w",
        "⊑" : "x",
        "⌇" : "y",
        "⊬" : "z",
        "𒐙" : [" "],
        "𒐐" : "1",
        "𒐏" : "2",
        "𒌍" : "3",
        "𒎙" : "4",
        "𒌋" : "5",
        "𒐝" : "6",
        "𒐕" : "7",
        "𒐗" : "8",
        "𒐘" : "9",
        "𒐛" : "0"
    };
    const correctedText = autoCorrect(tempKeys, decryptionKeys);
    let removeSigns = signsRemove(correctedText, cipherSigns);
    let dateRemove = removeSigns.slice(0, 10);
    let realText = removeSigns.slice(10, -2);
    let reArrange = removeSigns.slice(-2);
    let removeTwo = removeSigns.slice(0,-2);
    reConnect = `${reArrange}${realText}  
created at: ${dateRemove}
    `;
    encryptMessages.value = reConnect;
    decryptMessages.value = "";
});