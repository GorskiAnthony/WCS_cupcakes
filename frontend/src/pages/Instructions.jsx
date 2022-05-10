export default function Home() {
  return (
    <>
      <h1>Cupcake Union</h1>
      <div className="instructions">
        <h2>🍪 Step 1 - Get the cupcakes</h2>
        <p>
          You started a json server when running <code>npm run dev</code>. You
          can check the API is available at{" "}
          <a href="http://localhost:4000">localhost:4000</a>.
          <br />
          You first mission is to get the cupcakes from the API.
          <br />
          In the <code>CupcakeList</code> component (
          <code>frontend/src/pages/CupcakeList.jsx</code>), fetch the{" "}
          <a href="http://localhost:4000/cupcakes">localhost:4000/cupcakes</a>{" "}
          endpoint.
          <br />
          You can check the result with a <code>console.log</code> for this
          step.
        </p>
        <details>
          <summary>Hint</summary>
          You will need a state to store the cupcakes. Use an empty array as
          initial value. Use an effect to run the fetch only once (remember the
          empty dependencies array?).
        </details>

        <h2>🧁 Step 2 - Show all the cupcakes</h2>
        <p>
          In the <code>CupcakeList</code> component, map you cupcakes to display
          the list using JSX. You can use the <code>Cupcake</code> component:
          pass the cupcake data through a prop <code>cupcake</code>
          <br />
          Remember to add a <code>key</code> prop to each element created
          through your map. You can use the cupcake id here ;)
        </p>

        <h2>🍪 Step 3 - Get the accessories</h2>
        <p>
          For this step, get the accessory list from the API.
          <br />
          In the <code>CupcakeList</code> component, fetch the{" "}
          <a href="http://localhost:4000/accessories">
            localhost:4000/accessories
          </a>{" "}
          endpoint.
          <br />
          Once again, you can check the result with a <code>console.log</code>.
        </p>
        <details>
          <summary>Hint</summary>
          You will need an other state to store the accessories (initialized
          with an empty array). Be sure to fetch the API only once.
        </details>

        <h2>🧁 Step 4 - Fill the accessories selector</h2>
        <p>
          The <code>select</code> in <code>CupcakeList</code> only contains an
          empty option.
          <br />
          Fill the list with one option per accessory.
        </p>
        <details>
          <summary>Hint</summary>
          Map your accessories to produce the options. You should end up with
          something like that:
          <code>
            <pre>
              {`<select id="cupcake-select">
  <option value="">---</option>
  <option value="1">Cherry</option>
  <option value="2">Donut</option>
  <option value="3">Chocolate</option>
  <option value="4">Wild</option>
  <option value="5">Christmas Candy</option>
</select>
`}
            </pre>
          </code>
        </details>

        <h2>🧁 Step 5 - Filter the list</h2>
        <p>
          When the selected accessory changes, filter the cupcake list before
          mapping.
          <br />
          Note that when no accessories are selected, your filter should keep
          the whole list.
        </p>
        <details>
          <summary>Hint</summary>
          You will need a last state to store the selected accessory
          (initialized with an empty string). Connect the state with the{" "}
          <code>select</code> using the <code>value</code> and{" "}
          <code>onChange</code> attributes.
        </details>

        <h2>⭐ Bonus - Create a whole page</h2>
        <p>
          Create a <code>CupcakeDetails</code> page. Add a route to display this
          page with the path <code>/cupcakes/:id</code>.
          <br />
          You should wrap each cupcake in <code>CupcakeList</code> with a{" "}
          <code>{"<Link />"}</code> towards the <code>CupcakeDetails</code>{" "}
          page.
          <br />
          In the page, get the cupcake from the id and display it.
        </p>
      </div>
    </>
  );
}
