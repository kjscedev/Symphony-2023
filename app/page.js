import { Footer, Navbar, Pillar } from "../components";
import { About, Home, Cards } from "../sections";

const Page = () => (
  <>
    <Pillar />
    <Navbar />
    <div className="h-screen overflow-y-auto">
      <Home />
      <About />
      <Cards />
      <Footer />
    </div>
  </>
);

export default Page;
