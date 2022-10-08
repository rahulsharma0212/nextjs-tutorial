function UserProfilePage(props) {
  return <h1>{props.userName}</h1>;
}

export default UserProfilePage;

export async function getServerSideProps(context) {
  return {
    props: {
      userName: "Rahul",
    },
  };
}
