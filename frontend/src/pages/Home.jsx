import Cupcake from "@components/Cupcake";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Cupcake Union</h1>
      <section className="home">
        <div className="home-cupcake">
          <Cupcake />
        </div>
        <div>
          <p>
            Welcome to the Cupcake Union ! 🧁
            <br />
            On this application, you will:
          </p>
          ✔️ Display cupcakes from an API <br />
          ✔️ And filter them by accessory !
          <p>
            Clic on <Link to="/instructions">Instructions</Link> to start
          </p>
        </div>
      </section>
    </>
  );
}
