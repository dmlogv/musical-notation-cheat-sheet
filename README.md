# Musical Notation Cheat Sheet

A comprehensive, printable reference guide for musical notation that renders high-quality sheet music directly from ABC notation. This project provides a clean, distraction-free interface for musicians and music students to access essential music theory information.

## 🎵 Features

- **Complete Music Theory Reference**: Covers note lengths, ranges, mnemonics, key signatures, and intervals
- **High-Quality Rendering**: Uses the ABCJS library to render professional sheet music
- **Accessible**: Keyboard navigation and screen reader support
- **Responsive**: Works on desktop, tablet, and mobile devices
- **Auto-Updating**: Changes to the ABC file automatically update the rendered music

## 📋 Contents

The cheat sheet includes:

- **Note Lengths**: From sixteenth notes to whole notes with corresponding rests
- **Note Ranges**: Complete range from C-1 to C10 with octave notation
- **Treble and Bass Clef Notes**: All natural notes with proper positioning
- **Memory Aids**: Traditional mnemonics for both clefs
  - Treble: "Every Good Boy Does Fine" and "FACE"
  - Bass: "Good Boys Do Fine Always" and "All Cows Eat Grass"
- **Key Signatures**: All major and relative minor keys with chord symbols
- **Intervals**: Perfect, major, and minor intervals from unison to double octave

## 🚀 Quick Start

### View Online
Simply open https://dmlogv.github.io/musical-notation-cheat-sheet in any modern web browser. The page will automatically load and render the musical notation.

### Print the Cheat Sheet
1. Open the page in your browser
2. Press `Ctrl+P` (or `Cmd+P` on Mac) to open the print dialog
3. The page is optimized for A4 portrait printing with clean margins

## ��️ Technical Details

### File Structure

```
musical-notation-cheat-sheet/
├── index.html # Main web page
├── script.js # JavaScript for rendering
├── styles.css # Styling and print styles
├── musical-notation-cheat-sheet.abc # ABC notation source file
README.md # This file
```

### Technologies Used
- **ABCJS 6.2.3**: JavaScript library for rendering ABC notation
- **Vanilla HTML/CSS/JavaScript**: No frameworks or build tools required
- **ABC Notation**: Standard text-based music notation format

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📝 ABC Notation

The project uses ABC notation, a text-based format for representing musical notation. The source file `musical-notation-cheat-sheet.abc` contains:

- Multiple sections with different musical concepts
- Both treble and bass clef examples
- Chord symbols and lyrics for mnemonics
- Proper formatting for print layout

### Updating the Content
To modify the cheat sheet:
1. Edit `musical-notation-cheat-sheet.abc`
2. Refresh the browser to see changes
3. No HTML modifications required

## �� Customization

### Styling
- Modify `styles.css` to change colors, fonts, or layout
- Print styles are in the `@media print` section
- The page uses a clean, minimal design optimized for readability

### Adding Content
- Add new sections to the ABC file following the existing format
- Use ABC notation syntax for musical elements
- Include lyrics (`w:`) for text labels and mnemonics

## 🔧 Development

### Local Development
1. Clone the repository
2. Open `index.html` in a web browser
3. Make changes to the ABC file and refresh to see updates

### Deployment
The project is designed for static hosting:
- GitHub Pages
- Netlify
- Any static file server

No build process or server-side code required.

## 🖨️ Print Features

The page is specifically optimized for printing:
- A4 portrait orientation
- Clean margins (1.5cm)
- Professional sheet music layout
- No UI elements in print output
- Proper page break handling

## 🤝 Contributing

Contributions are welcome! Areas for improvement:
- Additional music theory concepts
- More mnemonic variations
- Enhanced accessibility features
- Additional language support

## 📄 License

This project is open source. Feel free to use, modify, and distribute as needed.

## �� About ABC Notation

ABC notation is a text-based format for representing musical notation. It's human-readable and widely supported by music software. The format is particularly useful for:
- Quick music transcription
- Educational materials
- Sharing music notation
- Creating reference materials

For more information about ABC notation, visit [abcnotation.com](https://abcnotation.com/).

---

*Perfect for music students, teachers, composers, and anyone who needs a quick reference for musical notation!*