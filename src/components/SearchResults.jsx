
const SearchResults = ({ history, setShowHistory }) => {

    const copyLink = (url) => {
        navigator.clipboard.writeText(url)
            .then(() => {
                alert("Copied")
                setShowHistory(false);
            })
            .catch((err) => {
                console.error("Failed to Copy:", err)
            })
    }

    return (
        <div className="containerC mb-16">
            {history.map(item => (
                <div
                    className="bg-white py-2 px-4 rounded-md flex
            items-center justify-between gap-6 shadow-sm mb-2">
                    <span className="truncate max-w-96 block">{item.longURL}</span>
                    <div className="flex items-center gap-4">
                        <span className="block text-BlueC">{item.shortURL}</span>
                        <button
                            onClick={() => copyLink(item.shortURL)}
                            className="bg-BlueC py-2 px-6 
                        text-sm text-white rounded-md font-Poppins_Medium">
                            Copy
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SearchResults