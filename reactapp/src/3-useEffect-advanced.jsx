import React, { useState, useEffect } from "react";
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Index = () => {
  const [drinks, setDrinks] = useState([]);
  const [search, setSearch] = useState("");
  const [loadings, setLoadings] = useState(false);
  const fetchdrinks = async (apiurl) => {
    setLoadings(true);
    try {
      const response = await fetch(apiurl);
      const { drinks } = await response.json();
      setDrinks(drinks);
      setLoadings(false);
    } catch (error) {
      setLoadings(false);
    }
  };

  useEffect(() => {
    const coorecturl = `${URL} ${search}`;
    fetchdrinks(coorecturl);
  }, [search]);

  return (
    <div className="App">
      <form>
        <div className="searchdiv">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="search drinks......"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
      <hr />
      {loadings && <h3>Loading....</h3>}

      {!loadings && (
        <div className="container">
          {drinks !== null && drinks.length > 0 ? (
            drinks.map((drink) => {
              const { strDrink, strDrinkThumb, idDrink } = drink;
              return (
                <div key={idDrink} className="card">
                  <div className="cardImg">
                    <img src={strDrinkThumb} alt="" />
                  </div>
                  <div className="cardTitle">
                    <h3>{strDrink}</h3>
                  </div>
                </div>
              );
            })
          ) : (
            <h2>No Drinks Found!</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default Index;
