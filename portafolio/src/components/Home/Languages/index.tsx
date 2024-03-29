import { Typography, Box, Grid, Container } from "@mui/material";

import { languages, language } from "./languages";

import LanguageItem from "./LanguageItem";

import Fondo from "../../../assets/fondo_about.jpeg";
import { Zoom } from "react-reveal";

export default function Languages() {

  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundImage: `url(${Fondo})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <Zoom>
        <Container
          maxWidth="xl"
          sx={{
            padding: { xl: 20, lg: 15, md: 10, sm: 10, xs: 4 },
          }}
        >
          <Typography
            variant="h3"
            fontWeight="500"
            marginBottom={5}
            fontSize={{ xl: 60, lg: 55, md: 50, sm: 43, xs: 32 }}
          >
            Conocimientos
          </Typography>
          <Grid container spacing={1}>
            {languages.map((l: language) => (
              <LanguageItem l={l} key={l.title} />
            ))}
          </Grid>
        </Container>
      </Zoom>
    </Box>
  );
}
