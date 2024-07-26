function Navigation() {
  return (
    <nav className="w-[90%] h-[20%] m-auto flex items-center place-content-between border-b-2 border-[rgb(224,62,73)] mb-2">
      <figure>
        <img src="/images/nike-logo.png" width={'150px'} alt="nike-logo" />
      </figure>
      <ul className="flex gap-3 font-medium uppercase">
        <li className="hover:text-[rgb(224,62,73)] hover:border-b-2 hover:border-[rgb(224,62,73)] ">
          <a href="#">Menu</a>
        </li>
        <li className="hover:text-[rgb(224,62,73)] hover:border-b-2 hover:border-[rgb(224,62,73)] ">
          <a href="#">Location</a>
        </li>
        <li className="hover:text-[rgb(224,62,73)] hover:border-b-2 hover:border-[rgb(224,62,73)] ">
          <a href="#">About</a>
        </li>
        <li className="hover:text-[rgb(224,62,73)] hover:border-b-2 hover:border-[rgb(224,62,73)] ">
          <a href="#">Contact</a>
        </li>
      </ul>
      <button
        type="button"
        className="bg-[rgb(224,62,73)] text-white px-4 py-2 rounded-md hover:bg-white hover:text-[rgb(224,62,73)] hover:border-2 hover:border-[rgb(224,62,73)]"
      >
        Login
      </button>
    </nav>
  );
}

export default Navigation;
