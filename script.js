function showMessage(){
    alert("Car booked successfully 🚗🔥");
}


const darkBtn = document.getElementById("darkBtn");


darkBtn.onclick = function(){
    document.body.classList.toggle("light-mode");
}
function showMessage() {
    alert("Car booked successfully 🚗🔥");
}
const darkBtn = document.getElementById("darkBtn");

darkBtn.onclick = function() {
    document.body.classList.toggle("light-mode");
};

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".book-btn").forEach(button => {
        button.addEventListener("click", () => {
            const confirmBooking = confirm("Do you want to confirm this booking?");
            if (confirmBooking) {
                showBookingMessage("Booking confirmed! A confirmation message has been sent.");
            }
        });
    });
});

function showBookingMessage(text) {
    let message = document.getElementById("bookingMessage");
    if (!message) {
        message = document.createElement("div");
        message.id = "bookingMessage";
        message.style.position = "fixed";
        message.style.bottom = "20px";
        message.style.right = "20px";
        message.style.padding = "12px 18px";
        message.style.background = "rgba(0, 0, 0, 0.8)";
        message.style.color = "#fff";
        message.style.borderRadius = "8px";
        message.style.zIndex = "9999";
        document.body.appendChild(message);
    }
    message.textContent = text;
    setTimeout(() => {
        if (message.parentElement) {
            message.parentElement.removeChild(message);
        }
    }, 4000);
}