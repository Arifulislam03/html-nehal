module.exports = {
  mode: 'jit',
     content: [ 
      './*.html',
    ],
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
        
      
        "indigo-500": "#7d7c7d",
        "black": "#000000",
       
        'yellow-100': '#ffcc00',
        'yellow-200': '#f7dfce',
        'yellow-300': '#f5f4f6',
     
        black: {
          100: '#000000',
          200: '#1d1d1f',
          300: '#131313',
          400: '#312d22',
          500: '#75756f',
        
          
         
        },
        
      },

     
      backgroundImage: {
        "curved-blue-gradient": "url(/imagenes/precios/curved-blue-gradient-bg.svg)",
        "blue-cyan-gradient": "linear-gradient(90deg, #C84E89 0%, #F15F79 100%);",
        "border-gradient": "linear-gradient(90deg, #C84E89 0%, #F15F79 100%);",
      
          },


      placeholderColor: theme => theme('colors'),
      placeholderColor: {
        "coolGray-600":"#4B5563",
      },
      borderColor: theme => ({
        ...theme('colors'),
         DEFAULT: theme('colors.gray.300', 'currentColor'),
        'coolGray-100': '#f5f4f6',
        'yellow-300': '#FDE047',
       
       }),
       borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
       '3': '3px',
        '4': '4px',
       '5': '5px',
       '8': '8px',
      },
     
      borderRadius: {
        'none': '0',
        DEFAULT: '0',
        'sm': '0.25rem',
        'md': '8px',
        'lg': '1.25rem',
        'xl': '0'
      },
      
       fontFamily: { 
        sans: ['"Inter", sans-serif'],  
        display: ['"Inter", sans-serif'],
        body: ['"Inter", sans-serif'],   
      },
      fontSize: {
        'xs': '13px',
        'sm': '.875rem',
        'tiny': '.875rem',
         'base': '1rem',
         'lg': '1.125rem',
         'xl': '1.25rem',
         '2xl': '28px',
        '3xl': '2rem',
        '4xl': '2.5rem',
         '5xl': '3rem',
         '6xl': '3.5rem',
        '7xl': '4rem',
        '18': '18px',
       },
      boxShadow: {
        base:' 0px 1px 3px 0px #0000001A',
        none: 'none',
        
      },
      maxWidth: {
        '62.2': '200px',
        '317': '317px',
        '350': '350px',
        '50p': '50%',

      
      },
      width: {
        '15': '3.75rem',
        '168': '42rem',
        '87.5': '350px',
        '38.5': '154px',
        
        
       
      },
      height: {
        '15': '3.75rem',
        '35': '35px',
       
       },
       scale: {
        '0': '0',
       '25': '.25',
      },
      zIndex: {
        '-9999': '-9999',
        '0': 0,
        '1': -1,
        '2': 2,
        'auto': 'auto',
      },
      inset: {
        '45': "180px",
        
      },
      spacing: {
        '25': '100px',
      },
      opacity: {
        '60': '60%',
        '3': '0.6',
        
       },
       lineHeight: {
        '0': '0',
        '13': '13px',
        '3.25': '3.25',
        '1.3': '1.3',
       
 
       }
    },
  },
  // Other stuff
};
