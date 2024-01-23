import Filter from './Filter'
import { useState } from 'react'

function Input() {
	const [searchTerm, setSearchTerm] = useState('')

  const fixedSearchTerm = searchTerm.toLowerCase().trim()

	return (
		<>
			<div className='flex items-center justify-center py-6 m-auto my-2 lg:w-10/12 xl:w-8/12 '>
				{/* add search bar icon bg-right bg-no-repeat bg-cover bg-search-bar */}
				<input
					onChange={e => {
						setSearchTerm(e.target.value)
					}}
					type='text'
					placeholder='Search for a country...'
					className='w-full py-2 pl-8 text-white placeholder-white bg-gray-700 rounded mx-7 '
				/>
			</div>
			<Filter searchTerm={fixedSearchTerm} />
		</>
	)
}

export default Input
