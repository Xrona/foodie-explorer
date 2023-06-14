'use client'

import {FC, useState} from 'react'

import {Input} from '@/ui'

const Location: FC = () => {
	const [location, setLocation] = useState('')
	return (
		<div>
			<Input
				value={location}
				onInput={(event) => setLocation(event.target.value)}
			/>
			<div>map</div>
		</div>
	)
}

export default Location
