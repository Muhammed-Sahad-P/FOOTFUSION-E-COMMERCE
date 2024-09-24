import Card from "../Components/Shared/Card";
import Spinner from "../Components/Spinner";
import useFetch from "../utils/useFetch";

const Collection = () => {
  const { data, isPending, error } = useFetch(`${import.meta.env.VITE_API_URL}/users/products`);

  return (
    <div className="mt-24 text-center">
      {isPending && <div className="flex justify-center items-center h-screen"><Spinner/></div>}
      {error && <div>{error}</div>}
      {data && (
        <div className="p-4">
          <h2 className="text-center text-3xl font-poppins mb-2 ">
            All Collections
          </h2>
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            <Card data={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Collection;
