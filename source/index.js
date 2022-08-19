const getJoke = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    const randomJoke = await res.json()
    document.querySelector('p').innerHTML = randomJoke.value
    document.querySelector('small').style.display = 'none'
}
    