# 🍺 Brauerei Rappenstein - Website

Eine moderne, responsive Website für die Hobbybrauerei Rappenstein aus Untervaz, Graubünden.

## 📁 Projektstruktur

```
brs/
├── index.html          # Hauptwebsite
├── admin.html          # Admin-Panel für Bildverwaltung
├── css/
│   └── styles.css      # Alle CSS-Stile
├── js/
│   └── scripts.js      # JavaScript-Funktionen
├── images/             # Bilder für die Website
│   ├── beers/          # Bier-Produktfotos
│   ├── gallery/        # Galerie-Bilder
│   ├── schankwagen/    # Schankwagen-Fotos
│   ├── brewery/        # Brauerei-Fotos
│   └── team/           # Team-Fotos
└── README.md           # Diese Datei
```

## 🚀 Features

### Hauptwebsite (index.html)
- **Responsive Design** mit Bootstrap 5
- **Hero-Bereich** mit Brauerei-Vorstellung
- **Sortiment** mit Preisen und Produktbildern
- **Schankwagen-Vermietung** mit Kontaktformular
- **Rampenverkauf** mit Öffnungszeiten
- **Bildergalerie** mit Lazy Loading
- **Smooth Scrolling** Navigation
- **Mobile-optimiert**

### Admin-Panel (admin.html)
- **Drag & Drop Bild-Upload**
- **Kategorisierte Bildverwaltung**
- **Bild-Vorschau und -Bearbeitung**
- **Upload-Fortschrittsanzeige**
- **Responsive Design**

## 🛠️ Technische Details

### Verwendete Technologien
- **HTML5** - Semantisches Markup
- **CSS3** - Moderne Styling-Features
- **Bootstrap 5.3.2** - Responsive Framework
- **Bootstrap Icons** - Icon-Set
- **JavaScript (ES6+)** - Interaktivität
- **CSS Custom Properties** - Design-Token

### Browser-Unterstützung
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 📸 Bildverwaltung

### Empfohlene Bildgrößen
- **Bier-Bilder:** 400x400px (quadratisch)
- **Galerie:** 800x600px (Querformat)
- **Schankwagen:** 800x600px (Querformat)
- **Brauerei:** 800x600px (Querformat)
- **Team:** 600x400px (Querformat)

### Unterstützte Formate
- JPG, JPEG
- PNG
- WebP

### Upload-Funktionen
- **Drag & Drop** Interface
- **Mehrfach-Upload**
- **Automatische Bildoptimierung**
- **Lazy Loading** für bessere Performance

## 🎨 Design-System

### Farbpalette
```css
--beer-brown: #8B4513      /* Hauptfarbe */
--beer-light-brown: #A0522D /* Hover-Effekte */
--beer-gold: #D4AF37       /* Akzente */
--beer-cream: #f8f9fa      /* Hintergründe */
--beer-dark: #654321       /* Footer */
```

### Typografie
- **Primär:** System Font Stack
- **Icons:** Bootstrap Icons
- **Gewichte:** 400, 500, 600, 700

## 📱 Responsive Breakpoints

```css
- Mobile: < 576px
- Tablet: 576px - 768px
- Desktop: 768px - 992px
- Large: 992px+
```

## 🚀 Installation & Setup

### 1. Dateien herunterladen
Laden Sie alle Projektdateien in einen Webserver-Ordner.

### 2. Bilder hinzufügen
- Öffnen Sie `admin.html` in Ihrem Browser
- Laden Sie Bilder über das Admin-Panel hoch
- Oder fügen Sie Bilder manuell in die entsprechenden Ordner ein

### 3. Anpassungen
- **Kontaktdaten:** Bearbeiten Sie die Kontaktinformationen in `index.html`
- **Preise:** Aktualisieren Sie Preise im Sortiment-Bereich
- **Farben:** Anpassungen in `css/styles.css`

## 📞 Kontakt-Integration

Das Kontaktformular ist vorbereitet für:
- **E-Mail-Versand** (Backend erforderlich)
- **Validierung** (bereits implementiert)
- **SPAM-Schutz** (kann erweitert werden)

## 🔧 Erweiterungsmöglichkeiten

### Backend-Integration
- PHP/Node.js für Formular-Verarbeitung
- Datenbank für Bildverwaltung
- CMS-Integration möglich

### SEO-Optimierungen
- Meta-Tags bereits implementiert
- Strukturierte Daten können hinzugefügt werden
- Sitemap generierbar

### Performance
- Bildkomprimierung implementiert
- CSS/JS-Minifizierung möglich
- CDN-Integration vorbereitet

## 📄 Lizenz

© 2024 Brauerei Rappenstein. Alle Rechte vorbehalten.

## 🍻 Über die Brauerei Rappenstein

Eine kleine Hobbybrauerei aus Untervaz, Graubünden, die mit Leidenschaft handwerkliches Bier braut. Von traditionellen Sorten bis zu innovativen Kreationen - jedes Bier wird mit höchster Sorgfalt und Qualität hergestellt.

## Biersorten

Die Brauerei Rappenstein bietet folgende handwerklich gebraute Biere:

1. **Ipschlössli** (5.2% Vol.) - CHF 4.50
2. **Wolfsblut** (6.0% Vol.) - CHF 5.20
3. **Märzen** (5.8% Vol.) - CHF 4.80
4. **Dunggli Wolgga** (5.4% Vol.) - CHF 4.90
5. **Lager** (4.8% Vol.) - CHF 4.20
6. **Weizen** (5.2% Vol.) - CHF 4.60

### Angebote
- **6er Pack Mix**: CHF 26.00 (alle Sorten zum Probieren)
- **12er Kiste**: CHF 48.00 (eine Sorte nach Wahl)

## Logo-Dateien

Für die vollständige Funktionalität der Website benötigen Sie die folgenden Logo-Dateien im `images/` Verzeichnis:

- `logo-yellow.png` - Gelbes Logo für die Navigation (empfohlene Größe: 200x80px)
- `logo-white.png` - Weißes Logo für die Hero-Sektion (empfohlene Größe: 300x120px)

Die Logos sollten auf transparentem Hintergrund sein und in PNG-Format vorliegen.

---

*Für Fragen und Support kontaktieren Sie uns unter info@rappenstein.ch* 