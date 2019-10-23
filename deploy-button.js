const css = function(el, styles) {
  for (const property in styles) el.style[property] = styles[property];
};

const initDeployBtn = function(ref) {
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
  const acModalIframe = document.querySelector(".ac-iframe");

  // add functionality
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    css(acModal, {display: "flex"});
  })

  acModalClose.addEventListener("click", (e) => {
    e.preventDefault();

    css(acModal, {display: "none"});
  })

  document.addEventListener("keydown", (e) => {
    e.preventDefault();

    const keyCode = e.keyCode;
    if (keyCode === 27) {
      css(acModal, {display: "none"});
    }
  })

  // add styles
  css(btn, {
    backgroundColor: "#4CAF50", /* Green */
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
  });

  css(acModal, {
    alignItems: "center",
    display: 'none',
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
    position: "fixed",
    zIndex: "40",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0"
  });

  css(acModalBg, {
    backgroundColor: "rgba(10,10,10,.86)",
    bottom: "0",
    left: "0",
    position: "absolute",
    right: "0",
    top: "0"
  });

  css(acModalContent, {
    margin: "0 auto",
    maxHeight: "calc(100vh - 80px)",
    width: "80%",
    overflow: "auto",
    position: "relative"
  });

  css(acModalBox, {
    backgroundColor: "#fff",
    borderRadius: "6px",
    boxShadow:
      "0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02)",
    color: "#4a4a4a",
    display: "block"
  });

  css(acModalClose, {
    position: "absolute",
    right: "40px",
    top: "40px",
    backgroundColor: "transparent",
    borderColor: "transparent",
    color: "#fff",
    fontSize: "22px",
    cursor: "pointer"
  });
};
