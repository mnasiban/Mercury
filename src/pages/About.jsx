import useReq from "../hooks/useReq";
function About() {
  const [response, isLoading] = useReq(
    "https://reqres.in/api/users?page=2",
    "GET"
  );
  if (isLoading) return <div>loading ...</div>;
  if (!isLoading) return <div>{JSON.stringify(response)}</div>;
}

export default About;
