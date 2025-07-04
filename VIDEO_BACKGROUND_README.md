# Video Background Implementation

## Overview
This implementation provides a cross-browser, performance-optimized video background for the main page hero section.

## Features

### ✅ Implemented Requirements
- **Auto-play**: Video automatically starts playing
- **Muted**: No sound by default
- **Loop**: Video plays continuously
- **Responsive**: 100% width and height, positioned behind all content
- **Tailwind Classes**: Uses Tailwind for positioning and scaling
- **Fallback Image**: SVG poster for browsers that don't support video
- **Native Video Tag**: Uses standard `<video>` element, not a player library

### 🚀 Performance Optimizations
- **Connection Detection**: Automatically disables video on slow connections (2g/slow-2g)
- **Lazy Loading**: Video only loads when supported and connection is good
- **Preload Metadata**: Only loads video metadata initially
- **Smooth Transitions**: Fade-in effect when video loads
- **Mobile Optimization**: Special handling for mobile devices

### 🌐 Cross-Browser Compatibility
- **Fallback Support**: Shows poster image if video fails to load
- **Mobile Support**: Handles autoplay restrictions gracefully
- **Accessibility**: Proper ARIA attributes
- **Reduced Motion**: Respects user's motion preferences

## File Structure

```
public/
├── telaviv-skyview.mp4    # Main video file
└── poster.svg             # Fallback poster image

src/components/ui/
├── VideoBackground.tsx    # Reusable video background component
└── Hero.tsx              # Updated hero section using VideoBackground
```

## Usage

### Basic Usage
```tsx
import VideoBackground from "@/components/ui/VideoBackground";

<VideoBackground 
  src="/telaviv-skyview.mp4"
  poster="/poster.svg"
  className="min-h-screen"
>
  {/* Your content here */}
</VideoBackground>
```

### Component Props
- `src`: Path to video file
- `poster`: Path to poster image (optional)
- `className`: Additional CSS classes
- `children`: Content to display over video

## Browser Support

### Full Support
- Chrome 3+
- Firefox 3.5+
- Safari 3.1+
- Edge 12+

### Fallback Behavior
- Shows poster image if video fails to load
- Disables video on slow connections
- Graceful degradation on older browsers

## Performance Considerations

### Automatic Optimizations
- **Connection Speed Detection**: Uses Network Information API
- **Mobile Detection**: Optimized for mobile devices
- **Memory Management**: Proper cleanup of event listeners
- **GPU Acceleration**: Uses hardware acceleration where available

### Manual Optimizations
- **Video Format**: Use MP4 with H.264 codec for best compatibility
- **File Size**: Keep video files under 10MB for optimal loading
- **Resolution**: 1920x1080 or lower for web use
- **Compression**: Use appropriate compression settings

## Security Features

### Built-in Protections
- **CORS Compliance**: Proper cross-origin handling
- **Content Security Policy**: Compatible with strict CSP
- **XSS Prevention**: Safe DOM manipulation
- **Resource Loading**: Controlled resource loading

## Troubleshooting

### Common Issues

1. **Video not playing on mobile**
   - Solution: Video will show poster image, which is expected behavior
   - Mobile browsers often block autoplay for user experience

2. **Video not loading on slow connections**
   - Solution: Automatic fallback to poster image
   - This is intentional for performance

3. **Video appears stretched**
   - Solution: Check `object-fit: cover` CSS property
   - Ensure video aspect ratio matches container

### Debug Mode
Add `console.log` statements in VideoBackground component to debug:
```tsx
console.log('Video supported:', isVideoSupported);
console.log('Should load video:', shouldLoadVideo);
console.log('Video loaded:', isVideoLoaded);
```

## Future Enhancements

### Potential Improvements
- **WebM Support**: Add WebM format for better compression
- **Quality Switching**: Adaptive bitrate based on connection
- **Custom Controls**: Optional video controls
- **Analytics**: Track video performance metrics

### Browser Features to Watch
- **Picture-in-Picture API**: For enhanced video experience
- **Media Session API**: For better mobile integration
- **WebCodecs API**: For advanced video processing

## Credits
- Video: Tel Aviv skyline footage
- Poster: Custom SVG with gradient design
- Implementation: React + TypeScript + Tailwind CSS 