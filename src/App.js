import { useState } from "react";
import "./App.css";

export default function App() {
  const movies = [
    {
      poster:
        "https://m.media-amazon.com/images/M/MV5BZTc4YWY5MzAtOTc4Zi00NDVmLThlMGItYjliOGNkYmM3NDBmXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg",
      name: "THUPPAKKI",
      summary:
        "Thuppakki is an action thriller movie revolving  around a youngster from a Mumbai-based Tamil family and his decisions he takes after his life undergoes a sudden turn.Kajal Aggarwal has a meaty role in Thuppakki. Her role is not limited to be an arm-candy of Vijay in Thuppakki. Well she will be seen in the role of a boxer in the film. She plays the role named Nisha an iron-willed girl. However, the actress will also be seen in glamorous avatars.And the story goes like this  Jagadish, an army men and a secret agent of DIA returns to Mumbai on leave. His parents wants him to tie the knot with a girl chosen by them. He meets Nisha ,a boxer.Jagadish spoils the plan of a serial bomb blasts with the help of his 11 army friends. They kill 12 sleeper cells in 12 different places at the same time. The kingpin played by Vidyut Jamwal is shocked and decides to hunt down the people, who crashed his plansand then how they meet and fight.",

      rating: "8.1/10 , 32k votes"
    },
    {
      poster:
        "https://assetscdn1.paytm.com/images/cinema/6-gallery-ef137e80-4228-11ec-96cd-1bf51c099a46.jpg",
      name: "PUSHPA",
      summary:
        "Pushpa Raj (Allu Arjun) lives as a laborer in the illegal trade of red sandalwood in the remnant forests of Tirupati. The lack of a household name to say the least, however, increases Coolie's desire to see his life as a coolie and conquer the world. Kondareddy (Ajay Ghosh), who is waiting in his business, joins hands with Mangalam Srinu (Sunil) and Dakshayini (Anasuya). However, at one point, Pushpa challenges Mangalam Sreenu, who has wronged him. Under such circumstances, Bhanwar Singh Shekhawat (Fazil Fahad), who came to the district as police superintendent. Bhanwar Singh conspires to prevent Pushpa's marriage to Srivalli (Rashmika Mandanna) from his hometown. But how did Pushpa reach his goal of reaching the top in his life? How did Pushpa plan righteousness with Mangalam Sreenu who confronted him? How he persuaded Srivalli to marry him. What is the role of MP Bhumireddy Siddappa Naidu (Rao Ramesh) in this story? The story of the movie Pushpa is the answer to the question of what made Sukumar so interesting in the second part of Pushpa.",
      rating: "7.9/10 , 40k Votes"
    },
    {
      poster:
        "https://images-na.ssl-images-amazon.com/images/I/71oDl6bDvRS._RI_.jpg",
      name: "MANKATHA",
      summary:
        "Mankatha a complete action thriller that will narrate the match fixing sagas in international cricket matches. The film will star Ajith Kumar in the lead roles with the Co-Stars Trisha,  Arjun Sarja, Sneha, Lakshmi Rai, Ganesh Venkatraman, Premji Amaren.  ???Mankatha??? is all about Mystery & Suspense,Drama,Action & Adventure all in one.This movie likely to be made as biggest ever multi-starer movie of tamil Cinema. Mankatha story revolves around a Mafia gambling gang during the Indian Premier League (IPL) cricket season. Ajith Plays a negative role named Vinayak Mahadevan and Arjun plays the role of C.I.D Officer.",
      rating: "7.6/10 , 15k Votes"
    },
    {
      poster: "https://wallpapercave.com/wp/wp2525818.jpg",
      name: "HANGOVER",
      summary:
        "The Hangover is a comedy movie centered around four friends???the groom Doug Billings (Justin Bartha), his soon-to-be brother-in-law Alan Garner (Zach Galifianakis), his two best friends Phil Wenneck (Bradley Cooper) and Stu Price (Ed Helms)???head to Las Vegas for Doug's bachelor party. After a night of alcohol, gambling, and partying, Alan, Stu, and Phil awake the next morning not remembering the events of the prior night. Unable to find Doug, the groomsmen encounter a variety of problems as they retrace their steps in order to find him.",
      rating: "7.6/10 , 756k Votes"
    },
    {
      poster: "https://wallpaperaccess.com/full/13453.jpg",
      name: "AVENGERS",
      summary:
        "When Thor's evil brother, Loki Tom Hiddleston, gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury Samuel L. Jackson, director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's dream team are Iron Man Robert Downey Jr.Captain America Chris Evans, the Hulk Mark Ruffalo, Thor Chris Hemsworth, the Black Widow Scarlett Johansson and Hawkeye Jeremy Renner.",
      rating: "8/10 , 1335k Votes"
    }
  ];
  return (
    <div className="App">
      <Counter />
      <Dcounter />
      {movies.map((list) => (
        <Welcome
          poster={list.poster}
          name={list.name}
          summary={list.summary}
          rating={list.rating}
        />
      ))}
    </div>
  );
}

function Counter() {
  const [like, setLike] = useState(0);
  return (
    <div className="counter">
      <button onClick={() => setLike(like + 1)}> ???? {like}</button>
    </div>
  );
}

function Dcounter() {
  const [dislike, setdisLike] = useState(0);
  return (
    <div className="dcounter">
      <button onClick={() => setdisLike(dislike + 1)}>???? {dislike}</button>
    </div>
  );
}
function Welcome({ poster, name, summary, rating }) {
  return (
    <div className="welcome">
      <img className="poster-pic" src={poster} alt="poster pictures" />
      <h1> Movie Name: {name} </h1>
      <p>
        {" "}
        <b>Summary:</b> {summary}{" "}
      </p>
      <h3> Rating : {rating} </h3>
    </div>
  );
}
