const themeBtn = document.querySelectorAll(".btn");
const themeLink = document.querySelector(".theme-link")
const output = document.querySelector (".output");
const number = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const del = document.querySelector(".del");
const reset = document.querySelector(".reset");
const equals = document.querySelector(".equals");

themeBtn.forEach(btn => {
    btn.addEventListener("click", changetheme)
   
    function changetheme() {
        if(btn.classList.contains("btn1")) {
            themeLink.setAttribute('href', './styles/stylesOne.css')
        }
        else if(btn.classList.contains("btn2")) {
            themeLink.setAttribute('href', './styles/stylesTwo.css')
        }
        else {
            themeLink.setAttribute('href', './styles/stylesThree.css')
        }
    }
})

number.forEach(num => {
    num.addEventListener("click", () => {
        output.textContent += num.textContent
    })
})

operations.forEach(btn => {
    btn.addEventListener("click", () => {
        output.textContent += btn.value
    })
})

reset.addEventListener("click", ()=> {
    output.textContent = '';
})

del.addEventListener("click", () => {
    output.textContent = output.textContent.slice(0, -1);
})

equals.addEventListener("click", () => {
    try{
        output.textContent = eval(output.textContent);
    }
    catch(err) {
        output.textContent = "Error";
        setTimeout(() =>{
            output.textContent = ""}
            ,1000)
    }
})