export function css(el, styles) {
  Object.keys(styles).forEach((styleProp) => {
    // eslint-disable-next-line no-param-reassign
    el.style[styleProp] = styles[styleProp];
  });
}

export function addStyles(
  btn,
  acModal,
  acModalBg,
  acModalContent,
  acModalBox,
  acModalClose,
) {
  css(btn, {
    backgroundColor: '#4CAF50' /* Green */,
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
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
    maxHeight: 'calc(100vh - 20px)',
    width: '60%',
    overflow: 'auto',
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
