type Unit = string | number;

export const translate3d = (a: Unit, b: Unit, c: Unit) =>
  `translate3d(${a}, ${b}, ${c})`;
