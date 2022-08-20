// FindElement & String convert to Number
function convertNumber(elementId) {
    const element = document.getElementById(elementId);
    const String = element.value;
    const number = parseInt(String);
    element.value = '';
    return number;
}
function display(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
// Calculat Button Clicked
document.getElementById("calculate-btn").addEventListener("click", function(){
  const income = convertNumber("income-field");
  const foodCost = convertNumber("food-field");
  const rentCost = convertNumber("rent-field");
  const clothesCost = convertNumber("clothes-field");
  // calculation
  const totalCost = foodCost + rentCost + clothesCost;
  const blance = income - totalCost;
  // Input Validation
  if (isNaN(income)) {
    alert("Not a valid number");
  } else if (income <= 0) {
    alert("Not a valid number");
  } else if (isNaN(foodCost)) {
    alert("Not a valid number");
  } else if (foodCost <= 0 || foodCost > income) {
    alert("Not a valid number");
  } else if (isNaN(rentCost)) {
    alert("Not a valid number");
  } else if (rentCost <= 0 || rentCost > income) {
    alert("Not a valid number");
  } else if (isNaN(clothesCost)) {
    alert("Not a valid number");
  } else if (clothesCost <= 0 || clothesCost > income) {
    alert("Not a valid number");
  } else if (totalCost > income) {
    alert("Not a valid number");
  } else {
    display("total-expenses", totalCost);
    display("blance", blance);
  }
});

// Save button clicked
document.getElementById("save-btn").addEventListener("click", function(){
    const savePercent = convertNumber("save-field");
    // find blance element & conver number
    const blanceElement = document.getElementById("blance");
    const blanceString = blanceElement.innerText;
    const blance = parseInt(blanceString);
    // saving calculation
    const savingAmount = (blance / 100) * savePercent;
    // remaining blance calculation
    const remainingBlance = blance - savingAmount;
    // Input Validation
    if (isNaN(savePercent) || savingAmount > blance) {
      alert("Not a valid number");
    } else {
      display("remaining-blance", remainingBlance);
      display("saving-amount", savingAmount);
    }
});