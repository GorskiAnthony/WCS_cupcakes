import PropTypes from "prop-types";

export default function Cupcake({ cupcake }) {
  return (
    <div className="cupcake-container">
      <div className="cupcake">
        <img src={cupcake.url} alt="accessory" />
        <div className="cream">
          <div
            className="cream-1"
            style={{
              backgroundColor: cupcake.color1,
            }}
          />
          <div
            className="cream-2"
            style={{
              backgroundColor: cupcake.color2,
            }}
          />
          <div
            className="cream-3"
            style={{
              backgroundColor: cupcake.color3,
            }}
          />
        </div>
        <div className="bottom">
          <div className="bottom-in">
            <div className="face">
              <div className="eyes">
                <div className="left-eye" />
                <div className="right-eye" />
              </div>
              <div className="mouth" />
            </div>
          </div>
        </div>
      </div>

      <div className="cupcake-name">{cupcake.name}</div>
    </div>
  );
}

Cupcake.propTypes = {
  cupcake: PropTypes.shape({
    url: PropTypes.string.isRequired,
    color1: PropTypes.string.isRequired,
    color2: PropTypes.string.isRequired,
    color3: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

Cupcake.defaultProps = {
  cupcake: {
    url: "http://images.innoveduc.fr/php_parcours/cp2/donut.png",
    color1: "var(--default-cream-color)",
    color2: "var(--default-cream-color)",
    color3: "var(--default-cream-color)",
    name: "",
  },
};
