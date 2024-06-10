// Q1

// let fruits = ["apple", "avocado", "banana", "mango", "kiwi"];
// for (i = 1; i <= fruits.length; i++) {
//   fruitList = document.getElementById("fruits-item");
//   let li = document.createElement("li");
//   let img = document.createElement("img");
//   img.setAttribute("src", "./images/image" + i + ".jpg");
//   li.appendChild(img);
//   fruitList.appendChild(li);
//   img.style.width = "500px";
// }
///////////////////////////////////////////
// Q2
let array = [1, 2, 3, 4, 5];
function indexof(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return i;
    }
  }
  return -1;
}

console.log(indexof(array, 5));
