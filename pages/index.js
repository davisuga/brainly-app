//@ts-check
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import api, { getData } from "../services/axios";

export default function Home() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    api
      .get("/search", {
        params: {
          searchTerm: "Ola",
        },
      })
      .then(getData)
      .then(setSearchResult);
  }, []);

  return (
    <div className={styles.container}> {JSON.stringify(searchResult)} </div>
  );
}
