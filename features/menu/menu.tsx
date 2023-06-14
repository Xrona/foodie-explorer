import { FC } from 'react'
import styles from './menu.module.scss'
import Link from 'next/link'

const Menu: FC = () => {
	return (
		<nav className={styles.menu}>
			<ul className={styles.ul}>
				<li>
					<Link className={styles.link} href='/'>Главная</Link>
				</li>
				<li>
					<Link className={styles.link} href='/'>Каталог</Link>
				</li>
				<li>
					<Link className={styles.link} href='/'>Карта</Link>
				</li>
				<li>
					<Link className={styles.link} href='/'>Отзывы</Link>
				</li>
				<li>
					<Link className={styles.link} href='/'>Профиль</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
