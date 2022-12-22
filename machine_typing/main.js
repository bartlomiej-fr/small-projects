const box = document.querySelector(".typing");
const text = [
    "Hello, how are you ?",
    "Nice to hear that you are fine!",
    "How can I help You ? ...",
];
let wordIndex = 0;
let textIndex = 0;
let oldTime = 0;
let speed = 75;

const typing = (newTime) => {
    if (wordIndex === text[textIndex].length) {
        if (textIndex === text.length - 1) {
            return;
        }
        return setTimeout(() => {
            box.textContent = "";
            textIndex++;
            wordIndex = 0;
            requestAnimationFrame(typing);
        }, 2000);
    }
    if (newTime - oldTime > speed) {
        oldTime = newTime;
        const letter = text[textIndex].substr(wordIndex, 1);
        box.textContent += letter;
        wordIndex++;
    }
    requestAnimationFrame(typing);
};

typing();
