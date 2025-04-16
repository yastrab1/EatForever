import type { Config } from "tailwindcss";
import pluginAnimate from "tailwindcss-animate"; // Correct import for the plugin

export default {
	darkMode: 'class', // Use "class" based on your setup
	content: [
		"./pages/**/*.{ts,tsx}", // Keep if using Pages Router
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}", // Essential for App Router
		"./src/**/*.{ts,tsx}", // Keep if using src directory
	],
	// prefix: "", // Generally not needed

	theme: {
		// Container settings can stay here
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			// Reference the CSS variables defined in globals.css @theme
			fontFamily: {
				sans: ['var(--font-sans)', 'sans-serif'],
				display: ['var(--font-display)', 'sans-serif'], // Reference var
			},

			// --- REMOVED theme.extend.colors ---
			// Color definitions are now solely in globals.css @theme

			// Reference the CSS variables defined in globals.css @theme
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'glass-gradient': 'var(--glass-gradient)',
				'green-gradient': 'var(--green-gradient)',
				'longevity-pattern': 'var(--longevity-pattern)',
			},

			// Reference the CSS variable defined in globals.css @theme
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},

			// Keyframes and Animations remain in the config
			keyframes: {
				'accordion-down': { /* ... */ },
				'accordion-up': { /* ... */ },
				'fade-in': { /* ... */ },
				'fade-up': { /* ... */ },
				'slide-in-right': { /* ... */ },
				'subtle-pulse': { /* ... */ },
				'float': { /* ... */ }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-in-out forwards',
				'fade-up': 'fade-up 0.8s ease-out forwards',
				'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
				'subtle-pulse': 'subtle-pulse 3s infinite ease-in-out',
				'float': 'float 6s infinite ease-in-out'
			}
		}
	},
	plugins: [
		pluginAnimate // Use the imported plugin variable
	],
} satisfies Config;