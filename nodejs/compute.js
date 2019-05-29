const longComputation = () => {
  let sum = 0;
  for (let i = 0; i < 1e3; i++) {
    sum += i;
  }
  return sum;
};
process.on("message", msg => {
  const sum = longComputation();
  process.send(sum);
});
