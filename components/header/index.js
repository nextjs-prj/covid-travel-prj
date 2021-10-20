import { useState } from "react";
import Link from "next/link";

import styles from "./header.module.css";
import { HamburgerIcon } from "./../icons";

export default function Header() {
  const [showAside, setShowAside] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <Link href="">
            <a title="home">
              <div
                style={{
                  width: "175px",
                  height: "35px",
                  backgroundImage:
                    "url(https://apply.joinsherpa.com/assets/img/logo-sherpa.svg)",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                }}
              ></div>
            </a>
          </Link>
        </div>
        <div className={styles.headerMobile}>
          <span onClick={() => setShowAside(true)}>
            <HamburgerIcon />
          </span>
          {showAside ? (
            <HeaderMobileAside closeFn={() => setShowAside(false)} />
          ) : null}
        </div>
        <div className={styles.headerMenu}>
          <ul>
            <li className={styles.headerMenuItem}>
              <Link href="">
                <a>About us</a>
              </Link>
            </li>
            <li className={styles.headerMenuItem}>
              <Link href="">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

function HeaderMobileAside({ closeFn }) {
  return (
    <aside className={styles.headerAside}>
      <div>
        <div
          style={{
            fontSize: "2rem",
            display: "flex",
            justifyContent: "space-between",
            padding: "0.8rem",
          }}
        >
          <img
            alt="Logo small"
            style={{
              height: "4rem",
            }}
            src="https://apply.joinsherpa.com/assets/img/logo-sherpa.svg"
          />
          <span
            style={{
              fontWeight: "200",
              padding: "0 10px",
            }}
            onClick={closeFn}
          >
            X
          </span>
        </div>
        <ul className={styles.headerAsideList}>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
