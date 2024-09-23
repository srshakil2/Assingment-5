function commonFunction(id) {
  const bdts = document.getElementById(id).innerText;
  const bdt = parseFloat(bdts);
  return bdt;
}

function inputFild(id) {
  const inputs = document.getElementById(id).value;
  const input = parseFloat(inputs);
  return input;
}
