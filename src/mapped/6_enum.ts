export {};

enum Fruit {
  Apple,
  Banana,
  Orange,
  Orange2,
}

const FRUIT_PRICE = {
  [Fruit.Apple]: 1000,
  [Fruit.Banana]: 2000,
  [Fruit.Orange]: 3000,
};

const FRUIT_PRICE2: { [key in Fruit]: number } = {
  // 새로운 아이템 입력하도록 해줌.
  [Fruit.Apple]: 1000,
  [Fruit.Banana]: 2000,
  [Fruit.Orange]: 3000,
  [Fruit.Orange2]: 3000,
};
