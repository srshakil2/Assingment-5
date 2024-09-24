//crad-1--start
document.getElementById("crad-1-btn").addEventListener("click", function () {
  const balance = commonFunction("main-balance");
  const cradBalance1 = commonFunction("noakhali");
  const input1 = inputFild("crad-input1");
  if (input1 <= 0) {
    alert("Invalid Input Pless try Again");
    return;
  }
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
  //  input clear
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
// -card-1 End
// crad-2
document.getElementById("crad-2-btn").addEventListener("click", function () {
  const balance = commonFunction("main-balance");
  const cradBalance2 = commonFunction("feni");
  const input2 = inputFild("crad-input2");
  if (input2 <= 0) {
    alert("Invalid Input Pless try Again");
    return;
  }
  if (isNaN(input2) || balance < input2) {
    alert("Invalid Input Pless try Again");
    return;
  }
  const correntBalance = balance - input2;
  const correntCrad2Blance = cradBalance2 + input2;
  document.getElementById("main-balance").innerText = correntBalance;
  document.getElementById("feni").innerText = correntCrad2Blance;
  //  history
  const historyParent = document.getElementById("histroyChild");
  const historys = document.getElementById("crad-input2").value;
  const p1 = document.createElement("p");
  p1.setAttribute("class", "text-lg font-semibold");
  p1.innerText =
    historys + " " + "Taka is Donate for Flood Relief in Feni, Bangladesh";
  const p2 = document.createElement("p");
  p2.innerText = new Date();
  historyParent.appendChild(p1);
  historyParent.appendChild(p2);
  // input clear
  document.getElementById("crad-input2").value = "";
  // modal
  const modal = document.getElementById("my_modal_1");
  if (
    p1.innerText ===
    historys + " " + "Taka is Donate for Flood Relief in Feni, Bangladesh"
  ) {
    my_modal_1.showModal();
  } else {
    modal.classList.add("hidden");
    return;
  }
});
//crad-2--End
// crad-3
document.getElementById("crad-3-btn").addEventListener("click", function () {
  const balance = commonFunction("main-balance");
  const cradBalance3 = commonFunction("quota");
  const input3 = inputFild("crad-input3");
  if (input3 <= 0) {
    alert("Invalid Input Pless try Again");
    return;
  }
  if (isNaN(input3) || balance < input3) {
    alert("Invalid Input Pless try Again");
    return;
  }
  const correntBalance = balance - input3;
  const correntCrad3Blance = cradBalance3 + input3;
  document.getElementById("main-balance").innerText = correntBalance;
  document.getElementById("quota").innerText = correntCrad3Blance;
  //  history
  const historyParent = document.getElementById("histroyChild");
  const historys = document.getElementById("crad-input3").value;
  const p1 = document.createElement("p");
  p1.setAttribute("class", "text-lg font-semibold");
  p1.innerText =
    historys + " " + "Taka is Donate Aid for Injured in the Quota Movement";
  const p2 = document.createElement("p");
  p2.innerText = new Date();
  historyParent.appendChild(p1);
  historyParent.appendChild(p2);
  //  input clear
  document.getElementById("crad-input3").value = "";
  // modal
  const modal = document.getElementById("my_modal_1");
  if (
    p1.innerText ===
    historys + " " + "Taka is Donate Aid for Injured in the Quota Movement"
  ) {
    my_modal_1.showModal();
  } else {
    modal.classList.add("hidden");
    return;
  }
});
//crad-3--End
document.getElementById("btn-history").addEventListener("click", function () {
  const donat = document.getElementById("btn-donation");
  donat.classList.remove("bg-btn");
  const histor = document.getElementById("btn-history");
  histor.classList.add("bg-btn");
  const hide = document.getElementById("cards");
  hide.classList.add("hidden");
  const open = document.getElementById("history");
  open.classList.remove("hidden");
});
document.getElementById("btn-donation").addEventListener("click", function () {
  const histore = document.getElementById("btn-history");
  histore.classList.remove("bg-btn");
  const donate = document.getElementById("btn-donation");
  donate.classList.add("bg-btn");
  const open = document.getElementById("history");
  open.classList.add("hidden");
  const hide = document.getElementById("cards");
  hide.classList.remove("hidden");
});
document.querySelector("#blog").addEventListener("click", function () {
  window.location.href = "./blog.html";
});
