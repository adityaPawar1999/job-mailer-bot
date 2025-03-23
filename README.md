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

