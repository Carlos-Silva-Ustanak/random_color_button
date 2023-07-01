let button = document.querySelector("#botão");

button.addEventListener("click", () => {
    var sb = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var hex = ''

    for (i = 0; i < 6; i++) {
        let randomColor = Math.floor(Math.random() * sb.length);
        hex += sb[randomColor]

        /* console.log(hex);  */
        /*  console.log(sb.length) */
    }
    let bd = document.getElementsByTagName("body")[0];
    bd.style.transition = '.5s ease'
    bd.style.background = "#" + hex;
})
