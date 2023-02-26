let gamer = "Player 1";

let circled = [];
let crossed = [];

function set(e) {
  //if square is clicked
  if (e.target.classList.value === "square") {
    symbol(e.target);

    console.log(e.target.id, e.target.firstElementChild.className);
    //push square id in the result arrays
    if (document.querySelectorAll("span").length >= 5) {
      win(circled, "Player 1");
      win(crossed, "Player 2");
    } else if (document.querySelectorAll("span").length === 9) {
      document.querySelector("h1").innerText = "Draw!";
    }
    console.log(circled, crossed);

    //results
    if (document.querySelectorAll("span").length === 9) {
      document.querySelector("h1").innerText = "Draw!";
    } else if (document.querySelectorAll("span").length >= 5) {
      win(circled, "Player 1");
      win(crossed, "Player 2");
    }
  }
}

function symbol(element) {
  //but symbols in square
  if (gamer === "Player 1") {
    element.innerHTML =
      '<span class="circle" style="color:#5F9EA0">&#9900;</span>';
    gamer = "Player 2";
  } else {
    element.innerHTML =
      '<span class="cross" style="color:#DC143C">&#215;</span>';
    gamer = "Player 1";
  }
  document.querySelector("h1").innerText = gamer;
}

document.querySelector("main").addEventListener("click", set);

//new game:
document.querySelector("button").addEventListener("click", () => {
  document.querySelectorAll("span").forEach((symbol) => {
    symbol.remove();
  });
  gamer = "Player 1";
  document.querySelector("h1").innerText = gamer;
  crossed = [];
  circled = [];

  document.querySelectorAll(".square").forEach((el) => {
    el.classList.remove("winner");
  });
  document.querySelector(".box").style.setProperty("pointer-events", "none");
});

//check the winner:
function win(result, winner) {
  const test = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  for (num of test) {
    const [x, y, z] = num;
    if (
      result.includes("s" + x) &&
      result.includes("s" + y) &&
      result.includes("s" + z)
    ) {
      document.querySelector("h1").innerText = winner + " won!";
      document.querySelector(`#s${x}`).classList.add("winner");
      document.querySelector(`#s${y}`).classList.add("winner");
      document.querySelector(`#s${z}`).classList.add("winner");

      document.querySelector(".box").style.setProperty("pointer-events", "all");
    }
  }
}
