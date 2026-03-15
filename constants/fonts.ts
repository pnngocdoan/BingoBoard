export const Fonts = {
  heading:       'PlayfairDisplay',           // Playfair Display – serif regular
  headingItalic: 'PlayfairDisplay-Italic',    // Playfair Display – serif italic (Android-safe)
  body:          'MontserratClassic',         // Montserrat Bold (700) – CTA, display
  bodySemiBold:  'MontserratClassicSemiBold', // Montserrat SemiBold (600) – stats, labels, UI
  bodyRegular:   'MontserratClassicRegular',  // Montserrat Regular (400) – body copy
} as const;

// Canva tracking values: divide by 1000 × fontSize = letterSpacing in px
export const FontTracking = {
  heading: -30,  // Playfair Display
  body:    -59,  // Montserrat
} as const;
