import React, { useState, useEffect } from 'react'

import "../scripts/navbar"
function Navbar() {

    return (

        <>
            <header className='text-white bg-[#FFFFFF30]'>
                <nav className='flex items-center justify-between px-10 h-16 lg:gap-8'>
                    <a href="" className='text-2xl font-bold border-2 p-1 whitespace-nowrap'>AnimeTV</a>
                    <div className='dropdown-menu absolute -top-full  left-0 max-lg:bg-[#FFFFFF30] w-full flex 
                    flex-col gap-5 items-center py-2  text-lg z-20 lg:static lg:flex-row lg:justify-between '>
                        <ul className='flex flex-col items-center gap-2 lg:flex-row lg:gap-8'>
                            <li className='hover:text-orange-400  rounded'>Home</li>
                            <li className='hover:text-orange-400  rounded'>Home</li>
                            <li className='hover:text-orange-400  rounded'>Home</li>
                            <li className='hover:text-orange-400  rounded'>Home</li>
                            <li className='hover:text-orange-400  rounded'>Home</li>


                        </ul>
                        <div className='flex flex-col items-center gap-2 lg:flex-row lg:gap-8'>
                            <button className='hover:text-orange-400 rounded'>Login</button>
                            <button className='bg-orange-400 rounded-xl px-2 py-1'>sign up</button>
                            <button className='hover:text-orange-400  rounded ' id='my-bolum-ekle-button'>BölümEkle</button>
                        </div>
                    </div>
                    <div className='toggle-button lg:hidden'>
                        <i className="fa-solid fa-bars-progress fa-lg whitespace-nowrap"></i>
                    </div>





                </nav>
            </header >

            <div class="form-container absolute top-20  left-0 z-30" id='upload-form'>
                <form class="form">
                    <div className='form-group'>

                        <label for="file" class="custum-file-upload">
                            <div class="icon">
                                <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill=""></path> </g></svg>
                            </div>
                            <div class="text">
                                <span>Click to upload image</span>
                            </div>
                            <input id="file" type="file" />
                        </label>

                    </div>
                    <div class="form-group">
                        <label for="email">Company Email</label>
                        <input required="" name="email" id="email" type="text" />
                    </div>


                    <div class="form-group">
                        <label for="textarea">How Can We Help You?</label>
                        <textarea required="" cols="50" rows="10" id="textarea" name="textarea" />
                    </div>



                    <button class="uploadfrombutton">
                        Button
                    </button>

                    <button class="uploadfrombutton" id='cancelbtn'>
                        Button
                    </button>

                </form>
            </div>




        </>
    )
}

export default Navbar
