import Footer from "./footer";
import "./css/home.css";
import Brands from "./comp_home/brands";
import Fire from "./product_rolex";
import Navbar from "./navbar";

export default function HomeMain() {
  Fire();
  return (
    <div>
      <Navbar />
      <Div1 />
      <Div2 />
      <Div3 />
      <Brands />
      <Div2_1 />
      <Div4 />
      <Footer />
    </div>
  );
}

function Div1() {
  return (
    <div className="divMain">
      <div className="divOne">
        <h1 id="titleOne">
          Shop From A Wide <br /> Range Of Watches
        </h1>
        <p id="textOne">
          Experience Ultra Luxerious and exceptional build quality made for the
          passionate ART enthusiast.
        </p>
        <button id="productBtn">See Watches</button>
      </div>
      <div className="divTwo"></div>
    </div>
  );
}

function Div2() {
  return (
    <div id="divSub">
      <div id="divSubOne"></div>
      <div id="divSubTwo">
        <h1>Rolex Submariner Limited Edition II</h1>
        <p>
          The Rolex Oyster Perpetual Submariner is a line of sports watches
          designed for diving and manufactured by Rolex, and are known for their
          resistance to water and corrosion. The first Submariner was introduced
          to the public in 1954 at the Basel Watch Fair. It was the first watch
          to be waterproof up to 100m.
        </p>
        <button>See Watch</button>
      </div>
    </div>
  );
}

function Div2_1() {
  return (
    <div id="divSpeed">
      <div id="divSpeedTwo">
        <h1>Omega Speedmaster Grandmaster VX</h1>
        <p>
          The manual winding Speedmaster Professional or "Moonwatch" is the
          best-known and longest-produced; it was worn during the first American
          spacewalk as part of NASA's Gemini 4 mission and was the first watch
          worn by an astronaut walking on the Moon during the Apollo 11 mission
          that 600 million people watched from Earth.
        </p>
        <button>See Watch</button>
      </div>
      <div id="divSpeedOne"></div>
    </div>
  );
}

function Div3() {
  return (
    <div id="divSlim">
      <div id="divSlimOne"></div>
      <div id="divSlimTwo">
        <h1>The SLIMEST Watches</h1>
        <p>Shop from a wide range of Ultra slim Watches.</p>
        <button>See Watches</button>
      </div>
    </div>
  );
}

function Div4() {
  return (
    <div id="divLast">
      <div id="divLastTwo">
        <h1>
          baseM. The Biggest <br /> House of Luxery
        </h1>
        <p>
          Located at the heart of Dhaka City, baseM. is the premier store for
          high end and ultra luxerious watches and watch accessories. We have a
          large showroom and luxury demonstration rooms available for you to
          browse and experience a wide range of our products. Stop by our store
          to meet some of the fantastic people who make baseM. the best place to
          buy your watches.
        </p>
      </div>
      <div id="divLastOne"></div>
    </div>
  );
}
