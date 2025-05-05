import dress1 from "../../assets/dress-1.png";
import dress2 from "../../assets/dress-2.png";
import { Link } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <section className="main">
      <h2 className="main__title">Dress Choices</h2>
      <div className="main__cards">
        <div className="main__card">
          <img className="main__image" src={dress1} />
          <div className="main__info">
            <p className="main__text-title">AZAZIE DAPHNE</p>
            <p className="main__text">
              A-Line Ruffled Chiffon Floor-Length Dress Stormy. Click{" "}
              <a
                className="main__link"
                href="https://www.azazie.com/products/azazie-daphne-stormy-a-line-ruffled-chiffon-floor-length-modest-bridesmaid-dress/121964"
                target="_blank"
                rel="noopener noreferrer"
              >
                HERE
              </a>{" "}
              to be taken to site.
            </p>
          </div>
        </div>
        <div className="main__card">
          <img className="main__image" src={dress2} />
          <div className="main__info">
            <p className="main__text-title">AZAZIE BONDI</p>
            <p className="main__text">
              Dark Navy A-Line Ruffled Chiffon Dress. Click{" "}
              <a
                className="main__link"
                href="https://www.azazie.com/products/azazie-bondi-dark-navy-a-line-ruffled-chiffon-floor-length-bridesmaid-dress/213126?share_channel=deurl%5C"
                target="_blank"
                rel="noopener noreferrer"
              >
                HERE
              </a>{" "}
              to be taken to site.
            </p>
          </div>
        </div>
        <div className="main__card">
          <img className="main__image" src={dress1} />
          <div className="main__info">
            <p className="main__text-title">
              Barbie<sup>tm</sup> AZAZIE 1003
            </p>
            <p className="main__text">
              Chiffon A-line dress with Puff Sleeves Dark Navy. Click{" "}
              <a
                className="main__link"
                href="https://www.azazie.com/products/barbie-azazie-dark-navy-chiffon-a-line-with-puff-sleeves-bridesmaid-dress/237310"
                target="_blank"
                rel="noopener noreferrer"
              >
                HERE
              </a>{" "}
              to be taken to site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
