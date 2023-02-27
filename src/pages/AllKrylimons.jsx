import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllKrylimons() {
  const [krylimons, setKrylimon] = useState([]);

  const fetchKrylimon = async () => {
    try {
      const response = await fetch("http://localhost:5005/api/krylimons");
      const parsed = await response.json();
      setKrylimon(parsed);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchKrylimon();
  }, []);

  return (
    <div>
      {krylimons.map((krylimon) => {
        return (
          <div key={krylimon._id}>
            <Link to={`/krylimons/${krylimon._id}`}>
              <h1>{krylimon.name}</h1>
              <p>{krylimon.skill}</p>
              <p>{krylimon.sexuality}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default AllKrylimons;
