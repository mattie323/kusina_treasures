import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <p className="text-xl mb-3">Sorry, the page not found</p>
      <p className="text-lg mb-5">
        The link you followed probably broken or the page has been removed.
      </p>
      <Link
        to="/"
        className="text-white bg-red-500 hover:bg-red-900 rounded-md px-3 py-2 mt-4"
      >
        Go Back
      </Link>
    </section>
  );
};

export default NotFoundPage;
