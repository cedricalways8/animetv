import React from 'react'

const LetterFilterSearch = () => {
    return (

        <>
            <div className=' flex flex-col place-items-center gap-3 h-96 relative'>
                <div className='absolute z-40'>
                    <div class="group relative h-20 w-36 [perspective:1000px] hover:w-64 hover:h-54  ">
                        <div class="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]  ">
                            <div
                                class="absolute w-full h-full rounded-xl bg-gradient-to-br from-violet-400 to-indigo-600 p-7
                                 text-white [backface-visibility:hidden] items-center">
                              
                                     <p class="text-lg">
                                    Kategoriler
                                </p>
                                


                            </div>

                            <div class="absolute w-full h-full rounded-xl bg-gradient-to-br from-pink-400 to-purple-600 
                             text-white [transform:rotateX(180deg)] [backface-visibility:hidden] overflow-y-hidden  ">
                                <div class="flex flex-wrap p-4 w-full gap-2 justify-between" >

                                    <a href="">aksiyon</a>
                                    <a href="">aksiyon</a>
                                    <a href="">aksiyon</a>
                                    <a href="">aksiyon</a>
                                    <a href="">aksiyon</a>
                                    <a href="">aksiyon</a>
                                    <a href="">aksiyon</a>
                                    <a href="">aksiyon</a>
                                    <a href="">aksiyon</a>
                                    <a href="">aksiyon</a>
                                    <a href="">aksiyon</a>
                                    <a href="">aksiyon</a>
                                    <a href="">aksiyon</a>
                                    <a href="">aksiyon</a>
                                    <a href="">aksiyon</a>
                                    <a href="">aksiyon</a>



                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex flex-wrap place-content-center gap-4 top-26 absolute z-20 p-10 text-white">
                    <a href="harf?harf=z" className="" type='button' >a</a>
                    <a href="harf?harf=z" >b</a>
                    <a href="harf?harf=z" >c</a>
                    <a href="harf?harf=z" >d</a>
                    <a href="harf?harf=z" >e</a>
                    <a href="harf?harf=z" >f</a>
                    <a href="harf?harf=z" >g</a>
                    <a href="harf?harf=z" >h</a>
                    <a href="harf?harf=z" >ı-i</a>
                    <a href="harf?harf=z" >j</a>
                    <a href="harf?harf=z" >k</a>
                    <a href="harf?harf=z" >l</a>
                    <a href="harf?harf=z" >m</a>
                    <a href="harf?harf=z" >n</a>
                    <a href="harf?harf=z" >o</a>
                    <a href="harf?harf=z" >p</a>
                    <a href="harf?harf=z" >r</a>
                    <a href="harf?harf=z" >s</a>
                    <a href="harf?harf=z" >t</a>
                    <a href="harf?harf=z" >u</a>
                    <a href="harf?harf=z" >v</a>
                    <a href="harf?harf=z" >y</a>
                    <a href="harf?harf=z" >z</a>


                </div>



            </div>
        </>

    )
}

export default LetterFilterSearch