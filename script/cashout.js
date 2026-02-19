document.getElementById("cashout-btn").addEventListener("click", function () {
  //   const number = document.getElementById("input-number");
  const agentNumber = getValueFromInput("input-number");

  //   const amount = document.getElementById("amount");
  const withDrawAmount = getValueFromInput("amount");

  //   const inputPin = document.getElementById("input-pin");
  const pin = getValueFromInput("input-pin");

  //   let balanceInput = document.getElementById("balance");
  //   let currentBalance = Number(balanceInput.innerText);
  let currentBalance = balance();

  if (
    agentNumber == "22222222222" &&
    withDrawAmount > 0 &&
    withDrawAmount <= currentBalance &&
    pin == "1234"
  ) {
    currentBalance -= withDrawAmount;
    alert(`withdraw ${withDrawAmount}$ successful`);
    // document.getElementById('balance').innerText = currentBalance;
    setBalance(currentBalance);
  } else {
    alert("Transaction fail");
    return;
  }
});
