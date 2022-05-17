export default () => (
  <>
    <button class="btn-82"><span>Button</span></button>

    <style jsx>{`
      .btn-82 {
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
      .btn-82 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  position: relative;
  overflow: hidden;

  text-transform: uppercase;
}

.btn-82 span {
  font-weight: 900;
  mix-blend-mode: difference;

  transition: opacity 0.2s;
}

.btn-82:hover span {
  opacity: 0;
  animation: text-reset 0.2s forwards 0.8s;
}

.btn-82:before,
.btn-82:after {
  content: "";
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 999px;
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  border: 4px solid white;
  left: 0;
  transition: height 0.2s;
}
.btn-82:after {
  height: 2rem;
  background: white;
  border: none;
  width: 0%;
}
.btn-82:hover:before {
  height: 2rem;

  animation: border-reset 0.2s linear 0.78s forwards;
}
.btn-82:hover:after {
  animation: progress-bar 1s;
}

@keyframes progress-bar {
  0% {
    width: 0%;
    opacity: 1;
  }
  10% {
    width: 15%;
    opacity: 1;
  }
  25% {
    width: 25%;
    opacity: 1;
  }
  40% {
    width: 35%;
    opacity: 1;
  }
  55% {
    width: 75%;
    opacity: 1;
  }
  60% {
    width: 100%;
    opacity: 1;
  }
  100% {
    width: 100%;
    opacity: 0;
  }
}
@keyframes border-reset {
  0% {
    height: 2rem;
  }
  100% {
    height: 100%;
  }
}
@keyframes text-reset {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

    `}</style>
  </>
)