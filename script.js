function chunkString(str, len) {
  if (str == null) return [];
  len = Number(len);
  if (!Number.isFinite(len)) return [];
  len = Math.floor(len);
  if (len <= 0) return [];

  const codePoints = Array.from(String(str)); // preserves full characters (emoji, etc.)
  const res = [];
  for (let i = 0; i < codePoints.length; i += len) {
    res.push(codePoints.slice(i, i + len).join(''));
  }
  return res;
}

const str = prompt("Enter String:");
const size = parseInt(prompt("Enter Chunk Size:"), 10);
alert(chunkString(str, size));
