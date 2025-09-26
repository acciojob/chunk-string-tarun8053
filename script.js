function chunkString(str, len) {
  let arr = [];
  for (let i = 0; i < str.length; i += len) {
    arr.push(str.substring(i, i + len));
  }
  return arr;
}
const str = prompt("Enter String:");
const size = parseInt(prompt("Enter Chunk Size:"), 10);
alert(chunkString(str, size));
