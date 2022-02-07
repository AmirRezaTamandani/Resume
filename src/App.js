import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import { Grid, Container } from "semantic-ui-react";
import Footer from "./Components/Footer";
function App() {
  return (
    <Container>
      <Grid>
        <About></About>
        <Skills></Skills>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Footer></Footer>
      </Grid>
    </Container>
  );
}

export default App;
