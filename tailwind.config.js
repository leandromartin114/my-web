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
				iconsw:
					"url('https://res.cloudinary.com/deooec1tp/image/upload/v1675351403/My%20web/Capa_6_Blanco_ajlqo8.png')",
				lean: "url('https://res.cloudinary.com/deooec1tp/image/upload/v1675358087/My%20web/Lean_transparente_iaffyk.png')",
			},
		},
	},
	variants: {
		fill: ['hover', 'focus'],
	},
	plugins: [],
}
