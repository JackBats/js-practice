function rentalCost(days) {
  const dailyRate = 40;
  let totalCost = dailyRate * days;
  if (days >= 7) {
    totalCost -= 50;
  } else if (days >= 3) {
    totalCost -= 20;
  }
  return totalCost;
}

console.log(rentalCost(2));
console.log(rentalCost(3)); 
console.log(rentalCost(7)); 
console.log(rentalCost(8)); 