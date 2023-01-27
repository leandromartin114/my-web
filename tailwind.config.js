/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./ui/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			animation: {
				text: 'text 5s ease infinite',
			},
			keyframes: {
				text: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center',
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center',
					},
				},
			},
			fontFamily: {
				kanit: ['Kanit', 'sans-serif'],
				nunito: ['Nunito', 'sans-serif'],
				righteous: ['Righteous', 'cursive'],
				montserrat: ['Montserrat Alternates', 'sans-serif'],
			},
			backgroundImage: {
				icons:
					"url('https://res.cloudinary.com/deooec1tp/image/upload/v1674602588/My%20web/Capa_5_60_transparencia_rtiyoj.png')",
				lean: "url('https://res.cloudinary.com/deooec1tp/image/upload/v1674844701/My%20web/lean_meyo1h.png')",
			},
			colors: {
				tiber: {
					DEFAULT: '#06283D',
					50: '#1696E4',
					100: '#1589D2',
					200: '#1171AC',
					300: '#0D5987',
					400: '#0A4062',
					500: '#06283D',
					600: '#01070A',
					700: '#000000',
					800: '#000000',
					900: '#000000',
				},
				'dodger-blue': {
					DEFAULT: '#47B5FF',
					50: '#FFFFFF',
					100: '#EAF7FF',
					200: '#C1E6FF',
					300: '#99D6FF',
					400: '#70C5FF',
					500: '#47B5FF',
					600: '#0F9EFF',
					700: '#0080D6',
					800: '#005E9E',
					900: '#003D66',
				},
				'pattens-blue': {
					DEFAULT: '#DFF6FF',
					50: '#FFFFFF',
					100: '#FFFFFF',
					200: '#FFFFFF',
					300: '#FFFFFF',
					400: '#FFFFFF',
					500: '#DFF6FF',
					600: '#A7E6FF',
					700: '#6FD6FF',
					800: '#37C7FF',
					900: '#00B6FE',
				},
			},
		},
	},
	variants: {
		fill: ['hover', 'focus'],
	},
	plugins: [],
}
