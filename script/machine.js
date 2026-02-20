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
  const transferMoney = document.getElementById('transfer-money');
  const history = document.getElementById('history');
  const bonus = document.getElementById('get-bonus');
  const payBill = document.getElementById('pay-bill');

  cashout.classList.add('hidden');
  addMoney.classList.add('hidden');
  transferMoney.classList.add('hidden');
  history.classList.add('hidden');
  bonus.classList.add('hidden');
  payBill.classList.add('hidden');

  const selected = document.getElementById(id);
  selected.classList.remove('hidden');

}