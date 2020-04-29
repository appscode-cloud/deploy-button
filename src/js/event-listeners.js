import { css } from './styles';

export default function (btn, acModal) {
  window.addEventListener('message', (e) => {
    // event listener to listed to event fired from iframe
    // close modal event is fired from iframe using the postMessage API
    // src: https://stackoverflow.com/questions/9153445/how-to-communicate-between-iframe-and-the-parent-site
    // postMessage api : https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
    if (e.origin === 'http://deploy.bb.test:5994') {
      // do this only if the origin is the prefered origin
      const { data } = e;
      if (data.closeModal) {
        // close the modal
        css(acModal, { display: 'none' });
      }
    }
  });

  btn.addEventListener('mouseenter', (e) => {
    e.preventDefault();

    css(btn, { cursor: 'pointer' });
  });
  btn.addEventListener('mouseleave', (e) => {
    e.preventDefault();

    css(btn, { cursor: 'default' });
  });

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    css(acModal, { display: 'flex' });
  });

  document.addEventListener('keydown', (e) => {
    e.preventDefault();

    const { keyCode } = e;
    if (keyCode === 27) {
      css(acModal, { display: 'none' });
    }
  });
}
