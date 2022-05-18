import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Link,
  CardActions,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Radio100 from "../../../assets/proyectos/radio100.jpeg";

export default function Proyectos() {
  const theme = useTheme();

  return (
    <Box textAlign="center">
      <Container maxWidth="xl" sx={{ padding: 10 }}>
        <Typography variant="h3" fontWeight="bold" sx={{ marginBottom: 10 }}>
          Proyectos
        </Typography>
        <Grid container spacing={3}>
          <Grid item xl={4}>
            <Card variant="elevation">
              <CardMedia
                component="img"
                height="200"
                src={Radio100}
                alt="radio100.cl"
              />
              <CardContent sx={{ padding: 2 }}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  color={theme.palette.text.primary}
                >
                  Radio100
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontSize={18}
                  color={theme.palette.text.primary}
                  textAlign="justify"
                >
                  Desarrollo de una página web para Radio100, la cual tenía como
                  finalidad poder escuchar la radio en tiempo real, así como la
                  publicación de afiches publicitarios. Visitar la página en{" "}
                  <Link
                    href="https://radio100.cl"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      fontStyle: "italic",
                      fontSize: 21,
                    }}
                  >
                    {" "}
                    radio100.cl
                  </Link>
                </Typography>
              </CardContent>
              <CardActions sx={{ padding: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} xl={5}>
                    <Button
                      variant="contained"
                      color="warning"
                      sx={{ width: "100%", color: "#fff" }}
                      size="large"
                    >
                      Más detalles
                    </Button>
                  </Grid>
                  <Grid item xs={12} xl={5}>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ width: "100%" }}
                      size="large"
                    >
                      <Link
                        href="https://github.com/ClaudioGuevaraDev/Radio100.cl"
                        target="_blank"
                        sx={{ textDecoration: "none", color: "#fff" }}
                      >
                        Github
                      </Link>
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}