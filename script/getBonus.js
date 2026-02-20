document.getElementById("bonus-btn").addEventListener("click", function () {
  const bonusCode = getValueFromInput("bonus-code");
  console.log("hi");
  let currentBalance = balance();
  if (bonusCode == "takaDeu") {
    currentBalance += 500;
    alert("You recieved 500$");
    setBalance(currentBalance);

    const history = document.getElementById("history-container");

    const newHistory = document.createElement("div");

    newHistory.innerHTML = `
      <div class="transaction-card p-5 flex justify-between items-center bg-base-100 shadow">
          <div class="flex items-center gap-3">
            <div class="p-3 rounded-full">
              <img src="./assets/opt-4.png"/>
            </div>
            <div class="">
              <p>Bonus</p>
            </div>
          </div>
          <div class="">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      `;

    history.append(newHistory);
  } else {
    alert("wrong code");
    return;
  }
});
