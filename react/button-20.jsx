export default () => (
  <>
    <button class="btn-20"><span>Button</span></button>

    <style jsx>{`
      .btn-20 {
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
      .btn-20 {
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

.btn-20 span {
  font-weight: 900;
  mix-blend-mode: difference;
}

.btn-20:before {
  content: "";
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: -108%;

  background: white;
  transform: skew(45deg);
  transition: transform 0.2s;
  will-change: transform;
}
.btn-20:hover:before {
  transform: skew(0deg) translateX(108%);
}

    `}</style>
  </>
)