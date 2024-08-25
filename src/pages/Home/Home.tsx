import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useFetchGalleries } from "../Profile/hooks/useFetchGalleries";
export default function Home() {
    const { isSuccess: galleriesSuccess, data: galleries } = useFetchGalleries();
    console.log(galleries);

    return (
        <main className="px-14 lg:px-20 border-b border-slate-500 pb-20">
            {/*  */}
            <div className="lg:relative lg:h-[900px] h-[700px]">
                <div className="lg:absolute z-10 lg:top-1/3 lg:-translate-y-1/2 lg:w-2/3">
                    <h1 className="lg:text-8xl text-3xl lg:leading-[88px] lg:text-start text-center font-semibold text-heading">
                        Save your data storage here.
                    </h1>
                    <p className="lg:text-start mt-10 lg:w-1/2 text-subheading text-center">
                        Data Warehouse is a data storage area that has been tested for security, so you can store your
                        data here safely but not be afraid of being stolen by others.
                    </p>
                    <div className="mt-10 mb-10 flex justify-center lg:inline-block">
                        <button className="color-button font-semibold px-12 py-4 rounded-full text-white">
                            Learn more
                        </button>
                    </div>
                </div>

                <div className="lg:w-2/3 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
                    <img alt="Image" src="./image.png" />
                </div>
            </div>
            {/*  */}

            <div>
                <h1 className="text-3xl leading-[88px] text-center font-semibold text-heading">Features</h1>
                <p className="text-center mt-10 text-subheading">
                    Some of the features and advantages that we provide for those of you who store data in this Data
                    Warehouse.
                </p>
                <div className="grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 mt-10 gap-10">
                    <div className="relative h-[360px] max-w-[538px]">
                        <div className="absolute right-0 top-0 -z-10">
                            <img
                                alt="Image"
                                src="https://warehouse-blue.vercel.app/static/media/feature1_bg.02fab76ed86ad763f03f.png"
                            />
                        </div>

                        <div className="absolute left-1/4 top-1/2 -translate-y-1/2">
                            <img
                                alt="Image"
                                src="https://warehouse-blue.vercel.app/static/media/feature1.3bd68cd8e4cd29a40d80.png"
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-1/3 absolute -right-10 top-1/2 -translate-y-1/2 font-open-sans">
                            <h1 className="text-2xl font-medium text-heading">Search Data</h1>
                            <p className="italic text-[#4B5D68] opacity-70 font-light">
                                Don’t worry if your data is very large, the Data Warehouse provides a search engine,
                                which is useful for making it easier to find data effectively saving time.
                            </p>
                            <button className="text-heading font-semibold text-start flex items-center gap-2 group">
                                <span>Learn more</span>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 16 16"
                                    className="text-xl text-accent-primary group-hover:ml-[5px] transition-all"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="relative h-[360px] max-w-[538px]">
                        <div className="absolute right-0 top-0 -z-10">
                            <img
                                alt="Image"
                                src="https://warehouse-blue.vercel.app/static/media/feature1_bg.02fab76ed86ad763f03f.png"
                            />
                        </div>

                        <div className="absolute left-1/4 top-1/2 -translate-y-1/2">
                            <img
                                alt="Image"
                                src="https://warehouse-blue.vercel.app/static/media/feature2.aa8cfbcff7c4975f6f37.png"
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-1/3 absolute -right-10 top-1/2 -translate-y-1/2 font-open-sans">
                            <h1 className="text-2xl font-medium text-heading">Search Data</h1>
                            <p className="italic text-[#4B5D68] opacity-70 font-light">
                                Don’t worry if your data is very large, the Data Warehouse provides a search engine,
                                which is useful for making it easier to find data effectively saving time.
                            </p>
                            <button className="text-heading font-semibold text-start flex items-center gap-2 group">
                                <span>Learn more</span>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 16 16"
                                    className="text-xl text-accent-primary group-hover:ml-[5px] transition-all"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="relative h-[360px] max-w-[538px]">
                        <div className="absolute right-0 top-0 -z-10">
                            <img
                                alt="Image"
                                src="https://warehouse-blue.vercel.app/static/media/feature1_bg.02fab76ed86ad763f03f.png"
                                className=""
                            />
                        </div>

                        <div className="absolute left-1/4 top-1/2 -translate-y-1/2">
                            <img
                                alt="Image"
                                src="https://warehouse-blue.vercel.app/static/media/feature3.d41c5afe07c670d96f41.png"
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-1/3 absolute -right-10 top-1/2 -translate-y-1/2 font-open-sans">
                            <h1 className="text-2xl font-medium text-heading">Search Data</h1>
                            <p className="italic text-[#4B5D68] opacity-70 font-light">
                                Don’t worry if your data is very large, the Data Warehouse provides a search engine,
                                which is useful for making it easier to find data effectively saving time.
                            </p>
                            <button className="text-heading font-semibold text-start flex items-center gap-2 group">
                                <span>Learn more</span>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 16 16"
                                    className="text-xl text-accent-primary group-hover:ml-[5px] transition-all"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="relative h-[360px] max-w-[538px]">
                        <div className="absolute right-0 top-0 -z-10">
                            <img
                                alt="Image"
                                src="https://warehouse-blue.vercel.app/static/media/feature1_bg.02fab76ed86ad763f03f.png"
                            />
                        </div>

                        <div className="absolute left-1/4 top-1/2 -translate-y-1/2">
                            <img
                                alt="Image"
                                src="https://warehouse-blue.vercel.app/static/media/feature4.821e83ecc96bd79a8e9a.png"
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-1/3 absolute -right-10 top-1/2 -translate-y-1/2 font-open-sans">
                            <h1 className="text-2xl font-medium text-heading">Search Data</h1>
                            <p className="italic text-[#4B5D68] opacity-70 font-light">
                                Don’t worry if your data is very large, the Data Warehouse provides a search engine,
                                which is useful for making it easier to find data effectively saving time.
                            </p>
                            <button className="text-heading font-semibold text-start flex items-center gap-2 group">
                                <span>Learn more</span>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 16 16"
                                    className="text-xl text-accent-primary group-hover:ml-[5px] transition-all"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="bg-[#9C69E2] p-20 mt-20 rounded-3xl">
                <h1 className="text-center text-white text-4xl font-bold font-open-sans">Testimonials</h1>
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper mt-20"
                >
                    {galleries?.map((gallery, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex items-center justify-center gap-5 bg-white p-20 rounded-3xl lg:w-[700px] mx-auto">
                                <div className="rounded-full w-20 h-20">
                                    <img src={gallery.imageUrl} className="w-full h-full object-cover" alt="Image" />
                                </div>
                                <div>
                                    <h1 className="font-bold">John Fang</h1>
                                    <p className="text-[#9C69E2] font-semibold">wordfaang.com</p>
                                    <p className="mt-6 text-[#4B5D68] text-start">{gallery.desctiption}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/*  */}
        </main>
    );
}
