# Complete EmailJS Setup Guide for Neeno Land

This guide will walk you through setting up EmailJS for the enquiry form step-by-step.

## 📋 Prerequisites

- EmailJS account (free at https://www.emailjs.com/)
- Gmail account (or any email service)
- 10 minutes of time

---

## Step 1: Create EmailJS Account

1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up"** button (top right)
3. Sign up using:
   - Email address
   - Password
   - Or use Google/GitHub sign-in
4. Verify your email if prompted
5. You'll be redirected to the dashboard

**✅ Checkpoint:** You should see the EmailJS dashboard

---

## Step 2: Connect Gmail Service

1. In the EmailJS dashboard, click **"Email Services"** in the left sidebar
2. Click the **"Add New Service"** button
3. You'll see a list of email providers
4. Click on **"Gmail"** (or choose your preferred provider)
5. Click **"Connect Account"**
6. A popup will ask you to sign in to Google
   - Sign in with the Gmail account you want to use
   - Grant permissions to EmailJS
7. After connecting, you'll see:
   - Service name (you can rename it to "Neeno Land Gmail")
   - **Service ID** (looks like: `service_xxxxxxx`)
8. **📝 IMPORTANT:** Copy the **Service ID** - you'll need it later!

**✅ Checkpoint:** You have a connected email service with a Service ID

---

## Step 3: Create Email Template

1. In the EmailJS dashboard, click **"Email Templates"** in the left sidebar
2. Click **"Create New Template"** button
3. You'll see a template editor

### Template Configuration:

**Template Name:** `Neeno Land Enquiry Form`

**Service:** Select the Gmail service you just created

**Template ID:** Will be auto-generated (looks like: `template_xxxxxxx`)
- **📝 IMPORTANT:** Copy this Template ID - you'll need it later!

**To Email:** `neenoland4u@gmail.com`

**From Name:** `{{from_name}}`

**Subject:** 
```
New Party Booking Enquiry - {{from_name}}
```

**Content (HTML):**

Click on the **"HTML"** tab and paste this:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 10px;
      background-color: #f9f9f9;
    }
    .header {
      background: linear-gradient(135deg, #facc15 0%, #eab308 100%);
      color: #000;
      padding: 20px;
      border-radius: 10px 10px 0 0;
      text-align: center;
      font-weight: bold;
      font-size: 24px;
    }
    .content {
      background: white;
      padding: 30px;
      border-radius: 0 0 10px 10px;
    }
    .info-row {
      margin: 20px 0;
      padding: 15px;
      background: #f5f5f5;
      border-left: 4px solid #facc15;
      border-radius: 5px;
    }
    .label {
      font-weight: bold;
      color: #666;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .value {
      font-size: 18px;
      color: #000;
      margin-top: 5px;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #ddd;
      color: #666;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      🎉 New Party Booking Enquiry 🎉
    </div>
    <div class="content">
      <p>You have received a new party booking enquiry from your website:</p>
      
      <div class="info-row">
        <div class="label">Name</div>
        <div class="value">{{from_name}}</div>
      </div>
      
      <div class="info-row">
        <div class="label">Phone Number</div>
        <div class="value">{{phone}}</div>
      </div>
      
      <div class="info-row">
        <div class="label">Number of Guests</div>
        <div class="value">{{guests}}</div>
      </div>
      
      <div class="info-row">
        <div class="label">Preferred Date</div>
        <div class="value">{{date}}</div>
      </div>
      
      <div class="footer">
        <p>This enquiry was submitted from the Neeno Land website contact form.</p>
        <p>Please contact the customer at their provided phone number to confirm the booking.</p>
      </div>
    </div>
  </div>
</body>
</html>
```

**Content (Plain Text - Alternative):**

If you prefer plain text, use this in the **"Text"** tab:

```
New Party Booking Enquiry

You have received a new party booking enquiry from your website:

Name: {{from_name}}
Phone Number: {{phone}}
Number of Guests: {{guests}}
Preferred Date: {{date}}

This enquiry was submitted from the Neeno Land website contact form.
Please contact the customer at their provided phone number to confirm the booking.
```

4. Click **"Save"** button

**✅ Checkpoint:** You have a saved email template with a Template ID

---

## Step 4: Get Public Key

1. In the EmailJS dashboard, click **"Account"** in the left sidebar
2. Click **"General"** tab
3. Scroll down to **"API Keys"** section
4. You'll see **"Public Key"** (looks like: `xxxxxxxxxxxxx`)
5. **📝 IMPORTANT:** Copy the **Public Key** - you'll need it later!

**✅ Checkpoint:** You have all three required values:
- ✅ Service ID
- ✅ Template ID  
- ✅ Public Key

---

## Step 5: Configure Environment Variables

1. In your project root directory (same folder as `package.json`), create a file named `.env`
   - **Windows:** You can create it in Notepad and save as `.env` (make sure it's not `.env.txt`)
   - **Mac/Linux:** Use terminal: `touch .env`

2. Open the `.env` file and add these lines:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

3. Replace the values:
   - Replace `service_xxxxxxx` with your actual Service ID from Step 2
   - Replace `template_xxxxxxx` with your actual Template ID from Step 3
   - Replace `xxxxxxxxxxxxx` with your actual Public Key from Step 4

**Example:**
```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789
REACT_APP_EMAILJS_PUBLIC_KEY=1a2b3c4d5e6f7g8h9i0j
```

4. **Save the file**

**✅ Checkpoint:** You have a `.env` file with all three values filled in

---

## Step 6: Restart Development Server

1. **Stop** your current development server if it's running:
   - Press `Ctrl + C` in the terminal where `npm start` is running

2. **Start** the server again:
   ```bash
   npm start
   ```

3. Wait for the app to compile and open in your browser

**⚠️ Important:** Environment variables are only loaded when the server starts, so you MUST restart after creating/updating the `.env` file!

**✅ Checkpoint:** Your app is running with the new environment variables

---

## Step 7: Test the Form

1. Navigate to the Contact page:
   - Go to `http://localhost:3000/contact`
   - Or click "Contact" in the navigation menu

2. Scroll down to find the **"Book Your Party"** form

3. Fill in the form:
   - **Name:** Enter your name (e.g., "John Doe")
   - **Phone Number:** Enter 10 digits (e.g., "9876543210")
   - **Number of Guests:** Enter a number (e.g., "25")
   - **Preferred Date:** Select a future date

4. Click **"Submit Enquiry"** button

5. You should see a success message: "Thank you! Your enquiry has been submitted successfully."

6. **Check your email:** Go to `neenoland4u@gmail.com` inbox
   - You should receive a beautifully formatted email with all the enquiry details!

**✅ Checkpoint:** Form submission works and email is received!

---

## 🎉 Setup Complete!

Your enquiry form is now fully functional! Every time someone submits the form, you'll receive an email at `neenoland4u@gmail.com` with all the details.

---

## 🔧 Troubleshooting

### Email not sending?

1. **Check environment variables:**
   - Open `.env` file
   - Make sure all three values are correct
   - No extra spaces or quotes
   - Restart the server after changes

2. **Check browser console:**
   - Press `F12` to open Developer Tools
   - Go to "Console" tab
   - Look for any error messages
   - Common errors:
     - "Service ID is required" → Check `REACT_APP_EMAILJS_SERVICE_ID`
     - "Template ID is required" → Check `REACT_APP_EMAILJS_TEMPLATE_ID`
     - "Public Key is required" → Check `REACT_APP_EMAILJS_PUBLIC_KEY`

3. **Verify EmailJS setup:**
   - Go to EmailJS dashboard
   - Check that your service is connected (green status)
   - Check that your template is saved
   - Test the template manually in EmailJS dashboard

4. **Check email service:**
   - Make sure Gmail service is connected in EmailJS
   - Try disconnecting and reconnecting if needed

### Form shows error message?

- Check that all fields are filled correctly
- Phone number must be exactly 10 digits
- Date must be in the future
- Check browser console for specific errors

### Environment variables not loading?

- Make sure file is named exactly `.env` (not `.env.txt` or `.env.local`)
- File must be in the root directory (same level as `package.json`)
- Restart the development server after creating/updating `.env`
- Variable names must start with `REACT_APP_`

### Template variables showing as {{variable}}?

- Make sure variable names match exactly:
  - `{{from_name}}`
  - `{{phone}}`
  - `{{guests}}`
  - `{{date}}`
- Variable names are case-sensitive
- No spaces inside the curly braces

---

## 📊 EmailJS Free Tier Limits

- **200 emails per month** (free)
- If you exceed this, you'll need to upgrade to a paid plan
- Check your usage in EmailJS dashboard → Account → Usage

---

## 🔒 Security Notes

- **Public Key is safe to expose** in frontend code
- For production, you can restrict domains in EmailJS dashboard:
  - Go to Account → Security
  - Add your domain to allowed domains list

---

## 📝 Quick Reference

**Where to find your IDs:**

| What | Where to Find |
|------|---------------|
| Service ID | Dashboard → Email Services → Your Service → Service ID |
| Template ID | Dashboard → Email Templates → Your Template → Template ID |
| Public Key | Dashboard → Account → General → Public Key |

**Environment Variables:**
```env
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

---

## 🚀 Next Steps

1. ✅ Setup complete - form is working!
2. Test with real submissions
3. Monitor emails at `neenoland4u@gmail.com`
4. Consider upgrading EmailJS plan if you expect >200 emails/month

---

## 💡 Tips

- Keep your EmailJS dashboard open while testing
- You can see email logs in EmailJS dashboard → Logs
- Test the template in EmailJS before using it in the form
- Save your Service ID, Template ID, and Public Key in a secure place

---

**Need Help?** Check the EmailJS documentation: https://www.emailjs.com/docs/

