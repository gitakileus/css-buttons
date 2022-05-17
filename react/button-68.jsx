export default () => (
  <>
    <button class="btn-68">Button</button>

    <style jsx>{`
      .btn-68 {
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
      .btn-68 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;

  position: relative;

  font-weight: 900;
  text-transform: uppercase;
  box-shadow: 0px 0px 0px 2px white inset;

  transition: color 0.1s linear;
}

.btn-68:hover {
  color: black;
  transition: color 0.1s linear 0.5s;
}

.btn-68:before,
.btn-68:after {
  z-index: -1;
  content: "";
  width: 0;
  height: 0;

  position: absolute;
}
.btn-68:before {
  border-top: var(--border);
  border-right: var(--border);
  top: 0;
  left: 0;
}
.btn-68:hover:before {
  --border: 4px solid black;
  animation: border-top-and-right 1s forwards;
}
.btn-68:after {
  border-bottom: var(--border);
  border-left: var(--border);
  bottom: 0;
  right: 0;
}
.btn-68:hover:after {
  --border: 4px solid black;
  animation: border-bottom-and-left 1s forwards;
}
@keyframes border-top-and-right {
  0% {
    z-index: 1;
    width: 0;
    height: 0;
  }
  50% {
    z-index: 1;
    width: 100%;
    height: 0;
  }
  100% {
    z-index: 1;
    width: 100%;
    height: 100%;
  }
}
@keyframes border-bottom-and-left {
  0% {
    z-index: 1;
    width: 0;
    height: 0;
  }
  50% {
    z-index: 1;
    width: 100%;
    height: 0;
  }
  100% {
    z-index: 1;
    width: 100%;
    height: 100%;
  }
}

    `}</style>
  </>
)