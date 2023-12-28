import Banner from "../components/Banner";
import Services from "../components/Services";
import Categories from "../components/Categories";
import Marque from "../components/Marquee";
import Collections from "../components/Collections";
import Special from "../components/Special";
import PopularProducts from "../components/PopularProducts";


export default function Home() {
  return (
    <>
      <Banner />
      <Services />
      <Categories />
      <Collections />
      <Special />
      <PopularProducts />
      <Marque />          
    </>
  );
}
