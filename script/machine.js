function getValueFromInput(id) {
  const input = document.getElementById(id);
  return input.value;
}

function balance(){
    const input = document.getElementById('balance');
    const balance = input.innerText;
    return Number(balance);
}

function setBalance(value){
    const input = document.getElementById('balance');
    input.innerText = value;
}

function show(id){
  const cashout = document.getElementById('cashout');
  const addMoney = document.getElementById('add-money');

  cashout.classList.add('hidden');
  addMoney.classList.add('hidden');

  const selected = document.getElementById(id);
  selected.classList.remove('hidden');
  
}