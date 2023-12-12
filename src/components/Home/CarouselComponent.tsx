import { Carousel } from "@ark-ui/react";
import { useState } from "react";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    'https://tinyurl.com/5b6ka8jd',
    'https://tinyurl.com/7rmccdn5',
    'https://tinyurl.com/59jxz9uu',
  ]

  return (
    <div className="bg-green-400 py-10 ">
      <section  className="max-w-6xl my-0 mx-auto px-8 py-5">
        <div className="">
          <Carousel.Root index={currentIndex} onIndexChange={(details) => setCurrentIndex(details.index)}>
            <Carousel.Control>
              <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
              <Carousel.NextTrigger>Next</Carousel.NextTrigger>
            </Carousel.Control>
            <Carousel.IndicatorGroup>
              {images.map((_, index) => (
                <Carousel.Indicator key={index} index={index}>
                  {index + 1}
                </Carousel.Indicator>
              ))}
            </Carousel.IndicatorGroup>
            <Carousel.Viewport>
              <Carousel.ItemGroup>
                {images.map((image, index) => (
                  <Carousel.Item key={index} index={index}>
                    <img src={image} className="w-full h-96" />
                  </Carousel.Item>
                ))}
              </Carousel.ItemGroup>
            </Carousel.Viewport>
          </Carousel.Root>
        </div>
      </section>
    </div>
  )
}

export default CarouselComponent