import fs from "fs/promises";
import path from "path";

function ProductDeatailPage(props) {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;
  const data = await getData();

  const product = data.products.find((el) => el.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const chngData = data.products.map((el) => ({
    params: {
      pid: el.id,
    },
  }));
  return {
    paths: chngData,
    fallback: false, // true,false,"blocking"
  };
  /* return {
    paths: [
      { params: { pid: "p1" } },
      // { params: { pid: "p2" } },
      // { params: { pid: "p3" } },
    ],
    fallback: true, // true,false,"blocking"
  }; */
}
export default ProductDeatailPage;
