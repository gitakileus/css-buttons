export default () => (
  <>
    <button class="btn-15"><span>Button</span></button>

    <style jsx>{`
      .btn-15 {
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
      .btn-15 {
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

.btn-15 span {
  font-weight: 900;
  mix-blend-mode: difference;
}

.btn-15:before,
.btn-15:after {
  content: "";
  width: 100%;
  height: 100%;
  z-index: -1;

  position: absolute;
  background: white;
  transform: skew(-68deg);
  transition: transform 0.2s;
}
.btn-15:before {
  top: -100%;
  left: 130%;
}
.btn-15:after {
  top: 100%;
  left: -130%;
}
.btn-15:hover:before {
  transform: skew(-68deg) translate(-10%, 100%);
}
.btn-15:hover:after {
  transform: skew(-68deg) translate(0, -100%);
}

    `}</style>
  </>
)