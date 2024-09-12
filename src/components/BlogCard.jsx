const BlogCard = () => {
  return (
    <div className="px-4.5 flex min-h-[812px] items-start justify-center md:min-h-[1440px] lg:min-h-[768px]">
      <div className="w-[340px] overflow-hidden rounded-lg bg-white">
        <img
          src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/blog-card/starter/img/blog-article-image.jpg"
          alt="Blog card image"
          className="block h-72 w-full object-cover"
        />
        <div className="flex flex-col items-start gap-2 px-4 py-6">
          <span className="font-noto-sans rounded-full border border-green-200 bg-green-50 px-2.5 py-0.5 text-sm text-green-700">
            Interior
          </span>
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col gap-3 font-medium text-gray-600">
              <div className="font-noto-sans text-lg font-semibold leading-7 text-neutral-900">
                Top 5 Living Room Inspirations
              </div>
              <p className="font-noto-sans text-gray-600">
                Curated vibrants colors for your living, make it pop & calm in
                the same time.
              </p>
            </div>
            <button className="flex min-w-[114px] cursor-pointer items-center gap-1.5 rounded-[4px] text-base font-medium leading-6 text-indigo-700 outline-none hover:text-indigo-800 focus:shadow-[0_0_0_1px_#444ce7,0_0_0_4px_rgba(68,76,231,0.12)] disabled:pointer-events-none disabled:text-neutral-400">
              <span className="font-noto-sans inline-flex flex-1 px-0.5">
                Read more
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4763 9.16658L9.00633 4.69657L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
