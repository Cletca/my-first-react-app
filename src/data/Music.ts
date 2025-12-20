export interface MusicList {
    id: number;
    name: string;
    image: string;
    time: number;
    src: string;
    author: string;
    views: string;
}

export const MusicList: MusicList[] = [
    {
        id: 1,
        name: "The Weeknd - Blinding Lights",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/The_Weeknd_-_Blinding_Lights.png/250px-The_Weeknd_-_Blinding_Lights.png",
        time: 200,
        src: "public/musicData/the-weeknd-blinding-lights.mp3",
        author: "The Weeknd",
        views: "7.2B",
    },
    {
        id: 2,
        name: "Imagine Dragons - Believer",
        image: "https://upload.wikimedia.org/wikipedia/en/5/5c/Imagine-Dragons-Believer-art.jpg",
        time: 204,
        src: "public/musicData/imagine-dragons-believer-(meloua.com).mp3",
        author: "Imagine Dragons",
        views: "2.5B",
    },
    {
        id: 3,
        name: "Ed Sheeran - Shape of You",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png",
        time: 233,
        src: "public/musicData/84c7b6c6c7a09006789b7410a57a0003.mp3",
        author: "Ed Sheeran",
        views: "6B",
    },
    {
        id: 4,
        name: "Billie Eilish - bad guy",
        image: "https://i1.sndcdn.com/artworks-000585893159-qra1pk-t500x500.jpg",
        time: 194,
        src: "public/musicData/billie-eilish-bad-guy.mp3",
        author: "Billie Eilish",
        views: "1.7B",
    },
    {
        id: 5,
        name: "Post Malone - Circles",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Post_Malone_-_Circles.png",
        time: 215,
        src: "public/musicData/Post_Malone_-_Circles_(mp3.pm).mp3",
        author: "Post Malone",
        views: "850M",
    },
    {
        id: 6,
        name: "Dua Lipa - Levitating",
        image: "https://upload.wikimedia.org/wikipedia/en/3/3d/Dua_Lipa_Levitating_%28DaBaby_Remix%29.png",
        time: 203,
        src: "public/musicData/Dua_Lipa_Dababy_-_Levitating_Featuring_(mp3.pm).mp3",
        author: "Dua Lipa",
        views: "700M",
    },
    {
        id: 7,
        name: "Coldplay - Viva La Vida",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b2/Coldplay_-_Viva_la_Vida_or_Death_and_All_His_Friends.png",
        time: 242,
        src: "public/musicData/Колдплей - Viva La Vida.mp3",
        author: "Coldplay",
        views: "900M",
    },
    {
        id: 8,
        name: "Adele - Rolling in the Deep",
        image: "https://upload.wikimedia.org/wikipedia/en/7/74/Adele_-_Rolling_in_the_Deep.png",
        time: 228,
        src: "public/musicData/Adele_-_Rolling_In_The_Deep_Original_(SkySound.cc).mp3",
        author: "Adele",
        views: "2.2B",
    },
    {
        id: 9,
        name: "Eminem - Lose Yourself",
        image: "https://upload.wikimedia.org/wikipedia/en/d/d6/Lose_Yourself.jpg",
        time: 326,
        src: "public/musicData/Eminem - Lose Yourself_(play.muzfan.net).mp3",
        author: "Eminem",
        views: "1.9B",
    },
    {
        id: 10,
        name: "Linkin Park - Numb",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Linkin_Park_-_Numb_CD_cover.jpg",
        time: 185,
        src: "public/musicData/1728465242_linkin-park-numb.mp3",
        author: "Linkin Park",
        views: "1.9B",
    },
];