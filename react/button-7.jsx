export default () => (
  <>
    <button class="btn-7"><span>Button</span></button>

    <style jsx>{`
      .btn-7 {
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
      .btn-7 {
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

.btn-7 span {
  font-weight: 900;
  mix-blend-mode: difference;
}

.btn-7:before,
.btn-7:after {
  content: "";
  z-index: -1;
  width: 100%;
  height: 100%;

  position: absolute;
  top: -100%;
  left: 0;
  background: white;
  transition: transform 0.4s;
  will-change: transform;
}
.btn-7:before {
  top: -100%;
}
.btn-7:after {
  top: 100%;
}
.btn-7:hover:before {
  transform: translateY(100%);
}
.btn-7:hover:after {
  transform: translateY(-100%);
}

    `}</style>
  </>
)