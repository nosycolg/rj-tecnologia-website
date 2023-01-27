import { FaFacebook, FaInstagram } from "react-icons/fa";
import styles from "../Footer/Footer.module.css";
import { motion as m } from "framer-motion";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <m.li
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <FaFacebook />
        </m.li>
        <m.li
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <FaInstagram />
        </m.li>
      </ul>
      <m.p
        className={styles.copyright}
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <m.span>RJ Tecnologia</m.span> &copy; 2023
      </m.p>
    </footer>
  );
}

export default Footer;
