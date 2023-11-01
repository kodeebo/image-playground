import Image from "next/image";
import styles from "./page.module.css";
import { css } from "@/styled-system/css";
import ImageForm from "./components/client/ImageForm";

export default function Home() {
  return (
    <main className={css({ minH: "100vh", padding: "3rem" })}>
      <h1
        className={css({
          fontSize: "2rem",
          display: "flex",
          justifyContent: "center",
          padding: "1rem",
        })}>
        Bildegøy
      </h1>
      <ImageForm />
    </main>
  );
}
