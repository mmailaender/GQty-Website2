export default function TestComponent() {
  return (
    <>
      <div className="text-3xl text-black dark:text-white">
        The first No-GraphQL GraphQL client
      </div>
      <a
        href="/#playground"
        className="rounded-full bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Playground
      </a>
    </>
  );
}
