import React, { useState } from 'react';
import Countries from './Countries';

type PropTypes = {
	searchTerm: string,
}

function Filter({ searchTerm }: PropTypes) {
    const [selectedRegion, setSelectedRegion] = useState('');


    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRegion(event.target.value);
    };

	

    return (
        <div className="py-4 mx-7 ">
            <select className="px-4 py-2 text-white bg-gray-700 rounded" value={selectedRegion} onChange={handleSelectChange}>
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
			<Countries selectedRegion={selectedRegion} searchTerm={searchTerm} />
        </div>
    )
}

export default Filter;