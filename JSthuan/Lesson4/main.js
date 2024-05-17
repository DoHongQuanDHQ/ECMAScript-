function sum(...args) {
  let tong = 0;
  for (let i = 0; i < args.length; i++) {
    const sum = args[i];
    tong = tong + args;
  }
  return tong;
}

console.log(sum(1, 2, 3));
