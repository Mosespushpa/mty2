# 🚗 SHOP-WHEELS

> A static automotive marketplace website for browsing, servicing, and buying vehicles — built with vanilla HTML, CSS, and JavaScript.

**Live Site:** [https://mosespushpa.github.io/mty2/](https://mosespushpa.github.io/mty2/)  
**Repository:** [https://github.com/Mosespushpa/mty2](https://github.com/Mosespushpa/mty2)

---

## 📖 About the Website

SHOP-WHEELS is a front-end only automotive platform that acts as a one-stop destination for vehicle enthusiasts. It covers four categories of vehicles — **Bicycles, Bikes (motorcycles), Cars, and Trucks** — and offers two core use-cases for each:

- **Services** — Browse service packages with pricing (in ₹)
- **Sales** — Explore popular, new, and upcoming vehicles

The site is designed as a multi-page static website hosted on GitHub Pages, with no backend, no database, and no build tools — everything runs directly in the browser.

---

## ✨ Features

### 🏠 Home / Landing Page
- Full-width **autoplay video** background as the hero section with a scroll indicator.
- Smooth **sticky navbar** with links to all sections.
- Canvas-based **animated background** (`animated-bg.js`) that renders behind content.

### 🔧 Services Section
Four vehicle categories, each linking to a dedicated service page:
- 🚲 Bicycle Service
- 🏍️ Bike (Motorcycle) Service
- 🚗 Car Service
- 🚚 Truck Service

Each service page lists available service packages with INR (₹) pricing.

### 🛒 Sales Section
Four vehicle categories, each linking to a dedicated sales page:
- 🚲 Bicycle Sales
- 🏍️ Bike Sales → Popular / Upcoming sub-pages
- 🚗 Car Sales → Popular / New / Upcoming sub-pages
- 🚚 Truck Sales

### 🖼️ Gallery / Showcase Slider
An animated image carousel (6 slides) showcasing the brand's highlights:
- Premium Service, Quality Parts, Professional Team, Modern Facility, Quick Service, Trusted Brand
- Manual navigation using Previous (←) and Next (→) buttons with a live slide counter.

### 🔐 Sign-In / Register Section
A UI-only authentication panel with:
- Toggle between **Sign In** and **Register** forms
- Form fields for email, password, full name, and phone
- Animated left-panel image that changes based on the active form
- (Note: No backend — submissions are handled client-side via `sign-in.js`)

### 👤 About Us Section
- Who We Are, Our Mission, and Why Choose Us cards
- Image grid (3 images) with hover overlay effects

### 📞 Contact Section
Team member profile cards for all three developers:
- Moses — Web Developer
- Yagnesh — Web Designer
- Thilak — Web Designer

### 🦶 Footer
Consistent footer across all pages (shared via `_footer_template.html`) with:
- Product, Community, and Support link columns
- A **live digital clock** (HH:MM:SS AM/PM), updated every second via JavaScript
- Copyright notice

---

## 🗂️ Project Structure

```
mty2/
│
├── index.html                  # Main landing page
├── _footer_template.html       # Reusable footer snippet (copy-paste into sub-pages)
├── index.html.bak              # Backup of index.html
│
├── assets/
│   ├── css/
│   │   ├── css/
│   │   │   └── bootstrap.min.css       # Bootstrap 5 (local copy)
│   │   └── style.css                   # Custom global styles
│   │
│   ├── fonts/
│   │   └── fontawesome/
│   │       └── css/
│   │           └── all.css             # Font Awesome icons (local copy)
│   │
│   ├── js/
│   │   ├── js/
│   │   │   └── bootstrap.bundle.min.js # Bootstrap 5 JS (local copy)
│   │   ├── animated-bg.js              # Canvas particle/animation background
│   │   ├── interactions.js             # General UI interactions
│   │   ├── sliders.js                  # Gallery slider logic
│   │   └── sign-in.js                  # Sign-in / Register form handling
│   │
│   ├── img/
│   │   └── img/
│   │       ├── logo/                   # LOGO.png
│   │       ├── carbreakdown/           # Gallery slider images (c1.0 – c1.5)
│   │       ├── car-service/            # Car service card images (c1–c10)
│   │       ├── information/            # About Us images (i2–i4)
│   │       ├── login/                  # Sign-in panel image
│   │       ├── contact/                # Team member photos
│   │       └── sales/
│   │           ├── cars/popular/       # Car sales images
│   │           └── bikes/popular/      # Bike sales images
│   │
│   └── video/
│       └── video/
│           └── generated.mp4           # Hero background video
│
└── pages/
    ├── bikes/
    │   ├── bicycle-service.html
    │   ├── bike-service.html
    │   ├── bicycle-sales.html
    │   ├── bike-sales.html
    │   ├── popular-bike.html
    │   └── upcoming-bike.html
    │
    ├── cars/
    │   ├── car-service.html
    │   ├── car-sales.html
    │   ├── popular-cars.html
    │   ├── new-cars.html
    │   └── upcoming-car.html
    │
    └── trucks/
        ├── truck-service.html
        └── truck-sales.html
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure and markup |
| **CSS3** | Custom styling, animations, layout |
| **JavaScript (Vanilla)** | Slider, clock, canvas animation, form toggle |
| **Bootstrap 5** | Responsive grid, navbar, utility classes (stored locally) |
| **Font Awesome** | Vehicle and social media icons (stored locally) |
| **HTML5 Canvas** | Animated background effect on the homepage |
| **HTML5 `<video>`** | Autoplay hero background video |
| **GitHub Pages** | Static site hosting and deployment |

> No Node.js, npm, bundlers, or frameworks are used. All dependencies are bundled locally inside the `assets/` folder.

---

## ⚙️ How It Works

### Navigation
The sticky navbar uses Bootstrap's collapse component for mobile responsiveness. All internal links use **anchor-based navigation** (`#section-id`) to scroll to sections on the same page.

### Video Hero
An HTML5 `<video>` tag with `autoplay`, `muted`, and `loop` attributes plays the background video (`generated.mp4`) silently as the hero section.

### Animated Background
A `<canvas id="bg-canvas">` element is placed behind the page. `animated-bg.js` draws and animates particles/shapes on this canvas, creating a dynamic background effect on the homepage.

### Gallery Slider
`sliders.js` powers the 6-card showcase slider. It tracks the `currentSlide` index and translates the `.slider-track` element using CSS transforms. The slide counter (`1/6`) updates on every navigation click.

### Sign-In / Register Toggle
`sign-in.js` listens for clicks on the `.toggle-btn` elements. It shows/hides the `#login-form` and `#register-form` by toggling an `active` class, and swaps the left-panel image and message accordingly.

### Sub-pages (Service & Sales)
Each vehicle category has its own dedicated HTML file under `pages/`. These pages follow the same layout as the main page — same navbar, same footer — but with their own content (service pricing cards or sales listings). The footer is replicated from `_footer_template.html`.

### Live Clock
Embedded in the footer (`_footer_template.html`), a `setInterval`-based function reads the current time via `new Date()` every second and updates the `#hour`, `#min`, `#seconds`, and `#ampm` span elements.

### Deployment
The site is deployed directly from the `main` branch using **GitHub Pages**, which serves `index.html` as the root. No CI/CD pipeline or build step is required.

---

## 🚀 Running Locally

Since this is a pure static website with no dependencies to install, running it locally is straightforward.

### Method 1 — Open directly in browser (quickest)

```bash
# 1. Clone the repository
git clone https://github.com/Mosespushpa/mty2.git

# 2. Navigate into the folder
cd mty2

# 3. Open the main page in your browser
#    On macOS:
open index.html

#    On Windows:
start index.html

#    On Linux:
xdg-open index.html
```

> ⚠️ **Note:** Opening HTML files directly via `file://` may block the autoplay video in some browsers. Use Method 2 for the best experience.

---

### Method 2 — Using a local development server (recommended)

A simple HTTP server avoids browser restrictions on local files (video autoplay, relative paths, etc.).

**Option A: Python (built-in, no install needed)**

```bash
# Python 3
cd mty2
python3 -m http.server 8080

# Then open in your browser:
# http://localhost:8080
```

**Option B: Node.js with `npx serve`**

```bash
cd mty2
npx serve .

# Then open the URL shown in the terminal (usually http://localhost:3000)
```

**Option C: VS Code Live Server extension**

1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code.
2. Open the `mty2` folder in VS Code.
3. Right-click on `index.html` → **Open with Live Server**.
4. The site opens automatically at `http://127.0.0.1:5500`.

---

## 📄 Pages Reference

| URL / File | Description |
|---|---|
| `index.html` | Homepage — video, services, sales, gallery, sign-in, about, contact |
| `pages/bikes/bicycle-service.html` | Bicycle service packages with pricing |
| `pages/bikes/bike-service.html` | Motorcycle service packages with pricing |
| `pages/bikes/bicycle-sales.html` | Bicycle sales landing |
| `pages/bikes/bike-sales.html` | Motorcycle sales → Popular / Upcoming |
| `pages/bikes/popular-bike.html` | Popular motorcycles listing |
| `pages/bikes/upcoming-bike.html` | Upcoming motorcycles listing |
| `pages/cars/car-service.html` | Car service packages with pricing |
| `pages/cars/car-sales.html` | Car sales → Popular / New / Upcoming |
| `pages/cars/popular-cars.html` | Popular cars listing |
| `pages/cars/new-cars.html` | New cars listing |
| `pages/cars/upcoming-car.html` | Upcoming cars listing |
| `pages/trucks/truck-service.html` | Truck service packages |
| `pages/trucks/truck-sales.html` | Truck sales listing |

---

## 👥 Team

| Name | Role |
|---|---|
| **Moses** | Web Developer — built and developed the website |
| **Yagnesh** | Web Designer — UI/UX design |
| **Thilak** | Web Designer — UI/UX design |

All team members are B.Tech 1st-year Data Science students.

---

## 📌 Notes

- All Bootstrap and Font Awesome assets are stored **locally** inside `assets/` — no CDN required, so the site works offline once cloned.
- The sign-in and register forms are **UI only** — no data is sent to any server.
- The **Maps** navbar link opens Google Maps with a pre-filled search for service centers near Ghatkesar.
- `index.html.bak` is a backup of the main page and not served by the site.
- `_footer_template.html` is a **developer reference file** — it contains the shared footer HTML and clock script that are manually copied into each sub-page.

---

## 📜 License

This project is open source and available for educational use.  
© 2024 SHOP-WHEELS. All rights reserved.
