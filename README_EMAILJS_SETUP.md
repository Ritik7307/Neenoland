# 🚀 EmailJS Setup - Complete Guide

This is your **one-stop guide** for setting up the enquiry form with EmailJS.

## 📚 Available Documentation

Choose the guide that fits your needs:

1. **`EMAILJS_COMPLETE_SETUP.md`** - 📖 **Detailed step-by-step guide** (Recommended for first-time setup)
   - Complete instructions with screenshots descriptions
   - HTML email template included
   - Troubleshooting section

2. **`SETUP_CHECKLIST.md`** - ✅ **Quick checklist** (Use while setting up)
   - Check off each step as you complete it
   - Quick troubleshooting tips

3. **`QUICK_START_EMAILJS.md`** - ⚡ **Quick reference** (For experienced users)
   - Condensed version
   - Just the essentials

4. **`EMAILJS_SETUP.md`** - 📝 **Original guide** (Alternative format)

---

## 🎯 Quick Start (5 Steps)

If you're in a hurry, here's the fastest path:

### 1. Create EmailJS Account
👉 Go to https://www.emailjs.com/ and sign up

### 2. Connect Gmail
👉 Dashboard → Email Services → Add Gmail → Copy **Service ID**

### 3. Create Template
👉 Dashboard → Email Templates → Create → Use template from guide → Copy **Template ID**

### 4. Get Public Key
👉 Dashboard → Account → General → Copy **Public Key**

### 5. Create .env File
Create `.env` in root directory:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### 6. Restart & Test
```bash
npm start
```
Then test the form at `/contact`

---

## 📁 Files Created

✅ **Form Component:** `src/components/EnquiryForm.js`  
✅ **Form Styles:** `src/components/EnquiryForm.css`  
✅ **Updated Contact Page:** `src/pages/ContactPage.js`  
✅ **Environment Example:** `env.example`  
✅ **Complete Setup Guide:** `EMAILJS_COMPLETE_SETUP.md`  
✅ **Setup Checklist:** `SETUP_CHECKLIST.md`  
✅ **Quick Start Guide:** `QUICK_START_EMAILJS.md`  

---

## 🔑 What You Need

Before starting, make sure you have:

- ✅ EmailJS account (free at emailjs.com)
- ✅ Gmail account (or any email service)
- ✅ Access to `neenoland4u@gmail.com` inbox
- ✅ 10-15 minutes

---

## 📋 Setup Summary

1. **EmailJS Account** → Sign up
2. **Email Service** → Connect Gmail → Get Service ID
3. **Email Template** → Create template → Get Template ID
4. **Public Key** → Get from Account settings
5. **Environment File** → Create `.env` with all three values
6. **Restart Server** → `npm start`
7. **Test Form** → Submit form → Check email

---

## ⚠️ Important Notes

- **Environment variables** are only loaded when the server starts
- **Must restart** server after creating/updating `.env` file
- **File must be named** exactly `.env` (not `.env.txt`)
- **Free tier:** 200 emails/month

---

## 🆘 Need Help?

1. Check `EMAILJS_COMPLETE_SETUP.md` for detailed instructions
2. Use `SETUP_CHECKLIST.md` to track your progress
3. Check browser console (F12) for error messages
4. Verify all three environment variables are set correctly

---

## ✅ Verification

After setup, verify everything works:

- [ ] Form submits without errors
- [ ] Success message appears
- [ ] Email received at `neenoland4u@gmail.com`
- [ ] Email contains all form data (name, phone, guests, date)

---

**Ready to start?** Open `EMAILJS_COMPLETE_SETUP.md` and follow the steps! 🚀

