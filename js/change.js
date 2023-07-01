let button = document.querySelector("#botão");


button.addEventListener("click", () => {
    let colors = ["#928288", "#61bdc2", "#e11a00", "#6ea743", "#56913b", "#3d8b45", "#e6765e", "#d1644b", "#b1533d", "#c9eaf8", "#a9d8e9", "#82c9e0", "#7a07d9", "#4d00d9", "#8d8d8d", "#999999", "#33cc40", "#ffff99", "#fcea94", "#fff1b1", "#ffe464", "#ffcc66", "#fbd37b", "#805af2", "#c00c00", "#96e100", "#a275b8", "#763b60", "#ac6589", "#805af2", "#113333", "#133133", "#000133", "#ff4f00", "#6565bf", "#db7093", "#b5b35c", "#9ab973", "#6082b6", "#e5aa70", "#9966cc", "#cc8855"]

    let randomColor = Math.floor(Math.random() * colors.length);

    let bd = document.getElementsByTagName("body")[0];

    bd.style.transition = '.5s ease'
    bd.style.background = colors[randomColor];
    console.log(randomColor);

    /*  console.log(colors.length) */
})
