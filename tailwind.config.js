/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        'icon-user': "url('/assets/images/user-icon.png')",
        'icon-search': "url('/assets/images/search-icon.png')",
        'icon-favorite': "url('/assets/images/favorite-icon.png')",
        'icon-shop-cart': "url('/assets/images/shopping-cart-icon.png')"
      }
    },
  },
  plugins: [],
  important: true,
};


