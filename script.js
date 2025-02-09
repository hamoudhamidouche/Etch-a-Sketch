const container = document.querySelector(".container");

function createSquares(x) {
    container.innerHTML = ""; 
    let dimension = 512 / x;
    for (let i = 0; i < x * x; i++) { 
        let div = document.createElement("div");
        div.className = "cube";
        div.style.width = `${dimension}px`;
        div.style.height = `${dimension}px`;
        container.appendChild(div);
    }

    
    const pixels = document.querySelectorAll(".cube");
    pixels.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "green";
        });
    });
}

const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const inputText = parseInt(input.value); 
    input.value = ""; 
    if (isNaN(inputText) || inputText <= 0 || inputText > 100) {
        alert("Please enter a valid positive number");
        return;
    }
    createSquares(inputText);
});
