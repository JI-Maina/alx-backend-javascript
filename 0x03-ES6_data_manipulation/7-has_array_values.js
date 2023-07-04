export default function (set, arry) {
  for (const arr of arry) {
    const res = set.has(arr);
    if (res === false) {
      return false;
    }
  }
  return true;
}
