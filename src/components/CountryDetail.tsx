import { Link, useParams } from 'react-router-dom'
import data from '../../backend/data.json'

function CountryDetail() {
	const { countryName } = useParams()
	const country = data.find(country => country.name.toLowerCase() === countryName?.toLowerCase())

	return (
		<div className='h-full text-white md:h-screen'>
			<button className='p-2 mx-5 my-10 bg-gray-700 rounded md:mx-16 md:my-20'>
				<Link to='/'>Back to all countries</Link>
			</button>

			<div className='flex flex-col px-5 md:px-16 md:flex-row '>
		
					<div className='flex items-center object-cover w-full md:w-6/12 '>
						<img src={country?.flag} alt='country flag' className='h-full' />
					</div>

					<div className='md:px-10'>
						<h2 className='mt-10 text-3xl font-bold md:mt-0 mb-7 md:mb-2'>{country?.name}</h2>

						<div className='flex flex-col md:gap-20 md:flex-row'>
							<div>
								<p className='my-3'>
									<span className='font-medium'>Native Name: </span>
									{country?.nativeName}
								</p>
								<p className='my-3'>
									<span className='font-medium'>Population: </span>
									{country?.population}
								</p>
								<p className='my-3'>
									<span className='font-medium'>Region: </span>
									{country?.region}
								</p>
								<p className='my-3'>
									<span className='font-medium'>Sub Region: </span>
									{country?.subregion}
								</p>
								<p className='my-3'>
									<span className='font-medium'>Capital: </span>
									{country?.capital ? country?.capital : 'None'}
								</p>
							</div>

							<div className='my-7'>
								<p className='my-3'>
									<span className='font-medium'>Top Level Domain: </span>
									{country?.topLevelDomain}
								</p>
								<p className='my-3'>
									<span className='font-medium'>Currencies: </span>
									{country?.currencies
										? country?.currencies?.map(currency => <span key={currency.code}>{currency.name}</span>)
										: 'None'}
								</p>
								<p className='my-3'>
									<span className='font-medium'>Languages: </span>
									{country?.languages?.map(language => (
										<span key={language.name}>{language.name} </span>
									))}
								</p>
							</div>
						</div>

						<div className='md:flex md:items-center'>
							<span className='font-medium '>Border Countries: </span>
							<div className='flex gap-3 m-4'>
								{country?.borders ? (
									country?.borders?.map(border => (
										<span key={border} className='px-4 py-2 bg-gray-700 rounded shadow-xl'>
											{border}{' '}
										</span>
									))
								) : (
									<span className='px-4 py-2 bg-gray-700 rounded shadow-xl'>None</span>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
	)
}

export default CountryDetail
