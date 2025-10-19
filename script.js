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
