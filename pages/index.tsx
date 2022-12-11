import Head from "next/head";
import { Poppins } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";

import s from "../styles/Home.module.scss";
import Facebook from "../images/Facebook";
import Instagram from "../images/Instagram";
import Twitter from "../images/Twitter";
import LinkedIn from "../images/Linkedin";
import Telegram from "../images/Telegram";
import apple from "../images/apple.png";
import googlePlay from "../images/googlePlay.png";

const poppins = Poppins({
  weight: "400",
  // subsets: ['devanagari'],
});

export default function Home() {
  return (
    <div className={s.mainContainer}>
      <main className={poppins.className}>
        <div className={s.overlay}>
          <section className={s.section}>
            <h1 className={s.heroHead}>Netcasting</h1>
            <div className={s.downloadBtnContainer}>
              <Link
                href={`https://apps.apple.com/pl/app/netcasting/id6444911616`}
              >
                <button type="button" className={s.btnService}>
                  <Image src={apple} width={20} height={24} alt="apple" />
                  <div className={s.btnTextWrapper}>
                    <p
                      className={[poppins.className, s.storeTextDownload].join(
                        " "
                      )}
                    >
                      Download on the
                    </p>
                    <p className={[poppins.className, s.storeText].join(" ")}>
                      App Store
                    </p>
                  </div>
                </button>
              </Link>
              <Link
                href={`https://play.google.com/store/apps/details?id=com.netcasting&hl=en-US&ah=oYmWweShr_7oFlOJpLmln7ikfH8`}
              >
                <button type="button" className={s.btnService}>
                  <Image
                    src={googlePlay}
                    width={20}
                    height={24}
                    alt="googlePlay"
                  />
                  <div className={s.btnTextWrapper}>
                    <p
                      className={[poppins.className, s.storeTextDownload].join(
                        " "
                      )}
                    >
                      Download on the
                    </p>
                    <p className={[poppins.className, s.storeText].join(" ")}>
                      Google Play
                    </p>
                  </div>
                </button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <footer className={poppins.className}>
        <div className={s.footer}>
          <ul className={s.navListPrivacy}>
            <li>
              <a
                href="https://drive.google.com/file/d/17JOHTNgaq5vV-j1Z5Y5TAj0SvlJVVlDV/view"
                target="external"
                className={s.policiesText}
              >
                Terms of Use
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1YOG7ylEZGc7bK6FMvSjySk10wzcYQtT6/view"
                target="external"
                className={s.policiesText}
              >
                Privacy Policy
              </a>
            </li>
          </ul>
          <ul className={s.navList}>
            <li>
              <a className={[poppins.className, s.logoFooter].join(" ")}>
                Netcasting
              </a>
              <address style={{ color: "#afb1b8", marginTop: 10 }}>
                Copyright © 2022 Netcasting
              </address>
            </li>
          </ul>
          <div className={s.joinUs}>
            <h3 className={s.footerTitle}>Join Us</h3>
            <div className={s.socialIcons}>
              <div className={s.iconGround}>
                <a
                  className={s.icon}
                  href="https://www.instagram.com/netcasting.eu/"
                  target="external"
                >
                  <Instagram />
                </a>
              </div>
              <div className={s.iconGround}>
                <a
                  className={s.icon}
                  href="https://twitter.com/Netcasting_"
                  target="external"
                >
                  <Twitter />
                </a>
              </div>
              <div className={s.iconGround}>
                <a
                  className={s.icon}
                  href="https://www.facebook.com/profile.php?id=100078666543264"
                  target="external"
                >
                  <Facebook />
                </a>
              </div>
              <div className={s.iconGround}>
                <a
                  className={s.icon}
                  href="https://www.linkedin.com/in/net-casting-90339a25a/"
                  target="external"
                >
                  <LinkedIn />
                </a>
              </div>
            </div>
          </div>
          {/* <div>
          <h3 className={s.footerTitle}>Subscribe to the newsletter</h3>
          <label className={s.newsLetter}>
            <input
              type="email"
              name="newsletter"
              placeholder="E-mail"
              className={s.newsLetterInput}
            />
            <button type="submit" className={s.btnService}>
              Subscribe{" "}
              <a className={s.iconSend}>
                <Telegram />
              </a>
            </button>
          </label>
        </div> */}
        </div>
      </footer>
    </div>
  );
}
