import dress1 from "../../assets/dress-1.png";
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
              <Link
                className="main__link"
                to="https://www.azazie.com/products/azazie-daphne-stormy-a-line-ruffled-chiffon-floor-length-modest-bridesmaid-dress/121964"
              >
                HERE
              </Link>{" "}
              to be taken to site.
            </p>
          </div>
        </div>
        <div className="main__card">
          <img className="main__image" src={dress1} />
          <div className="main__info">
            <p className="main__text-title">AZAZIE DAPHNE</p>
            <p className="main__text">Text</p>
          </div>
        </div>
        <div className="main__card">
          <img className="main__image" src={dress1} />
          <div className="main__info">
            <p className="main__text-title">AZAZIE DAPHNE</p>
            <p className="main__text">Text</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
