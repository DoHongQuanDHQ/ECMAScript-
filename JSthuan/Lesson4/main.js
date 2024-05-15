function sum(...args) {
  for (let i = 0; i < args.length; i++) {
    const sum = args[i];
    tong += args;
  }
  return tong;
}

console.log(sum(1, 2, 3));
