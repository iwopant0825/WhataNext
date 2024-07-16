import styled from "styled-components";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import How from "./pages/How";
import Generate from "./pages/Generate";

function App() {
  return (
    <Layout>
      <Header />
      <Section id="home"><Home /></Section>
      <Section id="about"><About /></Section>
      <Section id="how"><How /></Section>
      <Section id="generate"><Generate /></Section>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 100%;
`;

const Section = styled.div`
  
`;

export default App;
