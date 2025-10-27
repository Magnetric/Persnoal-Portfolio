// Language switching functionality
let currentLanguage = 'en';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference or default to English
    const savedLanguage = localStorage.getItem('portfolioLanguage') || 'en';
    setLanguage(savedLanguage);
    
    // Add event listeners to language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    console.log('Found language buttons on page load:', langButtons.length);
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            console.log('Language button clicked:', lang);
            setLanguage(lang);
        });
    });
});

// Function to set language
function setLanguage(lang) {
    console.log('Setting language to:', lang);
    currentLanguage = lang;
    localStorage.setItem('portfolioLanguage', lang);
    
    // Update active button state
    const langButtons = document.querySelectorAll('.lang-btn');
    console.log('Found language buttons:', langButtons.length);
    langButtons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
        }
    });
    
    // Update all translatable elements
    updatePageLanguage();
}

// Function to update page content based on selected language
function updatePageLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    console.log('Found translatable elements:', elements.length);
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key);
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.innerHTML = translation;
            }
        } else {
            console.log('No translation found for key:', key);
        }
    });
}

// Function to get translation by key
function getTranslation(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            return null;
        }
    }
    
    return value;
}

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

// Create overlay if it doesn't exist
let mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
if (!mobileNavOverlay) {
    mobileNavOverlay = document.createElement('div');
    mobileNavOverlay.className = 'mobile-nav-overlay';
    document.body.appendChild(mobileNavOverlay);
}

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    mobileNavOverlay.classList.toggle('active');
});

// Close mobile menu when clicking overlay
mobileNavOverlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('active');
    mobileNavOverlay.classList.remove('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    // Check if mobile nav is active
    if (mobileNav.classList.contains('active')) {
        // Check if click is outside mobile nav and not on hamburger
        if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            mobileNavOverlay.classList.remove('active');
        }
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        if (mobileNavOverlay) {
            mobileNavOverlay.classList.remove('active');
        }
    });
});

// Close mobile menu when clicking on close button
const mobileNavClose = document.querySelector('.mobile-nav-close');
if (mobileNavClose) {
    mobileNavClose.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        if (mobileNavOverlay) {
            mobileNavOverlay.classList.remove('active');
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
            });
        }
    });
}, observerOptions);

// Observe skills section
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}



// Add active class to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
            const scrollPosition = window.scrollY + 100; // Add offset for more precise activation
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Removed typing effect function

// Initialize page when loads
window.addEventListener('load', () => {
    // Initialize navigation active state
    const navLinks = document.querySelectorAll('.nav-menu a');
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
    
    // Update age display
    updateAge();
    
    // Initialize section observer for mobile navigation
    initializeSectionObserver();
});

