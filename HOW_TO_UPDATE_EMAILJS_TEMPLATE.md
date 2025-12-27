# 📝 How to Update EmailJS Template - Step by Step

Your template needs to match the variables your form sends. Here's exactly how to update it:

---

## 🎯 What You Need to Change

**Current template uses:**
- `{{title}}`
- `{{name}}`
- `{{time}}`
- `{{message}}`

**Needs to use:**
- `{{from_name}}` ← User's name
- `{{phone}}` ← Phone number
- `{{guests}}` ← Number of guests
- `{{date}}` ← Preferred date

---

## 📋 Step-by-Step Instructions

### Step 1: Go to EmailJS Dashboard

1. Open your browser
2. Go to: **https://www.emailjs.com/**
3. **Log in** to your account

---

### Step 2: Open Your Template

1. In the left sidebar, click **"Email Templates"**
2. Find and click on your template: **`template_eox1yu1`**
   - Or look for the template you created earlier

---

### Step 3: Update Subject Line

1. You'll see a field labeled **"Subject *"** (with asterisk)
2. **Delete** the current content: `Contact Us: {{title}}`
3. **Type** this instead:
   ```
   New Party Booking Enquiry - {{from_name}}
   ```

---

### Step 4: Update Content/Message Body

1. Look for the **"Content *"** section
2. Click the **"Edit Content"** button (has a pencil icon)
3. You'll see an editor open

4. **Delete** all the current content (the preview with `{{name}}`, `{{time}}`, `{{message}}`)

5. **Paste** this new content:

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

6. **Click "Save"** or "Done" in the editor

---

### Step 5: Set "To Email" Address

1. Look for **"To Email"** field (might be in Settings tab or in the main template view)
2. **Set it to:** `neenoland4u@gmail.com`
3. Make sure it's exactly this email address

---

### Step 6: Set "From Name" (Optional)

1. Look for **"From Name"** field
2. **Set it to:** `{{from_name}}` (this will show the user's name as sender)
   - Or you can use: `Neeno Land Website`

---

### Step 7: Save the Template

1. Scroll to the bottom of the page
2. Click the **"Save"** button (usually green or blue)
3. Wait for confirmation message: "Template saved successfully"

---

## ✅ Verification Checklist

After updating, verify:

- [ ] Subject line is: `New Party Booking Enquiry - {{from_name}}`
- [ ] Content uses: `{{from_name}}`, `{{phone}}`, `{{guests}}`, `{{date}}`
- [ ] "To Email" is: `neenoland4u@gmail.com`
- [ ] Template is saved (you see success message)
- [ ] No old variables like `{{title}}`, `{{name}}`, `{{time}}`, `{{message}}` remain

---

## 🧪 Test the Template

Before testing on your website, test it in EmailJS:

1. In the template page, look for **"Test"** or **"Send Test Email"** button
2. Click it
3. Fill in test values:
   - `from_name`: John Doe
   - `phone`: 9876543210
   - `guests`: 25
   - `date`: Monday, December 31, 2025
4. Click **"Send Test"**
5. Check your email at `neenoland4u@gmail.com`
6. If you receive the test email correctly, the template is working! ✅

---

## 🎨 Optional: Make It Look Better (HTML Email)

If you want a nicer looking email, you can use HTML. In the content editor:

1. Click **"HTML"** tab (if available)
2. **Paste** this HTML code:

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
      background-color: #f9f9f9;
    }
    .header {
      background: linear-gradient(135deg, #facc15 0%, #eab308 100%);
      color: #000;
      padding: 20px;
      text-align: center;
      font-weight: bold;
      font-size: 24px;
      border-radius: 10px 10px 0 0;
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
      
      <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; text-align: center;">
        This enquiry was submitted from the Neeno Land website contact form.<br>
        Please contact the customer at their provided phone number to confirm the booking.
      </p>
    </div>
  </div>
</body>
</html>
```

3. **Save** the template

---

## 🔍 Quick Reference: Variable Names

Make sure you use these **exact** variable names (case-sensitive!):

| Variable | What It Shows |
|----------|--------------|
| `{{from_name}}` | User's name |
| `{{phone}}` | Phone number |
| `{{guests}}` | Number of guests |
| `{{date}}` | Preferred date (formatted) |

**Important:** 
- Use double curly braces: `{{variable_name}}`
- No spaces inside braces
- Exact spelling and case

---

## 🆘 Common Issues

### Issue: Variables not showing in email
**Solution:** 
- Make sure you use `{{from_name}}` not `{{name}}`
- Check spelling exactly matches
- Save template after changes

### Issue: Template not saving
**Solution:**
- Scroll down to find "Save" button
- Wait for success message
- Refresh page and check if changes are there

### Issue: Test email not received
**Solution:**
- Check spam folder
- Verify "To Email" is set correctly
- Make sure EmailJS service is connected

---

## ✅ After Updating Template

1. **Save the template** ✅
2. **Test it manually** in EmailJS dashboard ✅
3. **Go to your website** (`/contact` page)
4. **Submit the form** with test data
5. **Check email** at `neenoland4u@gmail.com`
6. **Should work now!** 🎉

---

## 📝 Summary

**What to change:**
1. Subject: `New Party Booking Enquiry - {{from_name}}`
2. Content: Use `{{from_name}}`, `{{phone}}`, `{{guests}}`, `{{date}}`
3. To Email: `neenoland4u@gmail.com`
4. Save template

**That's it!** Once you save the template with the correct variables, your form should work! 🚀

