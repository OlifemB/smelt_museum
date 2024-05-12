export const makeNameAndInitials = (str: string) =>
	typeof str === 'string'
		? str
		.trim()
		.replace(/ {1,}/g, ' ')
		.split(' ')
		.map((item, index) =>
			index ? item.substring(0, 1).toUpperCase() + '.' : item,
		)
		.join(' ')
		: str

export const substringAndAdd = (str: string, len: number, add: string = '...') =>
	typeof str === 'string' && typeof len === 'number'
		? str.trim().substring(0, len - 1) + (str.length >= len ? add : '')
		: str

export const capitalize = (str: string) =>
	typeof str === 'string'
		? str.trim().charAt(0).toUpperCase() + str.slice(1)
		: str

export const randomString = (length: number) => {
	let result = ''
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	const charactersLength = characters.length
	let counter = 0
	while (counter < length) {
		result += characters.charAt(
			Math.floor(Math.random() * charactersLength),
		)
		counter += 1
	}
	return result
}

export const shortenString = (string: string) => {
	if (string.length > 0) {
		const stringArray = string.split(' ')
		const shortenedStringArray = stringArray.map(
			(stringWord, stringWordIndex) => {
				if (stringWord.length > 2 && stringWordIndex > 0) {
					return stringWord.slice(0, 1) + '.'
				} else {
					return stringWord
				}
			},
		)
		
		return shortenedStringArray.join(' ')
	}
}