// Section observer for mobile navigation highlighting
function initializeSectionObserver() {
    const sections = document.querySelectorAll('section[id]');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    
    // Create intersection observer
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentSectionId = entry.target.id;
                updateMobileNavActive(currentSectionId);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of section is visible
        rootMargin: '-10% 0px -10% 0px' // Less aggressive margin
    });
    
    // Observe all sections
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Function to update mobile navigation active state
    function updateMobileNavActive(sectionId) {
        // Remove active class from all mobile nav links
        mobileNavLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to corresponding link
        const activeLink = document.querySelector(`.mobile-nav a[href="#${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
    
    // Update active state when mobile nav is opened
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    
    hamburger.addEventListener('click', () => {
        // Small delay to ensure nav is visible before updating
        setTimeout(() => {
            const currentSection = getCurrentVisibleSection();
            if (currentSection) {
                updateMobileNavActive(currentSection);
            }
        }, 100);
    });
    
    // Handle mobile nav link clicks for active state
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active class from all links
            mobileNavLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');
        });
    });
    
    // Function to get currently visible section
    function getCurrentVisibleSection() {
        const sections = document.querySelectorAll('section[id]');
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset;
        
        let bestMatch = 'home';
        let bestScore = 0;
        
        for (let section of sections) {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionBottom = rect.bottom;
            
            // Calculate how much of the section is visible
            const visibleTop = Math.max(0, Math.min(windowHeight, sectionBottom) - Math.max(0, sectionTop));
            const visibleHeight = Math.min(sectionBottom, windowHeight) - Math.max(sectionTop, 0);
            const visibilityScore = visibleHeight / windowHeight;
            
            // Check if section is significantly visible (more than 20%)
            if (visibilityScore > 0.2 && sectionTop < windowHeight * 0.8) {
                if (visibilityScore > bestScore) {
                    bestScore = visibilityScore;
                    bestMatch = section.id;
                }
            }
        }
        
        return bestMatch;
    }
}

// Add fade-in animation for project cards
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    projectObserver.observe(card);
});

// Add counter animation for stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat h3');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                const increment = target / 50;
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        stat.textContent = Math.ceil(current) + '+';
                        requestAnimationFrame(updateCounter);
                    } else {
                        stat.textContent = target + '+';
                    }
                };
                
                updateCounter();
            });
        }
    });
}, {
    threshold: 0.5
});



// Phone number copy functionality
document.querySelectorAll('.phone-number').forEach(element => {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        
        const phoneNumber = this.getAttribute('data-phone');
        
        // Copy to clipboard
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(phoneNumber).then(() => {
                showCopyNotification(`${phoneNumber} copied!`);
            }).catch(() => {
                fallbackCopy(phoneNumber, 'phone');
            });
        } else {
            fallbackCopy(phoneNumber, 'phone');
        }
    });
});

// WeChat copy functionality
document.querySelectorAll('.wechat-copy').forEach(element => {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        
        const wechatId = this.getAttribute('data-wechat');
        
        // Copy to clipboard
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(wechatId).then(() => {
                showCopyNotification('WeChat ID copied!');
            }).catch(() => {
                fallbackCopy(wechatId, 'wechat');
            });
        } else {
            fallbackCopy(wechatId, 'wechat');
        }
    });
});

// Fallback copy method for older browsers
function fallbackCopy(text, type = 'phone') {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        if (type === 'wechat') {
            showCopyNotification('WeChat ID copied!');
        } else if (type === 'phone') {
            showCopyNotification(`${text} copied!`);
        } else {
            showCopyNotification(`${text} copied!`);
        }
    } catch (err) {
        if (type === 'wechat') {
            showCopyNotification('Failed to copy WeChat ID');
        } else if (type === 'phone') {
            showCopyNotification(`Failed to copy ${text}`);
        } else {
            showCopyNotification(`Failed to copy ${text}`);
        }
    }
    
    document.body.removeChild(textArea);
}

// Show copy notification
function showCopyNotification(message) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.copy-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: var(--bg-primary);
        padding: 12px 20px;
        border-radius: 8px;
        font-weight: 500;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    // Add slide-in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
    
    // Add slide-out animation
    const slideOutStyle = document.createElement('style');
    slideOutStyle.textContent = `
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(slideOutStyle);
}

// Calculate age dynamically
function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    // If birthday hasn't occurred yet this year, subtract 1 from age
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

// Update age display
function updateAge() {
    const birthDate = '1998-06-17'; // Your birth date
    const currentAge = calculateAge(birthDate);
    const ageElement = document.getElementById('current-age');
    
    if (ageElement) {
        ageElement.textContent = currentAge;
    }
}

// Skills sorting functionality
function sortSkills(categoryId) {
    const category = document.querySelector(`[data-category="${categoryId}"]`);
    const skillItems = category.querySelector('.skill-items');
    const sortBtn = category.querySelector('.sort-btn');
    const isAscending = sortBtn.classList.contains('asc');
    
    // Get all skill items and their progress values
    const items = Array.from(skillItems.querySelectorAll('.skill-item'));
    const itemsWithProgress = items.map(item => {
        const progressBar = item.querySelector('.skill-progress');
        const width = parseInt(progressBar.style.width);
        return { item, progress: width };
    });
    
    // Sort by progress value
    if (isAscending) {
        // Sort from low to high
        itemsWithProgress.sort((a, b) => a.progress - b.progress);
        sortBtn.classList.remove('asc');
        sortBtn.innerHTML = '<i class="fas fa-sort-amount-down"></i>';
    } else {
        // Sort from high to low
        itemsWithProgress.sort((a, b) => b.progress - a.progress);
        sortBtn.classList.add('asc');
        sortBtn.innerHTML = '<i class="fas fa-sort-amount-up"></i>';
    }
    
    // Reorder the items in the DOM
    itemsWithProgress.forEach(({ item }) => {
        skillItems.appendChild(item);
    });
    
    // Add smooth animation
    items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'all 0.3s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100);
    });
}

