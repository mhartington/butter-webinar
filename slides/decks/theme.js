import Provider from './provider';
const theme = {
  fontWeights: {
    body: 200,
    heading: 600,
    bold: 500
  },
  fonts: {
      body: 'system-ui, sans-serif',
  },
  colors: {
    primary: '#6699cc',
  },
  styles: {
    Slide: {
      fontFamily: 'body',
      textAlign: "center"
    },
    h1: {
      margin: '0 0 10px'
    },
    h2: {
      margin: '0 0 10px'
    },
    h3: {
      margin: '0 0 10px'
    },
    h4: {
      margin: '0 0 10px'
    },
    h5: {
      margin: '0 0 10px'
    },
    h6: {
      margin: '0 0 10px'
    },
    p: {
      margin: '10px 0 ',
    },
    a: {
      textDecoration: 'none',
      transition: "color 0.15s ease",
      ':hover': {
        color: 'base0D'
      },
      '::after': {
        content: '""',
        display: 'block',
        width: '100%',
        height: 2,
        backgroundColor: 'primary',
        opacity: 0,
        transform: 'translate3D(0,10px, 0)',
        transition: 'opacity 0.3s, transform 0.3s',
      },
      ':hover::after': {
        opacity: 1,
        transform: 'translate3D(0,0,0)',
      }
    },
    blockquote: {
      fontStyle: 'italic'
    },
    ul: {
      listStyle: 'none',
      paddingInlineStart: 0,
      textAlign: 'center'
    },
    li: {
      lineHeight: 2.2,
      '::before': {
          content:"'\\2713\\0020'",
        color:'#3880FF'
      }

    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block',
      margin: 'auto'
    },
    root: {
      '.profile-img': {
        width: '250px',
        borderRadius: '50%',
        border: 'solid 2px rgba(217,217,217,0.7)',
      }
    }
  },
}

export default {
  ...theme,
  Provider
};
