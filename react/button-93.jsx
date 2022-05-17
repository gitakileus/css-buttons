export default () => (
  <>
    <button class="btn-93">Button</button>

    <style jsx>{`
      .btn-93 {
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
      .btn-93 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;

  border-radius: 50px 15px 15px 15px/15px 225px 255px 255px;

  position: relative;
  overflow: hidden;

  font-weight: 900;
  text-transform: uppercase;
  border: 3px solid currentColor;

  transition: 0.2s;
}

.btn-93:hover {
  box-shadow: 0 0.5em 0.5em -0.4em white;
  transform: translateY(-0.25em);
}

    `}</style>
  </>
)