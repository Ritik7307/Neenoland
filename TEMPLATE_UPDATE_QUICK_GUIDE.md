# ⚡ Quick Guide: Update EmailJS Template

## 🎯 The Fix (2 Minutes)

Your template uses wrong variable names. Here's the quick fix:

---

## 📝 What to Change

### 1. Subject Line
**Change from:**
```
Contact Us: {{title}}
```

**To:**
```
New Party Booking Enquiry - {{from_name}}
```

---

### 2. Content/Message
**Change from:**
```
A message by {{name}} has been received...
{{message}}
{{time}}
```

**To:**
```
New Party Booking Enquiry

Name: {{from_name}}
Phone Number: {{phone}}
Number of Guests: {{guests}}
Preferred Date: {{date}}

Please contact the customer to confirm the booking.
```

---

### 3. To Email
**Set to:** `neenoland4u@gmail.com`

---

## 🔧 Steps

1. Go to **EmailJS Dashboard** → **Email Templates**
2. Click your template: `template_eox1yu1`
3. **Update Subject** (see above)
4. Click **"Edit Content"**
5. **Replace content** (see above)
6. Set **"To Email"** to `neenoland4u@gmail.com`
7. Click **"Save"**

---

## ✅ Done!

After saving, test the form on your website. It should work now! 🎉

**See `HOW_TO_UPDATE_EMAILJS_TEMPLATE.md` for detailed instructions.**

