let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
let div = document.querySelector(".msg-container");
let turn0 = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
resetBtn.addEventListener("click", resetPress);

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        div.classList.remove("hide");
        let para = document.querySelector("#msg");
        para.innerText = `${val1} is WINNER`;
        for (box of boxes) {
          box.disabled = true;
        }
      }
    }
  }
};

function resetPress() {
  div.classList.add("hide");
  for (box of boxes) {
    box.innerText = "";
    turn0 = true;
    box.disabled = false;
  }
}
