import React from "react";
import styles from "./Home.module.scss";

const ImageSlider = (props) => {
  return (
    <div className={styles.banner}>
      <div className={styles.slide1}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${props.image})`,
          }}
          alt=""
        />
      </div>
    </div>
  );
};

export default ImageSlider;