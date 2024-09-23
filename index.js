//crad-1
document.getElementById("crad-1-btn").addEventListener("click", function () {
  const balance = commonFunction("main-balance");
  const cradBalance1 = commonFunction("noakhali");
  const input1 = inputFild("crad-input1");

  if (isNaN(input1) || balance < input1) {
    alert("Invalid Input Pless try Again");
    return;
  }
  const correntBalance = balance - input1;
  const correntCrad1Blance = cradBalance1 + input1;
  document.getElementById("main-balance").innerText = correntBalance;
  document.getElementById("noakhali").innerText = correntCrad1Blance;
  //  history
  const historyParent = document.getElementById("histroyChild");
  const historys = document.getElementById("crad-input1").value;
  const p1 = document.createElement("p");
  p1.setAttribute("class", "text-lg font-semibold");
  p1.innerText =
    historys + " " + "Taka is Donate for Flood at Noakhali, Bangladesh";
  const p2 = document.createElement("p");
  p2.innerText = new Date();
  historyParent.appendChild(p1);
  historyParent.appendChild(p2);
  //   ata last line
  document.getElementById("crad-input1").value = "";
  // modal
  const modal = document.getElementById("my_modal_1");
  if (
    p1.innerText ===
    historys + " " + "Taka is Donate for Flood at Noakhali, Bangladesh"
  ) {
    my_modal_1.showModal();
  } else {
    modal.classList.add("hidden");
    return;
  }
});
//
// crad-2
//
// crad-3
//
// history open
document.getElementById("btn-history").addEventListener("click", function () {
  const donat = document.getElementById("btn-donation");
  donat.classList.remove("bg-btn");
  const histor = document.getElementById("btn-history");
  histor.classList.add("bg-btn");
  const hide = document.getElementById("cards");
  hide.classList.add("hidden");
  const open = document.getElementById("history");
  open.classList.remove("hidden");
  // ok
});
//
// Donation open
document.getElementById("btn-donation").addEventListener("click", function () {
  const histore = document.getElementById("btn-history");
  histore.classList.remove("bg-btn");
  const donate = document.getElementById("btn-donation");
  donate.classList.add("bg-btn");
  const open = document.getElementById("history");
  open.classList.add("hidden");
  const hide = document.getElementById("cards");
  hide.classList.remove("hidden");
  // ok
});
//
