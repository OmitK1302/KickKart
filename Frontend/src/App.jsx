import { Hero, PopularProducts, SuperQuality, Services, SpecialOffer, Subscribe, Footer, CustomerReview } from "./sections";
import Nav from "./components/Nav";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom"; // Import Outlet from react-router-dom
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <main className="relative">
    {/* <Nav /> */}

    {/* Render Nested Routes Here */}
    {/* <Outlet /> */}

    {/* Global Sections - Only for Homepage */}
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>

    <section className="padding">
      <PopularProducts />     
    </section>

    <section className="padding">
      <SuperQuality />
    </section>

    <section className="padding py-10">
      <Services />
    </section>

    <section className="padding">
      <SpecialOffer />
    </section>

    <section className="padding bg-pale-blue">
      <CustomerReview />
    </section>

    <section className="padding-x sm:py-32 py-16">
      <Subscribe />
    </section>

    {/* <section className="padding-x padding-t pb-8 bg-black">
      <Footer />
    </section> */}

    <ToastContainer />
  </main>
);

export default App;
