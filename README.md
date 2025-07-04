# Tel Aviv Estates - Premium Real Estate Website

A stunning, award-worthy real estate website showcasing luxury properties in Tel Aviv with premium design, smooth animations, and exceptional user experience.

## ✨ Features

### 🎨 Premium Design
- **Awwwards-level aesthetics** with sophisticated color palette
- **Glass morphism effects** and premium gradients
- **Custom typography** using Playfair Display and Inter fonts
- **Off-white backgrounds** with deep blue and gold accents
- **Premium spacing system** and visual hierarchy

### 🎭 Advanced Animations
- **Framer Motion** powered smooth transitions
- **Scroll-triggered animations** with reveal effects
- **Parallax scrolling** and floating elements
- **Typewriter effects** for hero text
- **Stagger animations** for content sections
- **Hover micro-interactions** with ripple effects

### 🎯 Interactive Elements
- **Custom cursor** with glow effects and particles
- **Premium button animations** with gradient overlays
- **Card hover effects** with 3D transforms
- **Smooth page transitions** between sections
- **Responsive design** for all devices

### 🏠 Property Showcase
- **Storytelling approach** to property descriptions
- **Premium image galleries** with hover effects
- **Feature badges** and property details
- **Interactive property cards** with glass morphism
- **Wave dividers** between sections

## 🚀 Technologies

- **Next.js 15** with App Router
- **React 19** with TypeScript
- **Framer Motion** for animations
- **Tailwind CSS 4** for styling
- **Custom CSS** with CSS variables
- **Responsive design** principles

## 🎨 Design System

### Color Palette
```css
--off-white: #f8f7f4
--deep-blue: #1e3a8a
--gold: #d4af37
--warm-gray: #6b7280
--soft-black: #1f2937
```

### Typography
- **Playfair Display** for headings and elegant text
- **Inter** for body text and UI elements
- **Custom font weights** and letter spacing

### Animations
- **Cubic-bezier easing** for smooth transitions
- **Spring animations** for interactive elements
- **Stagger effects** for content reveals
- **Parallax scrolling** for depth

## 📱 Sections

### Hero Section
- **Video background** with gradient overlays
- **Typewriter text** animations
- **Floating elements** and particle effects
- **Premium CTA button** with ripple effects
- **Scroll indicator** with smooth animations

### Properties Section
- **Storytelling titles** instead of generic names
- **Premium property cards** with glass morphism
- **Hover effects** with 3D transforms
- **Feature badges** and property details
- **Wave divider** for smooth transitions

### Why Tel Aviv Section
- **Icon animations** with hover effects
- **Grid layout** with stagger animations
- **Premium typography** and spacing
- **Floating background elements**

### Team Section
- **Professional team cards** with hover effects
- **Circular images** with gradient overlays
- **Role descriptions** with elegant typography
- **Smooth reveal animations**

## 🎯 Performance Features

- **Optimized images** with lazy loading
- **Smooth scrolling** with CSS scroll-behavior
- **Efficient animations** with GPU acceleration
- **Responsive design** for all screen sizes
- **Accessibility** considerations

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd my-tel-aviv-real-estate-agency
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🎨 Customization

### Colors
Update CSS variables in `src/app/globals.css`:
```css
:root {
  --deep-blue: #1e3a8a;
  --gold: #d4af37;
  /* ... other colors */
}
```

### Animations
Modify animation parameters in component files:
```typescript
transition={{
  duration: 0.8,
  ease: [0.4, 0, 0.2, 1]
}}
```

### Content
Update property data in `src/components/ui/AvailableProperties.tsx`:
```typescript
const properties = [
  {
    title: "Your Property Title",
    subtitle: "Your Property Subtitle",
    // ... other properties
  }
];
```

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Flexible grids** and layouts
- **Touch-friendly** interactions
- **Optimized typography** scaling

## 🎯 Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

For questions or support, please contact the development team.

---

**Built with ❤️ for premium real estate experiences** 