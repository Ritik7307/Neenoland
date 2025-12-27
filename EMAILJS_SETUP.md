# EmailJS Setup Instructions

EmailJS allows you to send emails directly from the frontend without needing a backend server. This is much simpler than the previous setup!

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Click **Sign Up** (it's free!)
3. Create an account using your email

## Step 2: Add Email Service

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Click **Connect Account** and authorize EmailJS to access your Gmail
5. Give it a name (e.g., "Neeno Land Gmail")
6. Click **Create Service**
7. **Copy the Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Choose a template or start from scratch
4. Set up your template with these variables:

**Template Subject:**
```
New Party Booking Enquiry - {{from_name}}
```

**Template Content (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
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

**Or use simple text version:**
```
New Party Booking Enquiry

Name: {{from_name}}
Phone Number: {{phone}}
Number of Guests: {{guests}}
Preferred Date: {{date}}

Please contact the customer to confirm the booking.
```

5. Set **To Email** to: `neenoland4u@gmail.com`
6. Set **From Name** to: `{{from_name}}`
7. Click **Save**
8. **Copy the Template ID** (you'll need this later)

## Step 4: Get Public Key

1. Go to **Account** → **General** in the dashboard
2. Find **Public Key** in the API Keys section
3. **Copy the Public Key**

## Step 5: Configure Environment Variables

1. Create a `.env` file in the root directory (same level as `package.json`)
2. Add the following:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace:
- `your_service_id_here` with the Service ID from Step 2
- `your_template_id_here` with the Template ID from Step 3
- `your_public_key_here` with the Public Key from Step 4

## Step 6: Restart Development Server

1. Stop your current development server (Ctrl+C)
2. Start it again:
   ```bash
   npm start
   ```

## Step 7: Test the Form

1. Go to `http://localhost:3000/contact`
2. Fill out the enquiry form
3. Submit it
4. Check `neenoland4u@gmail.com` for the email

## Benefits of EmailJS

✅ **No backend server needed** - Everything runs from the frontend  
✅ **No Gmail App Passwords** - EmailJS handles authentication  
✅ **Free tier available** - 200 emails/month free  
✅ **Easy setup** - Just configure once  
✅ **Works in production** - No additional deployment needed  

## Troubleshooting

### Email not sending
- Check that all environment variables are set correctly
- Make sure you've restarted the dev server after adding .env
- Check browser console for any errors
- Verify your EmailJS service is connected properly

### Template variables not working
- Make sure variable names match exactly: `{{from_name}}`, `{{phone}}`, `{{guests}}`, `{{date}}`
- Variable names are case-sensitive

### Environment variables not loading
- Make sure the `.env` file is in the root directory
- Variable names must start with `REACT_APP_`
- Restart the development server after changing .env

## Free Tier Limits

- **200 emails per month** (free tier)
- If you need more, upgrade to a paid plan

## Security Note

The Public Key is safe to expose in frontend code. However, for production, you can restrict which domains can use your EmailJS service in the EmailJS dashboard under **Security** settings.

