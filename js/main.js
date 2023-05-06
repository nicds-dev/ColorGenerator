const changeColor = document.getElementById("change-color");
const colorBody = document.getElementById("body");
const textColorP = document.getElementById("myP");

const genRandomColor = () => {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;

    let newColor = `rgb(${r}, ${g}, ${b})`;
    
    return newColor;
}
const changeNewColor = () => {
    colorBody.style.backgroundColor = genRandomColor();
    textColorP.innerHTML = genRandomColor();
}

changeColor.addEventListener("click", changeNewColor);