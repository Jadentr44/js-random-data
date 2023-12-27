import data from "js-random-data/data.json" assert { type: "json" };

let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
function strGenerator(length) {
  if (!length) length = 5;
  let str = "";
  for (let i = 0; i < length; i++) {
    const e = alphabet[Math.floor(Math.random() * 26)];
    str += e;
  }
  return str;
}
function intGenerator({max, min}) {
  max = max || 10;
  min = min || 1;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function nameGenerator({ type, amount }) {
  type = type || "both";
  amount = amount || 1;
  let list = [];
  for (let i = 0; i < amount; i++) {
    let randomFirst =
      data.names[Math.floor(Math.random() * data.names.length)].firstName;
    let randomLast =
      data.names[Math.floor(Math.random() * data.names.length)].lastName;

    if (type === "first") {
      list.push(randomFirst);
    } else if (type === "last") {
      list.push(randomLast);
    } else if (type === "both") {
      list.push(`${randomFirst} ${randomLast}`);
    } else {
      return "invalid type";
    }
  }
  return list.length > 1 ? list : list[0];
}
function productReview(amount) {
  amount = amount || 1;
  let list = [];
  for (let i = 0; i < amount; i++) {
    let randomReview =
      data.productReview[Math.floor(Math.random() * data.productReview.length)];
    list.push(randomReview);
  }
  return list.length > 1 ? list : list[0];
}


export {productReview,strGenerator,nameGenerator,intGenerator}