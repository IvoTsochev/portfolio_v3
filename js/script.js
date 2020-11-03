document.addEventListener("DOMContentLoaded", function () {
  // BLOG Button
  document.querySelector(".blog-corner").addEventListener("click", () => {
    alert("Upps, this is still under construction");
  });

  if (document.querySelector(".my-work")) {
    // MY WORK PAGE
    const Airbnb = document.querySelector("#airbnb");
    const moviesApp = document.querySelector("#movies-app");
    const covid19Tracker = document.querySelector("#covid-19-tracker");
    const chatApp = document.querySelector("#chat-app");
    const dennyConstruction = document.querySelector("#dennyconstruction");
    const hikov = document.querySelector("#hikov");
    const vasilMatin = document.querySelector("#vasilmatin");
    const motoGp = document.querySelector("#motogp");
    const v2 = document.querySelector("#v2");
    const v1 = document.querySelector("#v1");

    const rightWork = document.querySelector(".right-work");

    // Airbnb Tracker Listener
    Airbnb.addEventListener("mouseover", AirbnbIn);
    // Movies App Tracker Listener
    moviesApp.addEventListener("mouseover", moviesAppIn);
    // Covid-19 Tracker Listener
    covid19Tracker.addEventListener("mouseover", covid19In);
    // Chat App Listener
    chatApp.addEventListener("mouseover", chatAppIn);
    // Denny Listener
    dennyConstruction.addEventListener("mouseover", dennyIn);
    // Hikov Listener
    hikov.addEventListener("mouseover", hikovIn);
    // Vasil Matin Listener
    vasilMatin.addEventListener("mouseover", vasilMatinIn);
    // MotoGP Fan Shop Listener
    motoGp.addEventListener("mouseover", motoGpIn);
    // V2 Listener
    v2.addEventListener("mouseover", v2In);
    // V1 Listener
    v1.addEventListener("mouseover", v1In);

    // Airbnb App function
    function AirbnbIn() {
      rightWork.style.backgroundImage = "url('img/Airbnb.PNG')";
      document.querySelector(".my-work-airbnb").style.display = "block";
      document.querySelector(".my-work-movies-app").style.display = "none";
      document.querySelector(".my-work-covid-19-tracker").style.display =
        "none";
      document.querySelector(".my-work-chat-app").style.display = "none";
      document.querySelector(".my-work-denny").style.display = "none";
      document.querySelector(".my-work-hikov").style.display = "none";
      document.querySelector(".my-work-matin").style.display = "none";
      document.querySelector(".my-work-motogp").style.display = "none";
      document.querySelector(".my-work-v1").style.display = "none";
      document.querySelector(".my-work-v2").style.display = "none";
    }
    // Movies App function
    function moviesAppIn() {
      rightWork.style.backgroundImage = "url('img/moviesApp.PNG')";
      document.querySelector(".my-work-movies-app").style.display = "block";
      document.querySelector(".my-work-airbnb").style.display = "none";
      document.querySelector(".my-work-covid-19-tracker").style.display =
        "none";
      document.querySelector(".my-work-chat-app").style.display = "none";
      document.querySelector(".my-work-denny").style.display = "none";
      document.querySelector(".my-work-hikov").style.display = "none";
      document.querySelector(".my-work-matin").style.display = "none";
      document.querySelector(".my-work-motogp").style.display = "none";
      document.querySelector(".my-work-v1").style.display = "none";
      document.querySelector(".my-work-v2").style.display = "none";
    }
    // Covid19 function
    function covid19In() {
      rightWork.style.backgroundImage = "url('img/covid19Tracker.PNG')";
      document.querySelector(".my-work-covid-19-tracker").style.display =
        "block";
      document.querySelector(".my-work-airbnb").style.display = "none";
      document.querySelector(".my-work-movies-app").style.display = "none";
      document.querySelector(".my-work-chat-app").style.display = "none";
      document.querySelector(".my-work-denny").style.display = "none";
      document.querySelector(".my-work-hikov").style.display = "none";
      document.querySelector(".my-work-matin").style.display = "none";
      document.querySelector(".my-work-motogp").style.display = "none";
      document.querySelector(".my-work-v1").style.display = "none";
      document.querySelector(".my-work-v2").style.display = "none";
    }
    // ChatApp function
    function chatAppIn() {
      rightWork.style.backgroundImage = "url('img/chatAppImg.PNG')";
      document.querySelector(".my-work-chat-app").style.display = "block";
      document.querySelector(".my-work-airbnb").style.display = "none";
      document.querySelector(".my-work-movies-app").style.display = "none";
      document.querySelector(".my-work-covid-19-tracker").style.display =
        "none";
      document.querySelector(".my-work-denny").style.display = "none";
      document.querySelector(".my-work-hikov").style.display = "none";
      document.querySelector(".my-work-matin").style.display = "none";
      document.querySelector(".my-work-motogp").style.display = "none";
      document.querySelector(".my-work-v1").style.display = "none";
      document.querySelector(".my-work-v2").style.display = "none";
    }
    // Denny function
    function dennyIn() {
      rightWork.style.backgroundImage = "url('img/dennyconstruction.png')";
      document.querySelector(".my-work-denny").style.display = "block";
      document.querySelector(".my-work-airbnb").style.display = "none";
      document.querySelector(".my-work-movies-app").style.display = "none";
      document.querySelector(".my-work-covid-19-tracker").style.display =
        "none";
      document.querySelector(".my-work-chat-app").style.display = "none";
      document.querySelector(".my-work-hikov").style.display = "none";
      document.querySelector(".my-work-matin").style.display = "none";
      document.querySelector(".my-work-motogp").style.display = "none";
      document.querySelector(".my-work-v1").style.display = "none";
      document.querySelector(".my-work-v2").style.display = "none";
    }
    // Hikov function
    function hikovIn() {
      rightWork.style.backgroundImage = "url('img/hikov.png')";
      document.querySelector(".my-work-hikov").style.display = "block";
      document.querySelector(".my-work-airbnb").style.display = "none";
      document.querySelector(".my-work-movies-app").style.display = "none";
      document.querySelector(".my-work-covid-19-tracker").style.display =
        "none";
      document.querySelector(".my-work-chat-app").style.display = "none";
      document.querySelector(".my-work-denny").style.display = "none";
      document.querySelector(".my-work-matin").style.display = "none";
      document.querySelector(".my-work-motogp").style.display = "none";
      document.querySelector(".my-work-v1").style.display = "none";
      document.querySelector(".my-work-v2").style.display = "none";
    }
    // Vasil Matin function
    function vasilMatinIn() {
      rightWork.style.backgroundImage = "url('img/vasilmatin.png')";
      document.querySelector(".my-work-matin").style.display = "block";
      document.querySelector(".my-work-airbnb").style.display = "none";
      document.querySelector(".my-work-movies-app").style.display = "none";
      document.querySelector(".my-work-covid-19-tracker").style.display =
        "none";
      document.querySelector(".my-work-chat-app").style.display = "none";
      document.querySelector(".my-work-hikov").style.display = "none";
      document.querySelector(".my-work-denny").style.display = "none";
      document.querySelector(".my-work-motogp").style.display = "none";
      document.querySelector(".my-work-v1").style.display = "none";
      document.querySelector(".my-work-v2").style.display = "none";
    }
    // Moto Gp function
    function motoGpIn() {
      rightWork.style.backgroundImage = "url('img/motogp-fan-shop.png')";
      document.querySelector(".my-work-motogp").style.display = "block";
      document.querySelector(".my-work-airbnb").style.display = "none";
      document.querySelector(".my-work-movies-app").style.display = "none";
      document.querySelector(".my-work-covid-19-tracker").style.display =
        "none";
      document.querySelector(".my-work-chat-app").style.display = "none";
      document.querySelector(".my-work-matin").style.display = "none";
      document.querySelector(".my-work-hikov").style.display = "none";
      document.querySelector(".my-work-denny").style.display = "none";
      document.querySelector(".my-work-v1").style.display = "none";
      document.querySelector(".my-work-v2").style.display = "none";
    }
    // V2 function
    function v2In() {
      rightWork.style.backgroundImage = "url('img/v2.png')";
      document.querySelector(".my-work-v2").style.display = "block";
      document.querySelector(".my-work-airbnb").style.display = "none";
      document.querySelector(".my-work-movies-app").style.display = "none";
      document.querySelector(".my-work-covid-19-tracker").style.display =
        "none";
      document.querySelector(".my-work-chat-app").style.display = "none";
      document.querySelector(".my-work-v1").style.display = "none";
      document.querySelector(".my-work-motogp").style.display = "none";
      document.querySelector(".my-work-matin").style.display = "none";
      document.querySelector(".my-work-hikov").style.display = "none";
      document.querySelector(".my-work-denny").style.display = "none";
    }
    // V1 function
    function v1In() {
      rightWork.style.backgroundImage = "url('img/v1.png')";
      document.querySelector(".my-work-v1").style.display = "block";
      document.querySelector(".my-work-airbnb").style.display = "none";
      document.querySelector(".my-work-movies-app").style.display = "none";
      document.querySelector(".my-work-covid-19-tracker").style.display =
        "none";
      document.querySelector(".my-work-chat-app").style.display = "none";
      document.querySelector(".my-work-motogp").style.display = "none";
      document.querySelector(".my-work-matin").style.display = "none";
      document.querySelector(".my-work-hikov").style.display = "none";
      document.querySelector(".my-work-denny").style.display = "none";
      document.querySelector(".my-work-v2").style.display = "none";
    }
  }

  document.querySelector(".ctc-btn").addEventListener(
    "click",
    setTimeout(function ThankYou() {
      if (window.location.href.indexOf("?mailsend") > -1) {
        alert("Thank you for your message");
        console.log("im in the thank you funciont");
      }
    }, 1500)
  );
});
