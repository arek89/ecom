// scroll
const getElementY = (query, position) => {
    let pos = arguments[1] == undefined ? 0 : position;
    return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top - pos;
};

const doScrolling = (element, duration, position) => {
    let startingY = window.pageYOffset;
    let elementY = getElementY(element, position);
    let targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY;
    let diff = targetY - startingY;
    let easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 };
    let start;

    if (!diff) return;

    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        let time = timestamp - start;
        let percent = Math.min(time / duration, 1);
        percent = easing(percent);
        window.scrollTo(0, startingY + diff * percent);

        if (time < duration) window.requestAnimationFrame(step)
    })
};