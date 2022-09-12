function adjustColors () {
  // 1.search for autocolor elements
  let elements = document.getElementsByClassName('autocolor')
  
  for (let i = 0; i<elements.length; i++) {
     // 2. extract colors from the image
    let vibrant = new Vibrant(elements[i].firstElementChild)
    let colors = vibrant.swatches()
    console.log(colors)

    let DarkMuted = colors.DarkMuted.rgb
    let LightVibrant = colors.LightVibrant ? colors.LightVibrant.rgb : colors.Vibrant.rgb
    let LightMuted = colors.LightMuted ? colorsLightMuted.rgb : colors.Muted.rgb

    // 3. set colors
    elements[i].style= `
        --color-1: rgb(${DarkMuted[0]}, ${DarkMuted[1]}, ${DarkMuted[3]});
        --color-2: rgb(${LightMuted[0]}, ${LightMuted[1]}, ${LightMuted[3]});
        --color-3: rgb(${LightVibrant[0]}, ${LightVibrant[1]}, ${LightVibrant[3]});
        `
    }  
}

window.onload = adjustColors