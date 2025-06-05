/**
 * Einfache, robuste Navigationskomponente
 * Fallback für Probleme mit der komplexen Version
 */

// Einfache Funktion zum Einfügen der Navigation
function insertSimpleNavbar() {
    console.log('🔧 Einfache Navigation wird eingefügt...');
    
    // Aktuelle Seite erkennen
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    console.log('📍 Aktuelle Seite:', currentPage);
    
    // Services-Seiten für Dropdown-Hervorhebung
    const servicePages = ['schankwagen', 'rampenverkauf', 'braukurse'];
    const isServicePage = servicePages.includes(currentPage);
    
    // Navigation HTML generieren
    const navHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-beer fixed-top">
            <div class="container">
                <a class="navbar-brand fw-bold" href="index.html">
                    <img src="images/brewery/brs_logo_sw.jpg" alt="Brauerei Rappenstein" height="40" class="me-2">
                    Brauerei Rappenstein
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'index' ? 'active' : ''}" href="index.html" ${currentPage === 'index' ? 'aria-current="page"' : ''}>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'ueber-uns' ? 'active' : ''}" href="ueber-uns.html" ${currentPage === 'ueber-uns' ? 'aria-current="page"' : ''}>Über uns</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'sortiment' ? 'active' : ''}" href="sortiment.html" ${currentPage === 'sortiment' ? 'aria-current="page"' : ''}>Sortiment</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle ${isServicePage ? 'active' : ''}" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" ${isServicePage ? 'aria-current="page"' : ''}>
                                Services
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item ${currentPage === 'schankwagen' ? 'active' : ''}" href="schankwagen.html">
                                    <i class="bi bi-truck me-2"></i>Schankwagen
                                </a></li>
                                <li><a class="dropdown-item ${currentPage === 'rampenverkauf' ? 'active' : ''}" href="rampenverkauf.html">
                                    <i class="bi bi-shop me-2"></i>Rampenverkauf
                                </a></li>
                                <li><a class="dropdown-item ${currentPage === 'braukurse' ? 'active' : ''}" href="braukurse.html">
                                    <i class="bi bi-mortarboard me-2"></i>Braukurse
                                </a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'galerie' ? 'active' : ''}" href="galerie.html" ${currentPage === 'galerie' ? 'aria-current="page"' : ''}>Galerie</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${currentPage === 'kontakt' ? 'active' : ''}" href="kontakt.html" ${currentPage === 'kontakt' ? 'aria-current="page"' : ''}>Kontakt</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    
    // Navigation am Anfang des body einfügen
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    console.log('✅ Einfache Navigation eingefügt');
    
    // Body Padding hinzufügen für fixed navbar
    document.body.style.paddingTop = '80px';
}

// Auto-Initialisierung
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        if (document.querySelector('.auto-navbar')) {
            insertSimpleNavbar();
        }
    });
} else {
    // DOM bereits geladen
    if (document.querySelector('.auto-navbar')) {
        insertSimpleNavbar();
    }
} 