export default function (set, startString) {
  const arr = [];

  if (startString === '' || startString === ' ') {
    return '';
  }

  for (const item of set) {
    if (item.startsWith(startString)) {
      arr.push(item.slice(3));
    }
  }

  const str = arr.join('-');
  return str;
}
