# Wiederverwendbare Navigationskomponente

Diese Dokumentation beschreibt die Implementierung und Verwendung der wiederverwendbaren Navigationskomponente für die Brauerei Rappenstein Website.

## Übersicht

Es wurden drei verschiedene Ansätze für eine wiederverwendbare Navigation erstellt:

1. **JavaScript-basierte Komponente** (`navbar-component.js`)
2. **HTML-Template mit Loader** (`navbar.html` + `navbar-loader.js`)
3. **Einfaches HTML-Include** (`navbar.html`)

## 1. JavaScript-basierte Komponente

### Dateien
- `js/navbar-component.js`

### Verwendung

#### Automatische Initialisierung
Fügen Sie die Klasse `auto-navbar` zum `<body>`-Tag hinzu:

```html
<body class="auto-navbar">
    <!-- Navigation wird automatisch eingefügt -->
    <script src="js/navbar-component.js"></script>
</body>
```

#### Manuelle Initialisierung
```html
<!-- Spezifischer Container für die Navigation -->
<div id="navbar-container"></div>

<script src="js/navbar-component.js"></script>
<script>
    // Initialisierung mit spezifischem Container
    BrauereNavigationbar.init('navbar-container');
    
    // Oder direkte Verwendung
    const navbar = new BrauereNavigationbar();
    navbar.render('navbar-container');
</script>
```

### Funktionen
- **Automatische Aktivierung**: Erkennt die aktuelle Seite und markiert den entsprechenden Menüpunkt
- **Responsive Design**: Vollständig Bootstrap 5 kompatibel
- **Accessibility**: ARIA-Labels und semantische HTML-Struktur
- **Anpassbar**: Einfache Änderung der Navigation durch Bearbeitung des Arrays `navItems`

## 2. HTML-Template mit Loader

### Dateien
- `includes/navbar.html` (HTML-Template)
- `js/navbar-loader.js` (Loader-Script)

### Verwendung

#### Automatische Initialisierung
```html
<body class="load-navbar">
    <!-- Navigation wird automatisch geladen -->
    <script src="js/navbar-loader.js"></script>
</body>
```

#### Manuelle Initialisierung
```html
<div id="navbar-container"></div>

<script src="js/navbar-loader.js"></script>
<script>
    NavbarLoader.init('navbar-container');
</script>
```

### Vorteile
- **Separate HTML-Datei**: Navigation kann in reinem HTML bearbeitet werden
- **Fallback-Funktion**: Falls das Template nicht geladen werden kann, wird eine Fallback-Navigation erstellt
- **Flexibilität**: Template kann einfach ausgetauscht werden

## 3. Einfaches HTML-Include

### Datei
- `includes/navbar.html`

### Verwendung
Für Server-Side Includes oder wenn Sie ein Build-System verwenden:

```html
<!-- Server-Side Include (Apache) -->
<!--#include file="includes/navbar.html" -->

<!-- PHP Include -->
<?php include 'includes/navbar.html'; ?>
```

## Bootstrap-Kompatibilität

Alle Navigationskomponenten nutzen Bootstrap 5 Klassen:

- `navbar navbar-expand-lg navbar-dark bg-beer fixed-top`
- `container` für responsive Breite
- `navbar-brand` für das Logo und den Titel
- `navbar-toggler` für mobile Navigation
- `navbar-nav` und `nav-item` für Menüpunkte
- `active` Klasse für die aktuelle Seite

## Anpassung

### Navigation erweitern
Um neue Menüpunkte hinzuzufügen, bearbeiten Sie:

**JavaScript-Komponente:**
```javascript
this.navItems = [
    { href: 'index.html', text: 'Home', page: 'index' },
    { href: 'neue-seite.html', text: 'Neue Seite', page: 'neue-seite' },
    // ... weitere Items
];
```

**HTML-Template:**
```html
<li class="nav-item">
    <a class="nav-link" href="neue-seite.html" data-page="neue-seite">Neue Seite</a>
</li>
```

### Styling anpassen
Die Navigation verwendet die Bootstrap-Klasse `bg-beer`. Stellen Sie sicher, dass diese Klasse in Ihrem CSS definiert ist:

```css
.bg-beer {
    background-color: #8B4513 !important;
}
```

## Integration in bestehende Seiten

### Schritt 1: Navigation entfernen
Entfernen Sie die bestehende Navigation aus Ihren HTML-Dateien.

### Schritt 2: Script einbinden
Fügen Sie das gewünschte Navigations-Script hinzu:

```html
<script src="js/navbar-component.js"></script>
```

### Schritt 3: Auto-Klasse hinzufügen
Fügen Sie die entsprechende Klasse zum `<body>`-Tag hinzu:

```html
<body class="auto-navbar">
```

## Troubleshooting

### Navigation wird nicht angezeigt
1. Überprüfen Sie, ob das JavaScript korrekt eingebunden ist
2. Prüfen Sie die Browser-Konsole auf Fehler
3. Stellen Sie sicher, dass Bootstrap CSS und JS geladen sind

### Falsche aktive Seite
1. Überprüfen Sie die URL-Struktur
2. Stellen Sie sicher, dass die `page`-Attribute korrekt gesetzt sind
3. Prüfen Sie die `getCurrentPage()`-Funktion

### Mobile Navigation funktioniert nicht
1. Stellen Sie sicher, dass Bootstrap JavaScript geladen ist
2. Überprüfen Sie, ob die `data-bs-toggle` Attribute korrekt sind

## Performance

- **JavaScript-Komponente**: ~3KB minimiert
- **HTML-Template**: ~1KB + Loader (~2KB)
- **Ladezeit**: Nahezu keine Auswirkung auf die Seitenladezeit
- **Browser-Support**: Moderne Browser (ES6+)

## Best Practices

1. **Konsistenz**: Verwenden Sie die gleiche Navigationskomponente auf allen Seiten
2. **Accessibility**: Testen Sie die Navigation mit Screenreadern
3. **Mobile First**: Testen Sie die responsive Navigation auf verschiedenen Geräten
4. **SEO**: Stellen Sie sicher, dass alle Links crawlbar sind
5. **Wartung**: Halten Sie die Navigationselemente zentral und aktuell 