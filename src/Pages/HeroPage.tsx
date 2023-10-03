import { Box } from "@mui/material";
import { Hero } from "../Type";

interface HeroPageProps {
  hero: Hero;
}

const HeroPage = ({ hero }: HeroPageProps) => {
  return (
    <div>
      <Box sx={{ color: "primary.main" }}>
        <div>{hero.name}</div>
        <div>{hero.id}</div>
        <div>{hero.description}</div>
        <div>{hero.modified}</div>
      </Box>
    </div>
  );
};

export default HeroPage;
