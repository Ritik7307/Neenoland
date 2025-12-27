# Quick Start Guide - EmailJS Setup

## ✅ What's Already Done

- ✅ EmailJS package installed (`@emailjs/browser`)
- ✅ Form component updated to use EmailJS
- ✅ No backend server needed!

## 🚀 Setup Steps (5 minutes)

### 1. Create EmailJS Account
- Go to https://www.emailjs.com/
- Sign up for free account

### 2. Connect Gmail Service
- Dashboard → **Email Services** → **Add New Service**
- Choose **Gmail** → Connect your Gmail account
- **Copy the Service ID**

### 3. Create Email Template
- Dashboard → **Email Templates** → **Create New Template**
- Use this template:

**Subject:**
```
New Party Booking Enquiry - {{from_name}}
```

**Content:**
```
New Party Booking Enquiry

Name: {{from_name}}
Phone: {{phone}}
Number of Guests: {{guests}}
Preferred Date: {{date}}

Please contact the customer to confirm the booking.
```

- Set **To Email**: `neenoland4u@gmail.com`
- **Copy the Template ID**

### 4. Get Public Key
- Dashboard → **Account** → **General**
- **Copy the Public Key**

### 5. Create .env File
Create `.env` in the root directory:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

Replace with your actual IDs from steps 2, 3, and 4.

### 6. Restart Server
```bash
npm start
```

### 7. Test!
- Go to `/contact` page
- Fill and submit the form
- Check `neenoland4u@gmail.com`

## 🎉 That's It!

No backend server, no Gmail passwords, no complex setup!

## 📚 Detailed Instructions

See `EMAILJS_SETUP.md` for complete step-by-step guide with HTML email template.

