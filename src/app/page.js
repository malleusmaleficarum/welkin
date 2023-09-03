"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { easeIn, easeInOut, motion } from "framer-motion";

const data = [
  {
    src: "/images/welkin_1.jpg",
    title: "Emblems of Valour",
  },
  {
    src: "/images/welkin_2.jpg",
    title: "Will to Purification",
  },
  {
    src: "/images/welkin_3.jpg",
    title: "Recollections of Conquest and Honour ",
  },
];

export default function Home() {
  return (
    <>
      {/* initial */}
      <main className={styles.layer}>
        <motion.div
          className={styles.first}
          initial={{ y: 0 }}
          animate={{
            y: "-100%",
            transition: { duration: 1.3, ease: [0.5, 0, 0.75, 0], delay: 4 },
          }}
        >
          <motion.div
            className={styles["image-wrapper__1"]}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1.5, ease: easeIn },
            }}
          >
            <Image
              className={styles.img}
              alt='First'
              src='/images/first.png'
              width={500}
              height={100}
              priority={true}
            />
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.second}
          initial={{ y: 0 }}
          animate={{
            y: "100%",
            transition: { duration: 1.3, ease: [0.5, 0, 0.75, 0], delay: 4 },
          }}
        >
          <motion.div
            className={styles["image-wrapper__2"]}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1.5, ease: easeIn, delay: 1 },
            }}
          >
            <Image
              className={styles.img}
              alt='First'
              src='/images/second.png'
              width={500}
              height={100}
              priority={true}
            />
          </motion.div>
          <motion.h3
            className={styles.title}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1.5, ease: easeIn, delay: 2 },
            }}
          >
            208 BATTLE OF REDCLIFFS
          </motion.h3>
        </motion.div>
      </main>

      {/* main */}
      <div className={styles.container}>
        <div className={styles["image-wrapper"]}>
          <Image
            alt=''
            src='/images/background.png'
            width={1000}
            height={100}
            className={styles.img}
          />
        </div>
        <div className={styles.wrapper}>
          {data.map((map, i) => (
            <motion.div
              className={styles.card}
              key={i}
              initial={{ opacity: 0, y: i % 2 === 0 ? "30px" : "-30px" }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: easeIn,
                  delay: 5 + (i / 2 + 0.5),
                },
              }}
            >
              <div className={styles["card-image"]}>
                <Image alt='' src={map.src} width={300} height={300} />
              </div>
              <h3 className={styles.title}>{map.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
