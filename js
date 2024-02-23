document.getElementById("calculate-btn").addEventListener("click", function() {
  var cmInput = parseFloat(document.getElementById("cm").value);
  var ftResult = cmInput * 0.032808399;
  document.getElementById("ft").value = ftResult;
});

document.getElementById("reset-btn").addEventListener("click", function() {
  document.getElementById("ft").value = "";
  document.getElementById("cm").value = "";
});
