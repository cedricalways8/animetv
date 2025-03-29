import Anasayfa from "./components/Anasayfa"
import LetterFilterSearch from "./components/LetterFilterSearch"
import Banner from "./components/Banner"
import BolumDetay from "./components/BolumDetay"
import ForumMain from "./components/ForumMain"
import ForumBaslikDetay from "./components/ForumBaslikDetay"
import BolumEkle from "./components/BolumEkle"

function App() {


  return (
    <>
      <div className="flex flex-col bg-amber-200 gap-5   ">
        <Banner />
 
        <Anasayfa />
        <BolumDetay />
        <ForumMain />
        <ForumBaslikDetay />
        <BolumEkle />
      </div>

    </>
  )
}

export default App
