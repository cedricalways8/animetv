import React from 'react'
import videojs from 'video.js'
import "video.js/dist/video-js.css"
import { VideoPlayer } from './VideoPlayer'
function BolumIzle() {
    return (


        <>
            <div className='flex flex-col bg-amber-800 md:p-5 p-1 '>
               
                <div className='flex md:flex-row flex-col gap-4  '>

                    <div class=" basis-8/12 bg-green-400 flex flex-col justify-center p-3 gap-4">
                        fdsfdsfdsfs

                        <div class="flex flex-col  bg-cyan-400 rounded ">


                            <div className='flex items-center justify-center gap-1'>
                            <span> Puanla</span>
                                <div class="rating">
                                
                                    <input type="radio" id="star5" name="rating" value="5" />
                                    <label for="star5"></label>
                                    <input type="radio" id="star4" name="rating" value="4" />
                                    <label for="star4"></label>
                                    <input type="radio" id="star3" name="rating" value="3" />
                                    <label for="star3"></label>
                                    <input type="radio" id="star2" name="rating" value="2" />
                                    <label for="star2"></label>
                                    <input type="radio" id="star1" name="rating" value="1" />
                                    <label for="star1"></label>
                                </div>
                            </div>

                            <div className='flex justify-between'>
                                <button type="button" class="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3">
                                    <div class="flex flex-row align-middle">
                                        <svg class="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                        <p class="ml-2">Prev</p>
                                    </div>
                                </button>
                                <button type="button" class="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3">
                                    <div class="flex flex-row align-middle">
                                        <span class="mr-2">Next</span>
                                        <svg class="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div>
                            <VideoPlayer>

                            </VideoPlayer>

                        </div>
                        <div className='flex flex-wrap gap-2 justify-center '>
                            <button className='episodefavbutton'> Favorilere Ekle</button>
                            <button className='episodefavbutton'> Daha Sonra İzle</button>
                        </div>



                    </div>

                    <div className='basis-4/12'>
                        <div class=" flex w-full flex-col bg-red-500 place-items-center p-4 gap-8 items-center">
                            <h3>BÖLÜM LİSTESİ</h3>
                            <div class="flex flex-wrap gap-3 overflow-y-auto h-96 bg-cyan-50 p-3 justify-center rounded-2xl hover:scale-105 duration-500">

                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>
                                <a>12222222222222</a>

                            </div>

                        </div>



                    </div>
                </div>
                yorumlar
            </div>

        </>


    )
}

export default BolumIzle
