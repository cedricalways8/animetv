import React, { useState } from 'react'
import LetterFilterSearch from './Filter'
import EpisodeCard from "./EpisodeCard"

const Anasayfa = () => {


  return (
    <>

      <div className="bg-blue-400 flex flex-col  ">

        <div class="flex flex-wrap p-10 gap-7 bg-amber-900 space-x-5 space-y-16 justify-center">
          <div class="card relative">
            <img src="resim.jpg" alt=""  className='h-full w-full object-cover absolute left-0 top-0 bottom-0 right-0'/>
            <div class="details">
              <div class="cardHeader"><p className='break-all'> classşdlfjdsklfhsklfdshklfdhsfdslfhdsklfdsfdsf</p></div>
              <div class="cardText">
              <p className='break-all'> classşdlfjdsklfhsklfdshklfdhsfdslfhdsklfdsfdsf</p>
              </div>
              <div class="card-button">İzle</div>
            </div>
          </div>
          <div class="card relative">
            <img src="resim.jpg" alt=""  className='h-full w-full object-cover absolute left-0 top-0 bottom-0 right-0'/>
            <div class="details">
              <div class="cardHeader"><p className='break-all'> classşdlfjdsklfhsklfdshklfdhsfdslfhdsklfdsfdsf</p></div>
              <div class="cardText">
              <p className='break-all'> classşdlfjdsklfhsklfdshklfdhsfdslfhdsklfdsfdsf</p>
              </div>
              <div class="card-button">İzle</div>
            </div>
          </div>
          <div class="card relative">
            <img src="resim.jpg" alt=""  className='h-full w-full object-cover absolute left-0 top-0 bottom-0 right-0'/>
            <div class="details">
              <div class="cardHeader"><p className='break-all'> classşdlfjdsklfhsklfdshklfdhsfdslfhdsklfdsfdsf</p></div>
              <div class="cardText">
              <p className='break-all'> classşdlfjdsklfhsklfdshklfdhsfdslfhdsklfdsfdsf</p>
              </div>
              <div class="card-button">İzle</div>
            </div>
          </div>
          <div class="card relative">
            <img src="resim.jpg" alt=""  className='h-full w-full object-cover absolute left-0 top-0 bottom-0 right-0'/>
            <div class="details">
              <div class="cardHeader"><p className='break-all'> classşdlfjdsklfhsklfdshklfdhsfdslfhdsklfdsfdsf</p></div>
              <div class="cardText">
              <p className='break-all'> classşdlfjdsklfhsklfdshklfdhsfdslfhdsklfdsfdsf</p>
              </div>
              <div class="card-button">İzle</div>
            </div>
          </div>
          <div class="card relative">
            <img src="resim.jpg" alt=""  className='h-full w-full object-cover absolute left-0 top-0 bottom-0 right-0'/>
            <div class="details">
              <div class="cardHeader"><p className='break-all'> classşdlfjdsklfhsklfdshklfdhsfdslfhdsklfdsfdsf</p></div>
              <div class="cardText">
              <p className='break-all'> classşdlfjdsklfhsklfdshklfdhsfdslfhdsklfdsfdsf</p>
              </div>
              <div class="card-button">İzle</div>
            </div>
          </div>

          <div class="card relative">
            <img src="resim.jpg" alt=""  className='h-full w-full object-cover absolute left-0 top-0 bottom-0 right-0'/>
            <div class="details">
              <div class="cardHeader"><p className='break-all'> classşdlfjdsklfhsklfdshklfdhsfdslfhdsklfdsfdsf</p></div>
              <div class="cardText">
              <p className='break-all'> classşdlfjdsklfhsklfdshklfdhsfdslfhdsklfdsfdsf</p>
              </div>
              <div class="card-button">İzle</div>
            </div>
          </div>

          <div class="card relative">
            <img src="resim.jpg" alt=""  className='h-full w-full object-cover absolute left-0 top-0 bottom-0 right-0'/>
            <div class="details">
              <div class="cardHeader"><p className='break-all'> classşdlfjdsklfhsklfdshklfdhsfdslfhdsklfdsfdsf</p></div>
              <div class="cardText">
              <p className='break-all'> classşdlfjdsklfhsklfdshklfdhsfdslfhdsklfdsfdsf</p>
              </div>
              <div class="card-button">İzle</div>
            </div>
          </div>
          <div class="card relative">
            <img src="resim.jpg" alt=""  className='h-full w-full object-cover absolute left-0 top-0 bottom-0 right-0'/>
            <div class="details">
              <div class="cardHeader"><p className='break-all'> classşdlfjdsklfhsklfdshklfdhsfdslfhdsklfdsfdsf</p></div>
              <div class="cardText">
              <p className='break-all'> classşdlfjdsklfhsklfdshklfdhsfdslfhdsklfdsfdsf</p>
              </div>
              <div class="card-button">İzle</div>
            </div>
          </div>

           <div class="card relative">
            <img src="resim.jpg" alt=""  className='h-full w-full object-cover absolute left-0 top-0 bottom-0 right-0'/>
            <div class="details">
              <div class="cardHeader"><p className='break-all'> classşdlfjdsklfhsklfdshklfdhsfdslfhdsklfdsfdsf</p></div>
              <div class="cardText">
              <p className='break-all'> classşdlfjdsklfhsklfdshklfdhsfdslfhdsklfdsfdsf</p>
              </div>
              <div class="card-button">İzle</div>
            </div>
          </div>
          <div class="card relative">
            <img src="resim.jpg" alt=""  className='h-full w-full object-cover absolute left-0 top-0 bottom-0 right-0'/>
            <div class="details">
              <div class="cardHeader"><p className='break-all'> classşdlfjdsklfhsklfdshklfdhsfdslfhdsklfdsfdsf</p></div>
              <div class="cardText">
              <p className='break-all'> classşdlfjdsklfhsklfdshklfdhsfdslfhdsklfdsfdsf</p>
              </div>
              <div class="card-button">İzle</div>
            </div>
          </div>
          <div class="card relative">
            <img src="resim.jpg" alt=""  className='h-full w-full object-cover absolute left-0 top-0 bottom-0 right-0'/>
            <div class="details">
              <div class="cardHeader"><p className='break-all'> classşdlfjdsklfhsklfdshklfdhsfdslfhdsklfdsfdsf</p></div>
              <div class="cardText">
              <p className='break-all'> classşdlfjdsklfhsklfdshklfdhsfdslfhdsklfdsfdsf</p>
              </div>
              <div class="card-button">İzle</div>
            </div>
          </div>



        </div>
        <div class="place-items-center">

          <nav class="flex items-center gap-x-1 place-items-center " aria-label="Pagination">
            <button type="button" class="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" aria-label="Previous">
              <svg aria-hidden="true" class="hidden shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"></path>
              </svg>
              <span>Previous</span>
            </button>
            <div class="flex items-center gap-x-1">
              <button type="button" class="min-h-9.5 min-w-9.5 flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" aria-current="page">1</button>
              <button type="button" class="min-h-9.5 min-w-9.5 flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">2</button>
              <button type="button" class="min-h-9.5 min-w-9.5 flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">3</button>
            </div>
            <button type="button" class="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" aria-label="Next">
              <span>Next</span>
              <svg aria-hidden="true" class="hidden shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </nav>

        </div>

      </div>



    </>

  )
}

export default Anasayfa