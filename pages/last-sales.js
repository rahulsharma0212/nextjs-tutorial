import { useEffect, useState } from "react";

function LastSalesPage() {
  const [sales, setSales] = useState();
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

export default LastSalesPage;
