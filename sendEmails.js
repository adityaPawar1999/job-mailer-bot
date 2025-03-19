require("dotenv").config();
const fs = require("fs");
const csv = require("csv-parser");
const nodemailer = require("nodemailer");
const emailTemplates = require("./emailTemplates");

let count = 0; // Track number of emails sent

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Map job roles to specific resumes
const resumeMapping = {
  "Frontend Developer": "Resume.pdf",
  "ERP Developer": "Resume.pdf",
  "Netsuite Developer": "Resume.pdf",
  "Full Stack Developer": "Resume.pdf",
  "Software Engineer": "Resume.pdf",
};

// Read HR emails, job roles, and company names from CSV
const sendEmails = async () => {
  const contacts = [];

  fs.createReadStream("hr_contacts.csv")
    .pipe(csv({ headers: ["email", "job_role", "company"], skipLines: 1 }))
    .on("data", (row) => {
      if (row.email && row.job_role) {
        contacts.push({
          email: row.email.trim(),
          job_role: row.job_role.trim(),
          company: row.company ? row.company.trim() : "your organization",
        });
      } else {
        console.error("⚠️ Skipping invalid row:", row);
      }
    })
    .on("end", async () => {
      shuffleArray(contacts); // Randomize order to prevent pattern detection
      for (let contact of contacts) {
        await sendEmail(contact.email, contact.job_role, contact.company);
        const getRandomDelay = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
        await delay(getRandomDelay(15000, 30000)); 
      }
      console.log(`✅ Total applications sent: ${count}`);
    });
};

// Send Email Function
const sendEmail = async (hrEmail, jobRole, companyName) => {
  if (!emailTemplates[jobRole]) {
    console.error(
      `❌ No email template found for job role: "${jobRole}". Available roles: `,
      Object.keys(emailTemplates)
    );
    return;
  }

  if (!resumeMapping[jobRole]) {
    console.error(
      `❌ No resume found for job role: "${jobRole}". Available roles: `,
      Object.keys(resumeMapping)
    );
    return;
  }

  // Personalize email with company name
  let emailContent = emailTemplates[jobRole].replace("[Company Name]", companyName);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: hrEmail,
    subject: `Application for ${jobRole} at ${companyName}`,
    text: emailContent,
    attachments: [
      {
        filename: resumeMapping[jobRole],
        path: `./${resumeMapping[jobRole]}`,
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${hrEmail} (${companyName}) for ${jobRole}`);
    count++;
  } catch (error) {
    console.error(`❌ Error sending email to ${hrEmail}:`, error.message || error);
  }
};

// Helper function to introduce a delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Helper function to get a random delay (5-10 seconds)
const getRandomDelay = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Helper function to shuffle contacts array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

// Start the process
sendEmails();
