colorSwitch = document.querySelector('button');
colorBox = document.getElementsByClassName('colorBox');

colorSwitch.addEventListener('click', generateColor);
function generateColor() {

    // for (const box of colorBox) {
    //     random1 = parseInt((Math.random()*1000)/4.44);
    //     random2 = parseInt((Math.random()*1000)/4.44);
    //     random3 = parseInt((Math.random()*1000)/4.44);
    //     box.style.background = `rgb(${random1},${random2},${random3})`;
    // }

    for (const box of colorBox) {
        box.style.background = `rgb(${parseInt((Math.random() * 1000) / 4.44)},${parseInt((Math.random() * 1000) / 4.44)},${parseInt((Math.random() * 1000) / 4.44)})`;
        box.innerHTML = box.style.background; // for giving color code on hover
    }

}
generateColor();    
