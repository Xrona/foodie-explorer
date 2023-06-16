import CatalogIcon from '@/public/icons/catalog.svg'
import HomeIcon from '@/public/icons/home.svg'
import MapIcon from '@/public/icons/map.svg'
import ProfileIcon from '@/public/icons/profile.svg'
import ReviewIcon from '@/public/icons/review.svg'

export const menuList = [
	{
		title: 'Главная',
		icon: HomeIcon,
		href: '/',
	},
	{
		title: 'Каталог',
		icon: CatalogIcon,
		href: '/catalog',
	},
	{
		title: 'Карта',
		icon: MapIcon,
		href: '/map',
	},
	{
		title: 'Отзывы',
		icon: ReviewIcon,
		href: '/reviews',
	},
	{
		title: 'Профиль',
		icon: ProfileIcon,
		href: '/profile',
	},
]
