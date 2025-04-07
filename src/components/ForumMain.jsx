import React from 'react'

const ForumMain = () => {


    return (
        <>
            <div className=' bg-cyan-200 p-10 '>
                <div className='relative  bg-orange-500 '>
                    <details class="group absolute z-20 w-full md:w-2xl bg-gray-600 px-3.5" open>
                        <summary
                            class="flex flex-col sm:flex-row cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                            <p>Baslık ac</p>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="block h-5 w-5 group-open:hidden">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="hidden h-5 w-5 group-open:block">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                                </svg>
                            </div>
                        </summary>
                        <div class="pb-4 text-secondary-500  ">
                            <div>
                                <div class="max-w-xl mt-20 mx-auto">
                                    <div class="w-full flex flex-col gap-5  ">
                                        <div>
                                            <label htmlFor=""></label>
                                            <input type="text" placeholder='Başlık adı' className='bg-white w-full px-1 rounded-2xl' />
                                        </div>
                                        <div>

                                            <textarea rows="10"
                                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-1 mb-3 
                                            leading-tight focus:outline-none focus:bg-white focus:border-gray-500 overflow-y-auto " placeholder='Başlık Açıklaması'></textarea>


                                        </div>
                                        <div>
                                            <button class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                                                Send Message
                                            </button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </details>
                    <ol className=" w-full absolute top-20 ">
                        <li className='flex w-full flex-col md:flex-row p-6 gap-2 '>
                            <div class="h-13 w-13 overflow-hidden rounded-full ring-2 ring-gray-500  ">
                                <img src="https://loremflickr.com/g/200/200/girl" className='object-cover h-full w-full' alt="" />
                            </div>
                            <div class=" overflow-hidden basis-8/12 bg-amber-400 ">
                                <p>dsadsadsadsads</p>
                                <p>açıklama</p>
                                <p>adasdasd</p>
                            </div>

                            <div class=" overflow-hidden bg-amber-700 basis-3/12">
                                <p>asdsadad</p>
                                <p>asdasdsadsad</p>
                            </div>
                        </li>
                        <li className='flex w-full flex-col sm:flex-row gap-2 p-4'>
                            <div class="h-13 w-13 overflow-hidden rounded-full ring-2 ring-gray-500 size-1/12 grow-0">
                                <img src="https://loremflickr.com/g/200/200/girl" className='object-cover h-full w-full' alt="" />
                            </div>
                            <div class=" overflow-hidden basis-8/12 bg-amber-400 ">
                                <p>dsadsadsadsads</p>
                                <p>açıklama</p>
                                <p>adasdasd</p>
                            </div>

                            <div class=" overflow-hiddenbasis-3/12">
                                <p>asdsadad</p>
                                <p>asdasdsadsad</p>


                                <a class="deletebtn" href="#">I am a button</a>

                            </div>
                        </li>
                        <li className='flex w-full flex-col sm:flex-row p-6 gap-2 '>
                            <div class="h-13 w-13 overflow-hidden rounded-full ring-2 ring-gray-500 size-1/12 grow-0">
                                <img src="https://loremflickr.com/g/200/200/girl" className='object-cover h-full w-full' alt="" />
                            </div>
                            <div class=" overflow-hidden basis-8/12 bg-amber-400 ">
                                <p>dsadsadsadsads</p>
                                <p>açıklama</p>
                                <p>adasdasd</p>
                            </div>

                            <div class=" overflow-hidden bg-amber-700 basis-3/12 ">
                                <p>asdsadad</p>
                                <p>asdasdsadsad</p>
                            </div>
                        </li>
                        <li className='flex w-full flex-col sm:flex-row p-6 gap-2 '>
                            <div class="h-13 w-13 overflow-hidden rounded-full ring-2 ring-gray-500 size-1/12 grow-0">
                                <img src="https://loremflickr.com/g/200/200/girl" className='object-cover h-full w-full' alt="" />
                            </div>
                            <div class=" overflow-hidden basis-8/12 bg-amber-400 ">
                                <p>dsadsadsadsads</p>
                                <p>açıklama</p>
                                <p>adasdasd</p>
                            </div>

                            <div class=" overflow-hidden bg-amber-700 basis-3/12">
                                <p>asdsadad</p>
                                <p>asdasdsadsad</p>
                            </div>
                        </li>
                        <li className='flex w-full flex-col sm:flex-row p-6 gap-2 '>
                            <div class="h-13 w-13 overflow-hidden rounded-full ring-2 ring-gray-500 size-1/12 grow-0">
                                <img src="https://loremflickr.com/g/200/200/girl" className='object-cover h-full w-full' alt="" />
                            </div>
                            <div class=" overflow-hidden basis-8/12 bg-amber-400 ">
                                <p>dsadsadsadsads</p>
                                <p>açıklama</p>
                                <p>adasdasd</p>
                            </div>

                            <div class=" overflow-hidden bg-amber-700 basis-3/12">
                                <p>asdsadad</p>
                                <p>asdasdsadsad</p>
                            </div>
                        </li>
                        <li className='flex w-full flex-col sm:flex-row p-6 gap-2 '>
                            <div class="h-13 w-13 overflow-hidden rounded-full ring-2 ring-gray-500 basis-1/12 grow-0">
                                <img src="https://loremflickr.com/g/200/200/girl" className='object-cover h-full w-full' alt="" />
                            </div>
                            <div class=" overflow-hidden basis-8/12 bg-amber-400 ">
                                <p>dsadsadsadsads</p>
                                <p>açıklama</p>
                                <p>adasdasd</p>
                            </div>

                            <div class=" overflow-hidden bg-amber-700 basis-3/12">
                                <p>asdsadad</p>
                                <p>asdasdsadsad</p>
                            </div>
                        </li>
                        <li className='flex w-full flex-col sm:flex-row p-6 gap-2 '>
                            <div class="h-13 w-13 overflow-hidden rounded-full ring-2 ring-gray-500 size-1/12 grow-0">
                                <img src="https://loremflickr.com/g/200/200/girl" className='object-cover h-full w-full' alt="" />
                            </div>
                            <div class=" overflow-hidden basis-8/12 bg-amber-400 ">
                                <p>dsadsadsadsads</p>
                                <p>açıklama</p>
                                <p>adasdasd</p>
                            </div>

                            <div class=" overflow-hidden bg-amber-700 basis-3/12">
                                <p>asdsadad</p>
                                <p>asdasdsadsad</p>
                            </div>
                        </li>
                    </ol>
                </div>




            </div>



        </>



    )
}

export default ForumMain