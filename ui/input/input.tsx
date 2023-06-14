import {ChangeEvent, FC} from 'react'

type TypeProps = {
	type?: string
	value: string
	onInput: (event: ChangeEvent<HTMLInputElement>) => void
	label?: string
	className?: string
}

const Input: FC<TypeProps> = ({type = 'text', value, onInput, label = '', className = ''}) => {
	return (
		<fieldset className={className}>
			<label>
				{label && <span>{label}</span>}
				<input
					type={type}
					value={value}
					onInput={onInput}
				/>
			</label>
		</fieldset>
	)
}

export default Input
