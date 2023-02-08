import { Footer, Navbar } from '../components';
import { About, Home, Cards } from '../sections';

const Page = () => (
  <div>
    <Navbar />
    <Home />
    <About />
    <Cards/>
    <Footer />
  </div>
);

export default Page;