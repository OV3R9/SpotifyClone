class song{
    constructor(title, artist, color, thumbnail, sound, duration, isfav, artprof, songprof)
    {
        this.title = title;
        this.artist = artist;
        this.color = color;
        this.thumbnail = thumbnail;
        this.sound = sound;
        this.duration = duration;
        this.isfav = isfav;
        this.artprof = artprof;
        this.songprof = songprof;
    }
}

let music = document.getElementById('music');
let durat = document.getElementById('full');
let container = document.getElementById('container');
let body = document.getElementById('body');
let playPauseButton = document.getElementById('playPause');
let progressed = document.getElementById('progressed');
let progress_bar = document.getElementById('progress_bar');
let heart = document.getElementById('heart');
let shuffle = document.getElementById('shuffle');
let repeat = document.getElementById('repeat');
let timerInterval;
let currentTimeDisplay = document.getElementById('uptime');
let loading = document.getElementById('loading2');
let author1 = document.getElementById('author');
let title1 = document.getElementById('title');

let currentSongIndex = 0;
let szufla = false;
let powtorz = false;
let songs = [];


const Song1 = new song('Mały Książe', 'Avi', 'brown', 'thumbnails/MalyKsiaze.png', 'sounds/MalyKsiaze.mp3', '3:09', false, 
'https://open.spotify.com/artist/5NmRijhUHZnaADekOLcOyl?si=75b094eae0384f80', 'https://open.spotify.com/track/5ngOu7hZUAGnk0FTDPzBob?si=5f60318761574528');
songs.push(Song1);
const Song2 = new song('New Tank', 'Playboi Carti', 'red', 'thumbnails/NewTank.png', 'sounds/NewTank.mp3', '1:29', false,
'https://open.spotify.com/artist/699OTQXzgjhIYAHMy9RyPD?si=cec6513ea8774231','https://open.spotify.com/track/4txKMpsSfZRV6durPuHVq0?si=085d3d440bfb4755');
songs.push(Song2);
const Song3 = new song('Fiji', 'Taco Hemingway', 'darkcyan', 'thumbnails/Fiji.png', 'sounds/Fiji.mp3', '4:02', false,
'https://open.spotify.com/artist/7CJgLPEqiIRuneZSolpawQ?si=7b3d702df6774fe7', 'https://open.spotify.com/track/0jQLsM75kFEYBGSBEqvhpZ?si=b9c0705aff754e35');
songs.push(Song3);
const Song4 = new song('Thank God', 'Travis Scott', 'darkgray', 'thumbnails/ThankGod.png', 'sounds/ThankGod.mp3', '3:06', false,
'https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY?si=c05e22d69dfe4643', 'https://open.spotify.com/track/1PH2MDbcBAU094DlgTIND1?si=ca7c17d372f44550');
songs.push(Song4);
const Song5 = new song('2055', 'Sleepy Hollow', 'purple', 'thumbnails/2055.png', 'sounds/2055.mp3', '2:02', false,
'https://open.spotify.com/artist/6EPlBSH2RSiettczlz7ihV?si=299ba4d41e8d4deb', 'https://open.spotify.com/track/4XvcHTUfIlWfyJTRG0aqlo?si=69b6cce8e35a4aba');
songs.push(Song5);
const Song6 = new song('SAD', 'XXXTENTACION', 'beige', 'thumbnails/SAD.png', 'sounds/SAD.mp3', '2:46', false,
'https://open.spotify.com/artist/15UsOTVnJzReFVN1VCnxy4?si=b23b5723e39440d1', 'https://open.spotify.com/track/3ee8Jmje8o58CHK66QrVC2?si=3d2176dfa85c471f');
songs.push(Song6);
const Song7 = new song('No Sad No Bad', 'KILLY', 'darkblue', 'thumbnails/SurrenderYourSoul.png', 'sounds/NoSadNoBad.mp3', '2:36', false,
'https://open.spotify.com/artist/0gCGZZ1Ibo5QsOnll977PD?si=2aa04dcf502f4a75', 'https://open.spotify.com/track/5nHofSNYy1zxXRwjLhZG0U?si=99a2b71c9e5c4df4');
songs.push(Song7);
const Song8 = new song('Monster', '21 Savage', 'darkgray', 'thumbnails/Monster.png', 'sounds/Monster.mp3', '3:53', false,
'https://open.spotify.com/artist/1URnnhqYAYcrqrcwql10ft?si=4e3cfcbc84bd416a', 'https://open.spotify.com/track/2FUNBaa5DwItJtYEBgAblU?si=04a723fd8c054a76');
songs.push(Song8);
const Song9 = new song('Money Trees', 'Kendrick Lamar', 'beige', 'thumbnails/MoneyTrees.png', 'sounds/MoneyTrees.mp3','6:26', false, 
'https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg?si=479b58d6b1cd4244', 'https://open.spotify.com/track/74tLlkN3rgVzRqQJgPfink?si=e25a1a8b0b534111');
songs.push(Song9);



