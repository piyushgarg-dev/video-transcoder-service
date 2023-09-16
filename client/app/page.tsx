import Link from "next/link";

export default function Home() {
  return (
    <main className="flex pt-20 justify-center w-full">

      <form className="text-gray-600 w-[30%] body-font ">
        <div className="container w-full  px-3 py-24 mx-auto flex flex-wrap items-center">

          <div className=" bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
            <div className="relative mb-4">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
              <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <Link href={'/dashboard'} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none text-center hover:bg-indigo-600 rounded text-lg">Login</Link>
            <p className="text-xs text-gray-500 mt-3">if you don't have account <Link className="text-blue-500 hover:underline transition-all" href={'/signup'}>click here</Link></p>
          </div>
        </div>
      </form>
    </main>
  )
}
