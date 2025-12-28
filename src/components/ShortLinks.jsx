
const ShortLinks = ({ setLongURL, longURL, shortenLink, loading}) => {

   
    return (
        <div 
        className="w-[80%] mx-auto p-4 rounded-lg
        bg-herobg bg-cover bg-center bg-GrayC-700
        mb-16 absolute -top-16 left-1/2 
        -translate-x-1/2 shadow-sm
        md:p-10">
            <div className="flex flex-col gap-4 md:flex-row">
                <input
                    className="outline-none p-2 rounded-md 
                    w-full px-6 py-3"
                    type="text"
                    placeholder="Shorten a link here..."
                    value={longURL}
                    onChange={(e) => setLongURL(e.target.value)}
                />
                <button
                    onClick={shortenLink}
                    disabled={loading}
                    className="bg-BlueC text-nowrap px-8 py-2 font-Poppins_Medium text-white rounded-md">
                    {loading ? 'Shortening' : 'Shorten it!'}
                </button>
            </div>
        </div>
    )
}

export default ShortLinks