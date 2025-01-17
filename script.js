document.addEventListener("DOMContentLoaded", function () {
    const landingPage = document.getElementById("landingPage");
    const navbarHeight = document.querySelector(".navbar").offsetHeight; // Get navbar height
  
    if (landingPage) {
      window.scrollTo({
        top: landingPage.offsetTop - navbarHeight, // Adjust based on navbar height
        behavior: "smooth",
      });
    }
  
    const getStartedButton = document.getElementById("getStartedButton");
    const offerSection = document.getElementById("offerSection");
  
    if (getStartedButton && offerSection) {
      getStartedButton.addEventListener("click", function () {
        window.scrollTo({
          top: offerSection.offsetTop - navbarHeight, // Adjust scrolling for "What We Offer" section
          behavior: "smooth",
        });
      });
    }
  });
  
  
document.addEventListener("DOMContentLoaded", function () {
    const getStartedButton = document.getElementById("getStartedButton");
    const offerSection = document.getElementById("offerSection");

    getStartedButton.addEventListener("click", function () {
      if (offerSection) {
        offerSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });