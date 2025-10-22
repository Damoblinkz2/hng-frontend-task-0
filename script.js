// Function to handle tab switching
function openCity(evt, cityName) {
  // Declare variables for tab content and links
  var i, tabcontent, tablinks;

  // Hide all tab content elements
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove "active" class from all tab links
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the selected tab content and add "active" class to the clicked button
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Automatically open the default tab on page load
document.getElementById("defaultOpen").click();

// Update and display the current time in milliseconds every second
setInterval(() => {
  document.getElementById("time_now").innerText = Date.now();
}, 1000);

// Form validation for contact.html
document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("textarea");
  const submitBtn = document.querySelector(".submit-btn");

  if (textarea && submitBtn) {
    // Initially disable the submit button
    submitBtn.disabled = true;

    // Add event listener to textarea for input changes
    textarea.addEventListener("input", function () {
      if (textarea.value.length >= 10) {
        submitBtn.disabled = false;
      } else {
        submitBtn.disabled = true;
      }
    });
  }
});
