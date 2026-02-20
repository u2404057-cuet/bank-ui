document.getElementById("transfer-btn").addEventListener("click", function () {
  const userNumber = getValueFromInput("input-user-number");
  const transferAmount = getValueFromInput("transfer-amount");
  const pin = getValueFromInput("transfer-pin");

  let currentBalance = balance();

  if (
    userNumber == "44444444444" &&
    transferAmount > 0 &&
    transferAmount <= currentBalance &&
    pin == "1234"
  ) {
    alert(`${transferAmount}$ transfered successfully`);
    currentBalance -= transferAmount;
    setBalance(currentBalance);

    const history = document.getElementById("history-container");

    const newHistory = document.createElement("div");

    newHistory.innerHTML = `
      <div class="transaction-card p-5 flex justify-between items-center bg-base-100 shadow">
          <div class="flex items-center gap-3">
            <div class="p-3 rounded-full">
              <img src="./assets/opt-3.png"/>
            </div>
            <div class="">
              <p>Amount transfered</p>
            </div>
          </div>
          <div class="">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      `;

    history.append(newHistory);
  } else {
    alert("transaction failed");
  }
});
