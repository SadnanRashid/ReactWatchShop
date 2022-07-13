import "./css/footer.css";

export default function Footer() {
  return (
    <div className="mainDiv">
      <div className="div1">
        <div className="div1Logo"></div>
        <div className="div1Text">
          <p id="div1Text">
            baseM. is an all in one stop to fulfill your Watche needs. We're a
            small team of Watch lovers and Watch specialists who are devoted to
            helping you get the most out of personal styling. Come and visit our
            facility - we're open 7 days a week.
          </p>
          <h3 id="div1F">Copyright 2022. All Rights Reserved</h3>
        </div>
      </div>
      <div className="div2">
        <div id="div2Pages">
          <a href="/">Home</a>
          <a href="/rolex">Rolex</a>
          <a href="/rolex">Omega</a>
          <a href="/rolex">Other Watches</a>
        </div>
      </div>
    </div>
  );
}
