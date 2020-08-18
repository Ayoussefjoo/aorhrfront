import React from "react";
import g1 from "../images/g1.jpg";

function Gallary() {
  const group = (items, n) =>
    items.reduce((acc, x, i) => {
      const idx = Math.floor(i / n);
      acc[idx] = [...(acc[idx] || []), x];
      return acc;
    }, []);
  const IMAGES = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      name: "A",
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      name: "B",
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      name: "C",
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      name: "C",
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      name: "C",
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        name: "C",
        caption: "After Rain (Jeshu John - designerspics.com)",
      },
      {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        name: "C",
        caption: "After Rain (Jeshu John - designerspics.com)",
      },
      {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        name: "C",
        caption: "After Rain (Jeshu John - designerspics.com)",
      },
      {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        name: "C",
        caption: "After Rain (Jeshu John - designerspics.com)",
      },
      {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        name: "C",
        caption: "After Rain (Jeshu John - designerspics.com)",
      },
      {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        name: "C",
        caption: "After Rain (Jeshu John - designerspics.com)",
      },
  ];
  return (
    <div>
      <div className="gallery py-5" id="gallery">
        <div className="container pb-xl-5 pb-lg-3">
          <h3 className="tittle mb-sm-5 mb-4 text-bl text-center font-weight-bold">
            Dog Breeds
          </h3>
          <div className="news-grids pb-lg-5 text-center">
            {group(IMAGES, 3).map((children) => (
              <div className="row my-4">
                {children.map((imag, index) => (
                  <div className="col-md-4 gal-img">
                    <a href={"#gal" + index} title="Pomeranian">
                      <img src={imag.src} alt="gallery" className="img-fluid" />
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        {IMAGES.map((img, i) => (
          <div id={"gal" + i} className="popup-effect animate">
            <div className="popup">
              <img src={img.src} alt="Popup Image" className="img-fluid" />
              <h5 className="text-name-pop mt-4">{img.name}</h5>
              <p className="mt-3">{img.caption}</p>
              <a className="close" href="#gallery">
                &times;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Gallary;
