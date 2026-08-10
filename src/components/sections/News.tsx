import trailer from "../../assets/videos/crimson-trailer-video.mp4";
import latestNews from "../../shared/latestNews.ts";

export const News = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          loop
          unselectable="on"
          poster=""
        >
          <source src={trailer} type="video/mp4" />
        </video>

        {/* Gradient Overlay - Starts from middle (50%) of video */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 at-50% to-transparent" />

        {/* Additional subtle overlay for depth */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/40" />

        {/* News Content - Positioned in the gradient area (bottom half) */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-end px-4 py-20 pb-32 sm:px-8 md:px-16 lg:px-24 xl:px-32">

          {/* Section Header */}
          <div className="w-full max-w-5xl mb-16 text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-marcellus uppercase tracking-widest text-wuxia/80 border border-wuxia/30 rounded-full bg-black/50 backdrop-blur-sm">
              Latest News
            </span>
            <h2 className="font-long-cang font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/95 tracking-tight leading-[1.1]">
              What's New in the
              <br />
              <span className="text-wuxia">Ronin World</span>
            </h2>
            <div className="mt-6 w-24 h-px bg-linear-to-r from-transparent via-wuxia to-transparent mx-auto" />
          </div>

          {/* News Grid */}
          <div className="w-full max-w-5xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((news) => (
              <article
                key={news.id}
                className="group relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-lg border border-white/10 transition-all duration-500 hover:border-wuxia/50 hover:bg-black/60 hover:shadow-[0_0_40px_rgba(200,160,80,0.15)] hover:-translate-y-1"
              >
                {/* News Card Gradient Top Border */}
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-wuxia to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="p-6 sm:p-8">
                  {/* Date Badge */}
                  <time
                    className="mb-4 inline-block px-3 py-1 text-xs font-marcellus uppercase tracking-wider text-wuxia/70 bg-wuxia/10 border border-wuxia/20 rounded-full"
                    dateTime={news.date}
                  >
                    {news.date}
                  </time>

                  {/* Title */}
                  <h3 className="mb-4 font-long-cang font-bold text-xl sm:text-2xl text-white/95 group-hover:text-wuxia transition-colors duration-300 leading-tight">
                    {news.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mb-6 text-sm sm:text-base text-white/60 leading-relaxed line-clamp-3">
                    {news.excerpt}
                  </p>

                  {/* Read More Link */}
                  {news.link && (
                    <a
                      href={news.link}
                      target={news.link.startsWith("http") ? "_blank" : undefined}
                      rel={news.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 font-marcellus text-sm font-medium text-wuxia/80 group-hover:text-wuxia transition-colors duration-300 hover:gap-3"
                    >
                      Read more
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-16 w-full max-w-5xl text-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-marcellus font-medium uppercase tracking-wider text-white border-2 border-wuxia/50 rounded-full bg-linear-to-r from-wuxia/20 via-transparent to-wuxia/20 hover:from-wuxia/40 hover:to-wuxia/40 hover:border-wuxia hover:shadow-[0_0_30px_rgba(200,160,80,0.3)] transition-all duration-500"
            >
              View All News
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        {/* Top decorative line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-wuxia/50 to-transparent" />

        {/* Bottom decorative accent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
      </section>
    </>
  );
};