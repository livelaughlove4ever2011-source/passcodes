function generatePasscode() {
  const length = document.getElementById("length").value;
  const includeLower = document.getElementById("lower").checked;
  const includeUpper = document.getElementById("upper").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  let lower = "abcdefghijklmnopqrstuvwxyz";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let symbols = "!@#$%^&*()_+-=[]{};:,.<>?";

  let chars = "";

  if (includeLower) chars += lower;
  if (includeUpper) chars += upper;
  if (includeNumbers) chars += numbers;
  if (includeSymbols) chars += symbols;

  if (chars === "") {
    alert("select at least one character type");
    return;
  }

  let passcode = "";
  for (let i = 0; i < length; i++) {
    passcode += chars[Math.floor(Math.random() * chars.length)];
  }

  document.getElementById("passcode").value = passcode;
}

document.getElementById("copyBtn").addEventListener("click", () => {
  const passField = document.getElementById("passcode");
  passField.select();
  passField.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(passField.value);
  alert("copied");
});
