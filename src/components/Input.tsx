
function Input() {
  return (
    <div className="flex items-center justify-center py-6 ">
        {/* add search bar icon bg-right bg-no-repeat bg-cover bg-search-bar */}
        <input type="text" placeholder="Search for a country..." className="w-full py-2 pl-8 text-white placeholder-white bg-gray-700 rounded mx-7 "/>
    </div>
  )
}

export default Input