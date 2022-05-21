export default () => (
  <>
    <button class="btn-19">
  <span class="text-container">
    <span class="text">Button</span>
  </span>
</button>

    <style jsx>{`
      .btn-19 {
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
      .btn-19 {
  --width: 250px;

  box-sizing: border-box;
  display: block;
  width: var(--width);
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  position: relative;
  overflow: hidden;

  text-transform: uppercase;
  border: 1px solid currentColor;
}

.btn-19 .text-container {
  display: block;
  position: relative;
  overflow: hidden;
}

.btn-19 .text {
  display: block;
  position: relative;

  font-weight: 900;
  mix-blend-mode: difference;
}

.btn-19:hover .text {
  animation: move-up-alternate 0.3s forwards;
  will-change: transform;
}
@keyframes move-up-alternate {
  from {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(80%);
  }
  51% {
    transform: translateY(-80%);
  }
  100% {
    transform: translateY(0%);
  }
}

.btn-19:before,
.btn-19:after {
  --w: calc(var(--width) / 4);
  content: "";
  z-index: -1;
  height: 100%;
  width: var(--w);
  position: absolute;
  background: white;
  box-shadow: calc(2 * var(--w)) 0 0 0 white;
  transition: transform 0.2s;
  will-change: transform;
}
.btn-19:before {
  top: -100%;
  left: 0;
}
.btn-19:after {
  top: 100%;
  left: var(--w);
}
.btn-19:hover:before {
  transform: translateY(100%);
}
.btn-19:hover:after {
  transform: translateY(-100%);
}

    `}</style>
  </>
)