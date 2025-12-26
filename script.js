// Toggle Read More with smooth expand + scrollbar
function toggleReadMore(button) {
  const readMoreText = button.nextElementSibling;

  if (readMoreText.classList.contains("active")) {
    readMoreText.classList.remove("active");
    button.textContent = "Read More";
  } else {
    readMoreText.classList.add("active");
    button.textContent = "Read Less";
  }
}

const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    // 1. Toggle the menu when the hamburger icon is clicked
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // 2. Close the menu when any link inside it is clicked
    navLinks.forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
    
// WhatsApp booking function for header button
const headerForm = document.getElementById("whatsappForm");
if (headerForm) {
  headerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const phoneNumber = "923239852212"; // Your WhatsApp number
    const message = "Hello, I would like to book a consultation.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  });
}

// WhatsApp booking function for service card buttons
document.querySelectorAll(".whatsappForm").forEach(form => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const phoneNumber = "923239852212"; // Your WhatsApp number
    const message = "Hello, I am interested in your services.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  });
});

// Appointment form submission
document.addEventListener('DOMContentLoaded', function () {
    const appointmentForm = document.getElementById('appointmentForm');

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(appointmentForm);
            const name = formData.get('name').trim();
            const email = formData.get('email').trim();
            const phone = formData.get('phone').trim();
            const service = formData.get('service');
            const date = formData.get('date');
            const time = formData.get('time');
            const message = formData.get('message').trim();

            if (!name || !email || !phone || !service) {
                alert('⚠️ Please fill in all required fields.');
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('⚠️ Please enter a valid email address.');
                return;
            }

            const phonePattern = /^[0-9]{10,15}$/;
            if (!phonePattern.test(phone)) {
                alert('⚠️ Please enter a valid phone number (10–15 digits).');
                return;
            }

            // Build WhatsApp message
            let whatsappMessage = `*New Appointment Request*\n\n`;
            whatsappMessage += `👤 Name: ${name}\n`;
            whatsappMessage += `📧 Email: ${email}\n`;
            whatsappMessage += `📞 Phone: ${phone}\n`;
            whatsappMessage += `💼 Service: ${service}\n`;
            if (date) whatsappMessage += `📅 Preferred Date: ${date}\n`;
            if (time) whatsappMessage += `⏰ Preferred Time: ${time}\n`;
            if (message) whatsappMessage += `📝 Message: ${message}\n`;

            const encodedMessage = encodeURIComponent(whatsappMessage);
            const phoneNumber = '923239852212';

            // Detect device
            const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

            if (isMobile) {
                // Try WhatsApp App
                window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;

                // If WhatsApp Business is installed instead
                setTimeout(() => {
                    window.location.href = `whatsapp-business://send?phone=${phoneNumber}&text=${encodedMessage}`;
                }, 1500);

                // Final fallback → API (works in browser)
                setTimeout(() => {
                    window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
                }, 3000);

            } else {
                // Desktop → open WhatsApp Web
                window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');
            }
        });
    }
});




// Modal functions for FAQs and Privacy Policy
function showModal(type) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    
    if (type === 'faqs') {
        modalContent.innerHTML = `
            <h3>Frequently Asked Questions</h3>
            <div class="faq-item">
                <h4>What are your operating hours?</h4>
                <p>We are open Monday-Friday 8AM-8PM, Saturday 9AM-5PM, and Sunday 10AM-4PM.</p>
            </div>
            <div class="faq-item">
                <h4>Do you accept insurance?</h4>
                <p>Yes, we accept most major insurance plans. Please contact us to verify your specific coverage.</p>
            </div>
            <div class="faq-item">
                <h4>How can I book an appointment?</h4>
                <p>You can book appointments through our website, call us directly, or message us on WhatsApp.</p>
            </div>
            <div class="faq-item">
                <h4>Do you provide emergency services?</h4>
                <p>For medical emergencies, please call 911. We provide urgent care during our operating hours.</p>
            </div>
            <div class="faq-item">
                <h4>Can I get my test results online?</h4>
                <p>Yes, we provide secure online access to your test results and medical records through our patient portal.</p>
            </div>
        `;
    } else if (type === 'privacy') {
        modalContent.innerHTML = `
            <h3>Privacy Policy</h3>
            <div class="privacy-content">
                <h4>Information We Collect</h4>
                <p>We collect personal information necessary for providing healthcare services, including medical history, contact information, and insurance details.</p>
                
                <h4>How We Use Your Information</h4>
                <p>Your information is used solely for healthcare purposes, including treatment, billing, and appointment scheduling. We do not share your information with third parties without your consent, except as required by law.</p>
                
                <h4>Data Security</h4>
                <p>We implement industry-standard security measures to protect your personal and medical information. All data is encrypted and stored securely.</p>
                
                <h4>Your Rights</h4>
                <p>You have the right to access, correct, or delete your personal information. You may also request a copy of your medical records at any time.</p>
                
                <h4>Contact Us</h4>
                <p>If you have questions about this privacy policy, please contact us at info@familycareclinic.com or call 923239852212.</p>
                
                <p><em>Last updated: September 2025</em></p>
            </div>
        `;
    }
    
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Smooth scrolling for navigation links (if needed)
document.addEventListener('DOMContentLoaded', function() {
    // Add any additional initialization code here
    console.log('Family Care Clinic website loaded successfully!');
});

// Mobile menu toggle (if you want to add mobile responsiveness)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}