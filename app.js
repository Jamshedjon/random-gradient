const main = document.getElementById('main')
const button = document.getElementById("random");
const title = document.getElementById("title");

const randomGradient = () => {
  const direction = Math.floor(Math.random() * 360);  
  const r1 = Math.floor(Math.random() * 360)
  const g1 = Math.floor(Math.random() * 360)
  const b1 = Math.floor(Math.random() * 360)
  const r2 =Math.floor(Math.random() * 360)
  const g2 = Math.floor(Math.random() * 360)
  const b2 =Math.floor(Math.random() * 360)
  const a1 = Math.floor(Math.random() * 10) / 10; 
  const a2 = Math.floor(Math.random() * 10) / 10;

  const background = main.style.background = `
  linear-gradient(${direction}deg,rgba(${r1},${g1},${b1},${a1}),rgba(${r2},${g2},${b2},${a2})) ,linear-gradient(${direction+1}deg,rgba(${r1+1},${g1+1},${b1+1},${a1+1}),rgba(${r2+1},${g2+1},${b2+1},${a2+1}))`;
  title.textContent = `${background};`;
}
button.addEventListener("click", randomGradient);
function copyToClipboard() {
  let textarea = document.getElementById("title");
  textarea.select();
  document.execCommand("copy");
}
