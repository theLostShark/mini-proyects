// VARIABLES AND EVENTS
const buttonCreate = document.getElementById("buttonCreate");
const colorList = document.getElementById("color-list");
const inputColors = document.getElementById("inputColors");

buttonCreate.addEventListener("click", generateColors);

//FUNCTION GENERATE COLORS
//controls number of generated colors, and selected options
function generateColors() {
  const numberColors = parseInt(inputColors.value);

  if (isNaN(numberColors) || numberColors < 1 || numberColors > 50) {
    alert("Please, choose a number between 1 and 50");
    return;
  }

  const selected = document.querySelector("input[name='tone']:checked");

  //in case you need to change the html and there is no default checked option
  if (!selected) {
    alert("Please, select a tone");
    return;
  }

  const mode = selected.value;

  colorList.innerHTML = "";
 //create an expecific number of colors
  for (let i = 0; i < numberColors; i++) {
    let color;
    if (mode === "random") {
      color = generateRandomRGB();
    } else {
      color = generateToneColor(mode);
    }

    const colorItem = document.createElement("li");
    colorItem.classList.add("color");
    colorItem.innerHTML = `
      <div class="react-box" style="background:${color.hex}"></div>
      <span class="hex-value">${color.hex}</span>`;

    colorItem.addEventListener("click", () => copyColor(color.hex, colorItem));
    colorList.appendChild(colorItem);
  }
}

// FUNCTION FOR RANDOM SRGB
function generateRandomRGB() {
  const hex = '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
  return { hex };
}

// FUNCTION FOR HSL TONES
function generateToneColor(mode) {
  let hue, saturation, lightness;

  switch (mode) {
    case "warm": // 20°–60° Hue, 70–100% Saturation, 30–70% Lightness
      hue = 20 + Math.random() * 40;
      saturation = 70 + Math.random() * 30;
      lightness = 30 + Math.random() * 40;
      break;

    case "cool": // 180°–260°, 70–100%, 30–70%
      hue = 180 + Math.random() * 80;
      saturation = 70 + Math.random() * 30;
      lightness = 30 + Math.random() * 40;
      break;

    case "gray-tint": // 0°–360°, 2–10%, 0–100%
      hue = Math.random() * 360;
      saturation = 2 + Math.random() * 8;
      lightness = 30 + Math.random() * 100;
      break;

    case "pastel": // 0°–360°, 30–70%, 70–90%
      hue = Math.random() * 360;
      saturation = 30 + Math.random() * 40;
      lightness = 70 + Math.random() * 20;
      break;
    
    case "muted": // 0°–360°, 10–40%, 30–60%
      hue = Math.random() * 360;
      saturation = 10 + Math.random() * 30;
      lightness = 30 + Math.random() * 30;
      break;
  }

  const hsl = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  const hex = hslToHex(hue, saturation, lightness);
  return { hsl, hex };
}

// CONVERT HSL → HEX
function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

  const r = Math.round(255 * f(0));
  const g = Math.round(255 * f(8));
  const b = Math.round(255 * f(4));

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

// COPY HEX CODE
function copyColor(hexCode, element) {
  navigator.clipboard.writeText(hexCode).then(() => {
    const span = element.querySelector(".hex-value");
    const originalText = span.innerText;
    span.innerText = "Copied";
    setTimeout(() => { span.innerText = originalText; }, 500);
  }).catch(err => console.error("Error copying:", err));
}
