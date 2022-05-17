export default () => (
  <>
    <button class="btn-28">
  <span class="text-container">
    <span class="text">Button</span>
  </span>
  <span class="text-container">
    <span class="text" aria-hidden>Button</span>
  </span>
</button>

    <style jsx>{`
      .btn-28 {
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
      .btn-28 {
  --tilt: 40deg;

  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;

  position: relative;

  text-transform: uppercase;

  perspective: 500px;
  transform-style: preserve-3d;
}

.btn-28 .text-container {
  z-index: -1;
  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;

  position: absolute;
  top: 0;
  left: 0;

  background: white;

  transform-origin: center center;
  transition: transform 0.2s;
}
.btn-28 .text {
  font-weight: 900;
  mix-blend-mode: difference;
}
.btn-28:hover .text-container {
  transform: rotateY(var(--tilt));
}
.btn-28:hover .text-container:nth-child(2) {
  transform: none;
}

    `}</style>
  </>
)