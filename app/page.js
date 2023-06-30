import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div>
        <h2>Simple Github Actions CI/CD deployed in Vercel</h2>
      </div>
      <div>
        <a
          href="https://github.com/manupaiva"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <Image
            src="/logotype.png"
            alt="Manuel Paiva Logo"
            width={100}
            height={100}
          />
        </a>
      </div>
    </main>
  );
}
