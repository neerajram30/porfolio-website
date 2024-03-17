import daisyui from "daisyui"

module.exports = {
  // darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './Components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'navcolor': '#36485E',
      'background': '#DADBBD',
      'pcolor':'#CD1818',
      'hdcolor': '#676FA3',
      'hcolor' :'#646FD4',
      'description':'#082032',
      'darkdesc':'#FAEDF0',
      'hover':'#11468F',
      'btn':'#3AB0FF',
      'btn-hover':'#30AADD',
      'react':'#61DBFB',
      'project':'#22577E',
      'projecthe':'#FFD124',
      'stack':'#EC255A',
      'blogbg':'#151D3B',
      'blogdark':'#010101',
      'bloghover':'#FFF89A',
      'black':'#000000',
      'twitter':'#00acee',
      'iconhover':'#333333',
      'insta':'#C13584',
      'fb': '#405DE6',
      'greyhover':'#DCDCDC',
      'rdhover':'#890F0D',
      'toolbg':'#383838',
      'gr1':'#000000',
      'gr2':'#495B71',
      'gr3':'#2C3E50'
    },
    boxShadow: {
      "inverse": "0 -1px 2px 0 rgba(0, 0, 0, 0.05)",
      "nav":"0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      "project":"0px 0px 1px 1px rgba(0, 0, 0, 0.05)",
      "cards":"0px 2px 8px 0px rgba(99, 99, 99, 0.2)"
    },

   
    extend: {
      fontFamily:{
        sans:['Inter','sans-serif'],
        overpass:['Overpass','sans-serif'],
        
      },
    },
  },
  plugins: [daisyui],
}
