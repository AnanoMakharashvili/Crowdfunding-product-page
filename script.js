const getInputRange = document.getElementById("range");
console.log(getInputRange);

getInputRange.addEventListener("input", (event) => {
  event.target.value;

  getInputRange.style.background = `linear-gradient(
      to right,
      hsl(174, 77%, 80%) 0%,
      hsl(174, 77%, 80%) %,
      hsl(224, 65%, 95%) %,
      hsl(224, 65%, 95%) 100%
    )`;
});
