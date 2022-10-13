import Carousel from "react-material-ui-carousel";
import Home from "../../images/homedark.png"
import Home2 from "../../images/Home.png"
export default function CTA() {
    const images = [
        '../../images/homedark.png',
        '../../images/Home.png',
    ]
    return (
      <div className="bg-white">
        <div className="w-full mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to dive in?</span>
                  <span className="block">Start your free trial today.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-indigo-200">
                  Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla
                  nec.
                </p>
                <a
                  href="#"
                  className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-gray-50"
                >
                  Sign up for free
                </a>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <Carousel
                    animation="slide"
                    interval={10000}
                    swipe={true}
                    indicatorContainerProps={{
                      className: "sr-only",
                      style: {
                        display: "none", // 5
                      },
                    }}
                  >
                        <img
                          className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20 transition-all duration-500 hover:scale-110 -rotate-12 hover:rotate-0"
                          src={Home}
                          alt="App screenshot"
                        />
                        <img
                          className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20 transition-all duration-500 hover:scale-110 -rotate-12 hover:rotate-0"
                          src={Home2}
                        />
                  </Carousel>
            </div>
          </div>
        </div>
      </div>
    )
  }
  