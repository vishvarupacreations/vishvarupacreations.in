const menu = document.getElementById("mobileMenu");
const btn = document.getElementById("menuBtn");
const clickSound = document.getElementById("clickSound");

let selectedPrice = 0;
let selectedName = "";

function playClick() {
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});
}

function toggleMenu() {
    playClick();
    menu.classList.toggle("open");
    btn.classList.toggle("active");
}

function closeMenu() {
    menu.classList.remove("open");
    btn.classList.remove("active");
}

function toggleSupport() {
    document.getElementById("supportMenu").classList.toggle("show");
}

function goHome() {
    playClick();
    document.getElementById("home").style.display = "flex";
    document.getElementById("packagesPage").style.display = "none";
    document.getElementById("bookingPage").style.display = "none";
    document.getElementById("enquiryPage").style.display = "none";
    document.getElementById("myBookingsPage").style.display = "none";
    document.getElementById("teamPage").style.display = "none";
    closeMenu();
    window.scrollTo(0, 0);
}

function showPackages() {
    playClick();
    document.getElementById("home").style.display = "none";
    document.getElementById("packagesPage").style.display = "block";
    document.getElementById("bookingPage").style.display = "none";
    document.getElementById("enquiryPage").style.display = "none";
    document.getElementById("myBookingsPage").style.display = "none";
    document.getElementById("teamPage").style.display = "none";
    closeMenu();
    window.scrollTo(0, 0);
}

function showEnquiry() {
    playClick();
    document.getElementById("home").style.display = "none";
    document.getElementById("packagesPage").style.display = "none";
    document.getElementById("bookingPage").style.display = "none";
    document.getElementById("enquiryPage").style.display = "block";
    document.getElementById("myBookingsPage").style.display = "none";
    document.getElementById("teamPage").style.display = "none";
    closeMenu();
    window.scrollTo(0, 0);
}

function showMyBookings() {
    playClick();
    document.getElementById("home").style.display = "none";
    document.getElementById("packagesPage").style.display = "none";
    document.getElementById("bookingPage").style.display = "none";
    document.getElementById("enquiryPage").style.display = "none";
    document.getElementById("myBookingsPage").style.display = "block";
    document.getElementById("teamPage").style.display = "none";
    closeMenu();
    window.scrollTo(0, 0);
}

function showTeam() {
    playClick();
    document.getElementById("home").style.display = "none";
    document.getElementById("packagesPage").style.display = "none";
    document.getElementById("bookingPage").style.display = "none";
    document.getElementById("enquiryPage").style.display = "none";
    document.getElementById("myBookingsPage").style.display = "none";
    document.getElementById("teamPage").style.display = "block";
    closeMenu();
    window.scrollTo(0, 0);
}

function showBooking(price, name) {
    playClick();
    selectedPrice = price;
    selectedName = name;

    document.getElementById("selectedPackageText").innerHTML = `Package: <strong>${name}</strong>`;
    document.getElementById("packageAmt").innerText = "₹" + price.toLocaleString();
    document.getElementById("totalAmt").innerText = "₹" + price.toLocaleString();
    const advance = Math.round(price * 0.5);
    document.getElementById("advanceAmt").innerText = "₹" + advance.toLocaleString();
    document.getElementById("payButton").innerText = `Pay ₹${advance} & Confirm Booking`;

    document.getElementById("home").style.display = "none";
    document.getElementById("packagesPage").style.display = "none";
    document.getElementById("enquiryPage").style.display = "none";
    document.getElementById("myBookingsPage").style.display = "none";
    document.getElementById("teamPage").style.display = "none";
    document.getElementById("bookingPage").style.display = "block";
    window.scrollTo(0, 0);
}

document.getElementById("agreeTerms")?.addEventListener("change", function() {
    document.getElementById("payButton").disabled = !this.checked;
});

document.getElementById("payButton")?.addEventListener("click", function() {
    playClick();
    alert("Payment processing... (demo mode)");
});

document.getElementById("enquiryForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    playClick();
    alert("Enquiry received! We will contact you soon.");
    this.reset();
});

document.addEventListener("click", e => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
        closeMenu();
    }
});