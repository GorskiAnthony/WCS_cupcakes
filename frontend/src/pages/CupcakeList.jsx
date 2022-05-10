import Cupcake from "@components/Cupcake";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CupcakeList() {
  // Step 1: get all cupcakes
  /**
   * Je vais stocker mes cupcakes dans mon state `cupcakes`.
   * Pour mettre à jour mes cupcakes, je vais utiliser `setCupcakes`
   */
  const [cupcakes, setCupcakes] = useState([]);
  /**
   * La même chose qu'au dessus, je stock mes infos dans la variable `accessories`
   */
  const [accessories, setAccessories] = useState([]);
  /**
   * Je vais récuperer la valeur qui a été séléctionné par mon utilisateur
   */
  const [choice, setChoice] = useState("");

  /**
   * Je définie mon ENDPOINT pour mes cupcakes
   * @type {string}
   */
  const CUPCAKES_ENDPOINT = "http://localhost:4000/cupcakes";

  /**
   * Je défini une fonction `getCupcakes` qui se chargera d'aller chercher via axios mes cupcakes
   */
  const getCupcakes = () => {
    axios.get(CUPCAKES_ENDPOINT).then((response) => setCupcakes(response.data));
  };

  // Step 3: get all accessories

  /**
   * Même logique que pour les cupcakes.
   * @type {string}
   */
  const ACCESSORIES_ENDPOINT = "http://localhost:4000/accessories";
  const getAccessories = () => {
    axios
      .get(ACCESSORIES_ENDPOINT)
      .then((response) => setAccessories(response.data));
  };
  /**
   * J'utilise le hook `useEffect` qui va me permettre de lancer la fonction quand mon composant sera créer
   * (au montage de celui-ci)
   * C'est d'ailleur pour ça que mon tableau de dépendance est vide, car c'est juste à la création
   */
  useEffect(() => {
    getCupcakes();
    getAccessories();
  }, []);

  /**
   * J'affiche mes cupcakes
   *
   * output :
   * un tableau de 27 éléments
   * console.warn(cupcakes);
   */

  /**
   * J'affiche mes accessoires,
   *
   * Output :
   * un tableau de 5 éléments
   * console.warn(accessories);
   */

  /**
   * J'affiche ce que vaut choice, ici il vaudra une valeur entre rien -> 5
   * console.warn(choice);
   */

  /**
   * Ma fonction handleChange sera éxécuté à chaque fois que mon select change,
   * je récupère sa valeur qui vaut un ID pour ensuite le comparer avec celui des accessoires.
   * @param e
   */
  const handleChange = (e) => {
    setChoice(e.target.value);
  };

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select" onChange={handleChange}>
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {/*
               Ici, je boucle sur mon tableau d'accessoires qui se trouve dans mon state `accessoiries`
             */}
            {accessories.map((accessorie) => (
              <option value={accessorie.id} key={accessorie.id}>
                {accessorie.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/*
          Ici, je fais un `.map()` pour afficher chacun de mes éléménts.
          la `key`ici, doit être sur le container parent, dans mon cas c'est ma balise `li`

          Grâce à la méthode filter, je vais pouvoir créer un nouveau tableau
          qu'avec les éléments qui correspondent à mon filtre, celui ci sera envoyé directement à mon `.map()`
         */}
        {cupcakes
          .filter((cupcake) => cupcake.accessory_id === choice || choice === "")
          .map((cupcake) => {
            return (
              <li className="cupcake-item" key={cupcake.id}>
                <Link to={`/cupcakes/${cupcake.id}`}>
                  <Cupcake cupcake={cupcake} />
                </Link>
              </li>
            );
          })}
        {/* end of block */}
      </ul>
    </>
  );
}
