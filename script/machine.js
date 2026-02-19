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