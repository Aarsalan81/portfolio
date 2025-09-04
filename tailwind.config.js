/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./js/**/*.{js,ts}",
  ],
  darkMode: ['selector'],
  theme: {
    extend: {
      colors: {
        'light-background': "#F9FAFB",
        'light-card': "#FFFFFF",
        'light-text': "#111827",
        'light-textSecondary': "#6B7280",
        'light-primary': "#4F46E5", // آبی-بنفش 
        'light-primaryHover': "#6366F1",
        'light-success': "#059669",
        'light-warning': "#D97706",
        'bg-active-button': 'rgb(101, 31, 255)',
        'bg-button': 'rgb(49, 27, 146)',
        'dark-background': "#0F172A",
        'dark-card': "#1E293B",
        'dark-text': "#F8FAFC",
        'dark-textSecondary': "#94A3B8",
        'dark-primary': "#6366F1", // آبی-بنفش برای دارک مود 
        'dark-primaryHover': "#818CF8",
        'dark-success': "#10B981",
        'dark-warning': "#F59E0B",
      }
    },
  },
  plugins: [
    function ({ addUtilities}) {
      addUtilities({
        '.dir-rtl': { direction: 'rtl' },
        '.dir-ltr': { direction: 'ltr' },
      })
    }
  ],
}

