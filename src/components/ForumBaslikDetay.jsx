import React, { useState } from 'react'

const ForumBaslikDetay = () => {

    const [value, setValue] = useState(0)
    const handleClick = () => {
        setValue(value + 1)
    }
    return (
        <>
           <span>Baslik</span>
            <div class="flex flex-col bg-gray-700 p-10 gap-5">
                <div class="flex flex-col md:flex-row ">
                    <div class="flex basis-3/12 bg-gray-800 justify-center ">
                        <div class="flex items-center justify-center">
                            <div
                                class=" bg-yellow-300  shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
                                <div class="flex items-center flex-row md:flex-col gap-4 ">
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
                                        class="md:w-32 md:group-hover:w-36  group-hover:w-15 md:group-hover:h-36  group-hover:h-15 md:h-32 object-center object-cover rounded-full transition-all duration-200 delay-100 transform w-10 h-10"
                                    />
                                    <div class="w-fit transition-all transform duration-500 overflow-hidden">
                                        <h1 class="text-gray-600 dark:text-gray-200 font-bold">
                                            Mary Phiri
                                        </h1>
                                        <p class="text-gray-400">Senior Developer</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="basis-9/12">
                        <div class="flex  bg-orange-800 p-5">
                            Where does it come from?
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </div>
                        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            SİL
                        </button>
                    </div>


                </div>
                <div class="flex flex-col gap-4 md:flex-row ">
                    <div class="flex basis-3/12  bg-gray-800 justify-center">
                        <div class=" dark:bg-slate-800 gap-6 flex items-center justify-center">
                            <div
                                class=" bg-yellow-300  shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
                                <div class="flex items-center flex-row md:flex-col gap-4 ">
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
                                        class="md:w-32 md:group-hover:w-36  group-hover:w-15 md:group-hover:h-36  group-hover:h-15 md:h-32 object-center object-cover rounded-full transition-all duration-200 delay-100 transform w-10 h-10"
                                    />
                                    <div class="w-fit transition-all transform duration-500 overflow-hidden">
                                        <h1 class="text-gray-600 dark:text-gray-200 font-bold">
                                            Mary Phiri
                                        </h1>
                                        <p class="text-gray-400">Senior Developer</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="basis-9/12">
                        <div class="flex  bg-orange-800 p-5">
                            Where does it come from?
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </div>
                        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            SİL
                        </button>
                    </div>


                </div>
                <div class="flex flex-col gap-4 md:flex-row ">
                    <div class="flex basis-3/12  bg-gray-800 justify-center">
                        <div class=" dark:bg-slate-800 gap-6 flex items-center justify-center">
                            <div
                                class=" bg-yellow-300  shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
                                <div class="flex items-center flex-row md:flex-col gap-4 ">
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
                                        class="md:w-32 md:group-hover:w-36  group-hover:w-15 md:group-hover:h-36  group-hover:h-15 md:h-32 object-center object-cover rounded-full transition-all duration-200 delay-100 transform w-10 h-10"
                                    />
                                    <div class="w-fit transition-all transform duration-500 overflow-hidden">
                                        <h1 class="text-gray-600 dark:text-gray-200 font-bold">
                                            Mary Phiri
                                        </h1>
                                        <p class="text-gray-400">Senior Developer</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="basis-9/12">
                        <div class="flex  bg-orange-800 p-5">
                            Where does it come from?
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </div>
                        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            SİL
                        </button>
                    </div>


                </div>
                <div class="flex flex-col gap-4 md:flex-row ">
                    <div class="flex basis-3/12  bg-gray-800 justify-center">
                        <div class=" dark:bg-slate-800 gap-6 flex items-center justify-center">
                            <div
                                class=" bg-yellow-300  shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
                                <div class="flex items-center flex-row md:flex-col gap-4 ">
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
                                        class="md:w-32 md:group-hover:w-36  group-hover:w-15 md:group-hover:h-36  group-hover:h-15 md:h-32 object-center object-cover rounded-full transition-all duration-200 delay-100 transform w-10 h-10"
                                    />
                                    <div class="w-fit transition-all transform duration-500 overflow-hidden">
                                        <h1 class="text-gray-600 dark:text-gray-200 font-bold">
                                            Mary Phiri
                                        </h1>
                                        <p class="text-gray-400">Senior Developer</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="basis-9/12">
                        <div class="flex  bg-orange-800 p-5">
                            Where does it come from?
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </div>
                        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            SİL
                        </button>
                    </div>


                </div>
                <div class="flex flex-col gap-4 md:flex-row ">
                    <div class="flex basis-3/12  bg-gray-800 justify-center">
                        <div class=" dark:bg-slate-800 gap-6 flex items-center justify-center">
                            <div
                                class=" bg-yellow-300  shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
                                <div class="flex items-center flex-row md:flex-col gap-4 ">
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
                                        class="md:w-32 md:group-hover:w-36  group-hover:w-15 md:group-hover:h-36  group-hover:h-15 md:h-32 object-center object-cover rounded-full transition-all duration-200 delay-100 transform w-10 h-10"
                                    />
                                    <div class="w-fit transition-all transform duration-500 overflow-hidden">
                                        <h1 class="text-gray-600 dark:text-gray-200 font-bold">
                                            Mary Phiri
                                        </h1>
                                        <p class="text-gray-400">Senior Developer</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="basis-9/12">
                        <div class="flex  bg-orange-800 p-5">
                            Where does it come from?
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </div>
                        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            SİL
                        </button>
                    </div>


                </div>
                <div class="flex flex-col gap-4 md:flex-row ">
                    <div class="flex basis-3/12  bg-gray-800 justify-center">
                        <div class=" dark:bg-slate-800 gap-6 flex items-center justify-center">
                            <div
                                class=" bg-yellow-300  shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
                                <div class="flex items-center flex-row md:flex-col gap-4 ">
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
                                        class="md:w-32 md:group-hover:w-36  group-hover:w-15 md:group-hover:h-36  group-hover:h-15 md:h-32 object-center object-cover rounded-full transition-all duration-200 delay-100 transform w-10 h-10"
                                    />
                                    <div class="w-fit transition-all transform duration-500 overflow-hidden">
                                        <h1 class="text-gray-600 dark:text-gray-200 font-bold">
                                            Mary Phiri
                                        </h1>
                                        <p class="text-gray-400">Senior Developer</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="basis-9/12">
                        <div class="flex  bg-orange-800 p-5">
                            <ul>
                                <li>
                                    <span>Mesaj Tarihi</span>
                                </li>
                                <li>
                                    <p> Where does it come from?
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                </li>
                            </ul>
                        </div>
                        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            SİL
                        </button>
                    </div>


                </div>




            </div>

        </>



    )
}

export default ForumBaslikDetay