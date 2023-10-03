import { TextField, List, ListItem } from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Hero } from "../Type";
import { fetchData } from "../lib/marvel";
import { Link } from "react-router-dom";

interface HomeProps {
  setHero: Dispatch<SetStateAction<Hero | undefined>>;
}

const Home = ({ setHero }: HomeProps) => {
  const [heros, setHeros] = useState<Hero[]>([]);

  const fetchApi = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();

    try {
      const res = (await fetchData(e.target.value)) as Hero[];
      setHeros(res || []);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(heros);

  return (
    <div className="App">
      <header className="App-header">
        <>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            onChange={(e) => fetchApi(e)}
          />
          <List sx={{ color: "primary.main" }}>
            {heros.map((hero) => (
              <ListItem key={hero.id}>
                <Link to="hero" onClick={() => setHero(hero)}>
                  {hero.name}
                </Link>
              </ListItem>
            ))}
          </List>
        </>
      </header>
    </div>
  );
};

export default Home;
