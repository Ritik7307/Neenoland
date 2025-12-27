# 📝 How to Create Your .env File

Since `.env` files are protected, here's how to create it manually:

## Method 1: Using Notepad (Windows)

1. Open **Notepad**
2. Copy and paste this content:

```env
# EmailJS Configuration
# Fill in the values below with your EmailJS credentials

# Get Service ID from: EmailJS Dashboard > Email Services > Your Service > Service ID
REACT_APP_EMAILJS_SERVICE_ID=

# Get Template ID from: EmailJS Dashboard > Email Templates > Your Template > Template ID
REACT_APP_EMAILJS_TEMPLATE_ID=

# Get Public Key from: EmailJS Dashboard > Account > General > Public Key
REACT_APP_EMAILJS_PUBLIC_KEY=
```

3. Click **File** → **Save As**
4. Navigate to your project root folder: `C:\Users\Ritik prajapati\Desktop\project\neo-land`
5. In the "File name" field, type: `.env` (including the dot at the start)
6. In the "Save as type" dropdown, select **"All Files (_._)"**
7. Click **Save**

**⚠️ Important:** Make sure it saves as `.env` and NOT `.env.txt`

---

## Method 2: Using Command Line

1. Open **Command Prompt** or **PowerShell**
2. Navigate to your project:
   ```bash
   cd "C:\Users\Ritik prajapati\Desktop\project\neo-land"
   ```
3. Create the file:
   ```bash
   type nul > .env
   ```
4. Open it in Notepad:
   ```bash
   notepad .env
   ```
5. Paste the content from Method 1 above
6. Save and close

---

## Method 3: Copy from Example File

1. In your project folder, you'll see `env.example`
2. Copy `env.example` and rename it to `.env`
3. Open `.env` in any text editor
4. Fill in your EmailJS credentials

---

## ✅ After Creating .env File

1. **Fill in your EmailJS keys** (see `HOW_TO_GET_EMAILJS_KEYS.md`)
2. **Save the file**
3. **Restart your development server:**
   ```bash
   # Stop server (Ctrl+C)
   npm start
   ```

---

## 🔍 Verify .env File Location

Your `.env` file should be here:

```
neo-land/
├── .env              ← Should be here (same level as package.json)
├── package.json
├── src/
└── public/
```

---

## ⚠️ Common Issues

### File saved as .env.txt instead of .env

**Solution:**

- Rename the file to remove `.txt` extension
- Or use Method 2 (command line) to create it

### Can't see .env file

**Solution:**

- In Windows File Explorer, go to **View** → Check **"Show hidden files"**
- Or use command line: `dir /a` to see all files

---

## 📋 Next Steps

After creating `.env`:

1. Read `HOW_TO_GET_EMAILJS_KEYS.md` to get your keys
2. Fill in the three values in `.env`
3. Save the file
4. Restart server (`npm start`)
5. Test the form!
