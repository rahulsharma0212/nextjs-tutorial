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
  return {
    props: {
      products: [{ id: "p1", title: "Product 1" }],
    },
  };
}

export default HomePage;
