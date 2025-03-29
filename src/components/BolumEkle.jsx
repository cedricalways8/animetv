import React from 'react'
import Banner from "./Banner"
import "../app.css"

const BolumEkle = () => {
    return (

        <>


            <div class="flex flex-col gap-3 ">
                <div class="rounded-md border border-indigo-500 bg-gray-50 p-4 shadow-md w-36">
                    <label for="upload" class="flex flex-col items-center gap-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 fill-white stroke-indigo-500" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span class="text-gray-600 font-medium">Seri Afişi Yükle</span>
                    </label>
                    <input id="upload" type="file" class="hidden" />

                </div>
                <div class="mt-10 p-10">
                    <form class="flex flex-col mx-auto gap-2 max-w-xl">
                        <fieldset class="contents">
                            <div class="flex flex-col">
                                <label for="input" class="font-semibold text-lg">Seri Tanıtımı</label>
                                <textarea name="input" id="input" rows="5" maxlength="500" required=""
                                    placeholder="Eg. A new and innovative water bottle that keeps drinks cold for 24 hours. [Max 500 chars]"
                                    class="rounded-lg p-4 bg-black/5 border-2 border-solid border-black/10 font-mono font-medium text-sm"></textarea>
                            </div>

                        </fieldset>
                    </form>
                </div>

                <input placeholder="Seri adı" class="input" name="text" type="text" />
                <input placeholder="Bölüm numarası" class="input" name="text" type="text" />
                <div class="flex items-center space-x-2 rounded p-2 hover:bg-gray-100 accent-teal-600">
                    <input type="checkbox" id="javascriptCheckbox" name="languageCheckbox" class="h-4 w-4 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
                    <label for="javascriptCheckbox" class="flex w-full space-x-2 text-sm"> Yeni Seri </label>
                </div>
                <button type="submit"
                    class="rounded-lg p-3 bg-green-500/20 border-2 border-solid border-green-500/20 transition-colors hover:bg-green-500/40 font-medium text-base leading-none flex flex-row items-center justify-center gap-2"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path fill-rule="evenodd"
                            d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="font-bold">Yükle!</span>
                </button>


            </div>

        </>



    )
}

export default BolumEkle