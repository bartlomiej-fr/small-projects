const ball = document.querySelector(".ball"),
    btn = document.querySelector(".btn-action"),
    spring = document.querySelector(".spring"),
    fill = document.querySelector(".fill");

const stretchSpring = () => {
    fill.style.animationName = "fill";
    fill.style.animationPlayState = "running";
    spring.style.animationPlayState = "running";
    btn.textContent = "Release the spring";
    btn.removeEventListener("touchstart", stretchSpring);
    btn.removeEventListener("touchend", releaseSpring);
};

const releaseSpring = () => {
    const fillStyles = getComputedStyle(fill);
    const fillWidth = parseInt(fillStyles.width, 10);
    const barWidth = parseInt(getComputedStyle(document.querySelector(".bar")).width, 10);
    const progressPercent = (fillWidth / barWidth).toFixed(2);

    btn.style.color = "black";
    btn.textContent = `Power of stroke: ${(progressPercent * 100).toFixed()}%`;
    fill.style.animationPlayState = "paused";

    document.documentElement.style.setProperty("--power-x", `${20 + progressPercent * 80}%`);
    ball.style.animation =
        "fly-ball-x 1s 1 forwards .15s cubic-bezier(.17, .67, .6, 1), fly-ball-y 1s 1 forwards .15s linear";

    document.documentElement.style.setProperty("--spring-left", getComputedStyle(spring).left);
    spring.style.animation = "release-spring .2s 1 forwards linear";

    btn.removeEventListener("mouseup", releaseSpring);
    btn.removeEventListener("mousedown", stretchSpring);

    ball.addEventListener("animationend", resetAnimation);
};

const resetAnimation = () => {
    console.log("reset");
    ball.removeEventListener("animationend", resetAnimation);

    setTimeout(() => {
        btn.addEventListener("mousedown", stretchSpring);
        btn.addEventListener("mouseup", releaseSpring);
        btn.addEventListener("touchstart", stretchSpring);
        btn.addEventListener("touchend", releaseSpring);

        btn.style.color = "white";
        btn.textContent = "Stretch the spring";

        spring.style.animation = "";
        ball.style.animation = "";
        fill.style.animationName = "none";
    }, 2000);
};

btn.addEventListener("mousedown", stretchSpring);
btn.addEventListener("mouseup", releaseSpring);
btn.addEventListener("touchstart", stretchSpring);
btn.addEventListener("touchend", releaseSpring);
