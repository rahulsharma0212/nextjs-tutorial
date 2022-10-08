import { useEffect, useState } from "react";

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://nextjs-course-9fe94-default-rtdb.firebaseio.com/sales.json")
      .then((data) => data.json())
      .then((res) => {
        const transformedSales = [];
        for (const key in res) {
          transformedSales.push({ id: key, ...res[key] });
        }
        setSales(transformedSales);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <p>Loading .. </p>;
  }
  if (!sales) {
    return <p>No data yet</p>;
  }
  return (
    <ul>
      {sales.map((el) => (
        <li key={el.id}>{`${el.username}-$${el.volume}`}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://nextjs-course-9fe94-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await res.json();
  const transformedSales = [];
  for (const key in data) {
    transformedSales.push({ id: key, ...data[key] });
  }
  return {
    props: {
      sales: transformedSales,
    },
  };
}

export default LastSalesPage;
