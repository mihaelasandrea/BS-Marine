function sendMail(contactForm) {
    emailjs.send("gmail", "BS Marine", {
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.emailaddress.value,
        "information_request": contactForm.message.value,
    })
    .then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error){
            console.log("FAILED", error);
        });
};