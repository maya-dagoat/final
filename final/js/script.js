let activeNumber = false

const phoneNumber = document.getElementById("phone-number");
phoneNumber.classList.toggle("hidden");
const phoneButton = document.getElementById("phone-button");
phoneButton.addEventListener("click", () => {
    phoneNumber.classList.toggle("hidden");
    if (!activeNumber) {
        activeNumber = true
        phoneButton.innerText = "hide number"
    } else {
        activeNumber = false
        phoneButton.innerText = "show number"
    }
});

function showMessage() {
    const messageElement = document.getElementById("message");
    //messageElement.classList.remove("hidden");
}