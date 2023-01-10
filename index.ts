
type TrackInfo = { track: string, numofplays: number };  // type alias in ts

interface Spotify_Artist {   // interface in ts
    name: string;
    channelName: string;
    popularTracks: TrackInfo[];  // Array of type TrackInfo
    monthlyLinstners:number;
}

const the_Ambietlist: Spotify_Artist = {   //object in ts
    name: 'Ambietlist',
    channelName: 'The Ambietlist',
    popularTracks: [
        { track: "A little piece of me", numofplays: 890000 },
        { track: "Beautiful", numofplays: 198000 },
        {track: "Still time",numofplays:153000}
    ],
    monthlyLinstners:56789
}

