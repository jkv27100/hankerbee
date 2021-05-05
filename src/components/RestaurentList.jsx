import React, { useState, useEffect } from "react";
import styles from "../css/rslist.module.css";
import Restaurent from "./Restaurent";
import Skeleton from "@material-ui/lab/Skeleton";

export default function RestaurentList() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  const hotelList = [
    {
      url:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ueisvffhxbzzwlfenbkj",
      title: "Grammen Kulfi",
      subTitle: "Ice Cream, Deserts",
      rating: "4.2",
      time: "24 mins",
      value: "$120 for TWO",
    },
    {
      url:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ekuk5ga6e5p4i65sves8",
      title: "Halo",
      subTitle: "Fast Food, Beverages",
      rating: "4.2",
      time: "24 mins",
      value: "$120 for TWO",
    },
    {
      url:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e9xqpystlsspfwyth249",
      title: "Natrual Ice Creams",
      subTitle: "Desert, Ice Creams",
      rating: "4.2",
      time: "24 mins",
      value: "$120 for TWO",
    },
    {
      url:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/v1qn6rdgridfthdhtfhz",
      title: "Pabbas",
      subTitle: "Desert, Fast Food",
      rating: "4.2",
      time: "24 mins",
      value: "$120 for TWO",
    },
    {
      url:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pbyxndjox6rt8ljqvwmo",
      title: "Westind Eats",
      subTitle: "American, Continental, Beverages",
      rating: "4.2",
      time: "24 mins",
      value: "$120 for TWO",
    },
  ];
  return (
    <div className={styles.container}>
      {hotelList.map((item) =>
        loading ? (
          <Skeleton width={256} height={400} />
        ) : (
          <Restaurent hotelList={item} />
        )
      )}
    </div>
  );
}
