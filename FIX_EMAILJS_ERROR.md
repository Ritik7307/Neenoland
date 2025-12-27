# 🔧 Fix "EmailJS Configuration" Error - Step by Step

You're seeing this error: **"Failed to submit enquiry. Please check your EmailJS configuration and try again."**

This means your EmailJS environment variables are missing or not configured correctly.

---

## 🎯 Quick Fix (5 Minutes)

### Step 1: Check Configuration Test Component

On the Contact page (`/contact`), scroll up to see the **"EmailJS Configuration Status"** box.

It will show:
- ✅ Green = Variable is set
- ❌ Red = Variable is missing

**This tells you exactly what's wrong!**

---

### Step 2: Verify .env File

1. **Check if `.env` file exists:**
   - Location: Root directory (same folder as `package.json`)
   - File name: Exactly `.env` (not `.env.txt`)

2. **Open `.env` file** and check it has values:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

**If you see empty values like this:**
```env
REACT_APP_EMAILJS_SERVICE_ID=
REACT_APP_EMAILJS_TEMPLATE_ID=
REACT_APP_EMAILJS_PUBLIC_KEY=
```

**That's the problem!** You need to fill in the values.

---

### Step 3: Get Your EmailJS Keys

If values are empty, you need to get them from EmailJS:

1. **Go to EmailJS Dashboard:** https://www.emailjs.com/
2. **Log in** to your account

3. **Get Service ID:**
   - Click "Email Services" in sidebar
   - Click on your service (e.g., Gmail)
   - Copy the **Service ID** (looks like: `service_abc123xyz`)

4. **Get Template ID:**
   - Click "Email Templates" in sidebar
   - Click on your template
   - Copy the **Template ID** (looks like: `template_xyz789abc`)

5. **Get Public Key:**
   - Click "Account" → "General"
   - Scroll to "API Keys" section
   - Copy the **Public Key** (long string)

**See `HOW_TO_GET_EMAILJS_KEYS.md` for detailed instructions with screenshots.**

---

### Step 4: Fill in .env File

1. **Open `.env` file** in any text editor
2. **Replace empty values** with your actual keys:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc123xyz
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789abc
REACT_APP_EMAILJS_PUBLIC_KEY=1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p
```

3. **Save the file**

**Important:**
- ✅ No quotes around values
- ✅ No spaces after `=`
- ✅ Use your actual values (not the examples above)

---

### Step 5: Restart Server

**CRITICAL:** Environment variables only load when server starts!

```bash
# 1. Stop server (Press Ctrl+C in terminal)
# 2. Start again:
npm start
```

---

### Step 6: Test Again

1. Go to `/contact` page
2. Check Configuration Test - should show all green ✅
3. Fill out the form
4. Submit
5. Should work now! 🎉

---

## 🔍 If Still Not Working

### Check Browser Console

1. Press **F12** in browser
2. Go to **Console** tab
3. Submit form again
4. Look for specific error messages

The console will show exactly what's wrong:
- "Service ID is missing" → Add Service ID to `.env`
- "Template ID is missing" → Add Template ID to `.env`
- "Public Key is missing" → Add Public Key to `.env`

---

## 📋 Common Issues

### Issue: .env file doesn't exist
**Solution:** Create it (see `CREATE_ENV_FILE.md`)

### Issue: .env file has empty values
**Solution:** Get keys from EmailJS and fill them in

### Issue: Server not restarted
**Solution:** Stop and start server again (`npm start`)

### Issue: Wrong values
**Solution:** Get correct values from EmailJS dashboard

### Issue: File saved as .env.txt
**Solution:** Rename to `.env` (remove .txt extension)

---

## ✅ Success Checklist

After fixing, verify:

- [ ] `.env` file exists in root directory
- [ ] All three variables have values (not empty)
- [ ] Server restarted after updating `.env`
- [ ] Configuration test shows all green ✅
- [ ] Form submits without errors
- [ ] Success message appears
- [ ] Email received at neenoland4u@gmail.com

---

## 🆘 Still Stuck?

1. **Check Configuration Test** on `/contact` page - it shows what's missing
2. **Check browser console** (F12) for specific errors
3. **Verify EmailJS setup:**
   - Service is connected
   - Template is saved
   - Public Key is correct

---

## 💡 Remember

- ✅ Environment variables must be set in `.env` file
- ✅ Server must be restarted after updating `.env`
- ✅ Values must match your EmailJS dashboard exactly
- ✅ No backend server needed - EmailJS works from frontend!

**The Configuration Test component on `/contact` page will show you exactly what's wrong!** 🔍

