// For navbar toggle
$(".menu-btn").click(function () {
  $(".navbar .menu").toggleClass("active");
  $(".menu-btn i").toggleClass("active");
});

// Function to send email using EmailJS
function sendMail() {
  if (!(document.getElementById("topic").value == "")) {
    if (!(document.getElementById("name").value == "")) {
      if (!(document.getElementById("message").value == "")) {
        if (!(document.getElementById("email").value == "")) {
          // Initialize EmailJS with your API key
          emailjs.init("z1RFUvrIKDPV4lNAs");
          var mails = {
            subject: document.getElementById("topic").value,
            from_name: document.getElementById("name").value,
            message: document.getElementById("message").value,
            email_id: document.getElementById("email").value,
          };

          // Send email using EmailJS service and template
          emailjs
            .send("service_5m1nfyn", "template_p4nk4dk", mails)
            .then(function (response) {
              // Handle email sent successfully
              document.getElementById("alert").style.visibility = "visible";
              document.getElementById("topic").value = "";
              document.getElementById("name").value = "";
              document.getElementById("message").value = "";
              document.getElementById("email").value = "";
            })
            .catch(function (error) {
              // Handle email send error
              console.error("Email send error:", error);
            });
        }
      }
    }
  }
}

// Function to handle when resume is unavailable
function myresume() {
  document.getElementById("alert2").style.visibility = "visible";
}
