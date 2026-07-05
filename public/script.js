window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1750);
    }
});

const mobileToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        mobileToggle.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
            mobileToggle.classList.remove('open');
        });
    });
}

// Phone button redirect to Google Form
const phoneButtons = document.querySelectorAll('.phone-btn');
const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSem4Cv9gOQ0ffEAG6drXDBrICv99zOL9jeM9FRlwemSMTaNnQ/viewform?usp=dialog';
if (phoneButtons.length) {
    phoneButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.open(googleFormUrl, '_blank', 'noopener,noreferrer');
        });
    });
}

// FAQ Accordion functionality

// FAQ Accordion functionality
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close all other items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Enhanced form handling with Formspree
const earlyAccessForm = document.getElementById('earlyAccessForm');
if (earlyAccessForm) {
    earlyAccessForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = earlyAccessForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;
        
        try {
            const formData = new FormData(earlyAccessForm);
            
            const response = await fetch(earlyAccessForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                submitBtn.textContent = '✓ Submitted Successfully!';
                submitBtn.style.background = '#10b981';
                earlyAccessForm.reset();
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
                
                console.log('Early Access Form submitted successfully');
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            submitBtn.textContent = '✗ Try Again';
            submitBtn.style.background = '#ef4444';
            console.error('Error:', error);
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
        }
    });
}

const landlordForm = document.getElementById('landlordForm');
if (landlordForm) {
    landlordForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = landlordForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;
        
        try {
            const formData = new FormData(landlordForm);
            
            const response = await fetch(landlordForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                submitBtn.textContent = '✓ Submitted Successfully!';
                submitBtn.style.background = '#10b981';
                landlordForm.reset();
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
                
                console.log('Landlord Form submitted successfully');
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            submitBtn.textContent = '✗ Try Again';
            submitBtn.style.background = '#ef4444';
            console.error('Error:', error);
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
        }
    });
}
// Navbar background on scroll
// Track form interactions
document.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('focus', () => {
        field.style.borderColor = 'var(--primary-color)';
    });
    
    field.addEventListener('blur', () => {
        field.style.borderColor = 'var(--border-color)';
    });
});

// Dynamic year in footer
const currentYear = new Date().getFullYear();
const yearElements = document.querySelectorAll('footer');
yearElements.forEach(footer => {
    const text = footer.textContent;
    if (text.includes('© 2026')) {
        footer.innerHTML = footer.innerHTML.replace('© 2026', `© ${currentYear}`);
    }
});

console.log('✨ RoomLy Landing Page - All features loaded successfully!');

const revealCards = document.querySelectorAll('.reveal-card');
if ('IntersectionObserver' in window && revealCards.length) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    revealCards.forEach(card => revealObserver.observe(card));
} else {
    revealCards.forEach(card => card.classList.add('visible'));
}

// Handle listing card clicks (if you want to add modal or navigation)
document.querySelectorAll('.listing-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        console.log('Listing clicked:', card);
        // Add navigation or modal logic here
    });
});

console.log('RoomLy Landing Page - All interactive features loaded!');