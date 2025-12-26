const hamburger = document.querySelector(".hamburger");

function showMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-navigation-links");

  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
}

function getCurrentYear() {
  const yearUI = document.querySelector(".year");

  yearUI.textContent = new Date().getFullYear();
}

function getDaySuffix(day) {
  if (day === 1 || day === 21 || day === 31) {
    return "st";
  } else if (day === 2 || day === 22) {
    return "nd";
  } else if (day === 3 || day === 23) {
    return "rd";
  } else {
    return "th";
  }
}

function activateClock() {
  setInterval(() => {
    const hoursUI = document.querySelector(".hours"),
      minutesUI = document.querySelector(".minutes"),
      secondsUI = document.querySelector(".seconds"),
      yearUI = document.querySelector(".year"),
      monthUI = document.querySelector(".month"),
      dayUI = document.querySelector(".day"),
      day2UI = document.querySelector(".day2");

    let hours = String(new Date().getHours()),
      minutes = String(new Date().getMinutes()),
      seconds = String(new Date().getSeconds()),
      year = new Date().getFullYear(),
      dayOfWeek = new Date().toLocaleString("default", { weekday: "long" }),
      month = new Date().toLocaleString("default", { month: "long" }),
      day = String(new Date().getDate());

    hours = hours.length < 2 ? hours.padStart(2, 0) : hours;
    minutes = minutes.length < 2 ? minutes.padStart(2, 0) : minutes;
    seconds = seconds.length < 2 ? seconds.padStart(2, 0) : seconds;

    hoursUI.textContent = hours;
    minutesUI.textContent = minutes;
    secondsUI.textContent = seconds;

    yearUI.textContent = year;
    monthUI.textContent = month;
    dayUI.textContent = `${dayOfWeek}`;
    day2UI.textContent = `${day}${getDaySuffix(day)}`;
  }, 1000);
}

(function loadAllEventListeners() {
  document.addEventListener("DOMContentLoaded", activateClock);
  document.addEventListener("DOMContentLoaded", getCurrentYear);
  hamburger.addEventListener("click", showMobileMenu);
})();
