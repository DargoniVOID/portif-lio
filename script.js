function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('blood')

    const img = document.querySelector("#profile img")

    if(html.classList.contains('blood')){
        img.setAttribute('src', './assets/ddred.jpg')
    }
    else {
        img.setAttribute('src', './assets/profile-img.png')
    }

}