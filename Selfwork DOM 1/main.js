let changeColorsBtn = document.querySelector("#changeColorsBtn");

let boldBtn = document.querySelector("#bold");

let vanishBtn = document.querySelector("#van");

let allPharagraphs = document.querySelectorAll(`p`);



changeColorsBtn.addEventListener(`click`, ()=>{
    let redVal = Math.floor(Math.random() * 256);
    let greenVal = Math.floor(Math.random() * 256);
    let blueVal = Math.floor(Math.random() * 256);

    allPharagraphs.forEach((phar)=> phar.style.color = `rgb(${redVal},${greenVal},${blueVal})`);
});

boldBtn.addEventListener(`click`, ()=>{
    
    allPharagraphs.forEach((phar)=> phar.classList.toggle(`bold`));

});

vanishBtn.addEventListener(`click`, ()=>{
    
    allPharagraphs.forEach((phar)=> phar.classList.toggle(`van`));

});

