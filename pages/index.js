import fs from "fs/promises";
import path from "path";
function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((el) => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  );
}
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
  };
}

export default HomePage;
