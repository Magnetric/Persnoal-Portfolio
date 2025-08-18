# Professional Resume - Hao Xu

This folder contains two versions of your professional resume in HTML format, designed to be easily converted to PDF.

## Files

1. **`resume.html`** - Standard HTML resume with print-optimized CSS
2. **`resume-paged.html`** - Enhanced version using Paged.js for better PDF control

## How to Convert to PDF

### Method 1: Browser Print (Recommended)
1. Open either `resume.html` or `resume-paged.html` in your web browser
2. Press `Ctrl+P` (Windows) or `Cmd+P` (Mac) to open the print dialog
3. Select "Save as PDF" as the destination
4. Choose A4 paper size
5. Set margins to "Minimum" or "None"
6. Click "Save" to download the PDF

### Method 2: Using Paged.js (Advanced)
The `resume-paged.html` file includes Paged.js for better page control:
- Automatically handles page breaks
- Better typography control
- Consistent formatting across different browsers

### Method 3: Online Tools
You can also use online HTML to PDF converters:
- **WeasyPrint** (Python-based)
- **Puppeteer** (Node.js-based)
- **wkhtmltopdf** (Command-line tool)

## Features

### Professional Design
- Clean, modern layout
- Professional color scheme (blue accent)
- Optimized typography using Inter font
- Print-friendly formatting

### Content Sections
- **Header**: Name, title, and contact information
- **Professional Summary**: Concise overview of skills and experience
- **Technical Skills**: Organized by categories (Data Analytics, Engineering, Visualization, Domain Expertise)
- **Professional Experience**: Detailed work history with achievements
- **Education**: Academic background
- **Key Projects**: Highlighted projects with technologies used

### Print Optimization
- Responsive design that works on screen and print
- Proper page break controls
- Optimized font sizes for readability
- Clean margins and spacing

## Customization

You can easily customize the resume by:
1. Editing the HTML content directly
2. Modifying the CSS styles in the `<style>` section
3. Adding or removing sections as needed
4. Adjusting colors, fonts, and layout

## Tips for Best Results

1. **Use the Paged.js version** (`resume-paged.html`) for the most consistent PDF output
2. **Test the print preview** before saving to ensure proper formatting
3. **Check page breaks** to ensure content doesn't get cut off
4. **Verify all links** work correctly in the PDF version
5. **Consider file size** - the HTML files are lightweight and should generate small PDFs

## Browser Compatibility

Both files work well with:
- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

For the best PDF generation results, use Chrome or Chromium browsers.

## File Structure

```
Portfolio/
├── resume.html          # Standard resume version
├── resume-paged.html    # Paged.js enhanced version
└── RESUME-README.md     # This file
```

The resume is based on your portfolio content and optimized for professional job applications in the data science and IT fields.
