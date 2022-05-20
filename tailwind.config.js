module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  darkMode: false,
   corePlugins: {
    container: true 
  },
    plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '610px',
          },
          '@screen md': {
            maxWidth: '750px',
          },
          '@screen lg': {
            maxWidth: '1000px',
          },
          '@screen xl': {
            maxWidth: '1200px',
          },
          '@screen 2xl': {
            maxWidth: '1316px', 
          },
        }
      })
    } 
  ],
  theme: {
    extend: {
      container: { 
        center: true,
        padding: '1rem',
       }, 
      colors: {
        
        "primary-100": "#ff5041",
        "primary-200": "#f3dfdb",
        "primary-300": "#ff50416b",
        "dark-100": "#000",
        'secondary': '#6f6b80',
        'secondary-100': '#0F172A',


        
        
        
      },
     


      placeholderColor: theme => theme('colors'),
      placeholderColor: {
        "coolGray-400":"#9CA3AF",
      },

      borderColor: theme => ({
        ...theme('colors'),
         DEFAULT: theme('colors.gray.300', 'currentColor'),
        'primary-300': '#94A3B8',
        'coolGray-300': '#D1D5DB',
        'coolGray-400': '#D9D9D9',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        "indigo-500":"#6366F1",
       }),
      borderRadius: {
        'none': '0',
        DEFAULT: '0',
        'sm': '0.25rem',
        'md': '0.625rem',
        'lg': '1.25rem',
        'xl': '0'
      },
     
      fontFamily: {
        sans: [
          '"Red Hat Display",sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
         'base': '1rem',
         'lg': '1.125rem',
         'xl': '1.563rem',

         '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
         '5xl': '3rem',
         '6xl': '3.5rem',
        '7xl': '3.75rem',
       },
      boxShadow: {
        base:' 0px 1px 3px 0px #0000001A',
        sm: '0px 16px 20px 0px rgba(0, 0, 0, 0.059)',
        md: '0px 20px 40px 0px rgba(0, 0, 0, 0.102)',
        lg: '0px 10px 15px 0px #0000001A',
         xl: '0 7px 14px 0 rgba(0, 0, 0, 0.2)',
        none: 'none',
      },
      maxWidth: {
        '247': '247px',
        '950': '950px',
        '1/2': '50%',
        '3/4': '75%',
        '3/4': '75%',
      },
      width: {
        '15': '3.75rem',
      
      },
      height: {
        544: '34rem',
      
       },

       backgroundImage: {
        "blue-cyan-gradient": "linear-gradient(90deg,rgba(20,20,51,.9) 0,#141433 45%,#141433 100%)",
        "border-gradient": "linear-gradient(90deg, #C84E89 0%, #F15F79 100%);",
      
          },
       scale: {
        '0': '0',
       '25': '.25',
        '50': '.5',
        '75': '.75',
        '90': '.9',
       '95': '.95',
        '100': '1',
       '105': '1.05',
       '110': '1.1',
        '125': '1.25',
        '150': '1.5',
       '200': '2',
      },
      zIndex: {
        '-9999': '-9999',
        '0': 0,
        '1': -1,
        '2': 2,
       '999': 999,
       '9999': 9999,
        'auto': 'auto',
      },
      inset: {
        '10.5': "10.5%",
        '7%': "7%",
        '5%': "5%",

      },
      opacity: {
        '7': '.7',
        '0.9': '0.9',
        '1': '1',
       },
       lineHeight: {
        '0': '0',
        '7': '1.8rem',

       }
    },
  },
  // Other stuff
};