function thumbnail()
{
    body.style.background = (`linear-gradient(0deg, black 0%, black 15%, ${Song1.color} 100%)`);
    container.style.backgroundImage = `url(${Song1.thumbnail})`;
    durat.textContent = Song1.duration;
    title1.textContent = Song1.title;
    author1.textContent = Song1.artist;
}

function redirect()
{
    loading.style.display = 'block';
    animation();
    setTimeout(function()
    {
        window.location.href='../LOGIN_PAGE/index2.html';
    },5000)
}

function animation()
{
    loading.classList.add('slide-bot');
}

function PlayPause()
{
    if(music.paused)
    {
        music.play();
        playPauseButton.style.backgroundImage = 'url(buttons/pause2.png)';
    }
    else
    {
        music.pause();
        playPauseButton.style.backgroundImage = 'url(buttons/play.png)';
    }
}

title1.addEventListener('click', function()
{
    window.open(songs[currentSongIndex].songprof);
});

author1.addEventListener('click', function()
{
    window.open(songs[currentSongIndex].artprof);
});

progress_bar.addEventListener('input', function(e) {
    let seekTime = (e.target.value / 100) * music.duration;
    music.currentTime = seekTime;
    
    let minutes = Math.floor(seekTime / 60);
    let seconds = Math.floor(seekTime % 60);
    seconds = seconds < 10 ? '0' + seconds : seconds;
    currentTimeDisplay.textContent = `${minutes}:${seconds}`;
});

music.ontimeupdate = function(e) {
    let progress = (music.currentTime / music.duration) * 100;
    progressed.style.width = progress + '%';
    
    let minutes = Math.floor(music.currentTime / 60);
    let seconds = Math.floor(music.currentTime % 60);
    seconds = seconds < 10 ? '0' + seconds : seconds;
    currentTimeDisplay.textContent = `${minutes}:${seconds}`;
};

progress_bar.onclick = function(e) {
    stopTimer();
    let seekTime = (e.offsetX / progress_bar.offsetWidth) * music.duration;
    music.currentTime = seekTime;
}

function Change()
{
    songs[currentSongIndex].isfav =! songs[currentSongIndex].isfav;
    if(songs[currentSongIndex].isfav)
    {
        heart.style.backgroundImage = 'url(buttons/clickedheart.png)';
    }
    else
    {
        heart.style.backgroundImage = 'url(buttons/heart.png)';
    }
    populateFavoritesList();
}

heart.addEventListener("click", function() {
    this.style.transform = "scale(1.2)";
    setTimeout(() => {
        this.style.transform = "scale(1)";
    }, 300);
});


function shuffleSwitch(){
    szufla =!szufla;
    if(szufla)
    {
        currentSongIndex = Math.floor(Math.random() * songs.length);
        UpdateQueue();
        shuffle.style.backgroundImage = 'url(buttons/shuffle2.png)';
        shuffle.style.scale = '1.03';
    }
    else
    {
        currentSongIndex = currentSongIndex;
        UpdateQueue();
        shuffle.style.backgroundImage = 'url(buttons/shuffle.png)';
        shuffle.style.scale = '0.8';
    }
}

let y = 0;

function repeatSwitch()
{
    powtorz =! powtorz;
    if(y % 2 == 0)
    {
        repeat.style.backgroundImage = 'url(buttons/repeat2.png)';
    }
    else
    {
        repeat.style.backgroundImage = 'url(buttons/repeat.png)';
    }
    y++;
}

function cofnij() {
    music.pause();
    stopTimer();
    stopTimer();

    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    music.src = songs[currentSongIndex].sound;
    body.style.background = (`linear-gradient(0deg, black 0%, black 15%, ${songs[currentSongIndex].color} 100%)`);
    container.style.backgroundImage = `url(${songs[currentSongIndex].thumbnail})`;
    durat.textContent = songs[currentSongIndex].duration;
    document.getElementById('title').innerText = songs[currentSongIndex].title;
    document.getElementById('author').innerText= songs[currentSongIndex].artist;
    document.getElementById('playPause').style.backgroundImage = 'url(buttons/play.png)';

    if(songs[currentSongIndex].isfav)
    {
        heart.style.backgroundImage = 'url(buttons/clickedheart.png)';
    }
    else
    {
        heart.style.backgroundImage = 'url(buttons/heart.png)';
    }
    UpdateQueue();

}

