// // id selected function
// function idselector(id) {
//   const id = document.getElementById(id);
//   return id;
// }
// // set text function
// function setInnerText(id) {
//   const ids = document.getElementById(id).innerText;
//   return ids;
// }

//

// ------id select string balance to convart number
function commonFunction(id) {
  const bdts = document.getElementById(id).innerText;
  const bdt = parseFloat(bdts);
  return bdt;
}

// -------id select input to shared function
function inputFild(id) {
  const inputs = document.getElementById(id).value;
  const input = parseFloat(inputs);
  return input;
}
