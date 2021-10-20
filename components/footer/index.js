import Link from "next/link";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerRow}>
          <div className={styles.footerRowItemContainer}>
            <div className={styles.footerRowItem}>
              <img
                width="150px"
                height="50px"
                alt="Logo"
                href="/"
                src="https://apply.joinsherpa.com/assets/img/logo-main-white.svg"
                decoding="async"
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  border: "none",
                  margin: "auto",
                  display: "block",
                  paddingLeft: "0",
                  marginLeft: "unset",
                }}
              />
            </div>
            <div className={styles.footerRowItem}>
              <p>
                Sherpa is your guide to getting the right travel documentation
                and understanding up-to-date travel requirements. An independent
                resource, we are not sponsored by, affiliated with or funded by
                any government agency.{" "}
              </p>
            </div>
            <div
              className={`${styles.footerRowItem} ${styles.footerRowChatItem}`}
            >
              <p>Let’s chat:</p>
              <a>
                <img
                  alt="Messenger icon"
                  src="https://www.wherenext.to/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fmassenger.svg&w=64&q=75"
                />
              </a>
              <a>
                <img
                  alt="Whatsapp"
                  src="https://www.wherenext.to/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fwhatsapp.svg&w=64&q=75"
                />
              </a>
            </div>
          </div>
          <div className={styles.footerRowItemContainer}>
            <div className={styles.footerRowItem}>
              <h3>Solutions</h3>
            </div>
            <div className={styles.footerRowItem}>
              <ul>
                <li>
                  <a>Travel Restrictions</a>
                </li>
                <li>
                  <a>Explore Visas</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerRowItemContainer}>
            <div className={styles.footerRowItem}>
              <h3>Company</h3>
            </div>
            <div className={styles.footerRowItem}>
              <ul>
                <li>
                  <Link href="/contact">
                    <a> About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>News Room</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerRowItemContainer}>
            <div className={styles.footerRowItem}>
              <h3>eVisa and eTA help</h3>
            </div>
            <div className={styles.footerRowItem}>
              <p>Travel restrictions</p>
            </div>
          </div>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.lastFooter}>
            <p className={styles.lastFooterTermsPrivacy}>
              <Link href="/terms">
                <a>Terms</a>
              </Link>{" "}
              |{" "}
              <Link href="/privacy">
                <a>Privacy</a>
              </Link>
            </p>
            <p className={styles.lastFooterCopyright}>
              © Copyright 2021 Visa Run, Inc. Ltd. All rights reserved.
            </p>
            <div className={styles.lastFooterSocial}>
              <Link href="">
                <a style={{ padding: "0 8px" }}>
                  <img
                    alt="Facebook icon"
                    src="https://www.wherenext.to/_next/image?url=%2Fassets%2Fimg%2Ficon%2Ffacebook.svg&w=48&q=75"
                  />
                </a>
              </Link>
              <Link href="">
                <a style={{ padding: "0 8px" }}>
                  <img
                    alt="Instagram icon"
                    src="https://www.wherenext.to/_next/image?url=%2Fassets%2Fimg%2Ficon%2Finstagram.svg&w=48&q=75"
                  />
                </a>
              </Link>
              <Link href="">
                <a style={{ padding: "0 8px" }}>
                  <img
                    alt="Twitter icon"
                    src="https://www.wherenext.to/_next/image?url=%2Fassets%2Fimg%2Ficon%2Ftweter.svg&w=48&q=75"
                  />
                </a>
              </Link>
              <Link href="">
                <a style={{ padding: "0 8px" }}>
                  <img
                    alt="LinkedIn icon"
                    src="https://www.wherenext.to/_next/image?url=%2Fassets%2Fimg%2Ficons%2Flinkedin.svg&w=48&q=75"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
