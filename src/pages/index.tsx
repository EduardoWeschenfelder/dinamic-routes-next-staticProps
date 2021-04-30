export default function Home() {
  return (
    <div>
      <h1>page 1</h1>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    // Unlike `getInitialProps` the props are returned under a props key
    // The reasoning behind this is that there's potentially more options
    // that will be introduced in the future.
    // For example to allow you to further control behavior per-page.
    props: {},
  };
}