function skip() {
    music.pause();
    skipToNextSong();
}

function skipToNextSong() {
    music.pause();
    stopTimer();
    stopTimer();
    if (powtorz) 
    {
        currentSongIndex = currentSongIndex;
    } 
    else if(szufla)
    {
        

    }
    else 
    {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }

    music.src = songs[currentSongIndex].sound;
    body.style.background = (`linear-gradient(0deg, black 0%, black 15%, ${songs[currentSongIndex].color} 100%)`);
    container.style.backgroundImage = `url(${songs[currentSongIndex].thumbnail})`;
    durat.textContent = songs[currentSongIndex].duration;
    document.getElementById('title').innerText = songs[currentSongIndex].title;
    document.getElementById('author').innerText= songs[currentSongIndex].artist;
    document.getElementById('playPause').style.backgroundImage = 'url(buttons/pause2.png)';

    if(songs[currentSongIndex].isfav)
    {
        heart.style.backgroundImage = 'url(buttons/clickedheart.png)';
    }
    else
    {
        heart.style.backgroundImage = 'url(buttons/heart.png)';
    }

    music.play();
    UpdateQueue();
    if(szufla)
    {
        currentSongIndex = Math.floor(Math.random() * songs.length);
        UpdateQueue();
    }
}

function startTimer() {
    let startTime = Date.now();

    timerInterval = setInterval(function() {
        let elapsedTime = Date.now() - startTime;
        let minutes = Math.floor(elapsedTime / 60000);
        let seconds = Math.floor((elapsedTime % 60000) / 1000);

        seconds = seconds < 10 ? '0' + seconds : seconds;

        currentTimeDisplay.textContent = `${minutes}:${seconds}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

music.onended = function() {
    stopTimer();
    skipToNextSong();
};

function populateFavoritesList() {
    let favoritesList = document.getElementById('favoritesList');
    favoritesList.innerHTML = ''; 

    let favorites = songs.filter(song => song.isfav);

    if (favorites.length > 0) {
        let favoritesHTML = '<h3>Favorites</h3><ul>';
        favorites.forEach(song => {
            favoritesHTML += `<li>${song.title} <img src="${song.thumbnail}" class="small"> - ${song.artist}</li>`;
        });
        favoritesHTML += '</ul>';
        favoritesList.innerHTML = favoritesHTML;
    } else {
        favoritesList.innerHTML = '<h3>No Favorites</h3>';
    }
}

populateFavoritesList();

function UpdateQueue() {
    let queue = document.getElementById('queue');
    queue.innerHTML = ''; 

    let code;

    code = '<h3>NEXT TRACK</h3><ul>';
    for(let i = 0; i < songs.length; i++)
    {
        if(szufla)
        {
            if(songs.length == currentSongIndex + 1)
            {
                shuffleSwitch();
                return;
            }
            queue.style.color = 'white';
            if(songs[currentSongIndex].color == 'beige')
            {
                queue.style.color = 'black';
            }
            code += `<li><img src="${songs[currentSongIndex].thumbnail}" class="bigga">
            <br><br>${songs[currentSongIndex].artist} - ${songs[currentSongIndex].title}</li>`;
            queue.style.backgroundColor = songs[currentSongIndex].color;
            code += '</ul>';
            queue.innerHTML = code;
            return;
        }
        if(i == currentSongIndex + 1)
        {
            queue.style.color = 'white';
            if(songs[currentSongIndex+1].color == 'beige')
            {
                queue.style.color = 'black';
            }
            code += `<li><img src="${songs[currentSongIndex+1].thumbnail}" class="bigga">
            <br><br>${songs[currentSongIndex+1].artist} - ${songs[currentSongIndex+1].title}</li>`;
            queue.style.backgroundColor = songs[currentSongIndex+1].color;
        }
        else
        {
            code += '';
        }
    }
    if(currentSongIndex == songs.length - 1)
    {
        queue.style.color = 'white';
        if(songs[0].color == 'beige')
        {
            queue.style.color = 'black';
        }
        code += `<li><img src="${songs[0].thumbnail}" class="bigga">
        <br><br>${songs[0].artist} - ${songs[0].title}</li>`;
        queue.style.backgroundColor = songs[0].color;    
    }
    code += '</ul>';
    queue.innerHTML = code;
}

UpdateQueue();