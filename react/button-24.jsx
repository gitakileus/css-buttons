export default () => (
  <>
    <button class="btn-24"><span>Button</span></button>

    <style jsx>{`
      .btn-24 {
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
      .btn-24 {
  --thickness: 5px;

  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;

  position: relative;
  overflow: visible;

  text-transform: uppercase;
}

.btn-24:before,
.btn-24:after {
  content: "";
  width: 100%;
  height: 100%;
  z-index: -1;

  position: absolute;
  top: 0;
  left: 0;

  background: white;

  clip-path: polygon(
    0 0,
    calc(100% - var(--tilt)) 0,
    100% 50%,
    calc(100% - var(--tilt)) 100%,
    0 100%
  );
  transition: clip-path 0.2s;
}
.btn-24:after {
  background: rgb(30 41 59);
  top: var(--thickness);
  left: var(--thickness);
  width: calc(100% - 2 * var(--thickness));
  height: calc(100% - 2 * var(--thickness));
}
.btn-24 span {
  position: relative;
  display: block;
  font-weight: 900;
  transition: transform 0.2s;
}
.btn-24:hover span {
  transform: translateX(-20px);
}
.btn-24 {
  --tilt: 0px;
}
.btn-24:hover {
  --tilt: 40px;
}

    `}</style>
  </>
)