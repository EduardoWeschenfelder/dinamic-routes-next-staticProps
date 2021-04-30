import { useRouter } from "next/router";

export default function page2({ id }) {
  const router = useRouter();
  console.log(router.query);

  // const { id } = router.query;
  return (
    <div>
      <h1>page 2 ID:{id}</h1>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  // Pass post data to the page via props
  return {
    props: { id: params.id },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
}
