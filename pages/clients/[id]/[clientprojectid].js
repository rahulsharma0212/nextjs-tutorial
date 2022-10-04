import { useRouter } from "next/router";
function SelctedClientProjectPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Project Page for a specific project for a selected client</h1>
    </div>
  );
}

export default SelctedClientProjectPage;
