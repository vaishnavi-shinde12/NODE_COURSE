
let nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vaishups12@gmail.com',
    pass: '********'           // paste your password here
  }
});

var mailOptions = {
  from: 'vaishups12@gmail.com',
  to: 'vaishushinde312@gmail.com',
  subject: 'Sending mail via NodeMailer',
  text: `hii
         hello`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log("error");
  } else {
    console.log('Email sent: ' + info.response);
  }
});