let date = prompt(
  "Enter target date in one of the following formats:\nday month year (1 Jan 2024)\nYear/month/day (2024/1/1)\nEnter time in this format:(hours:minutes:seconds) (06:24:9)"
);

date = new Date(date);
document.getElementById("aaa").innerText = date;
const inputs = document.querySelectorAll("input");
function timer() {
  const set = new Date(date);
  const now = new Date();
  const diff = set - now;
  if (diff > 0) {
    inputs[0].value = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    inputs[1].value = Math.floor((diff / (1000 * 60 * 60 * 24 * 30)) % 365);
    inputs[2].value = Math.floor((diff / (1000 * 60 * 60 * 24)) % 30);

    inputs[3].value = Math.floor((diff / (1000 * 60 * 60)) % 24);
    inputs[4].value = Math.floor((diff / (1000 * 60)) % 60);
    inputs[5].value = Math.floor((diff / 1000) % 60);
  } else {
    alert("Countdown finished");
    document.getElementsByTagName("body")[0].style.backgroundColor = "red";
    return;
  }
}

timer();
setInterval(timer, 1000);
