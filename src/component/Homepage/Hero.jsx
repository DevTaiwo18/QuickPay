import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

const Hero = () => {

  const { user } = useAuthContext();

  return (
    <div className=" hero flex-row justify-between p-10 md:p-20 items-center lg:flex gap-8 ">
      {/* HERO LEFT */}
      <div className="md:w-3/5 h-fit  ">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">Welcome To</h1>
        <h1 className="text-2xl sm:text-4xl font-bold mb-8">Quick-Pay</h1>
        <p className="mb-8 font-medium">
          Nigeria's leading enterprise solution for all your telecom needs. <br />
          Airtime, DATA, Cable Subscription (DSTV, GOTV, Startime), and Virtual Numbers.
        </p>

        <div className="flex gap-4 mb-12">
          {user ? (
            <Link to="/dashboard/">
              <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-9 rounded-3xl">
                Dashboard
              </button>
            </Link>
          ) : (
            <>
              <Link to="/signin">
                <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-9 rounded-3xl">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-9 rounded-3xl">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
      {/* END OF HERO LEFT */}

      {/* HERO RIGHT */}
      <div className="grid md:grid-cols-2 gap-8 w-100  lg:w-2/5 p-4 hero-right h-fit">
        <Link to={"/dashboard/"} className="link">
          <div className="card">
            <div className="   flex items-center jsutify-center w-full py-8 hero-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-14 stroke-1 stroke-blue-400 m-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </div>
            <p className="text-lg mb-2 font-extralight">Airtime</p>
          </div>
        </Link>

        <Link to={"/dashboard/"} className="link">
          <div className="card">
            <div className="   flex items-center jsutify-center w-full py-8 hero-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-14 stroke-1 stroke-blue-400 m-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>
            </div>
            <p className="text-lg mb-2 font-extralight">Data subscription</p>
          </div>
        </Link>

        <Link to={"/dashboard/"} className="link">
          <div className="card">
            <div className="   flex items-center jsutify-center w-full py-8 hero-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-14 stroke-1 stroke-blue-400 m-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
            </div>
            <p className="text-lg mb-2 font-extralight">Electricity</p>
          </div>
        </Link>

        <Link to={"/dashboard/"} className="link">
          <div className="card">
            <div className="  flex items-center jsutify-center w-full py-8 hero-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-14  stroke-1 stroke-blue-400 m-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
                />
              </svg>
            </div>
            <p className="text-lg mb-2 font-extralight">Virtual Numbers</p>
          </div>
        </Link>
      </div>
      {/* END OF HERO RIGHT */}
    </div>
  );
};

export default Hero;
