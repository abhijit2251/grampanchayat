export default function Gallery() {
  const images = [
    "/assets/gallery1.jpg",
    "/assets/gallery2.jpg",
    "/assets/gallery3.jpg",
  ];

  return (
    <section id="gallery" className="gallery">
      <h2>📸 फोटो गॅलरी</h2>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <img src={img} alt={"Gallery " + i} key={i} />
        ))}
      </div>
    </section>
  );
}
