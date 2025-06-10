// FAQ Accordion Logic
document.addEventListener('DOMContentLoaded', () => {
    // Grab all question buttons
    const questions = document.querySelectorAll('.faq-question');
  
    questions.forEach(btn => {
      btn.addEventListener('click', () => {
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        const answer = btn.nextElementSibling;      
        const icon   = btn.querySelector('.faq-icon');
  
        
        questions.forEach(otherBtn => {
          otherBtn.setAttribute('aria-expanded', 'false');
          otherBtn.querySelector('.faq-icon').textContent = '+';
          otherBtn.nextElementSibling.hidden = true;
        });
  
        // Toggle this one
        if (!isOpen) {
          btn.setAttribute('aria-expanded', 'true');
          icon.textContent = '×';
          answer.hidden = false;
        }
      });
    });
  });

  
  
  