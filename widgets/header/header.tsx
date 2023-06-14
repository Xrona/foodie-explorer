import { FC } from 'react'
import { Location, Menu } from '@/features'

const Header: FC = () => {
	return <header>
		<Menu/>
		<Location/>
	</header>
}

export default Header
