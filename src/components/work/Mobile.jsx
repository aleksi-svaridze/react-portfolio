import CardImageDesigns from "../../media/images/work/designs.svg";
import CardImageUiDesigns from "../../media/images/work/uiDesigns.svg";
import CardImageMockups from "../../media/images/work/mockups.svg";

import { useWindowSize } from "usehooks-ts";

const Mobile = () => {
  let { width } = useWindowSize();
  const cardContent = [
    { id: 1, imgSrc: CardImageDesigns, desc: "Designs" },
    { id: 2, imgSrc: CardImageUiDesigns, desc: "UI Designs" },
    { id: 3, imgSrc: CardImageMockups, desc: "Mockups" },
  ];
  return (
    <div className="container" id="work">
      <div className="row gy-5 justify-content-center align-items-center">
        {cardContent.map((content) => (
          <div className="col-12" key={content.id}>
            <div
              style={styles.card}
              key={content.id}
              className={`mx-auto overflow-hidden position-relative py-4 pt-2 rounded-5 bg-white-40 ${
                width < 420 && "w-100"
              } `}
            >
              <div
                style={{
                  backgroundImage: `url(${content.imgSrc})`,
                  backgroundSize: `100% ${content.id === 2 ? "90%" : "100%"}`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: `${
                    content.id === 2 ? "0% 0%" : "center"
                  }`,
                }}
                className="w-100 h-100"
              ></div>

              <a
                href="/"
                className="text-decoration-none rounded-bottom-5 py-3 mb-0 text-white text-center position-absolute start-0 bottom-0 end-0 fw-bold fs-4 bg-black-30"
              >
                {content.desc}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: "380px",
    height: "280px",
    backdropFilter: "blur(10px)",
  },
};

export default Mobile;
