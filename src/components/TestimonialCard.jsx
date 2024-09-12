const TestimonialCard = () => {
  return (
    <article className="desktop:max-w-[1280px] tablet:max-w-full">
      <div className="flex flex-col w-[340px] bg-white rounded-lg border-1 border-white shadow p-6 gap-4">
        <div className="flex gap-4">
          <img
            src="/profile-thumbnail.png"
            alt="profile thumbnail"
            width="48px"
            height="48px"
          />
          <div>
            <h2 className="text-neutral-900 text-lg font-semibold">
              Sarah Dole
            </h2>
            <p className="text-neutral-600 text-sm normal">@sarahdole</p>
          </div>
        </div>
        <div className="text-neutral-600 normal-case">
          I&apos;ve been searching for high-quality abstract images for my
          design projects, and I&apos;m thrilled to have found this platform.
          The variety and depth of creativity are astounding!
        </div>
      </div>
    </article>
  );
};
export default TestimonialCard;
