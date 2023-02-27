import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function OneKrylimon() {
  const [krylimons, setKrylimon] = useState();
  const [youSure, SetYouSure] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { Id } = useParams();
  const navigate = useNavigate();

  const fetchKrylimon = async () => {
    try {
      const response = await fetch(`http://localhost:5005/api/krylimons/${Id}`);
      const parsed = await response.json();
      if (parsed === null) {
        navigate("/krylimons");
      } else {
        console.log(parsed);
        setKrylimon(parsed);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchKrylimon();
  }, [Id]);

  const handleDelete = async () => {
    await fetch(`http://localhost:5005/api/krylimons/${Id}`, {
      method: "DELETE",
    });
    navigate("/krylimons");
  };

  const handleYouSure = async () => {
    SetYouSure(true)
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>

      <div style={{
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: "black",
          borderRadius: "20px",         
          backgroundColor: "blue",
          boxShadow: "0 0 6px black",
          height: "300px",
          width: "400px",
          
        }}>
        <h1>{krylimons.name}</h1>
        <p>{krylimons.skill}</p>
        <p>{krylimons.power}</p>
        <p>{krylimons.sexuality}</p>
        <Link to={`/krylimons/update/${krylimons._id}`}>
          <button type="button">Update</button>
        </Link>
        <button type="button" onClick={handleYouSure}>
          Delete
        </button>
      </div>
  {youSure ? (
    <div
        className="button"
        style={{
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: "black",
          borderRadius: "20px",
          marginTop: "-300px",
          backgroundColor: "white",
          boxShadow: "0 0 6px black",
          height: "500px",
          width: "400px",
          
        }}
      >
        <h1>Are you sure?</h1>
        <button type="button" onClick={handleDelete}>
          Yes
        </button>
      </div>

  ) : (<p></p>) }
    </div>
     
  );
}

export default OneKrylimon;
