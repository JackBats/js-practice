function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Cannot divide by zero");
  }

  if(typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Both numerator and denominator must be numbers");
  }
  return numerator / denominator;
}

try{
    console.log(divide(10, 5));
}catch (error) {
    console.error(error.message);
} finally{
    console.log("Execution completed");
}

try{
    console.log(divide(10, 0));
}catch (error) {
    console.error(error.message);
} finally{
    console.log("Execution completed");
}

try{
    console.log(divide('abc', 5));
}catch (error) {
    console.error(error.message);
} finally{
    console.log("Execution completed");
}

try{
    console.log(divide(10, true));
}catch (error) {
    console.error(error.message);
} finally{
    console.log("Execution completed");
}