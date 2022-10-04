import Link from "next/link";
function ClientsPage() {
  const clients = [
    { id: "c1", name: "Rahul" },
    { id: "c2", name: "Ravi" },
    { id: "c3", name: "Itnesh" },
  ];
  return (
    <div>
      <h1>The Client Page</h1>
      <ul>
        {clients.map((el) => (
          <li key={el.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: el.name },
              }}
            >
              {el.name}
            </Link>
          </li>
        ))}
        {/* <li>
          <Link href="/clients/Rahul">Rahul</Link>
        </li>
        <li>
          <Link href="/clients/Rohan">Rohan</Link>
        </li> */}
      </ul>
    </div>
  );
}

export default ClientsPage;
