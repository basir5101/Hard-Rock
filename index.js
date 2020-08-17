
document.getElementById('submitButton').addEventListener('click', function(){
    const search = document.getElementById('search').value;
    fetch('https://api.lyrics.ovh/suggest/' + search)
    .then(response => response.json())
    .then(data => songInfo(data))

    function songInfo(info){

        for (let i = 0; i <=  10; i++) {
            const songTitle = info.data[i].title;
            let songTitleElement = document.createElement('strong');
                songTitleElement = songTitleElement.innerHTML = songTitle;

            const artistName = info.data[i].artist.name;
            let artistNameElement = document.createElement('span');
                artistNameElement = artistName.innerHTML = artistName;

            const paragraph = document.createElement('p');
                //paragraph.innerHTML = '';
                paragraph.innerHTML += `<div class="search-result col-md-8 mx-auto">
                                            <div class="single-result row align-items-center my-3 p-3">
                                                <div class="col-md-9">
                                                    <h3 class="lyrics-name"> ${songTitleElement}</h3>
                                                    <p class="author lead">Album by <span>${artistNameElement}</span></p>
                                                </div>
                                                <div class="col-md-3 text-md-right text-center">
                                                    <button class="btn btn-success">Get Lyrics</button>
                                                </div>
                                            </div>
                                        </div>` 
            const parent = document.getElementById('song');
            parent.appendChild(paragraph);
        }
        console.log(info);
    }
})