import Link from "next/link";

function Navbar() {
  return (
    <div className="px-5  mb-4 shadow fixed left-0 right-0 w-full z-50 backdrop-blur-lg">
      <div className="max-w-screen-xl mx-auto py-3 flex items-center justify-between">
        <Link className="text-3xl font-semibold" href={`/`}>
          Quran
        </Link>
        <div
          className=" space-x-3
        "
        >
          <Link href={``}>Login</Link>
          <Link href={``}>Sing Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
