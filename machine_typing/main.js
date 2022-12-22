const box = document.querySelector(".typing");
const text = [
    "Hello! ^How are you ?",
    "Nice to hear that you are fine! ^What is you name?",
    "How can I help You ? ...",
];
let wordIndex = 0;
let textIndex = 0;
let oldTime = 0;
const speed = 75;
let activeDOMElement = box;

const typing = (newTime) => {
    if (newTime - oldTime > speed) {
        const letter = text[textIndex].substr(wordIndex, 1);
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
        } else if (wordIndex === 0 || letter === "^") {
            const p = document.createElement("p");
            box.appendChild(p);
            activeDOMElement = p;
        }

        if (!(letter === "^")) {
            activeDOMElement.textContent += letter;
        }

        oldTime = newTime;
        wordIndex++;
    }
    requestAnimationFrame(typing);
};

typing();
