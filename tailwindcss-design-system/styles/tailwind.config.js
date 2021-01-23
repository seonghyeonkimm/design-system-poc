module.exports = {
  purge: ['./components/**/*.tsx'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        elevate: 'var(--colors-primary-elevate)',
        DEFAULT: 'var(--colors-primary)',
        down: 'var(--colors-primary-down)',
      },
      secondary: {
        elevate: 'var(--colors-secondary-elevate)',
        DEFAULT: 'var(--colors-secondary)',
        down: 'var(--colors-secondary-down)',
      },
      tertiary: 'var(--colors-tertiary)',
      gray: {
        10: 'var(--colors-gray-10)',
        9: 'var(--colors-gray-9)',
        8: 'var(--colors-gray-8)',
        7: 'var(--colors-gray-7)',
        6: 'var(--colors-gray-6)',
        5: 'var(--colors-gray-5)',
        4: 'var(--colors-gray-4)',
        3: 'var(--colors-gray-3)',
        2: 'var(--colors-gray-2)',
        1: 'var(--colors-gray-1)',
        0: 'var(--colors-gray-0)',
      },
      turquoise: 'var(--colors-turquoise)',
      mint: 'var(--colors-mint)',
      orange: 'var(--colors-orange)',
      green: 'var(--colors-green)',
      red: 'var(--colors-red)',
      'electric-blue': 'var(--colors-electric-blue)',
      'baby-blue': 'var(--colors-baby-blue)',
      lemon: 'var(--colors-lemon)',
      pink: 'var(--colors-pink)',
      'light-mint': 'var(--colors-light-mint)',
      'light-blue': 'var(--colors-light-blue)',
      peach: 'var(--colors-peach)',
    },
    spacing: {
      '1': '8px',
      '2': '16px',
      '3': '24px',
      '4': '32px',
      '5': '40px',
      '6': '56px',
      '7': '72px',
      '8': '80px',
      '9': '96px',
      '10': '120px',
    },
    fontFamily: {
      'sans': [
        'Spoqa Han Sans Neo',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      'serif': [
        'Spoqa Han Sans Neo',
        'ui-serif',
        'Georgia, Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
      'mono': [
        'Spoqa Han Sans Neo',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    fontSize: {
      'h1': ['56px', '72px'],
      'h2': ['48px', '56px'],
      'h3': ['40px', '44px'],
      'h4': ['32px', '36px'],
      'h5': ['24px', '32px'],
      'h6': ['20px', '28px'],
      'h7': ['16px', '20px'],
      'body1': ['20px', '28px'],
      'body2': ['18px', '26px'],
      'body3': ['16px', '24px'],
      'body4': ['14px', '20px'],
      'body5': ['12px', '20px'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

