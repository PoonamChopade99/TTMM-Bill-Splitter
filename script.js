function splitBill() {
  let amount = document.getElementById("billAmount").value;
  let noOfFriends = document.getElementById("noOfFriends").value;

  document.getElementById("result").innerText = "₹" + (amount / noOfFriends).toFixed(2) + "/person";
}
