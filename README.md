js-random-data allows you to generate random pieces of data, which can help speed up make concepts for your front-end project

## Installation

Install via npm:

```
npm i js-random-data
```

## Usage

To use js-random-data import any of the needed functions below.

```js
import {
  strGenerator,
  intGenerator,
  nameGenerator,
  productReview,
} from "js-random-data";
console.log(strGenerator(5));
// tbtxb

console.log(intGenerator({ min: 1, max: 10 }));
// 5

console.log(nameGenerator({ type: "both" }));
// Evelyn Miller

console.log(productReview());
// A reliable car GPS. Easy to navigate, and real-time traffic updates are a game-changer.
```

#### Parameters

| Function      | param1 | default | param2 | default |
| ------------- | ------ | ------- | ------ | ------- |
| strGenerator  | length | 5       |        |         |
| intGenerator  | min    | 1       | max    | 10      |
| nameGenerator | type   | both    | amount | 1       |
| productReview | amount | 1       |        |         |
