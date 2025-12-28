//   GLOBALS
const { DateTime } = luxon;

const hamburger = document.querySelector(".hamburger");
const timezoneSelect = document.getElementById("timezone");

let selectedZone = DateTime.local().zoneName;

  //  MOBILE MENU
function showMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-navigation-links");

  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
}

  //  YEAR (FOOTER)

function getCurrentYear() {
  const yearUI = document.querySelector("footer .year");
  yearUI.textContent = DateTime.now().year;
}

  //  DAY SUFFIX
function getDaySuffix(day) {
  if (day === 1 || day === 21 || day === 31) return "st";
  if (day === 2 || day === 22) return "nd";
  if (day === 3 || day === 23) return "rd";
  return "th";
}

//    TIMEZONE HANDLING
if (timezoneSelect) {
  selectedZone = timezoneSelect.value;

  timezoneSelect.addEventListener("change", (e) => {
    selectedZone = e.target.value;
  });
}

  //  CLOCK LOGIC (LUXON)
function activateClock() {
  setInterval(() => {
    const hoursUI = document.querySelector(".hours");
    const minutesUI = document.querySelector(".minutes");
    const secondsUI = document.querySelector(".seconds");
    const yearUI = document.querySelector("main .year");
    const monthUI = document.querySelector(".month");
    const dayUI = document.querySelector(".day");
    const day2UI = document.querySelector(".day2");

    const now = DateTime.now().setZone(selectedZone);

    hoursUI.textContent = now.toFormat("HH");
    minutesUI.textContent = now.toFormat("mm");
    secondsUI.textContent = now.toFormat("ss");

    yearUI.textContent = now.toFormat("yyyy");
    monthUI.textContent = now.toFormat("LLLL");
    dayUI.textContent = now.toFormat("cccc");
    day2UI.textContent =
      `${now.toFormat("d")}${getDaySuffix(now.day)}`;
  }, 1000);
}



(function loadAllEventListeners() {
  document.addEventListener("DOMContentLoaded", activateClock);
  document.addEventListener("DOMContentLoaded", getCurrentYear);
  hamburger.addEventListener("click", showMobileMenu);
})();
