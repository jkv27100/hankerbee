import React from "react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import VideoSection from "../components/VideoSection";
import Filter from "../components/Filter";
import Container from "@material-ui/core/Container";
import styles from "../css/home.module.css";
import RestaurentList from "../components/RestaurentList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Carousel />
      <Container>
        <Filter />
        <RestaurentList />
      </Container>
    </div>
  );
}
