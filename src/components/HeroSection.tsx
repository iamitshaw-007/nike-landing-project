function HeroSection() {
  return (
    <div className="w-4/5 h-[80%] m-auto flex flex-row">
      <div className="w-1/2 flex flex-col justify-center gap-8">
        <h1 className="text-9xl uppercase font-extrabold">
          Your feet deserve<span className="text-[rgb(224,62,73)]">!</span> the
          best
        </h1>
        <p className="capitalize w-4/5">
          We design high-quality shoes that provide optimal support & fit and
          also we prioritize on comfort, support, and protection to maintain
          foot health and overall well-being
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            className="bg-[rgb(224,62,73)] text-white px-4 py-2 rounded-md hover:bg-white hover:text-[rgb(224,62,73)] hover:border-2 hover:border-[rgb(224,62,73)]"
          >
            Shop Now
          </button>
          <button
            type="button"
            className="bg-white text-gray-900 border-2 border-gray-900 px-4 py-2 rounded-md hover:bg-gray-900 hover:text-white"
          >
            Category
          </button>
        </div>
        <div>
          <p> Also available on:</p>
          <figure className="flex gap-2">
            <img
              src="/images/amazon-logo.png"
              alt="amazon-logo"
              width={'50px'}
            />
            <img
              src="/images/flipkart-logo.jpg"
              alt="amazon-logo"
              width={'50px'}
            />
          </figure>
        </div>
      </div>
      <div className="w-1/2 ">
        <figure className="">
          <img src="/images/nike-shoe.jpg" width={'80%'} alt="nike-shoe" />
        </figure>
      </div>
    </div>
  );
}

export default HeroSection;
