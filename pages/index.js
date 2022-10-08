import fs from "fs/promises";
import Link from "next/link";
import path from "path";
function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((el) => (
        <li key={el.id}>
          <Link href={`products/${el.id}`}>{el.title}</Link>
        </li>
      ))}
    </ul>
  );
}
export async function getStaticProps(context) {
  console.log("(Re-)Generating...");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true }; // boolean [true or false]
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