// Lightbox functionality
let currentProject = 0;
let currentImage = 0;
let wheelTimeout = null; // For debouncing wheel events
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const prevBtn = document.querySelector('.lightbox-prev');
const nextBtn = document.querySelector('.lightbox-next');

// Project images data (replace with actual image URLs)
const projectImages = [
    // Project 0: Dashboard
    [
        'assets/images/projects/project1/project1-1.jpg',
        'assets/images/projects/project1/project1-2.jpg',
        'assets/images/projects/project1/project1-3.jpg',
        'assets/images/projects/project1/project1-4.jpg',
        'assets/images/projects/project1/project1-5.jpg',
        'assets/images/projects/project1/project1-6.jpg'
    ],
    // Project 1: Thesis
    [
        'assets/images/projects/project3/Project 3.1.jpg',
        'assets/images/projects/project3/Project 3.2.jpg',
        'assets/images/projects/project3/Project 3.3.jpg',
        'assets/images/projects/project3/Project 3.4.jpg'
    ],
    // Project 2: Website
    [
        'assets/images/projects/project2/Project 2.1.png',
        'assets/images/projects/project2/Project 2.2.png',
        'assets/images/projects/project2/Project 2.3.png',
        'assets/images/projects/project2/Project 2.5.png',
        'assets/images/projects/project2/Project 2.6.png',
        'assets/images/projects/project2/Project 2.7.png',
        'assets/images/projects/project2/Project 2.8.jpg',
        'assets/images/projects/project2/Project 2.9.jpg',
        'assets/images/projects/project2/Project 2.10.jpg',
        'assets/images/projects/project2/Project 2.11.jpg'
    ],
    // Project 3: Estimated RPT
    [
        'assets/images/projects/Project4/1.png',
        'assets/images/projects/Project4/2.jpg',
        'assets/images/projects/Project4/3.jpg'
    ]
];

// Open lightbox
function openLightbox(projectIndex, imageIndex) {
    console.log('Opening lightbox for project:', projectIndex, 'image:', imageIndex);
    currentProject = projectIndex;
    currentImage = imageIndex;
    showImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Reset image styles when closing
    lightboxImage.style.width = '';
    lightboxImage.style.height = '';
    lightboxImage.style.maxWidth = '';
    lightboxImage.style.maxHeight = '';
    
    // Clear wheel timeout
    if (wheelTimeout) {
        clearTimeout(wheelTimeout);
        wheelTimeout = null;
    }
}

// Show current image
function showImage() {
    const imageUrl = projectImages[currentProject][currentImage];
    console.log('Loading image:', imageUrl, 'for project:', currentProject, 'image:', currentImage);
    lightboxImage.src = imageUrl;
    
    // Add error handling for image loading
    lightboxImage.onerror = function() {
        console.error('Failed to load image:', imageUrl);
        // Show a placeholder or error message
        lightboxImage.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
    };
    
    lightboxImage.onload = function() {
        console.log('Image loaded successfully:', imageUrl);
        // Calculate and apply optimal scaling
        calculateOptimalImageSize();
    };
    
    // Update navigation buttons
    prevBtn.style.display = currentImage === 0 ? 'none' : 'block';
    nextBtn.style.display = currentImage === projectImages[currentProject].length - 1 ? 'none' : 'block';
}

