import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
const BolumDetay = () => {

    const [bolumId, setBolumId] = useState(0)


    return (
        <>
            <div className="flex flex-col p-1  items-center gap-20 ">
                <div className=" sm:w-3xl md:w-4xl w-full  bg-cyan-600 ">

                    <div className="relative items-center">

                            <h1 className="absolute z-20 bg-fuchsia-700  rounded-xl p-2 top-0.5 left-0.5">Anime Görselleri</h1>
                        



                        <Swiper className="mySwiper   ">

                            <SwiperSlide><img src="resim2.jpg" className=" object-cover " alt="" /></SwiperSlide>
                            <SwiperSlide><img src="resim4.jpg" className="object-cover " alt="" /></SwiperSlide>

                            <SwiperSlide><img src="resim5.jpg" className="object-cover " alt="" /></SwiperSlide>
                            <SwiperSlide><img src="resim7.jpg" className="object-cover " alt="" /></SwiperSlide>
                            <SwiperSlide><img src="resim6.jpg" className="object-cover " alt="" /></SwiperSlide>


                        </Swiper>


                        <div class="tooltip-container absolute -top-10  z-20">
                            <span class="tooltip whitespace-nowrap">Sürükle Bırak!</span>
                            <span class="text">İpucu</span>
                        </div>


                    </div>


                </div>

                <div className="flex flex-col bg-orange-500">
                    <div className="flex">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className=" justify-center gap-5">
                        <button className='episode-detay-button'>Favorilere Ekle</button>
                        <button className='episode-detay-button'>Daha Sonra İzle</button>
                    </div>

                </div>

                <div class="block glow  p-1 md:p-10 ">


                    <p class="break-all p-2">
                        ,sdfdsflkfgjdgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                        ,sdfdsflkfgjdgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                        ,sdfdsflkfgjdgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                        ,sdfdsflkfgjdgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                        ,sdfdsflkfgjdgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj

                        ,sdfdsflkfgjdgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                        44444444444444444444444444444444444444
                        ,sdfdsflkfgjdgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                        ,sdfdsflkfgjdgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                        ,sdfdsflkfgjdgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                        ,sdfdsflkfgjdgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                        ,sdfdsflkfgjdgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj

                        ,sdfdsflkfgjdgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                        44444444444444444444444444444444444444
                        ,sdfdsflkfgjdgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                        ,sdfdsflkfgjdgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                        ,sdfdsflkfgjdgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                        ,sdfdsflkfgjdgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                        ,sdfdsflkfgjdgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj

                        ,sdfdsflkfgjdgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                        44444444444444444444444444444444444444
                        ,sdfdsflkfgjdgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                        ,sdfdsflkfgjdgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                        ,sdfdsflkfgjdgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                        ,sdfdsflkfgjdgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                        ,sdfdsflkfgjdgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj

                        ,sdfdsflkfgjdgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                        44444444444444444444444444444444444444
                    </p>
                </div>


            </div>













        </>


    )
}

export default BolumDetay