export default () => (
  <>
    <button class="btn-76">
  Button
  <span class="top"></span>
  <span class="right"></span>
  <span class="bottom"></span>
  <span class="left"></span>
</button>

    <style jsx>{`
      .btn-76 {
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
      .btn-76 {
  --neon: #0ea5e9;

  display: block;
  width: 100%;
  height: 80px;
  margin: 1rem auto;
  max-width: 250px;

  position: relative;
  overflow: hidden;

  font-weight: 900;
  text-transform: uppercase;

  transition: 0.2s linear 0.1s;
  outline: 4px solid white;
  outline-offset: -4px;
}

.btn-76:hover {
  color: #fff;
  outline-color: transparent;
  background: var(--neon);
  box-shadow: 0 0 5px var(--neon), 0 0 25px var(--neon), 0 0 50px var(--neon),
    0 0 100px var(--neon);

  transition: 0.2s linear 0.6s;
}

.btn-76 span {
  display: block;
  position: absolute;
  inset: 0;
}
.btn-76 .top {
  opacity: 0;
  border-top: 4px solid var(--neon);
  transform: translateX(calc(-100% + var(--progress, 0%)));
  transition: none;
}
.btn-76:hover .top {
  opacity: 1;
  --progress: 100%;
  transition: transform 0.2s linear;
}
.btn-76 .right {
  opacity: 0;
  border-right: 4px solid var(--neon);
  transform: translateY(calc(-100% + var(--progress, 0%)));
  transition: none;
}
.btn-76:hover .right {
  opacity: 1;
  --progress: 100%;
  transition: transform 0.2s linear 0.2s;
}

.btn-76 .bottom {
  opacity: 0;
  border-bottom: 4px solid var(--neon);
  transform: translateX(calc(100% - var(--progress, 0%)));
  transition: none;
}
.btn-76:hover .bottom {
  opacity: 1;
  --progress: 100%;
  transition: transform 0.2s linear 0.4s;
}
.btn-76 .left {
  opacity: 0;
  border-left: 4px solid var(--neon);
  transform: translateY(calc(100% - var(--progress, 0%)));
  transition: none;
}
.btn-76:hover .left {
  opacity: 1;
  --progress: 100%;
  transition: transform 0.2s linear 0.6s;
}

    `}</style>
  </>
)