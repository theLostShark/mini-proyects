const buttonCreate = document.getElementById("buttonCreate");
const colorList = document.getElementById("color-list");
const inputColors = document.getElementById("inputColors");

buttonCreate.addEventListener("click", generateColors);

//FUNCTION TO GENERATE EACH COLOR
function generateColors() {
  const numberColors = parseInt(inputColors.value);

  //error management, only allows numbers, and we have limited it to 50 colors.
  if (isNaN(numberColors) || numberColors < 1 || numberColors > 50) {
    alert("Please, choose a number between 1 and 50)");
    return;
  }
  //we clear the previous list each time we create a new one
  colorList.innerHTML = "";

  //we generate the number of colors introduced in the input
  for (let i = 0; i < numberColors; i++) {
    
    //random hexCode generator
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;

    //create each <li> element
    const colorItem = document.createElement("li");
    colorItem.classList.add("color");
    colorItem.innerHTML = `<div class="react-box" style="background: ${randomHex}"></div>
          <span class="hex-value">${randomHex}</span>`;

    //event to copy the hexcode
    colorItem.addEventListener("click", () => copyColor(randomHex, colorItem));
   

    // adding each <li> element to the list
    colorList.appendChild(colorItem);
  }
}

//FUNCTION TO COPY HEX CODE
function copyColor(hexCode, element) {
navigator.clipboard.writeText(hexCode).then(() => {
    const span = element.querySelector(".hex-value");
    const originalText = span.innerText;

    span.innerText = "Copied";

    setTimeout(() => {
      span.innerText = originalText;
    }, 500);
  }).catch(err => {
    console.error("Error copying: ", err);
  });
}

