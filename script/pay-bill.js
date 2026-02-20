document.getElementById("pay-bill-btn").addEventListener("click", function(){
    const billType = getValueFromInput("pay-bill-type");

    if(billType == "Select back"){
        alert('select bill type');
    }

    const billNumber = getValueFromInput("pay-bill-number");
    const billAmount = getValueFromInput("pay-bill-amount");
    const pin = getValueFromInput("pay-bill-pin");

    let currentBalance = balance();

    if(billAmount > 0 && billAmount <= currentBalance && billNumber == "44444444444" && pin == "1234"){
        currentBalance -= billAmount;
        alert(`bill paid ${billAmount} successfully`);
        setBalance(currentBalance);

        const history = document.getElementById("history-container");

      const newHistory = document.createElement("div");

      newHistory.innerHTML = `
      <div class="transaction-card p-5 flex justify-between items-center bg-base-100 shadow">
          <div class="flex items-center gap-3">
            <div class="p-3 rounded-full">
              <img src="./assets/opt-5.png"/>
            </div>
            <div class="">
              <p>Bill Paid</p>
            </div>
          </div>
          <div class="">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      `;

      history.append(newHistory);
    }
    else{
        alert("transaction failed");
    }
})