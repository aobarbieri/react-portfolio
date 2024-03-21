const nodemailer = require('nodemailer')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }))

// Express route to handle form submissions
app.post('/submit-form', (req, res) => {
	// Get form data from request body
	const formData = req.body

	// Create a transporter using SMTP
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'your@gmail.com', // Your Gmail email address
			pass: 'your-password', // Your Gmail password or app-specific password
		},
	})

	// Email options
	const mailOptions = {
		from: 'your@gmail.com', // Sender address
		to: 'recipient@gmail.com', // Recipient address
		subject: 'New Form Submission', // Subject line
		text: JSON.stringify(formData), // Form data as plain text
	}

	// Send email
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return res.status(500).send(error.toString())
		}

		res.status(200).send('Email sent: ' + info.response)
	})
})

// Start the server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`)
})
