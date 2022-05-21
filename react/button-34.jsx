export default () => (
  <>
    <button class="btn-34">
  <span>Button</span>
</button>

    <style jsx>{`
      .btn-34 {
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
      .btn-34 {
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

  transition: transform 0.2s;
}

.btn-34:hover {
  transform: scale(1.1);
}

.btn-34 span {
  font-weight: 900;
  mix-blend-mode: difference;
}

.btn-34:before {
  content: "";
  width: 0;
  aspect-ratio: 1;

  border-radius: 50%;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s;
}
.btn-34:hover:before {
  width: 100%;
}

    `}</style>
  </>
)