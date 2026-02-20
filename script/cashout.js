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

    const history = document.getElementById("history-container");

    const newHistory = document.createElement("div");

    newHistory.innerHTML = `
    <div class="transaction-card p-5 flex justify-between items-center bg-base-100 shadow">
        <div class="flex items-center gap-3">
          <div class="p-3 rounded-full">
            <img src="./assets/opt-2.png"/>
          </div>
          <div class="">
            <p>Cash Out</p>
          </div>
        </div>
        <div class="">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
    `;

    history.append(newHistory);
  } else {
    alert("Transaction fail");
    return;
  }
});
