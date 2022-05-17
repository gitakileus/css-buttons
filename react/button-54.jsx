export default () => (
  <>
    <button class="btn-54">
  <span class="shadow"></span>
  <span class="depth"></span>
  <span class="content">Button</span>
</button>

    <style jsx>{`
      .btn-54 {
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
      .btn-54 {
  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;

  position: relative;

  font-weight: 900;
  text-transform: uppercase;
}

.btn-54 .content,
.btn-54 .shadow,
.btn-54 .depth {
  transition: transform 0.2s;
}

.btn-54 .content {
  display: grid;
  place-items: center;

  width: 100%;
  height: 84%;

  background: #fff;
  color: #000;

  position: absolute;
  top: 0;
  left: 0;
}
.btn-54 .depth {
  display: block;
  width: 100%;
  height: 10%;
  position: absolute;
  top: 84%;
  left: 0;
  background: #ccc;
}
.btn-54 .shadow {
  display: block;
  width: 100%;
  height: 6%;

  position: absolute;
  top: 94%;
  left: 0;

  background: #777;
}

.btn-54:hover .content {
  transform: translateY(4%);
}
.btn-54:hover .shadow {
  transform: translateY(-20%);
}

.btn-54:active .content {
  transform: translateY(8%);
}
.btn-54:active .shadow {
  transform: translateY(-30%);
}

    `}</style>
  </>
)