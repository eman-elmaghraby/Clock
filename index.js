let result = document.querySelector("h1");
let test = new Date();
setInterval(() => {
  let second, minutes, hours;
  let test = new Date();
  if (test.getSeconds() < 10) {
    second = "0" + test.getSeconds();
    result.innerHTML = test.getHours() + ":" + test.getMinutes() + ":" + second;
  } else {
    second = test.getSeconds();
    result.innerHTML = test.getHours() + ":" + test.getMinutes() + ":" + second;
  }

  if (test.getMinutes() < 10) {
    minutes = "0" + test.getMinutes();
    result.innerHTML = test.getHours() + ":" + minutes + ":" + second;
  } else {
    minutes = test.getMinutes();
    result.innerHTML = test.getHours() + ":" + minutes + ":" + second;
  }

  if (test.getHours() > 12) {
    hours = "0" + (test.getHours() - 12);
    result.innerHTML = hours + ":" + minutes + ":" + second + " PM";
  } else {
    hours = test.getHours();
    result.innerHTML = hours + ":" + minutes + ":" + second + " AM";
  }
}, 1000);
