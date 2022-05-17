export default () => (
  <>
    <button class="btn-91">
  <span>Button</span>
</button>

    <style jsx>{`
      .btn-91 {
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
      .btn-91 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  position: relative;

  text-transform: uppercase;
  border: 2px solid currentColor;
}

.btn-91 span {
  font-weight: 900;
}

.btn-91:before,
.btn-91:after {
  z-index: -1;
  content: "";
  position: absolute;
  inset: -2px;

  border: 2px solid red;
  border-radius: 999px;
}
.btn-91:after {
  border-color: blue;
}

.btn-91:hover:before {
  animation: glitch-border 0.2s infinite;
}
.btn-91:hover:after {
  animation: glitch-border 0.2s infinite reverse;
}
.btn-91:hover span {
  animation: glitch-text 0.2s infinite;
}
@keyframes glitch-text {
  from {
    text-shadow: 0 0 0 red, 0 0 0 blue;
  }
  to {
    text-shadow: -2px 1px 0 red, 2px -1px 0 blue;
  }
}
@keyframes glitch-border {
  from {
    transform: translate(2px, -1px);
  }
  to {
    transform: translate(-2px, -1px);
  }
}

    `}</style>
  </>
)