import { Carousel } from "@material-tailwind/react";
 
export function CarouselCustomNavigation() {

    
  return (
    <Carousel
      className="top-16 rounded-2xl"
      autoplay={true}
      autoplayDelay={5000}
      loop={true}
      prevArrow={() => null}
  nextArrow={() => null}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="/src/assets/Carousel/buildTrust.webp"
        alt="image 1"
        className="w-full object-cover"
      />
      <img
        src="/src/assets/Carousel/increaseSales.webp"
        alt="image 2"
        className="w-full object-"
      />
    </Carousel>
  );
}