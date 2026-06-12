// Hide loading screen after animation
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 3300);
});

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
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('.problem, .solution, .how-it-works, .features, .testimonials, .referral, .faq, .investors').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Get referral link functionality
const referralLinks = document.querySelectorAll('.link-btn');
referralLinks.forEach(link => {
    if (link.textContent.includes('referral')) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const referralCode = 'ROOMLY' + Math.random().toString(36).substr(2, 9).toUpperCase();
            const referralUrl = `${window.location.origin}?ref=${referralCode}`;
            alert('Your referral link:\n\n' + referralUrl + '\n\nCopied to clipboard!');
            navigator.clipboard.writeText(referralUrl);
        });
    }
});

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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('.problem, .solution, .how-it-works, .features, .testimonials, .referral, .faq, .investors').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Mobile menu toggle (if you want to add mobile nav later)
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Get referral link functionality
const referralLinks = document.querySelectorAll('.link-btn');
referralLinks.forEach(link => {
    if (link.textContent.includes('referral')) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const referralCode = 'ROOMLY' + Math.random().toString(36).substr(2, 9).toUpperCase();
            const referralUrl = `${window.location.origin}?ref=${referralCode}`;
            alert('Your referral link:\n\n' + referralUrl + '\n\nCopied to clipboard!');
            navigator.clipboard.writeText(referralUrl);
        });
    }
});

// Investor deck email link
const investorDeckBtn = document.querySelector('a[href="mailto:hello@roomlynepal.com"]');
if (investorDeckBtn) {
    investorDeckBtn.addEventListener('click', function(e) {
        // Allow default email behavior
        console.log('Investor deck request initiated');
    });
}

// Track form interactions
document.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('focus', () => {
        field.style.borderColor = 'var(--primary-color)';
    });
    
    field.addEventListener('blur', () => {
        field.style.borderColor = 'var(--border-color)';
    });
});

// Handle listing card clicks (if you want to add modal or navigation)
document.querySelectorAll('.listing-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        console.log('Listing clicked:', card);
        // Add navigation or modal logic here
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

console.log('RoomLy Landing Page - All interactive features loaded!');