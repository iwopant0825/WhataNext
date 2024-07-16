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
      <Home />
      <About />
      <How/>
      <Generate/>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
