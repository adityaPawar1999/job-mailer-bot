# 🚀 Automated Job Application Email Sender  

The **Automated Job Application Email Sender** is a Node.js script that streamlines the job application process by sending personalized emails to HR contacts listed in a CSV file. This tool automatically selects the appropriate resume for a given job role, personalizes the email content, and ensures emails are sent with randomized delays to avoid spam detection.  

## 📌 Features  

✅ **Automated Bulk Email Sending** – Send multiple job applications efficiently.  
✅ **Personalized Emails** – Dynamic content replacement for HR contacts and job roles.  
✅ **CSV-Based Contact Management** – Easily import HR emails, job roles, and companies.  
✅ **Dynamic Email Templates** – Custom messages for different job positions.  
✅ **Resume Attachment Support** – Auto-selects relevant resumes for each job role.  
✅ **Randomized Delays (Anti-Spam)** – Ensures safe email sending (15-30 seconds delay).  
✅ **Error Handling & Logging** – Skips invalid rows and logs errors for debugging.  
✅ **Company Name is Optional** – Works even if no company name is provided.  

---

## 🛠️ Tech Stack  

- **Node.js** – Backend logic for processing CSV and sending emails.  
- **Nodemailer** – Handles email transmission via Gmail SMTP.  
- **dotenv** – Loads environment variables securely.  
- **CSV Parser** – Reads HR emails and job roles from a CSV file.  
- **JavaScript** – Core scripting language.  

---

## 📂 Project Structure  

📁 job-email-sender
├── 📄 index.js # Main script to send emails
├── 📄 emailTemplates.js # Stores email templates for job roles
├── 📄 hr_contacts.csv # HR email list with job roles (sample CSV)
├── 📄 .env # Stores email credentials (not included in repo)
├── 📄 README.md # Project documentation
├── 📄 package.json # Node.js dependencies
├── 📄 Resume.pdf # Example resume file



---

## ⚡ Setup Instructions  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/your-username/job-email-sender.git  
cd job-email-sender  

### 2️⃣ Install Dependencies
npm install  

### 3️⃣ Set Up Environment Variables
Create a .env file in the root directory:

EMAIL_USER=your-email@gmail.com  
EMAIL_PASS=your-app-password

### 4️⃣ Prepare CSV File
Create hr_contacts.csv with this format:
email,job_role,company  
hr@example.com,Frontend Developer,TechCorp  
poojahiring456@gmail.com,Backend Developer,  
Company name is optional. If missing, "your organization" is used.

### 5️⃣ Define Email Templates
Modify emailTemplates.js to customize emails for each role.

### 6️⃣ Add Resume Files
Place resume PDFs in the project root and update resumeMapping in the script.

🚀 How to Run
node index.js  
