import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section id="home">
        <div className="imgOverlay"></div>
        <div className="bg-image"></div>
        <div className="d-flex flex-column m-5">
          <h1 class="text-white fs-1 fw-bold mt-5 pt-5 z-top">
            <span className="pinktext">WBC </span>
            Worlds Best Coffee
          </h1>
          <p className="text-white fs-4 fst-italic mt-2 z-top">
            The taste of happiness and time well spent
          </p>
          <div className="mt-3 z-top">
            <Link
              to="/signup"
              className="btn  px-3 py-2 rounded fs-4 bg-light me-3"
            >
              <i className="fa fa-user-plus me-1 "></i> Register
            </Link>
            <Link to="/login" className="btn  px-4 py-2 rounded fs-4 bg-light ">
              <i className="fa fa-sign-in me-1"></i> Login
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
