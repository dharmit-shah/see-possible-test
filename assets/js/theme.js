// tabing
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) { tabcontent[i].style.display = "none"; }
    // Remove the 'active' class from all buttons
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) { tablinks[i].className = tablinks[i].className.replace(" active", ""); }
    // Show the current tab's content and set the button to active
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// phone number validation
const phoneInput = document.querySelector("#phoneInput");
const iti = window.intlTelInput(phoneInput, { utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.min.js" }); // Initialize intlTelInput
iti.promise.then(() => { const countryCode = iti.getSelectedCountryData().iso2; iti.setCountry(countryCode); }); // Set initial country based on the user's location
phoneInput.addEventListener("countrychange", function () { const countryCode = iti.getSelectedCountryData().iso2; console.log("Selected country code:", countryCode); }); // Listen for the country change event

const phoneInput2 = document.querySelector("#phoneInput2");
const iti2 = window.intlTelInput(phoneInput2, { utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.min.js" });
iti2.promise.then(() => { const countryCode2 = iti2.getSelectedCountryData().iso2; iti2.setCountry(countryCode2); });
phoneInput2.addEventListener("countrychange", function () { const countryCode2 = iti2.getSelectedCountryData().iso2; console.log("Selected country code for phoneInput2:", countryCode2); });

// page fixed column
document.addEventListener('DOMContentLoaded', () => {
    const paymentDetail = document.querySelector('.payment_detail_component');
    const paymentTotal = document.querySelector('.payment_total_component');
    const footer = document.querySelector('footer'); // Adjust if the footer has a specific class or ID

    function handleStickyBehavior() {
        // Check the viewport width
        if (window.innerWidth <= 768) { paymentTotal.style.position = 'relative'; paymentTotal.style.top = 'auto'; }
        else {
            // Enable sticky behavior on larger screens
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) { paymentTotal.style.position = 'absolute'; paymentTotal.style.top = `${paymentDetail.offsetHeight}px`; }
                    else { paymentTotal.style.position = 'sticky'; paymentTotal.style.top = '90px'; }
                });
            }, { threshold: [0] });
            observer.observe(paymentDetail);
        }
    }
    handleStickyBehavior(); // Initial check
    window.addEventListener('resize', handleStickyBehavior); // Add a resize event listener to handle screen size changes
});

