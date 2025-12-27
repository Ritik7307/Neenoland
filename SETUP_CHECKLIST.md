# EmailJS Setup Checklist ✅

Use this checklist to ensure you complete all setup steps correctly.

## 📋 Pre-Setup

- [ ] Project is running (`npm start` works)
- [ ] EmailJS package is installed (`@emailjs/browser`)

## Step 1: EmailJS Account

- [ ] Created account at https://www.emailjs.com/
- [ ] Verified email (if required)
- [ ] Can access EmailJS dashboard

## Step 2: Email Service

- [ ] Clicked "Email Services" in dashboard
- [ ] Added new service (Gmail)
- [ ] Connected Gmail account
- [ ] **Copied Service ID** (looks like: `service_xxxxxxx`)
- [ ] Service shows as "Connected" (green status)

## Step 3: Email Template

- [ ] Clicked "Email Templates" in dashboard
- [ ] Created new template
- [ ] Set template name: "Neeno Land Enquiry Form"
- [ ] Selected Gmail service
- [ ] Set "To Email": `neenoland4u@gmail.com`
- [ ] Set "From Name": `{{from_name}}`
- [ ] Set "Subject": `New Party Booking Enquiry - {{from_name}}`
- [ ] Added HTML content with variables:
  - [ ] `{{from_name}}`
  - [ ] `{{phone}}`
  - [ ] `{{guests}}`
  - [ ] `{{date}}`
- [ ] **Copied Template ID** (looks like: `template_xxxxxxx`)
- [ ] Saved template

## Step 4: Public Key

- [ ] Clicked "Account" → "General" in dashboard
- [ ] Found "Public Key" in API Keys section
- [ ] **Copied Public Key** (looks like: `xxxxxxxxxxxxx`)

## Step 5: Environment Variables

- [ ] Created `.env` file in root directory
- [ ] Added `REACT_APP_EMAILJS_SERVICE_ID=...`
- [ ] Added `REACT_APP_EMAILJS_TEMPLATE_ID=...`
- [ ] Added `REACT_APP_EMAILJS_PUBLIC_KEY=...`
- [ ] Replaced all placeholder values with actual IDs
- [ ] Saved `.env` file
- [ ] Verified file is named `.env` (not `.env.txt`)

## Step 6: Restart Server

- [ ] Stopped development server (Ctrl+C)
- [ ] Started server again (`npm start`)
- [ ] Server started successfully
- [ ] App opened in browser

## Step 7: Test Form

- [ ] Navigated to `/contact` page
- [ ] Found "Book Your Party" form
- [ ] Filled in all fields:
  - [ ] Name
  - [ ] Phone (10 digits)
  - [ ] Number of guests
  - [ ] Preferred date (future date)
- [ ] Clicked "Submit Enquiry"
- [ ] Saw success message
- [ ] Checked `neenoland4u@gmail.com` inbox
- [ ] **Received email with enquiry details** ✅

## 🎉 All Done!

If all checkboxes are checked, your enquiry form is fully functional!

---

## Quick Troubleshooting

If something doesn't work:

1. **Email not sending?**
   - [ ] Checked browser console (F12) for errors
   - [ ] Verified all three environment variables are correct
   - [ ] Restarted server after updating `.env`
   - [ ] Checked EmailJS service is connected
   - [ ] Verified template is saved

2. **Form shows error?**
   - [ ] All fields filled correctly
   - [ ] Phone is 10 digits
   - [ ] Date is in the future
   - [ ] Checked browser console for specific errors

3. **Environment variables not working?**
   - [ ] File is named exactly `.env`
   - [ ] File is in root directory
   - [ ] Variables start with `REACT_APP_`
   - [ ] Restarted server after creating/updating file

---

**Need detailed instructions?** See `EMAILJS_COMPLETE_SETUP.md`

