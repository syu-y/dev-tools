/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,svelte}"],
  theme: {
    extend: {},
    
    fontFamily: {
      caveat:[
        "Caveat",
      ],
      mplus1p:[
        "MPLUS1p",
      ]
    }
  },
  plugins: [],
}
