export default () => (
  <>
    <button class="btn-97">Button</button>

    <style jsx>{`
      .btn-97 {
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
      .btn-97 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  position: relative;
  overflow: hidden;

  background: white;
  color: black;

  font-weight: 900;
  text-transform: uppercase;
  border: 1px solid currentColor;

  transition: 0.2s;
}

.btn-97:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 0 -4px #fff, 0 9px 0 -4px #aaa, 0 12px 0 -4px #000;
}

    `}</style>
  </>
)