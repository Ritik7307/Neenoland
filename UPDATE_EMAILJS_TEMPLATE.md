# 🔧 Update Your EmailJS Template - Step by Step

Your EmailJS template is using different variable names than what the form sends. Here's how to fix it:

---

## 🐛 The Problem

**Your template uses:**

- `{{title}}`
- `{{name}}`
- `{{time}}`
- `{{message}}`

**But your form sends:**

- `{{from_name}}` - User's name
- `{{phone}}` - Phone number
- `{{guests}}` - Number of guests
- `{{date}}` - Preferred date

**These don't match!** That's why the form fails.

---

## ✅ Solution: Update Template to Match Form

### Step 1: Update Subject Line

In the "Subject" field, change from:

```
Contact Us: {{title}}
```

To:

```
New Party Booking Enquiry - {{from_name}}
```

---

### Step 2: Update Content/Message Body

Click **"Edit Content"** button, then replace the content with:

**For the main message area:**

```
New Party Booking Enquiry

You have received a new party booking enquiry from your website:

Name: {{from_name}}
Phone Number: {{phone}}
Number of Guests: {{guests}}
Preferred Date: {{date}}

Please contact the customer at their provided phone number to confirm the booking.

This enquiry was submitted from the Neeno Land website contact form.
```

---

### Step 3: Set "To Email"

1. Go to **"Settings"** tab (or look for "To Email" field)
2. Set **"To Email"** to: `neenoland4u@gmail.com`
3. Set **"From Name"** to: `{{from_name}}` (optional)

---

### Step 4: Save Template

1. Click **"Save"** button
2. Make sure you see a success message

---

## 📋 Template Variable Reference

Your template should use these exact variable names:

| Variable        | What It Contains                                   |
| --------------- | -------------------------------------------------- |
| `{{from_name}}` | User's name from form                              |
| `{{phone}}`     | Phone number from form                             |
| `{{guests}}`    | Number of guests from form                         |
| `{{date}}`      | Formatted date (e.g., "Monday, December 31, 2025") |

---

## 🎨 Optional: HTML Email Template

If you want a nicer looking email, use this HTML in the content editor:

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
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">🎉 New Party Booking Enquiry 🎉</div>
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

        <p
          style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; text-align: center;"
        >
          This enquiry was submitted from the Neeno Land website contact
          form.<br />
          Please contact the customer at their provided phone number to confirm
          the booking.
        </p>
      </div>
    </div>
  </body>
</html>
```

---

## ✅ After Updating Template

1. **Save the template**
2. **Test it manually** in EmailJS dashboard (click "Test" button)
3. **Try submitting the form** on your website
4. **Check email** at `neenoland4u@gmail.com`

---

## 🔍 Verification Checklist

- [ ] Subject line uses: `New Party Booking Enquiry - {{from_name}}`
- [ ] Content uses: `{{from_name}}`, `{{phone}}`, `{{guests}}`, `{{date}}`
- [ ] "To Email" is set to: `neenoland4u@gmail.com`
- [ ] Template is saved
- [ ] Test email works from EmailJS dashboard

---

## 🆘 Still Not Working?

1. **Check browser console (F12)** for specific error
2. **Verify variable names match exactly** (case-sensitive!)
3. **Test template manually** in EmailJS dashboard
4. **Make sure template is saved** (click Save button)

**The key is matching the variable names exactly!** 🎯
