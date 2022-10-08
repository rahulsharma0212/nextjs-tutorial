function UserProfilePage(props) {
  return <h1>{props.userName}</h1>;
}

export default UserProfilePage;

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  console.log("server side code");
  return {
    props: {
      userName: "Rahul",
    },
  };
}
