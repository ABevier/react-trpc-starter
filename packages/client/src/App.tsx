import trpc from "./utils/trpc";

const App = () => {
  const { isLoading, data } = trpc.example.useQuery();
  const mutation = trpc.exampleWithArgs.useMutation();

  const handleClick = () => {
    mutation.mutate({ message: "world" });
  }

  return (
    <main className="w-screen h-screen flex-col justify-center flex items-center">
      <p
        className={`mt-2 text-sm ${
          isLoading ? "text-orange-400" : "text-green-600"
        } first-letter:capitalize`}
      >
        {isLoading ? "loading tRPC query..." : `hello from tRPC procedure: ${data?.info}!`}
      </p>
      <button onClick={handleClick} disabled={mutation.isLoading}>
        Click Me!
      </button>
      <p>{mutation?.data?.info}</p>
    </main>
  );
};

export default App;
