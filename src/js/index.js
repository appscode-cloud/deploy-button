import { addStyles } from "./styles";
import addEventListeners from "./event-listeners";

export function initialize(ref) {
  const el = document.querySelector(ref);
  el.innerHTML = `<button class="ac-bb-modal-button">Deploy with ByteBuilders</button>

  <div class="ac-bb-modal">
    <div class="ac-bb-modal-background"></div>
    <div class="ac-bb-modal-content">
      <div class="ac-bb-box">
        <iframe class="ac-iframe" src="http://deploy.bb.test:5994/?product=voyager" width="100%" height="500"></iframe>
      </div>
    </div>
    <button class="ac-bb-modal-close">X</button>
  </div>`;

  // catch all the elements
  const btn = document.querySelector(".ac-bb-modal-button");
  const acModal = document.querySelector(".ac-bb-modal");
  const acModalBg = document.querySelector(".ac-bb-modal-background");
  const acModalContent = document.querySelector(".ac-bb-modal-content");
  const acModalBox = document.querySelector(".ac-bb-box");
  const acModalClose = document.querySelector(".ac-bb-modal-close");
  // const acModalIframe = document.querySelector(".ac-iframe");

  // add functionality
  addEventListeners(btn, acModal, acModalClose);

  // add styles
  addStyles(btn, acModal, acModalBg, acModalContent, acModalBox, acModalClose);
}
