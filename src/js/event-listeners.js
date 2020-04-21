import { css } from './styles';

export default function (btn, acModal, acModalClose) {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    css(acModal, { display: 'flex' });
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
