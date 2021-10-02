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
                alt=""
                href="/"
                src="https://www.wherenext.to/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdail4fbms%2Fimage%2Fupload%2Fv1630337845%2Flogo_full_tfwpzz.svg&w=256&q=75"
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
                Travel experiences with a focus on volunteering and animal
                conservation
              </p>
              <a href="mailto:contact@wherenext.to">contact@wherenext.to</a>
            </div>
            <div
              className={`${styles.footerRowItem} ${styles.footerRowChatItem}`}
            >
              <p>Let’s chat:</p>
              <a>
                <img src="https://www.wherenext.to/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fmassenger.svg&w=64&q=75" />
              </a>
              <a>
                <img src="https://www.wherenext.to/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fwhatsapp.svg&w=64&q=75" />
              </a>
            </div>
          </div>
          <div className={styles.footerRowItemContainer}>
            <div className={styles.footerRowItem}>
              <h3>For business</h3>
            </div>
            <div className={styles.footerRowItem}>
              <ul>
                <li>
                  <a href="/contact">Partner with Us</a>
                </li>
                <li>
                  <a href="/contact">Corporate Social Responsibility</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerRowItemContainer}>
            <div className={styles.footerRowItem}>
              <h3>Our charities</h3>
            </div>
            <div className={styles.footerRowItem}>
              <ul>
                <li>
                  <a href="/contact"> 1% for the Planet</a>
                </li>
                <li>
                  <a href="/contact">Pledge 1%</a>
                </li>
                <li>
                  <a href="/contact">Kiva</a>
                </li>
                <li>
                  <a href="/contact">One Tree Planted</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerRowItemContainer}>
            <div className={styles.footerRowItem}>
              <h3>Our partners</h3>
            </div>
            <div className={styles.footerRowItem}>
              <p>
                We partner with travel providers and charities that give back to
                local communities.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.lastFooter}>
            <p style={{ display: "flex" }}>
              <a style={{ paddingRight: "14px" }} href="/terms">
                Terms
              </a>{" "}
              |{" "}
              <a style={{ paddingLeft: "14px" }} href="/privacy">
                Privacy
              </a>
            </p>
            <p className={styles.lastFooterCopyright}>
              © Copyright 2021 WhereNext Experiences Pte. Ltd. All rights
              reserved.
            </p>
            <div style={{ display: "flex" }}>
              <a
                style={{ padding: "0 8px" }}
                href="https://www.facebook.com/wherenext.to.travel"
              >
                <img src="https://www.wherenext.to/_next/image?url=%2Fassets%2Fimg%2Ficon%2Ffacebook.svg&w=48&q=75" />
              </a>
              <a
                style={{ padding: "0 8px" }}
                href="https://www.instagram.com/wherenext.to/"
              >
                <img src="https://www.wherenext.to/_next/image?url=%2Fassets%2Fimg%2Ficon%2Finstagram.svg&w=48&q=75" />
              </a>
              <a
                style={{ padding: "0 8px" }}
                href="https://twitter.com/wherenext_to"
              >
                <img src="https://www.wherenext.to/_next/image?url=%2Fassets%2Fimg%2Ficon%2Ftweter.svg&w=48&q=75" />
              </a>
              <a
                style={{ padding: "0 8px" }}
                href="https://www.linkedin.com/company/wherenext-to/"
              >
                <img src="https://www.wherenext.to/_next/image?url=%2Fassets%2Fimg%2Ficons%2Flinkedin.svg&w=48&q=75" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