// Calculate optimal image size based on screen and image dimensions
function calculateOptimalImageSize() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    // Get image natural dimensions
    const imgWidth = lightboxImage.naturalWidth;
    const imgHeight = lightboxImage.naturalHeight;
    
    console.log('Screen dimensions:', screenWidth, 'x', screenHeight);
    console.log('Image dimensions:', imgWidth, 'x', imgHeight);
    
    // Calculate available space (accounting for padding and navigation buttons)
    const padding = 80; // 40px on each side
    const buttonSpace = 120; // Space needed for navigation buttons (60px each side)
    const availableWidth = screenWidth - padding - buttonSpace;
    const availableHeight = screenHeight - padding;
    
    // Calculate scaling factors
    const scaleX = availableWidth / imgWidth;
    const scaleY = availableHeight / imgHeight;
    
    // Use the smaller scale to ensure image fits completely
    const scale = Math.min(scaleX, scaleY, 1); // Don't scale up beyond 100%
    
    console.log('Scale factors - X:', scaleX, 'Y:', scaleY, 'Final scale:', scale);
    
    // Apply the calculated dimensions
    const finalWidth = imgWidth * scale;
    const finalHeight = imgHeight * scale;
    
    lightboxImage.style.width = finalWidth + 'px';
    lightboxImage.style.height = finalHeight + 'px';
    lightboxImage.style.maxWidth = 'none';
    lightboxImage.style.maxHeight = 'none';
    
    console.log('Final image size:', finalWidth, 'x', finalHeight);
}

// Previous image
function prevImage() {
    if (currentImage > 0) {
        currentImage--;
        showImage();
    }
}

// Next image
function nextImage() {
    if (currentImage < projectImages[currentProject].length - 1) {
        currentImage++;
        showImage();
    }
}

// Gallery scroll functionality
function scrollGallery(button, direction) {
    const gallery = button.closest('.project-gallery');
    const container = gallery.querySelector('.gallery-container');
    const scrollAmount = 300; // Adjust this value to control scroll distance
    
    if (direction === 'next') {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'prev') {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    }
    
    // Update button states after scroll
    setTimeout(() => {
        updateGalleryButtons(gallery);
    }, 300);
}

// Update gallery navigation buttons and gradient masks
function updateGalleryButtons(gallery) {
    const container = gallery.querySelector('.gallery-container');
    const prevBtn = gallery.querySelector('.gallery-prev');
    const nextBtn = gallery.querySelector('.gallery-next');
    
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    // Update button states
    if (prevBtn) {
        prevBtn.disabled = scrollLeft <= 0;
    }
    
    if (nextBtn) {
        nextBtn.disabled = scrollLeft >= maxScroll;
    }
    
    // Update gradient masks
    // Left gradient (show when not at the beginning)
    if (scrollLeft > 0) {
        gallery.style.setProperty('--left-gradient-opacity', '1');
    } else {
        gallery.style.setProperty('--left-gradient-opacity', '0');
    }
    
    // Right gradient (show when not at the end)
    if (scrollLeft < maxScroll) {
        gallery.style.setProperty('--right-gradient-opacity', '1');
    } else {
        gallery.style.setProperty('--right-gradient-opacity', '0');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize gallery buttons and gradient masks
    document.querySelectorAll('.project-gallery').forEach(gallery => {
        updateGalleryButtons(gallery);
        
        // Add scroll event listener to update buttons and gradients
        const container = gallery.querySelector('.gallery-container');
        container.addEventListener('scroll', () => {
            updateGalleryButtons(gallery);
        });
        
        // Add resize event listener to recalculate on window resize
        window.addEventListener('resize', () => {
            updateGalleryButtons(gallery);
        });
        
        // Add mouse wheel event listener for gallery navigation
        gallery.addEventListener('wheel', function(e) {
            e.preventDefault(); // Prevent page scrolling
            
            // Debounce wheel events to prevent rapid switching
            if (gallery.wheelTimeout) {
                clearTimeout(gallery.wheelTimeout);
            }
            
            gallery.wheelTimeout = setTimeout(() => {
                const container = gallery.querySelector('.gallery-container');
                const scrollAmount = 300;
                const currentScroll = container.scrollLeft;
                const maxScroll = container.scrollWidth - container.clientWidth;
                
                // Determine scroll direction
                if (e.deltaY > 0) {
                    // Scrolling down/right - go to next image
                    if (currentScroll < maxScroll) {
                        container.scrollBy({
                            left: scrollAmount,
                            behavior: 'smooth'
                        });
                    }
                } else {
                    // Scrolling up/left - go to previous image
                    if (currentScroll > 0) {
                        container.scrollBy({
                            left: -scrollAmount,
                            behavior: 'smooth'
                        });
                    }
                }
                
                // Update button states after scroll
                setTimeout(() => {
                    updateGalleryButtons(gallery);
                }, 500);
            }, 150); // 150ms delay to prevent rapid switching
        });
    });
    
    // Gallery thumbnail clicks
    document.querySelectorAll('.gallery-thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const projectIndex = parseInt(this.getAttribute('data-project'));
            const imageIndex = parseInt(this.getAttribute('data-image'));
            openLightbox(projectIndex, imageIndex);
        });
    });
    

    
    // Navigation buttons
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
    
    // Click outside to close
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            }
        }
    });
    
    // Handle window resize for lightbox
    window.addEventListener('resize', function() {
        if (lightbox.classList.contains('active')) {
            calculateOptimalImageSize();
        }
    });
    
    // Mouse wheel navigation for lightbox
    lightbox.addEventListener('wheel', function(e) {
        if (lightbox.classList.contains('active')) {
            e.preventDefault(); // Prevent page scrolling
            
            // Debounce wheel events to prevent rapid switching
            if (wheelTimeout) {
                clearTimeout(wheelTimeout);
            }
            
            wheelTimeout = setTimeout(() => {
                // Determine scroll direction
                if (e.deltaY > 0) {
                    // Scrolling down/right - go to next image
                    nextImage();
                } else {
                    // Scrolling up/left - go to previous image
                    prevImage();
                }
            }, 150); // 150ms delay to prevent rapid switching
        }
    });
});

