import { icon } from '@fortawesome/fontawesome-svg-core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import { css } from './styles';

export function handleButtonMouseEnter(e, btn) {
  e.preventDefault();
  css(btn, { cursor: 'pointer' });
}

export function handleButtonMouseLeave(e, btn) {
  e.preventDefault();
  css(btn, { cursor: 'default' });
}

export function handleKeyDown(e, acModal) {
  e.preventDefault();

  const { keyCode } = e;
  if (keyCode === 27) {
    css(acModal, { display: 'none' });
  }
}

function goToLoginPage(e, loginUrl) {
  e.preventDefault();

  window.open(loginUrl, '_blank');
}

function openModal(e, acModal) {
  e.preventDefault();

  css(acModal, { display: 'flex' });
}

function handleLoggedOutUser(btn, loginUrl) {
  // first show the logged out information in button
  // create a error message
  const erroMessage = document.createElement('span');
  // add styles to error message
  css(erroMessage, {
    color: 'red', display: 'block', fontSize: '14px', fontWeight: '300',
  });

  // add error Message content
  erroMessage.innerHTML = `${icon(faExclamationTriangle).html} Need to sign in`;
  btn.prepend(erroMessage);

  // add event listener to button to go to new window
  btn.addEventListener('click', (e) => { goToLoginPage(e, loginUrl); });
}

function handleLoggedInUser(btn, acModal) {
  btn.addEventListener('click', (e) => { openModal(e, acModal); });
}

export function handleIframeMessages(e, btn, acModal) {
  // event listener to listed to event fired from iframe
  // close modal event is fired from iframe using the postMessage API
  // src: https://stackoverflow.com/questions/9153445/how-to-communicate-between-iframe-and-the-parent-site
  // postMessage api : https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
  if (e.origin === 'http://deploy.bb.test:5994') {
    // do this only if the origin is the prefered origin
    const { data } = e;
    const {
      type, closeModal, isLoggedIn, loginUrl,
    } = data;
    if (type === 'acModalClose') {
      // modal close event
      if (closeModal) {
        // close the modal
        css(acModal, { display: 'none' });
      }
    } else if (type === 'acLogin') {
      // login type event
      if (!isLoggedIn) {
        // user is not logged in
        handleLoggedOutUser(btn, loginUrl);
      } else {
        // user is logged in
        handleLoggedInUser(btn, acModal);
      }
    }
  }
}
