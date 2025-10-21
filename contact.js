// Form validation and submission handling
const form = document.getElementById('contactForm');
const fullNameInput = document.querySelector('[data-testid="test-contact-name"]');
const emailInput = document.querySelector('[data-testid="test-contact-email"]');
const subjectInput = document.querySelector('[data-testid="test-contact-subject"]');
const messageInput = document.querySelector('[data-testid="test-contact-message"]');
const successMessage = document.querySelector('[data-testid="test-contact-success"]');

const nameError = document.querySelector('[data-testid="test-contact-error-name"]');
const emailError = document.querySelector('[data-testid="test-contact-error-email"]');
const subjectError = document.querySelector('[data-testid="test-contact-error-subject"]');
const messageError = document.querySelector('[data-testid="test-contact-error-message"]');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validation functions
function validateFullName() {
  const value = fullNameInput.value.trim();
  
  if (!value) {
    nameError.textContent = 'Full name is required.';
    fullNameInput.classList.add('invalid');
    fullNameInput.setAttribute('aria-invalid', 'true');
    return false;
  }
  
  nameError.textContent = '';
  fullNameInput.classList.remove('invalid');
  fullNameInput.setAttribute('aria-invalid', 'false');
  return true;
}

function validateEmail() {
  const value = emailInput.value.trim();
  
  if (!value) {
    emailError.textContent = 'Email is required.';
    emailInput.classList.add('invalid');
    emailInput.setAttribute('aria-invalid', 'true');
    return false;
  }
  
  if (!emailRegex.test(value)) {
    emailError.textContent = 'Please enter a valid email address (e.g., name@example.com).';
    emailInput.classList.add('invalid');
    emailInput.setAttribute('aria-invalid', 'true');
    return false;
  }
  
  emailError.textContent = '';
  emailInput.classList.remove('invalid');
  emailInput.setAttribute('aria-invalid', 'false');
  return true;
}

function validateSubject() {
  const value = subjectInput.value.trim();
  
  if (!value) {
    subjectError.textContent = 'Subject is required.';
    subjectInput.classList.add('invalid');
    subjectInput.setAttribute('aria-invalid', 'true');
    return false;
  }
  
  subjectError.textContent = '';
  subjectInput.classList.remove('invalid');
  subjectInput.setAttribute('aria-invalid', 'false');
  return true;
}

function validateMessage() {
  const value = messageInput.value.trim();
  
  if (!value) {
    messageError.textContent = 'Message is required.';
    messageInput.classList.add('invalid');
    messageInput.setAttribute('aria-invalid', 'true');
    return false;
  }
  
  if (value.length < 10) {
    messageError.textContent = 'Message must be at least 10 characters long.';
    messageInput.classList.add('invalid');
    messageInput.setAttribute('aria-invalid', 'true');
    return false;
  }
  
  messageError.textContent = '';
  messageInput.classList.remove('invalid');
  messageInput.setAttribute('aria-invalid', 'false');
  return true;
}

// Real-time validation on blur
fullNameInput.addEventListener('blur', validateFullName);
emailInput.addEventListener('blur', validateEmail);
subjectInput.addEventListener('blur', validateSubject);
messageInput.addEventListener('blur', validateMessage);

// Clear error on input
fullNameInput.addEventListener('input', () => {
  if (fullNameInput.classList.contains('invalid')) {
    validateFullName();
  }
});

emailInput.addEventListener('input', () => {
  if (emailInput.classList.contains('invalid')) {
    validateEmail();
  }
});

subjectInput.addEventListener('input', () => {
  if (subjectInput.classList.contains('invalid')) {
    validateSubject();
  }
});

messageInput.addEventListener('input', () => {
  if (messageInput.classList.contains('invalid')) {
    validateMessage();
  }
});

// Form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Hide success message if visible
  successMessage.style.display = 'none';
  
  // Validate all fields
  const isNameValid = validateFullName();
  const isEmailValid = validateEmail();
  const isSubjectValid = validateSubject();
  const isMessageValid = validateMessage();
  
  // If all validations pass
  if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
    // Show success message
    successMessage.style.display = 'block';
    
    // Reset form
    form.reset();
    
    // Remove any invalid states
    fullNameInput.classList.remove('invalid');
    emailInput.classList.remove('invalid');
    subjectInput.classList.remove('invalid');
    messageInput.classList.remove('invalid');
    
    // Clear aria-invalid attributes
    fullNameInput.removeAttribute('aria-invalid');
    emailInput.removeAttribute('aria-invalid');
    subjectInput.removeAttribute('aria-invalid');
    messageInput.removeAttribute('aria-invalid');
    
    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Focus on success message for screen readers
    successMessage.focus();
  } else {
    // Focus on first invalid field
    if (!isNameValid) {
      fullNameInput.focus();
    } else if (!isEmailValid) {
      emailInput.focus();
    } else if (!isSubjectValid) {
      subjectInput.focus();
    } else if (!isMessageValid) {
      messageInput.focus();
    }
  }
});

