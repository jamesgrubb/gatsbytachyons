import Typography from "typography"


const typography = new Typography({
    googleFonts: [
        {
          name: 'Montserrat',
          styles: [
            '700',
          ],
        },
        {
          name: 'Merriweather',
          styles: [
            '400',
            '400i',
            '700',
            '700i',
          ],
        },
      ],
      headerFontFamily: ["Montserrat"],
      headerGray: 10,
})



export const { scale, rhythm, options } = typography


export default typography