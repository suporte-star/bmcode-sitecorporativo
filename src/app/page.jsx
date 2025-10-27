import styles from "./page.module.css";
import Numbers from "@/components/numbers/Numbers";
import Feedbacks from "@/components/feedbacks/Feedbacks";
import Carousel from "@/components/carousel/Carousel";
import Aboutus from "@/components/aboutUs/Aboutus";
import Map from "@/components/map/Map";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Carousel />
      <Aboutus />
      <Numbers />
      <Feedbacks />
      <Map />
    </div>
  );
}