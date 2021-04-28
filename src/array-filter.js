export function fiveAndGreaterOnly(arr) {
  return arr.filter(item => item > 4);
}

export function evensOnly(arr) {
  return arr.filter(item => ((item % 2) === 0));
}

export function fiveCharactersOrFewerOnly(arr) {
  return arr.filter(item => (item.length < 6));
}

export function peopleWhoBelongToTheIlluminati(arr) {
  return arr.filter(item => item.member === true);
}

export function ofAge(arr) {
  return arr.filter(item => item.age >= 18);
}