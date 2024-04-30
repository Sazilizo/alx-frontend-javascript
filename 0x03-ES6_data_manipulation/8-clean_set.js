export default function cleanSet(set, startString) {
  if (!startString || !startString.length) {
    return '';
  }
  let string = '';
  for (const i of set) {
    if (i.startsWith(startString)) {
      string += string.length === 0 ? i.replace(startString, '')
        : i.replace(startString, '-');
    }
  }
  return string;
}
