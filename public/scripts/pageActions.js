const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

document.getElementById("revHoloChk").addEventListener("change", function () {
  var revHolo = document.getElementById("revHoloChk");
  var firstEdition = document.getElementById("firstEditionChk");

  if (revHolo.checked) {
    firstEdition.checked = false;
  }
});
document
  .getElementById("firstEditionChk")
  .addEventListener("change", function () {
    var revHolo = document.getElementById("revHoloChk");
    var firstEdition = document.getElementById("firstEditionChk");

    if (firstEdition.checked) {
      revHolo.checked = false;
    }
  });
document.getElementById("searchBtn").addEventListener("click", function () {
  var searchTerm = document.getElementById("searchInput").value;
  var revHolo = document.getElementById("revHoloChk").checked;
  var firstEdition = document.getElementById("firstEditionChk").checked;

  if (searchTerm.trim() !== "") {
    // Construct the search URL
    var searchUrl =
      "https://www.cardmarket.com/en/Pokemon/Users/DayEmpire/Offers/Singles?name=" +
      encodeURIComponent(searchTerm) +
      "&isReverseHolo=" +
      (revHolo ? "Y" : "N") +
      "&isFirstEd=" +
      (firstEdition ? "Y" : "N");

    // Open the search URL in a new tab
    window.open(searchUrl, "_blank");
  }
});
document.getElementById("sellBtn").addEventListener("click", function () {
  var form = document.getElementById("sellForm");

  if (form.checkValidity()) {
    var name = document.getElementById("nameTxt").value;
    var email = document.getElementById("emailTxt").value;
    var details = document.getElementById("detailsTxt").value;

    var searchUrl =
      "mailto:contact@dayempire.co.uk?subject=Bulk%20Card%20Sale%20Enquiry%20-%20" +
      encodeURIComponent(name) +
      "&body=Name%3A%20" +
      encodeURIComponent(name) +
      "%0D%0AEmail%3A%20" +
      encodeURIComponent(email) +
      "%0D%0ACard%20Bulk%20Details%3A%20" +
      encodeURIComponent(details);

    window.open(searchUrl, "_blank");
  }
});