// Projects carousel functionality
let currentProjectIndex = 0;
let projectsPerView = 3;

function scrollProjects(direction) {
    const projectsGrid = document.querySelector('.projects-grid');
    const projectCards = document.querySelectorAll('.project-card');
    const totalProjects = projectCards.length;
    
    // Calculate projects per view based on screen size
    if (window.innerWidth <= 768) {
        projectsPerView = 1;
    } else if (window.innerWidth <= 1024) {
        projectsPerView = 2;
    } else {
        projectsPerView = 3;
    }
    
    const maxIndex = Math.max(0, totalProjects - projectsPerView);
    
    if (direction === 'next') {
        currentProjectIndex = Math.min(currentProjectIndex + 1, maxIndex);
    } else if (direction === 'prev') {
        currentProjectIndex = Math.max(currentProjectIndex - 1, 0);
    }
    
    // Calculate the transform value based on container width
    const containerWidth = document.querySelector('.projects-container').offsetWidth;
    const cardWidth = containerWidth / projectsPerView;
    const translateX = -currentProjectIndex * cardWidth;
    
    projectsGrid.style.transform = `translateX(${translateX}px)`;
    
    // Update button states
    updateProjectButtons();
}

function updateProjectButtons() {
    const prevBtn = document.querySelector('.projects-prev');
    const nextBtn = document.querySelector('.projects-next');
    const projectCards = document.querySelectorAll('.project-card');
    const totalProjects = projectCards.length;
    
    // Calculate projects per view based on screen size
    if (window.innerWidth <= 768) {
        projectsPerView = 1;
    } else if (window.innerWidth <= 1024) {
        projectsPerView = 2;
    } else {
        projectsPerView = 3;
    }
    
    const maxIndex = Math.max(0, totalProjects - projectsPerView);
    
    if (prevBtn) {
        prevBtn.style.opacity = currentProjectIndex <= 0 ? '0.5' : '1';
        prevBtn.style.pointerEvents = currentProjectIndex <= 0 ? 'none' : 'auto';
    }
    
    if (nextBtn) {
        nextBtn.style.opacity = currentProjectIndex >= maxIndex ? '0.5' : '1';
        nextBtn.style.pointerEvents = currentProjectIndex >= maxIndex ? 'none' : 'auto';
    }
}

// Initialize projects carousel on page load
document.addEventListener('DOMContentLoaded', function() {
    // Wait for images to load before calculating positions
    setTimeout(() => {
        updateProjectButtons();
    }, 500);
    
    // Update on window resize
    window.addEventListener('resize', function() {
        // Reset to first project on mobile, maintain position on desktop
        if (window.innerWidth <= 768) {
            currentProjectIndex = 0;
        }
        updateProjectButtons();
    });
}); 