export function css(el, styles) {
  Object.keys(styles).forEach((styleProp) => {
    // eslint-disable-next-line no-param-reassign
    el.style[styleProp] = styles[styleProp];
  });
}

export function addStyles(
  btn,
  btnIcon,
  acModal,
  acModalBg,
  acModalContent,
  acModalBox,
  acModalClose,
) {
  css(btn, {
    backgroundColor: '#fff',
    border: '1px solid #003466',
    borderRadius: '4px',
    color: '#003466',
    padding: '10px 15px',
    minHeight: '65px',
    textAlign: 'center',
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'inline-block',
    fontSize: '20px',
  });

  css(btnIcon, {
    verticalAlign: 'middle',
    marginRight: '10px',
  });

  css(acModal, {
    alignItems: 'center',
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'fixed',
    zIndex: '40',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
  });

  css(acModalBg, {
    backgroundColor: 'rgba(10,10,10,.86)',
    bottom: '0',
    left: '0',
    position: 'absolute',
    right: '0',
    top: '0',
  });

  css(acModalContent, {
    margin: '0 auto',
    maxHeight: 'calc(100vh - 0px)',
    width: '60%',
    overflowY: 'auto',
    overflowX: 'hidden',
    position: 'relative',
  });

  css(acModalBox, {
    backgroundColor: '#fff',
    borderRadius: '6px',
    boxShadow:
      '0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02)',
    color: '#4a4a4a',
    display: 'block',
  });

  css(acModalClose, {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: '#74818D',
    fontSize: '22px',
    cursor: 'pointer',
  });
}
