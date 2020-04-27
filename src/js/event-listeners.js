import { css } from './styles';

export default function (btn, acModal, acModalBox, acModalClose) {
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

    // get position of acModalBox
    const { top, right } = acModalBox.getBoundingClientRect();
    // position the close button
    css(acModalClose, { top: `${top + 10}px`, left: `${right - 47}px` });
  });

  acModalClose.addEventListener('click', (e) => {
    e.preventDefault();

    css(acModal, { display: 'none' });
  });

  document.addEventListener('keydown', (e) => {
    e.preventDefault();

    const { keyCode } = e;
    if (keyCode === 27) {
      css(acModal, { display: 'none' });
    }
  });
}
