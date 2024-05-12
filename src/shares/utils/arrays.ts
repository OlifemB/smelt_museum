export const calculate = (arr, key) =>
	arr.length ? arr.reduce((acc, curr) => (key ? acc + curr[key] : acc + curr), 0) : arr

export const random = (arr, min = 0, max = arr.length) =>
	arr.length ? arr[Math.floor(Math.random() * (max - min + 1) + min)] : arr
