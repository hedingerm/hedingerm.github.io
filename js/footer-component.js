/**
 * Brauerei Rappenstein - Footer Komponente
 * Einheitlicher Footer für alle Seiten der Website
 */

// Footer-Komponente einfügen
function insertFooter() {
    console.log('🦶 Footer-Komponente wird eingefügt...');
    
    // Footer HTML generieren
    const footerHTML = `
        <footer class="footer text-white py-5">
            <div class="container">
                <div class="row">
                    <!-- Brauerei Information -->
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="d-flex align-items-center mb-3">
                            <img src="images/brewery/brs_logo_sw.jpg" alt="Brauerei Rappenstein" height="50" class="me-3">
                            <div>
                                <h5 class="mb-0">Brauerei Rappenstein</h5>
                                <small class="text-light opacity-75">Handwerksbier aus Leidenschaft</small>
                            </div>
                        </div>
                        <p class="mb-3 text-light opacity-75">
                            Seit Jahren brauen wir mit Hingabe authentische Biere in höchster Qualität. 
                            Von traditionellen Sorten bis zu innovativen Kreationen - jedes Bier wird mit Liebe zum Detail gefertigt.
                        </p>
                        <div class="d-flex gap-3">
                            <a href="tel:+41123456789" class="text-white text-decoration-none opacity-75 hover-opacity-100">
                                <i class="bi bi-telephone-fill"></i>
                            </a>
                            <a href="mailto:info@brauerei-rappenstein.ch" class="text-white text-decoration-none opacity-75 hover-opacity-100">
                                <i class="bi bi-envelope-fill"></i>
                            </a>
                            <a href="#" class="text-white text-decoration-none opacity-75 hover-opacity-100">
                                <i class="bi bi-facebook"></i>
                            </a>
                            <a href="#" class="text-white text-decoration-none opacity-75 hover-opacity-100">
                                <i class="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div class="col-lg-2 col-md-6 mb-4">
                        <h6 class="text-uppercase fw-bold mb-3">
                            <i class="bi bi-links me-2"></i>Quick Links
                        </h6>
                        <ul class="list-unstyled">
                            <li class="mb-2">
                                <a href="index.html" class="text-white text-decoration-none opacity-75 hover-opacity-100">
                                    <i class="bi bi-house me-2"></i>Home
                                </a>
                            </li>
                            <li class="mb-2">
                                <a href="ueber-uns.html" class="text-white text-decoration-none opacity-75 hover-opacity-100">
                                    <i class="bi bi-people me-2"></i>Über uns
                                </a>
                            </li>
                            <li class="mb-2">
                                <a href="sortiment.html" class="text-white text-decoration-none opacity-75 hover-opacity-100">
                                    <i class="bi bi-cup-fill me-2"></i>Sortiment
                                </a>
                            </li>
                            <li class="mb-2">
                                <a href="galerie.html" class="text-white text-decoration-none opacity-75 hover-opacity-100">
                                    <i class="bi bi-camera me-2"></i>Galerie
                                </a>
                            </li>
                            <li class="mb-2">
                                <a href="kontakt.html" class="text-white text-decoration-none opacity-75 hover-opacity-100">
                                    <i class="bi bi-envelope me-2"></i>Kontakt
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- Services -->
                    <div class="col-lg-3 col-md-6 mb-4">
                        <h6 class="text-uppercase fw-bold mb-3">
                            <i class="bi bi-gear-fill me-2"></i>Services
                        </h6>
                        <ul class="list-unstyled">
                            <li class="mb-2">
                                <a href="schankwagen.html" class="text-white text-decoration-none opacity-75 hover-opacity-100">
                                    <i class="bi bi-truck me-2"></i>Schankwagen
                                </a>
                            </li>
                            <li class="mb-2">
                                <a href="rampenverkauf.html" class="text-white text-decoration-none opacity-75 hover-opacity-100">
                                    <i class="bi bi-shop me-2"></i>Rampenverkauf
                                </a>
                            </li>
                            <li class="mb-2">
                                <a href="braukurse.html" class="text-white text-decoration-none opacity-75 hover-opacity-100">
                                    <i class="bi bi-mortarboard me-2"></i>Braukurse
                                </a>
                            </li>
                        </ul>
                        <div class="mt-4">
                            <h6 class="text-uppercase fw-bold mb-3">
                                <i class="bi bi-clock-fill me-2"></i>Öffnungszeiten
                            </h6>
                            <div class="text-light opacity-75">
                                <div><strong>Freitag:</strong> 17:00 - 19:00</div>
                                <div><strong>Samstag:</strong> 10:00 - 12:00</div>
                                <div><small>oder nach Vereinbarung</small></div>
                            </div>
                        </div>
                    </div>

                    <!-- Kontakt Information -->
                    <div class="col-lg-3 col-md-6 mb-4">
                        <h6 class="text-uppercase fw-bold mb-3">
                            <i class="bi bi-geo-alt-fill me-2"></i>Kontakt
                        </h6>
                        <div class="text-light opacity-75">
                            <div class="mb-2">
                                <i class="bi bi-geo-alt me-2"></i>
                                <span>Untervaz, Graubünden<br>Schweiz</span>
                            </div>
                            <div class="mb-2">
                                <i class="bi bi-telephone me-2"></i>
                                <a href="tel:+41123456789" class="text-white text-decoration-none">+41 123 456 789</a>
                            </div>
                            <div class="mb-3">
                                <i class="bi bi-envelope me-2"></i>
                                <a href="mailto:info@brauerei-rappenstein.ch" class="text-white text-decoration-none">info@brauerei-rappenstein.ch</a>
                            </div>
                        </div>

                        <!-- Newsletter Anmeldung -->
                        <div class="mt-4">
                            <h6 class="text-uppercase fw-bold mb-3">
                                <i class="bi bi-envelope-heart me-2"></i>Newsletter
                            </h6>
                            <form class="d-flex">
                                <input type="email" class="form-control me-2" placeholder="Ihre E-Mail" style="border-radius: 20px; border: none;">
                                <button class="btn btn-outline-light" type="submit" style="border-radius: 20px;">
                                    <i class="bi bi-send"></i>
                                </button>
                            </form>
                            <small class="text-light opacity-50">Erhalten Sie Updates zu neuen Bieren und Events</small>
                        </div>
                    </div>
                </div>

                <hr class="my-4 opacity-25">

                <!-- Copyright Row -->
                <div class="row align-items-center">
                    <div class="col-lg-6 text-center text-lg-start">
                        <p class="mb-0 text-light opacity-75">
                            &copy; 2024 Brauerei Rappenstein. Alle Rechte vorbehalten.
                        </p>
                    </div>
                    <div class="col-lg-6 text-center text-lg-end">
                        <p class="mb-0 text-light opacity-75">
                            Handwerksbier aus Leidenschaft | Untervaz, Graubünden
                        </p>
                    </div>
                </div>

                <!-- Bottom Links -->
                <div class="row mt-3">
                    <div class="col-12 text-center">
                        <div class="d-flex justify-content-center gap-4 flex-wrap">
                            <a href="#" class="text-white text-decoration-none opacity-50 hover-opacity-75 small">Impressum</a>
                            <a href="#" class="text-white text-decoration-none opacity-50 hover-opacity-75 small">Datenschutz</a>
                            <a href="#" class="text-white text-decoration-none opacity-50 hover-opacity-75 small">AGB</a>
                            <a href="#" class="text-white text-decoration-none opacity-50 hover-opacity-75 small">Cookie-Richtlinien</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;
    
    // Footer am Ende des body einfügen (vor den Scripts)
    const scripts = document.querySelector('script');
    if (scripts) {
        scripts.parentNode.insertBefore(createElementFromHTML(footerHTML), scripts);
    } else {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
    
    console.log('✅ Footer-Komponente eingefügt');
}

// Helper function to create DOM element from HTML string
function createElementFromHTML(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}

// Auto-Initialisierung für Seiten mit der Klasse 'auto-footer'
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        if (document.querySelector('.auto-footer')) {
            insertFooter();
        }
    });
} else {
    // DOM bereits geladen
    if (document.querySelector('.auto-footer')) {
        insertFooter();
    }
}

// CSS-Erweiterungen für Footer hinzufügen
if (!document.querySelector('#footer-styles')) {
    const footerStyles = document.createElement('style');
    footerStyles.id = 'footer-styles';
    footerStyles.textContent = `
        .hover-opacity-100:hover {
            opacity: 1 !important;
            transition: opacity 0.3s ease;
        }
        
        .hover-opacity-75:hover {
            opacity: 0.75 !important;
            transition: opacity 0.3s ease;
        }
        
        .footer {
            background: linear-gradient(135deg, var(--dark-gray) 0%, var(--primary-dark) 100%);
        }
        
        .footer a {
            transition: all 0.3s ease;
        }
        
        .footer a:hover {
            transform: translateX(3px);
        }
        
        .footer .form-control:focus {
            box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);
            border-color: rgba(255, 255, 255, 0.5);
        }
    `;
    document.head.appendChild(footerStyles);
} 