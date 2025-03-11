document.addEventListener("DOMContentLoaded", function () {
  const btnYes = document.getElementById("btnYes");
  const btnNo = document.getElementById("btnNo");
  const thankYouYes = document.getElementById("thankYouYes");
  const thankYouNo = document.getElementById("thankYouNo");

  const btnSurvey = document.getElementById("btnSurvey");
  const btnHY = document.getElementById("btnHY");
  const btnDogs = document.getElementById("btnDogs");
  const btnBack = document.getElementById("btnBack");
  const meetWho = document.getElementById("meet-who");

  const cantWaitHY = document.getElementById("cantWaitHY");
  const cantWaitDogs = document.getElementById("cantWaitDogs");

  // Ensure elements exist before adding event listeners
  if (
    btnYes &&
    btnNo &&
    thankYouYes &&
    thankYouNo &&
    btnHY &&
    btnDogs &&
    btnBack
  ) {
    btnYes.addEventListener("click", function () {
      btnYes.style.display = "block";
      btnNo.style.display = "none";
      thankYouYes.style.display = "block";
      btnSurvey.style.display = "block";
      btnBack.style.display = "block";
    });

    btnNo.addEventListener("click", function () {
      btnYes.style.display = "none";
      btnNo.style.display = "block";
      thankYouNo.style.display = "block";
      btnBack.style.display = "block";
    });

    btnSurvey.addEventListener("click", function () {
      btnSurvey.style.display = "none";
      meetWho.style.display = "block";
      btnHY.style.display = "block";
      btnDogs.style.display = "block";
      cantWaitHY.style.display = "none";
      cantWaitDogs.style.display = "none";
    });

    btnBack.addEventListener("click", function () {
      btnYes.style.display = "block";
      btnNo.style.display = "block";
      thankYouYes.style.display = "none";
      thankYouNo.style.display = "none";
      btnSurvey.style.display = "none";
      btnHY.style.display = "none";
      btnDogs.style.display = "none";
      btnBack.style.display = "none";
      meetWho.style.display = "none";
      cantWaitHY.style.display = "none";
      cantWaitDogs.style.display = "none";
    });
  }

  if (btnHY) {
    btnHY.addEventListener("click", function () {
      btnDogs.style.display = "none";
      cantWaitHY.style.display = "block";
    });
  }

  if (btnDogs) {
    btnDogs.addEventListener("click", function () {
      btnHY.style.display = "none";
      cantWaitDogs.style.display = "block";
    });
  }

  // Add paw print background
  const pawPrints = document.querySelector(".paw-prints");
  if (pawPrints) {
    for (let i = 0; i < 15; i++) {
      const paw = document.createElement("div");
      paw.style.position = "absolute";
      paw.style.top = `${Math.random() * 100}%`;
      paw.style.left = `${Math.random() * 100}%`;
      paw.style.transform = `rotate(${Math.random() * 360}deg)`;
      paw.innerHTML = "🐾";
      paw.style.fontSize = "20px";
      pawPrints.appendChild(paw);
    }
  }
});
