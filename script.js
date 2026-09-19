// Display a greeting based on the time of day
const hour = new Date().getHours();
const greeting = document.getElementById("greeting");
if (hour < 12) {
greeting.textContent = "Good morning";
} else if (hour < 18) {
greeting.textContent = "Good afternoon";
} else {
greeting.textContent = "Good evening";
}