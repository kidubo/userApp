const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {

    sgMail.send({
            to: email,
            from: 'innocentleonard0007@gmail.com',
            subject: 'Thanks for joining in!',
            text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
        }).then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })

}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
            to: email,
            from: 'innocentleonard0007@gmail.com',
            subject: 'Sorry  to see you go!',
            text: `Goodbye, ${name}. I hope to see you back sometime soon.`
        }).then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}