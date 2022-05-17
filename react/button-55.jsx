export default () => (
  <>
    <button class="btn-55"><span>Button</span></button>

    <style jsx>{`
      .btn-55 {
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
      .btn-55 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;
  border-radius: 999px;

  position: relative;
  overflow: hidden;

  font-weight: 900;
  text-transform: uppercase;

  color: black;
  background: linear-gradient(to right, blue, red);
}

.btn-55 span {
  position: absolute;
  inset: 5px;

  display: grid;
  place-items: center;

  border-radius: 999px;

  color: white;
  background: rgb(30 41 59);
  transition: background 0.3s;
}
.btn-55:hover span {
  background: none;
}

    `}</style>
  </>
)