import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cupcake from "@components/Cupcake";

function CupcakeDetail() {
  const [cupcake, setCupcake] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const CUPCAKE_ENDPOINT = `http://localhost:4000/cupcakes/${id}`;

  useEffect(() => {
    const fetchCupcake = async () => {
      const response = await axios.get(CUPCAKE_ENDPOINT);
      setCupcake(response.data);
      setIsLoading(false);
    };
    fetchCupcake();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="cupcake-item">
          <Cupcake cupcake={cupcake} />
        </div>
      )}
      <div>
        <h1>{cupcake.name}</h1>
        <div className="cupcake-name">Top color : {cupcake.color1}</div>
        <div className="cupcake-name">Middle color : {cupcake.color2}</div>
        <div className="cupcake-name">Bottom color : {cupcake.color3}</div>
      </div>
    </div>
  );
}

export default CupcakeDetail;
