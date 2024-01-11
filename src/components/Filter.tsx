function Filter() {
	return (
	<div className="py-4 mx-7 ">
		<select className="px-4 py-2 text-white bg-gray-700 rounded"> 
			<option value="">Filter by Region</option>
			<option value="Africa">Africa</option>
			<option value="Americas">Americas</option>
			<option value="Asia">Asia</option>
			<option value="Europe">Europe</option>
			<option value="Oceania">Oceania</option>
		</select>
	</div>
	)
}

export default Filter
