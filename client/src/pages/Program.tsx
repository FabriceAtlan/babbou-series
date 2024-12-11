import { useEffect, useState } from "react";
import "./Program.css";

interface serieI {
  id: number;
  poster: string;
  title: string;
  country: string;
  year: string;
  synopsis: string;
}

export default function Program() {
  const [data, setData] = useState<serieI[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/programs`,
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonResponse = await response.json();
        setData(jsonResponse);
      } catch (error) {
        console.error("Error fetching programs:", error);
      }
    };

    fetchData();
  }, []);

  console.info(data);

  return (
    <>
      <section>
        <h1>Program</h1>
        <section className="serie-container">
          {data.map((el) => (
            <figure key={el.id}>
              <img className="figure-container" src={el.poster} alt="" />
              <h1>
                {el.id}. {el.title} - {el.country}, {el.year}
              </h1>
              <p>{el.synopsis}</p>
            </figure>
          ))}
        </section>
      </section>
    </>
  );
}
