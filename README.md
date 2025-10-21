# Personal Portfolio - HNG Internship Stage 0 & 1

This is a multi-page personal portfolio website built as part of the HNG Internship program. It showcases my profile, provides a way to contact me, and shares my reflections about the program.

## Project Structure

This project consists of three main pages:

1. **Home Page** (`index.html`) - Personal profile card
2. **Contact Page** (`contact.html`) - Contact form with validation
3. **About Me Page** (`about.html`) - Reflections and program goals

## Features

### Home Page
* **Personal Information:** Displays my name, title, and a brief bio
* **Developer Stack:** Lists the technologies I'm proficient in
* **Social Media Links:** Provides links to my GitHub, LinkedIn, and Twitter profiles
* **Hobbies and Dislikes:** Shows a glimpse of my personality
* **Dynamic Time:** Displays the current time in milliseconds, which updates every second

### Contact Page
* **Form Validation:** Client-side validation for all form fields
* **Required Fields:** Full name, email, subject, and message
* **Email Validation:** Ensures valid email format (name@example.com)
* **Message Length Validation:** Minimum 10 characters required
* **Error Messages:** Real-time validation feedback with accessible error messages
* **Success Message:** Confirmation message displayed on successful submission
* **Accessibility:** Full keyboard navigation, ARIA labels, and proper form associations

### About Me Page
* **Bio Section:** Personal introduction and background
* **Program Goals:** My objectives for the HNG Internship
* **Low Confidence Areas:** Self-reflection on areas for improvement
* **Future Note:** A message to my future self
* **Extra Thoughts:** Additional reflections on the journey

## Technologies Used

* HTML5 (Semantic HTML)
* CSS3 (Responsive Design)
* Vanilla JavaScript (Form Validation)

## Accessibility Features

* Semantic HTML elements throughout
* ARIA labels and attributes for enhanced screen reader support
* Keyboard navigation support
* Form labels properly associated with inputs
* Error messages linked to form fields with `aria-describedby`
* Focus indicators for interactive elements

## Responsive Design

The website is fully responsive and works seamlessly across:
* Mobile devices (320px and up)
* Tablets (768px and up)
* Desktop (1024px and up)

## How to Use

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd HNG-0&1
   ```

3. Open `index.html` in your web browser, or use a local development server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

4. Navigate through the pages using the top navigation menu

## Testing

All pages include `data-testid` attributes for automated testing. Key test IDs include:

### Contact Page
- `test-contact-name` - Full name input
- `test-contact-email` - Email input
- `test-contact-subject` - Subject input
- `test-contact-message` - Message textarea
- `test-contact-submit` - Submit button
- `test-contact-error-*` - Error message containers
- `test-contact-success` - Success message

### About Page
- `test-about-page` - Main container
- `test-about-bio` - Bio section
- `test-about-goals` - Goals section
- `test-about-confidence` - Low confidence areas section
- `test-about-future-note` - Future note section
- `test-about-extra` - Extra thoughts section

## File Structure

```
HNG-0&1/
├── index.html          # Home page
├── contact.html        # Contact form page
├── about.html          # About me page
├── style.css           # Global styles
├── home.css            # Home page specific styles
├── contact.css         # Contact page specific styles
├── about.css           # About page specific styles
├── script.js           # Home page JavaScript
├── contact.js          # Contact form validation
├── images/             # Image assets
│   └── 69c194bb79b78c414aef51b98c11317b.jpg      # User avatar image
└── README.md           # Project documentation
```

## Author

**Taofeek Kassim**
- GitHub: [@taophycc](https://github.com/taophycc)
- LinkedIn: [taofeek-kassim](https://linkedin.com/in/taofeek-kassim)
- Twitter: [@taophycc](https://twitter.com/taophycc)

## License

This project is part of the HNG Internship program. For more information about HNG, visit [HNG Internship](https://hng.tech/internship).
