`use strict`;
export default (e, el) => {
    let width = el.offsetWidth;
    let height = el.offsetHeight;

    const ripple = document.createElement(`span`);
    el.appendChild(ripple);

    width >= height ? (height = width) : (width = height);

    ripple.style = `height: ${height}px !important; left: ${e.pageX - el.offsetLeft - width / 2}px !important; top: ${e.pageY - el.offsetTop - height / 2}px !important; width: ${width}px !important;`;

    ripple.classList.add(`rippleAnimation`);

    setTimeout(() => el.removeChild(ripple), 1000);
};
