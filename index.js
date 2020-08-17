
document.getElementById('submitButton').addEventListener('click', function(){
    const search = document.getElementById('search').value;
    fetch('https://api.lyrics.ovh/suggest/' + search)
    .then(response => response.json())
    .then(data => songInfo(data))

    function songInfo(info){

        for (let i = 0; i <  10; i++) {
            const songTitle = info.data[i].title;
            let songTitleElement = document.createElement('strong');
                songTitleElement = songTitleElement.innerHTML = songTitle;

            const artistName = info.data[i].artist.name;
            let artistNameElement = document.createElement('span');
                artistNameElement = artistName.innerHTML = artistName;
            
            const songId = info.data[i].id;
            console.log(songId);
            
           

            const paragraph = document.createElement('p');
                //paragraph.innerHTML = '';
                paragraph.innerHTML += `<div class="search-result col-md-8 mx-auto">
                                            <div class="single-result row align-items-center my-3 p-3">
                                                <div class="col-md-9">
                                                    <h3 class="lyrics-name"> ${songTitleElement}</h3>
                                                    <p class="author lead">Album by <span>${artistNameElement}</span></p>
                                                </div>
                                                <div class="col-md-3 text-md-right text-center">
                                                    <button onclick = "showLyrics(${songId})" class="btn btn-success">Get Lyrics</button>
                                                </div>
                                            </div>
                                        </div>` 
            const parent = document.getElementById('song');
            parent.appendChild(paragraph);

             // get lyrics
           fetch('https://api.lyrics.ovh/v1/' + artistName + '/' + songTitle + '/')
           .then( res => res.json())
           .then( data => lyricsName(data))
           function lyricsName(info){
               const lyrics = info.lyrics;
               const parentElement = document.getElementById('lyrics');
               const lyricsText = document.createElement('p');
                  lyricsText.innerHTML += ` <div class="single-lyrics text-center">
                                                <h2 class="text-success mb-4">${songTitle}</h2>
                                                <pre class="lyric text-white"> ${lyrics} </pre>
                                            </div>`;
              parentElement.appendChild(lyricsText);
           }
        }
        console.log(info);
    }
})

