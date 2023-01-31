const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
const result = document.getElementById("result")
const sound = document.getElementById("sound")
const btn = document.getElementById("search-btn")
btn.addEventListener('click', () => {
     let inpWord = document.getElementById("inp-word").value
     fetch(`${url}${inpWord}`)
       .then(response=>response.json())
       .then(data=>{ 
         result.innerHTML = `<div class="word">
         <h3 id="h">${inpWord}</h3>
     </div>
     <div class="details">
         <p>${data[0].meanings[0].partOfSpeech}</p>
         <p>/${data[0].phonetic}/</p>
     </div>
     <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>`

     if (data[0].meanings[1]) {
        result.innerHTML = `<div class="word">
        <h3 id="h">${inpWord}</h3>
    </div>
    <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>/${data[0].phonetic}/</p>
    </div>
    <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
    <div class="details">
        <p>${data[0].meanings[1].partOfSpeech}</p>
    </div>
    <p class="word-meaning">${data[0].meanings[1].definitions[0].definition}</p>`
     }

    if (data[1]) {
        if (data[0].meanings[1]) {
        result.innerHTML = `<div class="word">
        <h3 id="h">${inpWord}</h3>
    </div>
    <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>/${data[0].phonetic}/</p>
    </div>
    <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
    <div class="details">
        <p>${data[0].meanings[1].partOfSpeech}</p>
    </div>
    <p class="word-meaning">${data[0].meanings[1].definitions[0].definition}</p>
    <div class="details">
        <p>${data[1].meanings[0].partOfSpeech}</p>
    </div>
    <p class="word-meaning">${data[1].meanings[0].definitions[0].definition}</p>`
    } else {
        result.innerHTML = `<div class="word">
        <h3 id="h">${inpWord}</h3>
    </div>
    <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>/${data[0].phonetic}/</p>
    </div>
    <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
    <div class="details">
        <p>${data[1].meanings[0].partOfSpeech}</p>
    </div>
    <p class="word-meaning">${data[1].meanings[0].definitions[0].definition}</p>`
    }
}
    })
})