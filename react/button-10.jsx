export default () => (
  <>
    <button class="btn-10"><span>Button</span></button>

    <style jsx>{`
      .btn-10 {
        all: unset;
        text-align: center;
        curosr: default;
        font-family: sans-serif;
        font-weight: 900;
        box-sizing: border-box;
        padding: 25px 50px;
        width: auto !important;
        height: auto !important;
      }
      .btn-10 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  position: relative;
  overflow: hidden;

  text-transform: uppercase;
  border: 1px solid currentColor;
}

.btn-10 span {
  font-weight: 900;
  mix-blend-mode: difference;
}

.btn-10:before {
  content: "";
  z-index: -1;
  width: 100%;
  height: 20px;

  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: -100%;
  background: white;
  transition: height 0.2s, left 0.2s;
}
.btn-10:hover:before {
  left: 0;
}
.btn-10:active:before {
  height: 100%;
}

    `}</style>
  </>
)