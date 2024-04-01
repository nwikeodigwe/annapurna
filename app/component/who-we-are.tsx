import QuickLinks from "./quick-links";

export default function WhoContent() {
  return (
    <section className="my-20">
      <div className="container mx-auto px-10">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-9 flex flex-col gap-4">
            <p>
              Annapurna emerges from a deep-rooted commitment to serve our
              cherished culinary traditions with a touch of elegance. Our
              restaurant embraces a culinary journey that celebrates local
              authenticity and the flavors we hold dear to our hearts. Each dish
              is crafted with love and care, reminiscent of the tastes that have
              shaped our fondest memories. It&apos;s like savoring a piece of
              nostalgia with every bite.
            </p>
            <p>
              From the farms to the folklore, Annapurna honors every aspect of
              our rich heritage, weaving together the stories of our land and
              its people. We strive to bridge the gap between our hearts and the
              essence of our motherland.
            </p>
            <p>
              Our carefully curated menu showcases a selection of local delights
              prepared with unmatched dedication and passion. Indulge in flavors
              that will awaken your senses and transport you to a realm of
              culinary bliss like never before.
            </p>
            <p>
              Nestled amidst the vibrant cityscape of Vijayawada, Annapurna is
              poised to elevate the essence of local cuisine to new heights,
              blending tradition with a modern twist.
            </p>
          </div>
          <div className="hidden md:flex col-span-3">
            <QuickLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
