/* eslint-disable import/prefer-default-export */
import { addStyles } from './styles';
import {
  handleButtonMouseEnter, handleButtonMouseLeave,
  handleKeyDown, handleIframeMessages,
} from './event-handlers';

const iFrameDomain = 'http://deploy.bb.test:5994';

const logoUrl = 'https://cdn.appscode.com/images/products/bytebuilders/bytebuilders-512x512.png';
const buttonHtml = `<button class="ac-bb-modal-button"><img class="ac-bb-modal-button-icon" src="${logoUrl}" alt width="40"/>Deploy with ByteBuilders</button>`;


function getModalHtml(domain, conf) {
  // get configuration set by user
  const { product, owner, productId } = conf;

  // generate iframe url
  const url = `${domain}/?${productId ? `product_id=${productId}` : `product=${product}&owner=${owner}`}`;

  return `
  <div class="ac-bb-modal">
    <div class="ac-bb-modal-background"></div>
    <div class="ac-bb-modal-content">
      <div class="ac-bb-box">
        <iframe class="ac-iframe" src="${url}" width="100%" ></iframe>
      </div>
    </div>
</div>
  `;
}

export function initialize(ref, conf) {
  // get element
  const el = document.querySelector(ref);
  // place the button and modal
  el.innerHTML = buttonHtml + getModalHtml(iFrameDomain, conf);

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

  // add styles
  addStyles(btn, btnIcon, acModal, acModalBg, acModalContent, acModalBox);

  // add functionality and event listeners

  // add event listener to handle hover effect in javascript
  btn.addEventListener('mouseenter', (e) => { handleButtonMouseEnter(e, btn); });
  btn.addEventListener('mouseleave', (e) => { handleButtonMouseLeave(e, btn); });
  // add event listener to listen to iframe messages
  window.addEventListener('message', (e) => { handleIframeMessages(e, btn, acModal); });
  // add event listener to handle keydown event
  btn.addEventListener('keydown', (e) => { handleKeyDown(e, acModal); });
}
