import Banner from "../components/Banner";
import Services from "../components/Services";
import Categories from "../components/Categories";
import Marque from "../components/Marquee";
import Collections from "../components/Collections";
import Special from "../components/Special";
import PopularProducts from "../components/PopularProducts";
import Meta from "../components/Meta";

export default function Home() {
  return (
    <>
      <Meta title={"Home"} />
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
