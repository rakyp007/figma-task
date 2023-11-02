import "./App.css";
import image1 from "./image/1screenillustration.png";
import image2 from "./image/image-04 1.png";

function App() {
  return (
    <div className="beGateway">
      <div className="container">
        <div className="image">
          <img className="image1" src={image1} />
        </div>
        <div className="text-title">
          <div className="title">
            <h1>
              <b>Reliability & Safety</b>
            </h1>
          </div>
          <div className="title-second">
            <h1>
              <b>Security and compliance at the core</b>
            </h1>
            <p>
              beGateway is designed with various tools and systems to ensure
              reliability and safety. beGateway white-label payment platform is
              a highly secure and reliable solution, equipped with multiple
              layers of protection to safeguard the Payment Service Provider's
              business and customers.
            </p>
          </div>
        </div>
        <div>
          <img className="image2" src={image2} />
        </div>
      </div>
    </div>
  );
}

export default App;
