// Brauerei Rappenstein - JavaScript Functions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions when DOM is ready
    initSmoothScrolling();
    initNavbarEffects();
    initContactForm();
    initImageUpload();
    initImageGallery();
    initAnimations();
});

// Smooth Scrolling for Navigation
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Offset for fixed navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar Effects on Scroll
function initNavbarEffects() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(139, 69, 19, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = '#8B4513';
            navbar.style.backdropFilter = 'none';
        }
    });
}

// Contact Form Handler
function initContactForm() {
    const contactForm = document.getElementById('schankwagenForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            if (!validateForm(this)) {
                return;
            }
            
            // Collect form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                eventDate: document.getElementById('eventDate').value,
                guestCount: document.getElementById('guestCount').value,
                eventLocation: document.getElementById('eventLocation').value,
                message: document.getElementById('message').value
            };
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Wird gesendet...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual backend integration)
            setTimeout(() => {
                showNotification('Vielen Dank für Ihre Anfrage! Wir werden uns schnellstmöglich bei Ihnen melden.', 'success');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
}

// Form Validation
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, 'Dieses Feld ist erforderlich');
            isValid = false;
        } else {
            clearFieldError(field);
        }
    });
    
    // Email validation
    const emailField = form.querySelector('[type="email"]');
    if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            showFieldError(emailField, 'Bitte geben Sie eine gültige E-Mail-Adresse ein');
            isValid = false;
        }
    }
    
    return isValid;
}

function showFieldError(field, message) {
    clearFieldError(field);
    field.classList.add('is-invalid');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'invalid-feedback';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    field.classList.remove('is-invalid');
    const errorDiv = field.parentNode.querySelector('.invalid-feedback');
    if (errorDiv) {
        errorDiv.remove();
    }
}

// Image Upload Functionality
function initImageUpload() {
    // Create image upload interface (if admin/upload page exists)
    const uploadAreas = document.querySelectorAll('.image-upload-area');
    
    uploadAreas.forEach(area => {
        // Drag and drop events
        area.addEventListener('dragover', handleDragOver);
        area.addEventListener('drop', handleDrop);
        area.addEventListener('dragleave', handleDragLeave);
        
        // Click to upload
        area.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.multiple = true;
            input.onchange = (e) => handleFileSelect(e, area);
            input.click();
        });
    });
}

function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('dragover');
}

function handleDragLeave(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
    
    const files = e.dataTransfer.files;
    handleFiles(files, e.currentTarget);
}

function handleFileSelect(e, uploadArea) {
    const files = e.target.files;
    handleFiles(files, uploadArea);
}

function handleFiles(files, uploadArea) {
    Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
            uploadImage(file, uploadArea);
        } else {
            showNotification('Bitte wählen Sie nur Bilddateien aus.', 'error');
        }
    });
}

function uploadImage(file, uploadArea) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
        // Create preview
        const preview = createImagePreview(e.target.result, file.name);
        uploadArea.appendChild(preview);
        
        // In a real application, you would upload to server here
        // uploadToServer(file);
    };
    
    reader.readAsDataURL(file);
}

function createImagePreview(src, filename) {
    const container = document.createElement('div');
    container.className = 'image-preview-container position-relative d-inline-block m-2';
    
    const img = document.createElement('img');
    img.src = src;
    img.className = 'img-thumbnail';
    img.style.width = '150px';
    img.style.height = '150px';
    img.style.objectFit = 'cover';
    
    const removeBtn = document.createElement('button');
    removeBtn.className = 'btn btn-danger btn-sm position-absolute top-0 end-0';
    removeBtn.innerHTML = '<i class="bi bi-x"></i>';
    removeBtn.onclick = () => container.remove();
    
    const filename_div = document.createElement('div');
    filename_div.className = 'small text-truncate';
    filename_div.textContent = filename;
    filename_div.style.width = '150px';
    
    container.appendChild(img);
    container.appendChild(removeBtn);
    container.appendChild(filename_div);
    
    return container;
}

// Image Gallery Functions
function initImageGallery() {
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('image-loading');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            img.classList.add('image-loading');
            imageObserver.observe(img);
        });
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
    
    // Image modal/lightbox functionality
    const galleryImages = document.querySelectorAll('.gallery-item img');
    galleryImages.forEach(img => {
        img.addEventListener('click', () => openImageModal(img.src, img.alt));
    });
}

function openImageModal(src, alt) {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${alt}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body text-center">
                    <img src="${src}" class="img-fluid" alt="${alt}">
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
    
    // Remove modal after hiding
    modal.addEventListener('hidden.bs.modal', () => {
        document.body.removeChild(modal);
    });
}

// Animation Functions
function initAnimations() {
    // Scroll animations
    const animatedElements = document.querySelectorAll('.beer-card, .gallery-item');
    
    if ('IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            animationObserver.observe(el);
        });
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'error' ? 'danger' : type} alert-dismissible fade show position-fixed`;
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '9999';
    notification.style.minWidth = '300px';
    
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-dismiss after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Image Management Functions (for admin use)
function loadGalleryImages() {
    // This would typically load images from a server/database
    const sampleImages = [
        { src: 'images/gallery/brewery-interior.jpg', alt: 'Brauerei Innenansicht' },
        { src: 'images/gallery/beer-tasting.jpg', alt: 'Bierverkostung' },
        { src: 'images/gallery/brewing-process.jpg', alt: 'Brauprozess' },
        { src: 'images/gallery/team-photo.jpg', alt: 'Unser Team' }
    ];
    
    return sampleImages;
}

function saveImageToGallery(imageData) {
    // This would save to server/database in a real application
    console.log('Saving image to gallery:', imageData);
}

// Utility Functions
function resizeImage(file, maxWidth = 800, maxHeight = 600, quality = 0.8) {
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        
        img.onload = () => {
            // Calculate new dimensions
            let { width, height } = img;
            
            if (width > height) {
                if (width > maxWidth) {
                    height = height * (maxWidth / width);
                    width = maxWidth;
                }
            } else {
                if (height > maxHeight) {
                    width = width * (maxHeight / height);
                    height = maxHeight;
                }
            }
            
            canvas.width = width;
            canvas.height = height;
            
            // Draw and compress
            ctx.drawImage(img, 0, 0, width, height);
            canvas.toBlob(resolve, 'image/jpeg', quality);
        };
        
        img.src = URL.createObjectURL(file);
    });
} 