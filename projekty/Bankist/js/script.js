"use strict";

const currentBalans = document.querySelector(".balance");
const containerMovements = document.querySelector(".transactions");
const inputLoan = document.querySelector(".loan-input");
const btnLoan = document.querySelector(".request-loan");
const inputTransferReceiver = document.querySelector(
  ".transfer-input-receiver"
);
const inputTransferAmount = document.querySelector(".transfer-inpt-amount");
const btnTransfer = document.querySelector(".request-transfer");
const containerHistory = document.querySelector(".login-history");
const avatarImg = document.querySelector(".avatarImg");
const userName = document.querySelector(".userInfoName");
const userLogin = document.querySelector(".userInfoLogin");
const userPIN = document.querySelector(".userInfoPIN");
const btnHideShow = document.querySelector(".showHide");
const income = document.querySelector(".incomeValue");
const outcome = document.querySelector(".outcomeValue");
const average = document.querySelector(".averageValue");
const time = document.querySelector(".time");
const btnLogout = document.querySelector(".logout");
const btnSort = document.querySelector(".btnSort");
let hideShow = true,
  minute,
  seconds,
  myInterval,
  sort = false;

///////////////////////////////////////

function update() {
  displayBalans(currentAccount);
  displayMovements(currentAccount);
  displayHistory(currentAccount);
  displayUserInfo(currentAccount);
  displayMean(currentAccount);
  clearInterval(myInterval);
  starInterval();
  minute = 5;
  seconds = 0;
}
function displayBalans(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  currentBalans.textContent = `${acc.balance.toFixed(2)} ${acc.currency}`;
}
function displayMovements(acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const transactionDate = new Date(acc.movementsDates[i]);
    const formattedDate = new Intl.DateTimeFormat(acc.locale).format(
      transactionDate
    );

    const transactionAmount = formatData(acc, mov);

    const html = `<div class="transaction">
    <span>${formattedDate} <span class="${type}"> ${
      type.slice(0, 1).toUpperCase() + type.slice(1)
    }</span></span>
    <span class="${type}-amount"> ${transactionAmount}</span>
  </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}
function getLoan(acc, amount) {
  if (amount < 0 || acc.loans > 2 || acc.balance < amount * 0.1) {
    alert("You can't take a loan");
    return;
  } else {
    acc.movements.push(amount);
    acc.movementsDates.push(new Date());
    acc.loans++;
    update();
    inputLoan.value = "";
  }
}
function transfer(acc, receiver, amount) {
  receiver = checkReceiver(receiver);
  if (amount < 0 || acc === receiver) {
    alert("You can't transfer money");
    return;
  } else {
    receiver.movements.push(amount);
    receiver.movementsDates.push(new Date());
    acc.movements.push(-amount);
    acc.movementsDates.push(new Date());
    update();
    inputTransferReceiver.value = inputTransferAmount.value = "";
  }
}
function checkReceiver(receiver) {
  for (let i = 0; i < accountNumber; i++) {
    if (accounts[i].login === receiver) {
      return accounts[i];
    }
  }
  return false;
}
function displayHistory(acc) {
  const hist = acc.loginHistory.slice().sort((a, b) => a - b);
  hist.forEach(function (history, i) {
    const histItem = new Date(history);
    const formattedHistItem = new Intl.DateTimeFormat(acc.locale, {
      dateStyle: "full",
      timeStyle: "short",
    }).format(histItem);
    const type = i % 2 === 0 ? "normal" : "grey";
    const html = `<div class="item-history ${type}">${formattedHistItem}</div>`;
    containerHistory.insertAdjacentHTML("afterbegin", html);
  });
  const html = `<div class="description"><span class="highlight">History</span></div>`;
  containerHistory.insertAdjacentHTML("afterbegin", html);
}
function displayUserInfo(acc, hide = true) {
  let hideText = "";
  avatarImg.src = `${acc.avatar}`;
  if (hide) {
    userName.textContent = hideText.padStart(acc.Name.length, "*");
    userLogin.textContent = hideText.padStart(acc.login.length, "*");
    userPIN.textContent = hideText.padStart(String(acc.PIN).length, "*");
    btnHideShow.textContent = `Show`;
  } else {
    userName.textContent = acc.Name;
    userLogin.textContent = acc.login;
    userPIN.textContent = acc.PIN;
    btnHideShow.textContent = `Hide`;
  }
}
function displayMean(acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  const outcomes = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  const averages = incomes + outcomes;
  income.textContent = formatData(acc, incomes);
  outcome.textContent = formatData(acc, Math.abs(outcomes));
  average.textContent = formatData(acc, averages);
}
function formatData(acc, amount) {
  return new Intl.NumberFormat(acc.locale, {
    style: "currency",
    currency: acc.currency,
  }).format(amount);
}
function starInterval() {
  myInterval = setInterval(function () {
    time.textContent = `${minute}:${seconds < 10 ? `0${seconds}` : seconds}`;
    if (minute === 0 && seconds === 0) {
      logout();
    } else if (seconds === 0) {
      minute--;
      seconds = 60;
    }
    seconds--;
  }, 1000);
}
function logout() {
  userPanel.classList.toggle("none");
  container.classList.toggle("none");
  backgroundOverlay.classList.add("hidden");
  currentAccount = "";
  containerHistory.innerHTML = "";
  clearInterval(myInterval);
  loadingDiv.style.position = "absolute";
  loadingDiv.style.display = "flex";
  minute = 5;
  seconds = 0;
}

/////////////////////////////////////

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  getLoan(currentAccount, Number(inputLoan.value));
});
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  transfer(
    currentAccount,
    inputTransferReceiver.value,
    Number(inputTransferAmount.value)
  );
});
btnHideShow.addEventListener("click", function (e) {
  e.preventDefault();
  hideShow = !hideShow;
  displayUserInfo(currentAccount, hideShow);
});
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  sort = !sort;
  displayMovements(currentAccount, sort);
});
btnLogout.addEventListener("click", logout);
