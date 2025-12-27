# 🔑 How to Get Your EmailJS Keys - Step by Step

This guide shows you exactly where to find each key you need for the `.env` file.

---

## 📍 Where to Find Each Key

### Key 1: Service ID

**Location:** EmailJS Dashboard → Email Services

**Steps:**
1. Go to https://www.emailjs.com/ and log in
2. Click **"Email Services"** in the left sidebar
3. You'll see your connected service (e.g., "Gmail")
4. Click on the service name or the **"Settings"** icon
5. Look for **"Service ID"** (it looks like: `service_abc123xyz`)
6. **Copy this Service ID**

**Visual Guide:**
```
Dashboard
  └── Email Services
      └── [Your Service Name]
          └── Service ID: service_xxxxxxx  ← COPY THIS
```

**Example:** `service_abc123xyz`

---

### Key 2: Template ID

**Location:** EmailJS Dashboard → Email Templates

**Steps:**
1. In EmailJS dashboard, click **"Email Templates"** in the left sidebar
2. You'll see your templates list
3. Click on your template (e.g., "Neeno Land Enquiry Form")
4. Look for **"Template ID"** (it looks like: `template_abc123xyz`)
5. **Copy this Template ID**

**Visual Guide:**
```
Dashboard
  └── Email Templates
      └── [Your Template Name]
          └── Template ID: template_xxxxxxx  ← COPY THIS
```

**Example:** `template_xyz789abc`

---

### Key 3: Public Key

**Location:** EmailJS Dashboard → Account → General

**Steps:**
1. In EmailJS dashboard, click **"Account"** in the left sidebar
2. Click **"General"** tab (if not already selected)
3. Scroll down to **"API Keys"** section
4. Look for **"Public Key"** (it's a long string of characters)
5. **Copy this Public Key**

**Visual Guide:**
```
Dashboard
  └── Account
      └── General
          └── API Keys
              └── Public Key: xxxxxxxxxxxxxx  ← COPY THIS
```

**Example:** `1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p`

---

## 📝 How to Fill Your .env File

### Step 1: Open the .env File

The `.env` file is located in your project root directory:
```
neo-land/
  └── .env  ← Open this file
```

### Step 2: Fill in the Values

Open `.env` and replace the empty values:

**Before:**
```env
REACT_APP_EMAILJS_SERVICE_ID=
REACT_APP_EMAILJS_TEMPLATE_ID=
REACT_APP_EMAILJS_PUBLIC_KEY=
```

**After (with your actual values):**
```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc123xyz
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789abc
REACT_APP_EMAILJS_PUBLIC_KEY=1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p
```

### Step 3: Save the File

- **Windows:** Press `Ctrl + S` or File → Save
- **Mac:** Press `Cmd + S`
- Make sure the file is saved as `.env` (not `.env.txt`)

---

## ✅ Verification Checklist

After filling in your `.env` file, verify:

- [ ] Service ID starts with `service_`
- [ ] Template ID starts with `template_`
- [ ] Public Key is a long string (no spaces)
- [ ] No extra spaces or quotes around the values
- [ ] File is saved as `.env` (not `.env.txt`)
- [ ] File is in the root directory (same level as `package.json`)

---

## 🔍 Quick Reference Table

| Key | Where to Find | Example Format |
|-----|---------------|----------------|
| **Service ID** | Dashboard → Email Services → Your Service | `service_abc123xyz` |
| **Template ID** | Dashboard → Email Templates → Your Template | `template_xyz789abc` |
| **Public Key** | Dashboard → Account → General → API Keys | `1a2b3c4d5e6f7g8h...` |

---

## ⚠️ Common Mistakes to Avoid

### ❌ Don't Do This:
```env
REACT_APP_EMAILJS_SERVICE_ID="service_abc123xyz"  # No quotes needed
REACT_APP_EMAILJS_SERVICE_ID= service_abc123xyz   # No space after =
REACT_APP_EMAILJS_SERVICE_ID=service_abc123xyz    # Extra space
```

### ✅ Do This:
```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc123xyz    # Correct!
```

---

## 🎯 Complete Example

Here's what a complete, correctly filled `.env` file looks like:

```env
# EmailJS Configuration
# Fill in the values below with your EmailJS credentials

# Get Service ID from: EmailJS Dashboard > Email Services > Your Service > Service ID
REACT_APP_EMAILJS_SERVICE_ID=service_abc123xyz

# Get Template ID from: EmailJS Dashboard > Email Templates > Your Template > Template ID
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789abc

# Get Public Key from: EmailJS Dashboard > Account > General > Public Key
REACT_APP_EMAILJS_PUBLIC_KEY=1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p
```

---

## 🚀 After Filling .env File

1. **Save the file**
2. **Restart your development server:**
   ```bash
   # Stop the server (Ctrl+C)
   # Then start again:
   npm start
   ```
3. **Test the form** at `http://localhost:3000/contact`

---

## 🆘 Troubleshooting

### "Service ID is required" Error
- Check that `REACT_APP_EMAILJS_SERVICE_ID` has a value
- Make sure it starts with `service_`
- No extra spaces or quotes

### "Template ID is required" Error
- Check that `REACT_APP_EMAILJS_TEMPLATE_ID` has a value
- Make sure it starts with `template_`
- No extra spaces or quotes

### "Public Key is required" Error
- Check that `REACT_APP_EMAILJS_PUBLIC_KEY` has a value
- Should be a long string without spaces
- No extra spaces or quotes

### Environment Variables Not Loading
- Make sure file is named exactly `.env` (not `.env.txt`)
- File must be in root directory (same level as `package.json`)
- **Restart the server** after creating/updating `.env`
- Variable names must start with `REACT_APP_`

---

## 📸 Visual Guide Locations

### Service ID Location:
```
EmailJS Dashboard
├── Left Sidebar
│   └── Email Services  ← Click here
│       └── [Your Service]
│           └── Service ID: service_xxxxxxx
```

### Template ID Location:
```
EmailJS Dashboard
├── Left Sidebar
│   └── Email Templates  ← Click here
│       └── [Your Template]
│           └── Template ID: template_xxxxxxx
```

### Public Key Location:
```
EmailJS Dashboard
├── Left Sidebar
│   └── Account  ← Click here
│       └── General  ← Click here
│           └── Scroll down to "API Keys"
│               └── Public Key: xxxxxxxxxxxxxx
```

---

**Need more help?** Check `EMAILJS_COMPLETE_SETUP.md` for the full setup guide!

