document.getElementsByClassName("learnMore").onclick = function () {
  var moreInfo = document.getElementsByClassName("moreIntresstDiv");

  if (moreInfo.style.display === "block") {
    moreInfo.style.display = "none";
  } else {
    moreInfo.style.display = "block";
  }
};
