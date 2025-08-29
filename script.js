function greet(userName) {
  return "Hello, " + (userName?.trim() || "Web User") + "!";
}
function saveName(userName) {
  localStorage.setItem("userName", (userName || "").trim());
}


for (let i = 1; i <= 5; i++) console.log("Count:", i);

let count = 3;
while (count > 0) { console.log("Countdown:", count); count--; }




const nameInput = document.getElementById("nameInput");
const greetBtn   = document.getElementById("greetBtn");
const output     = document.getElementById("output");
const toggleBtn  = document.getElementById("toggleBtn");
const toggleText = document.getElementById("toggleText");

const saved = localStorage.getItem("userName");
if (saved) {
  nameInput.value = saved;
  output.textContent = greet(saved);
}

function handleGreet() {
  const val = nameInput.value;
  saveName(val);
  output.textContent = greet(val);
}
greetBtn.addEventListener("click", handleGreet);

nameInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") handleGreet();
});

toggleBtn.addEventListener("click", () => {
  toggleText.style.display = (toggleText.style.display === "none") ? "block" : "none";
});
