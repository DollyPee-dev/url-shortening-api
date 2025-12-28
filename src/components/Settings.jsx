import Card from "./Card"
import SearchResults from "./SearchResults"
import ShortLinks from "./ShortLinks"
import regImg from '/images/icon-brand-recognition.svg'
import recordImg from '/images/icon-detailed-records.svg'
import customizeImg from '/images/icon-fully-customizable.svg'
import { useState, useEffect } from "react"


const Settings = () => {

  const [shortURL, setShortURL] = useState("");
  const [longURL, setLongURL] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);


  useEffect(() => {
    const saved = localStorage.getItem("linkHistory");
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const shortenLink = () => {
    if (!longURL) return;

    setLoading(true);

    fetch('https://api-ssl.bitly.com/v4/shorten', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer ed1d0a4caa76ce13399774e2c3918c0f3c12ddb9'
      },
      body: JSON.stringify({
        long_url: longURL
      })
    })
      .then(res => res.json())
      .then((data) => {
        if (data.link) {

          const newEntry = { longURL, shortURL: data.link }

          setHistory(prev => {
            const updated = [newEntry, ...prev].slice(0, 3);
            localStorage.setItem("linkHistory", JSON.stringify(updated));
            return updated;
          });

          setShortURL(data.link)

          setShowHistory(true)

          setLongURL('')

        } else {
          alert("Error Shortening Link")
        }
      })
      .catch((err) => console.error("Request Fail:", err))
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className={`relative ${shortURL ? 'pt-20' : 'pt-36'} pb-20 bg-PurpleC/5 min-h-[100vh]`}>
      <ShortLinks
        longURL={longURL}
        setLongURL={setLongURL}
        shortURL={shortURL}
        loading={loading}
        shortenLink={shortenLink}
      />
      {showHistory && history.length > 0 &&
        <SearchResults
          history={history}
          setHistory={setHistory}
          setShowHistory={setShowHistory}
        />
      }
      <div className="containerC">
        <h2 className="text-center font-Poppins_Bold text-4xl text-PurpleC mb-3">Advanced Statistics</h2>
        <p className="text-center text-GrayC-500">Track how your links are performing across the web with</p>
        <p className="text-center text-GrayC-500">our advanced statistics dashboard</p>
      </div>
      <div className="containerC flex flex-col mt-16 
      gap-8 items-start relative
      md:flex-row">
        {/* Cards Component */}
        <Card
          stat_img={regImg}
          stat_Title='Brand Recognition'
          stat_detail="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
          mt='mt-0'
        />
        <Card
          stat_img={recordImg}
          stat_Title='Detailed Records'
          stat_detail="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          mt='mt-10'
        />
        <Card
          stat_img={customizeImg}
          stat_Title='Fully Customizable'
          stat_detail="Improve brand awareness and content discoverability through customizable links. Supercharging audience engagement"
          mt='mt-10 md:mt-20'
        />
        <div className="z-0 h-[90%] bg-BlueC w-[4px] 
        rounded-full absolute left-1/2 top-1/2 
        -translate-y-1/2 -translate-x-1/2
        md:w-[78%] md:h-[4px]"></div>
      </div>
    </div>
  )
}

export default Settings