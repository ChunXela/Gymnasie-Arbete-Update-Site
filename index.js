const parentContainer = document.querySelector(".backgroundReasons");

parentContainer.addEventListener("click", (event) => {
  const current = event.target;

  const isReadMoreBtn = current.className.includes("learnMore");

  if (!isReadMoreBtn) return;

  const currentText = event.target.parentNode.querySelector(".moreInterest");

  currentText.classList.toggle("moreInterest--show");

  current.textContent = current.textContent.includes("Show More")
    ? "Show Less..."
    : "Show More...";
});
