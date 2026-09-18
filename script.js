
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    if (navLinks.classList.contains("open")) {
        menuBtn.innerHTML = "✕";
        menuBtn.setAttribute("aria-label", "Close menu");
    } else {
        menuBtn.innerHTML = "☰";
        menuBtn.setAttribute("aria-label", "Open menu");
    }
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.innerHTML = "☰";
        menuBtn.setAttribute("aria-label", "Open menu");
    });
});

    function placeOrder() {
      const firstName = document.getElementById("firstName").value;
      const email = document.getElementById("email").value;
      const address = document.getElementById("address").value;

      if (!firstName || !email || !address) {
        alert("Please complete your customer and shipping details.");
        return;
      }

      alert("Order placed successfully!");
    }

    
