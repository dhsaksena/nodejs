var nodeMailer = require('nodemailer');
var transport = nodeMailer.createTransport(
    {
        host: 'smtp.gmail.com',
        port:587,
        secure: false,
        requireTLS:true,
        auth:{
            user:'dhsaksena@gmail.com',
            pass:'<<password>>'
        }
    }
);

var mailOptions = {
    from:'dhsaksena@gmail.com',
    to:'dhsaksena@gmail.com',
    subject:'Test Node email',
    text:'Hello please subscribe channel'
}

transport.sendMail(mailOptions, function(error, info)
{
    if(error)
    {
        console.warn(error);
    }
    else
    {
        console.warn('Mail sent successfully', info.response);
    }
})