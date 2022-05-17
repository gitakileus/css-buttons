export default () => (
  <>
    <button class="btn-47">Button</button>

    <style jsx>{`
      .btn-47 {
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
      .btn-47 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;

  position: relative;

  font-weight: 900;
  text-transform: uppercase;

  transform-style: preserve-3d;
  perspective: 800px;

  background: #fff;
  color: black;

  transform: rotateY(12deg);

  transition: transform 0.2s;
}

.btn-47:before {
  position: absolute;
  content: "";
  z-index: -1;
  top: 0;
  left: 0;

  display: block;
  height: 100%;
  width: 20%;
  background: #eee;
  transform-origin: 0% 0%;
  transform: rotateY(90deg);
}
.btn-47:hover {
  transform: rotateY(20deg);
}

    `}</style>
  </>
)