import { Link } from 'react-router-dom'
import data from '../../backend/data.json'

type PropsType = {
	selectedRegion: string
	searchTerm: string
}

const Countries = ({ selectedRegion, searchTerm }: PropsType) => {
	const filteredCountries = data.filter(country => country.region.includes(selectedRegion))
	const searchedFilteredCountries = filteredCountries.filter(country => country.name.toLowerCase().includes(searchTerm))

	return (
		<div className='flex justify-center'>
			<div className='grid grid-cols-1 gap-10 mx-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
				{searchedFilteredCountries.map(country => (
					<div className='grid grid-rows-2 pb-2 my-4 bg-gray-700 shadow-lg h-8/12 rounded-xl' key={country.name}>
						<div className='flex flex-col items-center md:flex-row'>
							<img src={country.flag} alt={country.name} className='object-cover w-full h-full rounded-t-xl ' />
						</div>

						<div className='flex flex-col justify-between px-5 mt-2'>
							<h2 className='py-4 text-2xl font-semibold text-white'>{country.name}</h2>
							<p className='text-lg text-gray-400'>
								<span className='text-lg text-white'>Population: </span>
								{country.population.toLocaleString('en-US')}
							</p>
							<p className='text-lg text-gray-400'>
								<span className='text-lg text-white'>Region: </span>
								{country.region}
							</p>
							{country.capital && (
								<p className='text-lg text-gray-400'>
									<span className='text-lg text-white'>Capital: </span>
									{country.capital}
								</p>
							)}
							<Link to={`/country/${country.name}`}>
								<button className='px-4 py-2 mt-6 mb-4 text-lg font-semibold text-white bg-gray-800 rounded shadow-lg'>
									Learn More
								</button>
							</Link>
						</div>
					</div>
				))}
				{searchedFilteredCountries.length === 0 && (
					<div className='flex items-center justify-center h-96'>
						<h1 className='text-3xl font-semibold text-white'>No Country Found</h1>
					</div>
				)}
			</div>
		</div>
	)
}

export default Countries
