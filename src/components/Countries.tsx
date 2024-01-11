import data from '../../backend/data.json'

const Countries = () => {
	return (
		<div className='flex justify-center'>
			<div className='grid grid-cols-1 gap-10 mx-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
				{data.map(country => (
					<div className='grid grid-rows-2 my-4 bg-gray-700 shadow-lg rounded-xl h-96'>
						<div className='flex flex-col items-center md:flex-row'>
							<img src={country.flag} alt={country.name} className='object-cover w-full h-full rounded-t-xl' />
						</div>
						<div className='px-5 mt-2'>
							<h2 className='py-4 text-2xl font-semibold text-white'>{country.name}</h2>
							<p className='text-lg text-gray-400'>
								<span className='text-lg text-white'>Population: </span>
								{country.population.toLocaleString()}
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
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Countries
