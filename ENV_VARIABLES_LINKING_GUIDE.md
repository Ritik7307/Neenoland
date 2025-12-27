# 🔗 Environment Variables Linking Guide

This guide shows you exactly how the environment variables link from EmailJS → `.env` → Your Form.

---

## 📊 Complete Flow Diagram

```
EmailJS Dashboard                    .env File                    EnquiryForm.js
─────────────────                   ────────                    ──────────────
                                     
Service ID        ────────>  REACT_APP_EMAILJS_SERVICE_ID  ────>  serviceId
(from Services)                    (in .env)                      (used in code)

Template ID      ────────>  REACT_APP_EMAILJS_TEMPLATE_ID  ────>  templateId
(from Templates)                  (in .env)                      (used in code)

Public Key       ────────>  REACT_APP_EMAILJS_PUBLIC_KEY   ────>  publicKey
(from Account)                   (in .env)                      (used in code)
```

---

## 🔄 Step-by-Step Linking Process

### Step 1: Get Keys from EmailJS

**Location 1: Service ID**
```
EmailJS Dashboard
  └── Email Services
      └── [Your Service]
          └── Service ID: service_abc123xyz  ← COPY THIS
```

**Location 2: Template ID**
```
EmailJS Dashboard
  └── Email Templates
      └── [Your Template]
          └── Template ID: template_xyz789abc  ← COPY THIS
```

**Location 3: Public Key**
```
EmailJS Dashboard
  └── Account
      └── General
          └── API Keys
              └── Public Key: 1a2b3c4d5e6f...  ← COPY THIS
```

---

### Step 2: Add to .env File

Open `.env` file in your project root and add the values:

```env
# Service ID from EmailJS Dashboard > Email Services
REACT_APP_EMAILJS_SERVICE_ID=service_abc123xyz

# Template ID from EmailJS Dashboard > Email Templates
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789abc

# Public Key from EmailJS Dashboard > Account > General
REACT_APP_EMAILJS_PUBLIC_KEY=1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p
```

**Important:**
- ✅ No quotes around values
- ✅ No spaces after `=`
- ✅ Replace with YOUR actual values

---

### Step 3: How Code Uses These Variables

The form component (`src/components/EnquiryForm.js`) reads these variables:

```javascript
// Line 85-87: Reading from environment variables
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

// Line 100-105: Using them to send email
await emailjs.send(
  serviceId,      // ← From REACT_APP_EMAILJS_SERVICE_ID
  templateId,      // ← From REACT_APP_EMAILJS_TEMPLATE_ID
  templateParams,
  publicKey       // ← From REACT_APP_EMAILJS_PUBLIC_KEY
);
```

---

## 🎯 Variable Name Mapping

| EmailJS Location | .env Variable Name | Code Variable | Purpose |
|-----------------|-------------------|---------------|---------|
| Services → Service ID | `REACT_APP_EMAILJS_SERVICE_ID` | `serviceId` | Identifies which email service to use |
| Templates → Template ID | `REACT_APP_EMAILJS_TEMPLATE_ID` | `templateId` | Identifies which email template to use |
| Account → Public Key | `REACT_APP_EMAILJS_PUBLIC_KEY` | `publicKey` | Authenticates API requests |

---

## ✅ Verification Checklist

After setting up, verify each link:

### 1. EmailJS → .env
- [ ] Service ID copied from EmailJS to `.env`
- [ ] Template ID copied from EmailJS to `.env`
- [ ] Public Key copied from EmailJS to `.env`

### 2. .env → Code
- [ ] `.env` file is in root directory
- [ ] Variable names start with `REACT_APP_`
- [ ] No syntax errors in `.env` file
- [ ] Server restarted after creating/updating `.env`

### 3. Code → EmailJS
- [ ] Form submits without errors
- [ ] Email received at `neenoland4u@gmail.com`
- [ ] Email contains correct form data

---

## 🔍 How to Verify It's Working

### Test 1: Check Environment Variables Loaded

1. Open browser console (F12)
2. Go to Console tab
3. Type: `console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID)`
4. You should see your Service ID (not `undefined`)

### Test 2: Submit Form

1. Go to `/contact` page
2. Fill out the form
3. Submit
4. Check for success message
5. Check email inbox

### Test 3: Check for Errors

1. Open browser console (F12)
2. Submit form
3. Look for any error messages
4. Common errors:
   - `Service ID is required` → Check `.env` file
   - `Template ID is required` → Check `.env` file
   - `Public Key is required` → Check `.env` file

---

## 📝 Complete Example

Here's a complete example showing the full flow:

### EmailJS Dashboard Values:
```
Service ID:    service_abc123xyz
Template ID:   template_xyz789abc
Public Key:    1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p
```

### .env File:
```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc123xyz
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789abc
REACT_APP_EMAILJS_PUBLIC_KEY=1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p
```

### Code Usage:
```javascript
// These read from .env automatically
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
// → serviceId = "service_abc123xyz"

const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
// → templateId = "template_xyz789abc"

const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
// → publicKey = "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p"

// Used to send email
await emailjs.send(serviceId, templateId, templateParams, publicKey);
```

---

## 🆘 Troubleshooting Links

### Problem: Variables are `undefined`

**Check:**
1. `.env` file exists in root directory
2. Variable names start with `REACT_APP_`
3. Server was restarted after creating `.env`
4. No typos in variable names

**Solution:**
- Restart server: `npm start`
- Check `.env` file location
- Verify variable names match exactly

### Problem: Email not sending

**Check:**
1. All three variables have values
2. Values match EmailJS dashboard exactly
3. No extra spaces or quotes
4. Service is connected in EmailJS
5. Template is saved in EmailJS

**Solution:**
- Verify values in EmailJS dashboard
- Copy values again to `.env`
- Restart server

---

## 🎓 Understanding the Flow

1. **EmailJS Dashboard** → Where you configure email service and templates
2. **.env File** → Stores your EmailJS credentials securely
3. **React Code** → Reads from `.env` and uses values to send emails
4. **EmailJS API** → Receives request and sends email
5. **Your Inbox** → Receives the enquiry email

---

## 📚 Related Guides

- `HOW_TO_GET_EMAILJS_KEYS.md` - Where to find each key
- `CREATE_ENV_FILE.md` - How to create .env file
- `EMAILJS_COMPLETE_SETUP.md` - Full setup guide

---

**Remember:** Environment variables are only loaded when the server starts, so **always restart** after updating `.env`!

