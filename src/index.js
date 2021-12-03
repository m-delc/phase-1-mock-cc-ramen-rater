// document.addEventListener('DOMContentLoaded', () = {
//     const ramenMenu = document.querySelector('div#ramen-menu')
//     const ramenImg = document.createElement('img')

//     fetch ('http://localhost:3000/ramens')
//     .then (res => res.json())
//     .then (ramen => {
//         ramenImg.src = ramen.image
//     })
// })



document.addEventListener('DOMContentLoaded', () => {
    const ramenMenu = document.querySelector('div#ramen-menu')
    const ramenDetail = document.querySelector('div#ramen-detail')
    const ramenDetailImg = document.querySelector('div#ramen-detail img')
    const ramenName = document.querySelector('h2.name')
    const ramenRestaurant = document.querySelector('div#ramen-detail h3')
    const rating = document.querySelector('span#rating-display')
    const comment = document.querySelector('p#comment-display')
    const newName = document.querySelector('input#new-name')
    const newRestaurant = document.querySelector('input#new-restaurant')
    const newImg = document.querySelector('input#new-image')
    const newRating = document.querySelector('input#new-rating')
    const newComment = document.querySelector('textarea#new-comment')
    const formImg = document.createElement('img')
    const form = document.querySelector("form#new-ramen")

    
    fetch ('http://localhost:3000/ramens/')
    .then (res => res.json())
    .then (ramens => {
        ramens.forEach(thing => {
            const img = document.createElement('img')
            img.src = thing.image
            ramenMenu.appendChild(img)
            img.addEventListener('click', e => {
                ramenDetailImg.src = thing.image
                rating.innerText = thing.rating
                comment.innerText = thing.comment
                ramenName.innerText = thing.name
                ramenRestaurant.innerText = thing.restaurant
            })
        })     
    })
    form.addEventListener('submit', e => {
        e.preventDefault()
        ramenName.innerText = newName.value
        ramenRestaurant.innerText = newRestaurant.value
        formImg.src = newImg.value
        rating.innerText = newRating.value
        comment.innerText = newComment.value
        ramenMenu.appendChild(formImg)
        form.reset()
    })
})