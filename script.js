function stringChop(str, len) {
  let arr = [];
  for (let i = 0; i < str.length; i += len) {
    arr.push(str.substring(i, i + len));
  }
  return arr;
}

// Do not change the code below
const str = prompt("Enter String:");
const size = parseInt(prompt("Enter Chunk Size:"), 10); // convert to number
alert(stringChop(str, size));
