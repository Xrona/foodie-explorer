'use client'

import clsx from 'clsx'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {CSSProperties, FC} from 'react'

import styles from './menu.module.scss'
import {menuList} from './menuList'

const Menu: FC = () => {
	const pathName = usePathname()
	const menuItemsCount = {'--count-items': menuList.length} as CSSProperties

	return (
		<nav className={styles.menu}>
			<ul
				className={styles.ul}
				style={menuItemsCount}
			>
				{menuList.map((menuItem) => {
					return (
						<li
							key={menuItem.title}
							className={clsx(styles.li, {[styles.active]: pathName === menuItem.href})}
						>
							<Link
								className={styles.link}
								href={menuItem.href}
							>
								<menuItem.icon />
								{menuItem.title}
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default Menu
