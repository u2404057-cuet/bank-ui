document.getElementById("add-money-btn").addEventListener("click", function () {
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Choose Bank") {
    alert("select a bank");
    return;
  } else {
    const bankNumber = getValueFromInput("bank-number");

    const addMoney = Number(getValueFromInput("add-money-amount"));

    const pin = getValueFromInput("add-money-pin");

    let currentBalance = balance();

    if (bankNumber == "33333333333" && addMoney > 0 && pin == "1234") {
      currentBalance += addMoney;
      alert(`${addMoney}$ added successfully at ${new Date()}`);
      setBalance(currentBalance);
    } else {
      alert("transaction failed");
      return;
    }
  }
});
