# ⚡ Quick Fix Guide - Form Submission Error

If you're getting "Failed to submit enquiry" error, try these steps in order:

---

## 🚨 Most Common Issue: Environment Variables Not Set

### Fix This First:

1. **Check if `.env` file exists:**
   - Location: Root directory (same folder as `package.json`)
   - File name: `.env` (not `.env.txt`)

2. **Open `.env` file and check it has values:**
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx    ← Must have a value!
   REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx ← Must have a value!
   REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx     ← Must have a value!
   ```

3. **If values are empty or missing:**
   - Get your keys from EmailJS dashboard (see `HOW_TO_GET_EMAILJS_KEYS.md`)
   - Fill in the values
   - Save the file

4. **RESTART YOUR SERVER:**
   ```bash
   # Stop server (Ctrl+C)
   npm start
   ```

---

## 🔍 Check Browser Console

1. Press **F12** in your browser
2. Go to **Console** tab
3. Submit the form again
4. Look for error messages

**The new error handling will tell you exactly what's wrong:**
- "EmailJS Service ID is missing" → Fill in Service ID in `.env`
- "EmailJS Template ID is missing" → Fill in Template ID in `.env`
- "EmailJS Public Key is missing" → Fill in Public Key in `.env`

---

## ✅ Quick Test

In browser console (F12), type:
```javascript
console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
```

**If you see:**
- `undefined` → Environment variable not loaded (restart server)
- `""` (empty string) → Value not set in `.env` file
- `"service_xxxxxxx"` → ✅ Working correctly!

---

## 🔄 Restart Server

**This is the #1 fix!** Environment variables only load when server starts.

```bash
# 1. Stop server (Ctrl+C)
# 2. Start again:
npm start
```

---

## 📋 30-Second Checklist

- [ ] `.env` file exists in root directory
- [ ] All three variables have values (not empty)
- [ ] Server restarted after creating/updating `.env`
- [ ] Checked browser console for specific error
- [ ] EmailJS service is connected
- [ ] EmailJS template is saved

---

## 🆘 Still Not Working?

Read the detailed guide: `TROUBLESHOOTING_FORM_ERRORS.md`

---

**Most likely issue:** Environment variables not set or server not restarted! 🔄

