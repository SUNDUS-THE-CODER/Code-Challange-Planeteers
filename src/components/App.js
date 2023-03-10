import React, { useEffect, useState } from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {
  const [planeteers, setPlaneteers] = useState([]);
  const [search, setSearch] = useState(null);
  const planeteersToDisplay = search ? 
    planeteers.filter(key => key.name.toLowerCase().includes(search.toLowerCase()) || key.bio.toLowerCase() === search.toLowerCase())
      : planeteers.sort((a, b) => b.id - a.id);
  useEffect(() => {
    const fetchPlaneteers = async () => {
      try {
        let fetchedPlaneteers = await fetch("http://localhost:8003/planeteers");
        fetchedPlaneteers = await fetchedPlaneteers.json();
        setPlaneteers(fetchedPlaneteers);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchPlaneteers();
  }, [])
  return (
    <div>
      <Header />
      <SearchBar setSearch={setSearch} />
      <RandomButton />
      <PlaneteersContainer planeteers={planeteersToDisplay} />
    </div>
  );
}

export default App;
