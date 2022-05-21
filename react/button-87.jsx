export default () => (
  <>
    <button class="btn-87">
  <span>Button</span>
  <svg aria-hidden><circle></svg>
</button>
    <style jsx>{`
      .btn-87 {
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
      .btn-87 {
  display: block;
  height: 110px;
  aspect-ratio: 1;

  margin: 1rem auto;
  border-radius: 999px;

  position: relative;

  font-weight: 900;
  text-transform: uppercase;
}

.btn-87 span {
  mix-blend-mode: difference;
}

.btn-87:before {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;

  border-radius: 50%;
  background: white;

  opacity: 0;
  transition: opacity 0.2s linear;
}

.btn-87:hover:before {
  opacity: 1;
  transition: opacity 0.2s linear 1s;
}
.btn-87 svg {
  width: 105%;
  height: 105%;
  pointer-events: none;
  position: absolute;
  top: -5px;
  left: -5px;
  fill: none;
  stroke: currentcolor;
  stroke-width: 4px;
  stroke-dasharray: 450;
  stroke-dashoffset: 450;
  transition: stroke-dashoffset 0.4s ease-in-out;
}

.btn-87 circle {
  cx: 52%;
  cy: 52%;
  r: 45%;
}

.btn-87:hover svg {
  stroke-dashoffset: 120;
  transition: stroke-dashoffset 1s ease-in-out;
}

    `}</style>
  </>
)