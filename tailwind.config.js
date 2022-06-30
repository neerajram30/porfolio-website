module.exports = {
  darkMode: 'class',
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
      'hcolor' :'#292C6D',
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
    },
    boxShadow: {
      "inverse": "0 -1px 2px 0 rgba(0, 0, 0, 0.05)",
      "nav":"0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    },

   
    extend: {
      fontFamily:{
        sans:['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}
