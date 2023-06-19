export const clock = () => {
  "use strict";

  const hours = document.querySelector(".clock-hours");
  const minutes = document.querySelector(".clock-minutes");
  const seconds = document.querySelector(".clock-seconds");

  function generateClock() {
    setInterval(() => {
      const date = new Date();
      const getHours = date.getHours().toString();
      const getMinutes = date.getMinutes().toString();
      const getSeconds = date.getSeconds().toString();

      hours.innerHTML = String((getHours < 10) ? '0'  : '').concat(getHours) + ':';
      minutes.innerHTML = String((getMinutes < 10) ? '0' : '').concat(getMinutes) + ':';
      seconds.innerHTML = String((getSeconds < 10) ? '0'  : '').concat(getSeconds);
    }, 1000);
  }
  generateClock();
};

clock();

export default clock();
