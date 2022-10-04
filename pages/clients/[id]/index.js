import { useRouter } from "next/router";
function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    //  load data...
    /* router.push("clients/Rahul/projecta"); */
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "Rahul", clientprojectid: "projecta" },
    });
  }
  return (
    <div>
      <h1>The Project of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
