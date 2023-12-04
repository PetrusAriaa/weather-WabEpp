import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize:{
      'sm' : '10px',
      'base': '14px',
      'md' : '21px',
      'lg': '28px'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'leaves': 'url(https://wallpapers.com/images/hd/plant-background-mh4y9mexexlv960o.jpg)'
      },
      screens: {
        'xs' : '430px'
      },
      width: {
        'xs' : '430px'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
