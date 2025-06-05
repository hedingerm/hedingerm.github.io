# Brauerei Rappenstein Website

A modern, responsive website for Brauerei Rappenstein - a craft brewery from Switzerland showcasing authentic beer varieties, services, and brewing courses.

## 🍺 Overview

This website represents a complete digital presence for Brauerei Rappenstein, featuring authentic Swiss brewery content with a modern, professional design. The site includes real brewery images, authentic beer varieties, and comprehensive service offerings.

## 🎨 Design Features

### Visual Identity
- **Color Palette**: Monochrome design with dark grays (#2c2c2c, #4a4a4a) and gold accents (#D4AF37)
- **Typography**: Bebas Neue for headings, system fonts for body text
- **Logo**: Authentic black & white brewery logo integration
- **Effects**: Glassmorphism cards, modern shadows, hover animations

### Responsive Design
- Mobile-first responsive layout
- Bootstrap 5.3.2 framework
- Optimized for all screen sizes
- Touch-friendly navigation

## 📱 Website Structure

### 8 Complete Pages

1. **index.html** - Landing page with overview cards and navigation
2. **ueber-uns.html** - About us with history, philosophy, team, and values
3. **sortiment.html** - Beer portfolio with detailed presentations
4. **schankwagen.html** - Mobile beer service with booking system
5. **rampenverkauf.html** - Direct sales information and hours
6. **braukurse.html** - Brewing courses and workshops
7. **galerie.html** - Image gallery with brewing process photos
8. **kontakt.html** - Contact information, form, and directions

## 🍻 Beer Portfolio

### Authentic Swiss Beer Varieties
- **Ipschlössli** - 5.5% Vol., CHF 4.50
- **Wolfsblut** - 5.5% Vol., CHF 5.20
- **Märzen** - 5.8% Vol., CHF 4.80
- **Dunggli Wolgga** - 5.4% Vol., CHF 4.90
- **Lager** - 4.8% Vol., CHF 4.20
- **Weizen** - 5.2% Vol., CHF 4.60

### Package Deals
- **6er Pack Mix** - CHF 26.00
- **12er Kiste** - CHF 48.00

## 🚚 Services

### Schankwagen (Mobile Beer Service)
- Professional mobile beer dispensing
- Event bookings and catering
- Equipment specifications and pricing
- Comprehensive booking system

### Rampenverkauf (Direct Sales)
- **Friday**: 17:00 - 19:00
- **Saturday**: 10:00 - 12:00
- Payment methods: Cash, TWINT, Cards
- Quantity discounts available

### Braukurse (Brewing Courses)
- **Einsteiger Braukurs** - CHF 180 (Beginner course)
- **Fortgeschrittenen Kurs** - CHF 280 (Advanced course)
- **Firmen Workshop** - From CHF 150 (Corporate events)
- **Privatbrauer Kurs** - CHF 320 (Private sessions)

## 🖼️ Media Integration

### Authentic Images
- `brs_logo_farbig.png` - Colored brewery logo
- `brs_logo_sw.jpg` - Black & white logo
- `probierpaket_flaschen_abgefüllt.jpg` - Bottled beer selection
- `schankwagen_im_einsatz.jpg` - Mobile service in action
- `team.jpg` - Brewery team photo
- `maischen.jpg` - Mashing process
- `laeutern.jpg` - Lautering process

### Gallery Features
- Interactive filter system
- Process documentation
- Product showcases
- Event photography

## 💻 Technical Features

### Frontend Technologies
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, gradients, animations
- **Bootstrap 5.3.2** - Responsive framework
- **Bootstrap Icons** - Icon library
- **JavaScript** - Form validation, interactive elements, navigation component

### Interactive Elements
- Contact forms with validation
- Course booking system
- Gallery filters
- **Reusable navigation component** - Centrally managed navigation
- Smooth scrolling effects

### Performance Optimizations
- Optimized images
- Efficient CSS structure
- Minimal JavaScript footprint
- CDN-hosted frameworks

### 🧭 Navigation & Footer Component Architecture

The website features **reusable components** for navigation and footer that provide centralized management across all pages.

#### Navigation Component Features
- **Automatic Integration**: Simply add `class="auto-navbar"` to the `<body>` tag
- **Smart Active Detection**: Automatically highlights the current page
- **Responsive Design**: Bootstrap 5 compatible with mobile hamburger menu
- **Centralized Management**: Update navigation in one file (`js/simple-navbar.js`)
- **Performance Optimized**: Lightweight and fast loading
- **Accessibility**: Proper ARIA labels and semantic HTML structure

#### Footer Component Features
- **Automatic Integration**: Simply add `class="auto-footer"` to the `<body>` tag
- **Comprehensive Content**: Contact info, quick links, services, opening hours
- **Interactive Elements**: Newsletter signup, social media links
- **Professional Design**: Multi-column layout with responsive behavior
- **Centralized Management**: Update footer in one file (`js/footer-component.js`)
- **Consistent Styling**: Unified footer across all pages

#### Implementation
```html
<body class="auto-navbar auto-footer">
    <!-- Page content -->
    <script src="js/simple-navbar.js"></script>
    <script src="js/footer-component.js"></script>
</body>
```

#### Navigation Items
- Home (`index.html`)
- Über uns (`ueber-uns.html`)
- Sortiment (`sortiment.html`)
- Schankwagen (`schankwagen.html`)
- Rampenverkauf (`rampenverkauf.html`)
- Braukurse (`braukurse.html`)
- Galerie (`galerie.html`)
- Kontakt (`kontakt.html`)

#### Footer Sections
- **Brauerei Information**: Logo, description, social media links
- **Quick Links**: Navigation to main pages
- **Services**: Links to all service pages with opening hours
- **Contact**: Address, phone, email, newsletter signup
- **Legal**: Copyright, links to legal pages

#### Maintenance Benefits
- **Single Source of Truth**: All navigation/footer changes in dedicated files
- **Consistent Branding**: Unified components across all pages
- **Easy Updates**: Modify content in one place, reflects everywhere
- **Automatic Styling**: Bootstrap classes ensure consistent appearance
- **Error Handling**: Fallback mechanisms for robust functionality

## 🎯 Key Features

### User Experience
- Intuitive navigation across all pages
- Consistent design language
- Clear call-to-action buttons
- Comprehensive information architecture

### Business Features
- Complete service presentation
- Online booking capabilities
- Contact integration
- Professional imagery

### Accessibility
- Semantic HTML structure
- Proper contrast ratios
- Keyboard navigation support
- Screen reader friendly

## 📁 File Structure

```
hedingerm.github.io/
├── index.html              # Landing page
├── ueber-uns.html          # About us
├── sortiment.html          # Beer portfolio
├── schankwagen.html        # Mobile service
├── rampenverkauf.html      # Direct sales
├── braukurse.html          # Brewing courses
├── galerie.html            # Image gallery
├── kontakt.html            # Contact
├── css/
│   └── styles.css          # Custom styles
├── js/
│   ├── scripts.js          # JavaScript functionality
│   ├── simple-navbar.js    # Reusable navigation component
│   └── footer-component.js # Reusable footer component
└── images/
    ├── brewery/            # Brewery logos and images
    ├── beers/              # Beer and product photos
    ├── gallery/            # Process and gallery images
    ├── schankwagen/        # Mobile service photos
    └── team/               # Team photos
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Optimization

- Responsive grid system
- Touch-friendly interfaces
- Optimized image loading
- Mobile navigation patterns

## 🚀 Deployment

The website is designed for static hosting and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Traditional web hosting

## 📋 Content Management

### Easily Updatable Sections
- Beer pricing and descriptions
- Course schedules and pricing
- Contact information
- Gallery images
- Service availability
- **Navigation menu items** (via `js/simple-navbar.js`)

### Maintenance Notes
- All prices in Swiss Francs (CHF)
- German language content
- Swiss brewery regulations compliant
- Professional brewery presentation
- **Navigation updates**: Modify only `js/simple-navbar.js` for site-wide changes
- **Footer updates**: Modify only `js/footer-component.js` for site-wide changes
- **Page addition**: Add new pages by updating component arrays

## 🎨 Brand Guidelines

### Color Usage
- Primary: #2c2c2c (Dark Gray)
- Secondary: #4a4a4a (Medium Gray)
- Accent: #D4AF37 (Gold)
- Background: #f8f9fa (Light Gray)

### Typography Hierarchy
- Headings: Bebas Neue (400 weight)
- Body: System font stack
- Letter spacing: 1-2px for headings

## 📞 Contact Integration

- Professional contact forms
- Multiple contact methods
- Location and directions
- Business hours display
- Service-specific inquiries

## 🏆 Professional Features

- Authentic Swiss brewery presentation
- Complete service portfolio
- Educational brewing content
- Professional photography integration
- Modern web standards compliance

---

**Brauerei Rappenstein** - Handwerksbier aus Leidenschaft | Quality from Tradition

*Website built with modern web technologies for optimal performance and user experience.* 