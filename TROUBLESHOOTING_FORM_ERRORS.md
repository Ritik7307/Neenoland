# 🔧 Troubleshooting Form Submission Errors

If you're seeing "Failed to submit enquiry" error, follow these steps:

---

## 🔍 Step 1: Check Browser Console

1. Open your browser
2. Press **F12** to open Developer Tools
3. Go to **Console** tab
4. Try submitting the form again
5. Look for error messages

**What to look for:**
- Red error messages
- Messages about missing environment variables
- EmailJS error codes

---

## ✅ Step 2: Verify Environment Variables

### Check if .env file exists:
- Location: Root directory (same level as `package.json`)
- Name: Exactly `.env` (not `.env.txt`)

### Check .env file contents:
Open `.env` and verify it has all three values:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

**Common Issues:**
- ❌ Empty values: `REACT_APP_EMAILJS_SERVICE_ID=`
- ❌ Missing quotes: `REACT_APP_EMAILJS_SERVICE_ID="service_xxx"` (remove quotes)
- ❌ Extra spaces: `REACT_APP_EMAILJS_SERVICE_ID = service_xxx` (no space after =)
- ❌ Wrong variable names: Must start with `REACT_APP_`

---

## 🔄 Step 3: Restart Development Server

**IMPORTANT:** Environment variables are only loaded when the server starts!

1. **Stop** the server (press `Ctrl + C` in terminal)
2. **Start** it again:
   ```bash
   npm start
   ```
3. Wait for it to fully load
4. Try submitting the form again

---

## 🔑 Step 4: Verify EmailJS Configuration

### Check Service ID:
1. Go to EmailJS Dashboard → Email Services
2. Verify your service is **connected** (green status)
3. Copy the Service ID again
4. Make sure it starts with `service_`
5. Update `.env` file
6. Restart server

### Check Template ID:
1. Go to EmailJS Dashboard → Email Templates
2. Verify your template is **saved**
3. Copy the Template ID again
4. Make sure it starts with `template_`
5. Update `.env` file
6. Restart server

### Check Public Key:
1. Go to EmailJS Dashboard → Account → General
2. Copy the Public Key again
3. It should be a long string (no spaces)
4. Update `.env` file
5. Restart server

---

## 🧪 Step 5: Test Environment Variables

Add this to your browser console (F12 → Console tab):

```javascript
console.log('Service ID:', process.env.REACT_APP_EMAILJS_SERVICE_ID);
console.log('Template ID:', process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
console.log('Public Key:', process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
```

**Expected Result:**
- Should show your actual values (not `undefined`)
- Should not be empty strings

**If you see `undefined`:**
- `.env` file is missing or in wrong location
- Server wasn't restarted after creating `.env`
- Variable names are incorrect

---

## 🐛 Common Error Messages & Solutions

### Error: "EmailJS Service ID is missing"
**Solution:**
- Check `.env` file has `REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx`
- Restart server
- Verify Service ID in EmailJS dashboard

### Error: "EmailJS Template ID is missing"
**Solution:**
- Check `.env` file has `REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx`
- Restart server
- Verify Template ID in EmailJS dashboard

### Error: "EmailJS Public Key is missing"
**Solution:**
- Check `.env` file has `REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx`
- Restart server
- Verify Public Key in EmailJS dashboard

### Error: "400 Bad Request"
**Solution:**
- Service ID, Template ID, or Public Key is incorrect
- Double-check values in EmailJS dashboard
- Copy values again to `.env`
- Restart server

### Error: "401 Unauthorized"
**Solution:**
- Public Key is incorrect
- Get Public Key again from EmailJS dashboard
- Update `.env` file
- Restart server

### Error: "404 Not Found"
**Solution:**
- Service ID or Template ID doesn't exist
- Verify in EmailJS dashboard that service/template exists
- Copy correct IDs to `.env`
- Restart server

---

## 📋 Quick Checklist

Go through this checklist:

- [ ] `.env` file exists in root directory
- [ ] `.env` file has all three variables
- [ ] All three variables have values (not empty)
- [ ] Service ID starts with `service_`
- [ ] Template ID starts with `template_`
- [ ] Public Key is a long string
- [ ] No quotes around values
- [ ] No spaces after `=`
- [ ] Server was restarted after creating/updating `.env`
- [ ] EmailJS service is connected
- [ ] EmailJS template is saved
- [ ] Browser console shows no errors

---

## 🔧 Advanced Debugging

### Enable Detailed Logging

The form now logs detailed error information. Check browser console for:

```
Error submitting form: [error object]
Error details: {
  message: "...",
  text: "...",
  status: ...,
  serviceId: "Set" or "Missing",
  templateId: "Set" or "Missing",
  publicKey: "Set" or "Missing"
}
```

This will tell you exactly what's wrong.

---

## 🆘 Still Not Working?

### Option 1: Verify EmailJS Setup
1. Go to EmailJS Dashboard
2. Test sending an email manually from the template
3. If that works, the issue is with environment variables

### Option 2: Recreate .env File
1. Delete `.env` file
2. Create new `.env` file
3. Add all three variables with correct values
4. Save file
5. Restart server

### Option 3: Check Network Tab
1. Open Developer Tools (F12)
2. Go to **Network** tab
3. Submit form
4. Look for request to EmailJS API
5. Check response for error details

---

## ✅ Success Indicators

When everything is working:
- ✅ Form submits without errors
- ✅ Success message appears: "Thank you! Your enquiry has been submitted successfully."
- ✅ Email received at `neenoland4u@gmail.com`
- ✅ Browser console shows: "Email sent successfully"
- ✅ No red errors in console

---

## 📞 Need More Help?

1. Check browser console for specific error messages
2. Verify all steps in this guide
3. Make sure EmailJS account is set up correctly
4. Test EmailJS template manually in dashboard

**Remember:** Always restart the server after updating `.env` file!

