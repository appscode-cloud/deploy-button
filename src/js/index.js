/* eslint-disable import/prefer-default-export */
import { addStyles } from './styles';
import addEventListeners from './event-listeners';

export function initialize(ref) {
  const el = document.querySelector(ref);
  el.innerHTML = `<button class="ac-bb-modal-button"><img class="ac-bb-modal-button-icon" src="https://github.com/appscode/static-assets/raw/master/images/products/bytebuilders/bytebuilders-512x512.png" alt width="40"/>Deploy with ByteBuilders</button>
  <div class="ac-bb-modal">
    <div class="ac-bb-modal-background"></div>
    <div class="ac-bb-modal-content">
      <div class="ac-bb-box">
        <iframe class="ac-iframe" src="http://deploy.bb.test:5994/?product=kubedb&owner=system-admin" width="100%" ></iframe>
      </div>
    </div>
  </div>`;

  // catch all the elements
  const btn = document.querySelector('.ac-bb-modal-button');
  const btnIcon = document.querySelector('.ac-bb-modal-button-icon');
  const acModal = document.querySelector('.ac-bb-modal');
  const acModalBg = document.querySelector('.ac-bb-modal-background');
  const acModalContent = document.querySelector('.ac-bb-modal-content');
  const acModalBox = document.querySelector('.ac-bb-box');
  const acIframe = document.querySelector('.ac-iframe');

  // set modal height to almost 80% of the view port
  const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  acIframe.style.height = `calc(100vh - ${vh * 0.185}px)`;


  // add functionality
  addEventListeners(btn, acModal);

  // add styles
  addStyles(btn, btnIcon, acModal, acModalBg, acModalContent, acModalBox);
}
