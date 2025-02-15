// Function to show hobbies in an alert
function showHobbies() {
  let hobbies = "My hobbies include designing, coding, and gaming!";
  alert(hobbies);
}

// Attach event listener to the button
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("hobbyButton").addEventListener("click", showHobbies);
});
