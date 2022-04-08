let load = document.getElementById("load");

let nextIndex = 1;
function display(item = 25) {
  for (let i = 0; i < item; i++) {
    let text = document.createElement("p");
    text.innerHTML = `Masai Student ${nextIndex}`;
    load.append(text);
    nextIndex++;
  }
}

display();

load.addEventListener("scroll", () => {
//   console.log(load.scrollTop + load.clientHeight, load.scrollHeight);
  if (load.scrollTop + load.clientHeight >= load.scrollHeight) {
    display();
  }
});
