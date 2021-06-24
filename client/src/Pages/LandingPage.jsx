export default function LandingPage() {
  return (
    <div className="relative bg-white overflow-hidden h-full bg-gray-800 ">
      <div className="max-w-7xl mx-auto h-full">
        <div className="h-full relative z-10 pb-8 bg-white max-w-2xl w-full pb-28">
          <svg
            className="block absolute right-0 inset-y-0 h-full w-20 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mx-auto max-w-7xl py-10 px-6 h-full bg-green-300">
            <div className="text-left ml-12 mt-10 py-2">
              <h1 className=" tracking-tight font-extrabold text-gray-900 text-6xl">
                <span className="inline">Food exists, I exists</span>{" "}
                <span className="block text-indigo-600 inline">
                  Best Food Prices!
                </span>
              </h1>
              <p className="mt-10 text-base text-gray-700 text-xl">
                Explore best & cheapest food options near you.
              </p>
              <p className="mt-5 text-base text-gray-700 text-xl">
                Create a profile and share your food experience with foodies
                around the globe
              </p>
              <div className="mt-10 flex">
                <div className="rounded-md shadow">
                  <a
                    href="/#"
                    className="w-full flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-gray-700 py-4 text-lg px-10"
                  >
                    Login / Sign up
                  </a>
                </div>
                <div className="mt-0 ml-6">
                  <a
                    href="/#"
                    className="w-full flex items-center justify-center border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-gray-700 hover:text-white py-4 text-lg px-10"
                  >
                    Explore Cheapest Food
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="absolute inset-y-0 right-0 w-1/2">
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzN8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
