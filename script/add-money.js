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

      const history = document.getElementById("history-container");

      const newHistory = document.createElement("div");

      newHistory.innerHTML = `
      <div class="transaction-card p-5 flex justify-between items-center bg-base-100 shadow">
          <div class="flex items-center gap-3">
            <div class="p-3 rounded-full">
              <img src="./assets/opt-1.png"/>
            </div>
            <div class="">
              <p>Add Money</p>
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
      return;
    }
  }
});
