import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Main } from './main';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }
  getArticles(): Observable<Main[]>{
    let subject = new Subject<Main[]> ()
    setTimeout(() => {subject.next(ARTICLES); subject.complete(); }, 200)
    return subject
  }
  getArticle( heading:string ):Main{
    return ARTICLES.find(article => article.header === heading)
  }
  saveArticle(article){
    article.heading = "for you"
    article.comment = []
    ARTICLES.push(article) //this will add the new article to our article array
  }
}

const ARTICLES: Main[] = [
  {
    tags: 'FILM ARTICLE, RR ORIGINAL',
    imageUrl: "../../assets/001.png",
    header: "HOW TO DOWNLOAD FROM TFPDL.COM (ALSO KNOWN AS TFP.IS)",
    subheading:"",
    content: `Release date: August 27, 2021 (Netflix)

            Starring: Sola Sobowale, Toni Tones, Nse Ikpe Etim, December Okanlanwo, Efa Iwara, Charly Boy, Reminiscence, Ill Bliss, Titi Kuti, Ajai Taiwo-Lycett, et al.

            The King of Boys has finally returned! It’s been 3 years since Sola Sobowale and Kemi Adetiba teamed up to rule the Nigeria box office with the remarkable rendition of Eniola Salami’s story, the eponymous King of Boys. Now, they’ve returned with the highly anticipated sequel and the hope of doing same to Netflix and all of its existing records in this part of the world.

            Like many others, I stayed up all night on the day of its release to catch up on all 7 episodes of the limited series. And while I consider this a win for Nollywood (thank God it is, because I prayed so hard for this), I have some more specific thoughts on the movie, where I highlight its highs and lows.

            To make it faster to read and understand, I’ve compiled these thoughts into bullet points. Read on, then share with me in the comments what your full thoughts on The King of Boys: The Return of the King and my review are.

            What worked
            The cast
            The story idea. You may not have liked how the story played out, but I think it’ll be unfair to say the idea behind it wasn’t a good one.
            The depiction of internal conflict as seen through Eniola. It was beautiful watching her unravel in private and struggling to maintain composure in public even with her failing reputation. This has to be one of the best takeaways from the series, it’s what makes Eniola such an interesting character to watch.
            A better insight into how politics in Nigeria works. It’s a deadly, bloody, cold game. Yes, it is a game for the players involved.
            Eniola Salami’s dresses. It’s hard to sit through the series without being wowed everytime Eniola shows up in a new dropdead gorgeous outfit. Beautiful stuff. This magic was also extended to other characters, with Mrs. Randle, Makanaki, Odogwu Malay, and Odudubarirba easily coming to mind as stand outs.
            The use of sound effects in some scenes and the cinematography.
            Solid acting performances. Even in the first 3 episodes that had more fluff than was necessary, the acting performances served as glue to hold things together and keep the party going.
            The provervs and parables, one of Eniola Salami’s biggest idiosyncrasies, were a delight to listen to. I found myself always looking forward to the next one.
            RMD’s character’s makeup.
            Kemi Adetiba’s directing style and vision for the series.
            What didn’t work?
            The pacing, especially with the first three episodes. There were just so much fluffs, and scenes that dragged out longer than they should’ve.
            The retconing of how characters who died in the KoB universe can come back to life, diabolically. The explanation was lacking in quality, especially as it concerns Makanaki’s brutal killing at the hands of Odogwu Malay at the end of the first movie.
            The creative decision to leave some very important pieces of information for viewers to fill in themselves. The details of how much Eniola Salami knew about the Ade Tiger and Boxer betrayal fiasco is one, and the decision to not show how Eniola and Makanaki called a truce is another. The latter is an even bigger one knowing how much Makanaki hated Eniola and what he’d sacrificed to get his revenge earlier in the series. I know the latter served as a deus ex machina, but it made absolutely no sense to do it that way when a flashback after the fact could’ve helped most viewers make sense of what transpired between them.
            The lack of character development for supporting characters like Makanaki. Save for Eniola (and depending on how you look at it, Ade Tiger), no other character got deepened enough to warrant their screentime. The best shows and movies are those that invest in theor supporting characters almost as much as is done with their lead. KoB2 falls short in this department. Makanaki’s reconciliation with Eniola could’ve made a multi-episode storyline of rich character development, but that opportunity was squandered on the altar of shock value. I understand that Kemi Adetiba understands her chief market and sought to play it safe with the average moviegoer around here, which, if we’re being honest, is the larger population of Nigerian filmlovers, but this still needed to be said. It could’ve been done better. What makes Eniola Salami so memorable is her journey as a character, which viewers have been opportune to go on with her, it’d have been great if such opportunity was also extended to some of the other characters.
            Eniola’s campaign manager. The cartoonish portrayal of a character with such an important responsibility was a no, no for me. It was really painful to watch.
            Odudubariba’s lack of origin story. For someone who rose from nowhere to sit as the defacto leader of the table in Eniola’s absence, we have no idea who Odudubariba is or where he’s come from.
            The wannabe Samurai warrior who didn’t utter a single word throughout the movie. NGL, that character was lame AF!
            The incessant zooming into Mrs. Randle’s body parts, trying too hard to make her look sexy. Good thing Nse Ikpe Etim is already a sexy goddess, else those scenes would’ve been too cringe-worthy to move on from.

            Official poster
            Standout characters
            Eniola freak’n Salami (Sola Sobowale). Always, Team Oba! 🙌🏽👑
            Aare (Akin Lewis)
            Chief Mrs. Randle (Ajai Taiwo-Lycett)
            Mrs. Randle (Nse Ikpe Etim)
            Disappointing characters
            These characters held much promise, but were greatly underutilized:

            Pastor Ifeanyi (RMD)
            Banjo (Efa Iwara’s journalist)
            Odudubariba (Charly Boy)
            Makanaki (I know this one would be controversial, but refer to the point in What Didn’t Work above for clarification)
            Disappointing Acting Performances
            Ade Tiger’s actor. Don’t come for my head yet. The character turned out to be interesting, but imagine a more seasoned actor played him. Just imagine it first.
            The basic actors playing nameless Elders at The Table. They were all too basic.
            Questions that still need answers:
            Who was Eniola’s househelp really working for, and what was her fate?
            How did Eniola install the president all the way from her base in the United States? A little insight into the reach of her network would’ve been good, especially as such a reach magically disappeared up
            The very last post credit scene. What’s the need of such a scene if it leaves viewers in more confusion than with a desire to ask relevant questions? It was pointless, in my opinion.
            Random Thoughts
            At first, I was confused if Eniola’s relationship with Ade Tiger was a sexual one, or if it was the mother and son kind. Glad this was cleared up when it was.
            It’s remarkable how there wasn’t a single sex scene in this thriller, even though it was going straight to Netflix. One would’ve thought the opportunity would’ve been seized to get creative. Mrs. Randle and Dapo Banjo should’ve done it, that would’ve added more tension and spice to their story arc.
            Nigerians would never behave that way around a dead snake.
            We know the Randle women have beef, but I wish we got to know more of what the beef was about. Hopefully, it’s addressed in a future season. And yes, I believe Chief Mrs. Randle should be one of the villains, if not the main one, of the next installment in the KoB franchise. She’s too energetic a character to not return and share scenes with Eniola Salami.
            Iyaloja’s return after Eniola became Governor is a reminder of just how shameless ambitious and shameless human beings can be to get what they want.
            Did you know that Toni Tones had to learn the Yoruba Language to be able to deliver the lines required of her role as the younger Eniola Salami? This is impressive as she could easily pass for a native speaker.
            Ade Tiger’s look at many times in the show reminded me heavily of The Twins in The Matrix Reloaded. I’m sure that was deliberate, though.
            King of Boys: The Return of the King is Nigerian entertainment at one of its highest levels. Truth is, if you don’t like it, because of the Hollywood standard you’ve grown accustomed to, that’s fine, but I implore you to give it a chance, and to let the others who like (love) it to thrive.
            Which other pop-culture reference did you catch in King of Boys: The Return of the King? Let me know in the comments.

            Directed by: Kemi Adetiba

            Rinzy’s Rating: 3.5/5`,
    date: "DECEMBER 7, 2020",
    comments: [
      {
        name: 'Gachi',
        email: 'www.daddygachi@yahoo.com',
        commentdetail: 'Fantastic write up as always'
      }
    ]

  },
  {
    tags: 'FILM ARTICLE, MOVIE ARTICLE, MOVIE REVIEW',
    imageUrl: "../../assets/naijaonnetflix_20210826_185802_7.jpg",
    header:"IS ‘THE KING OF BOYS: THE RETURN OF THE KING WORTH THE WAIT AND HYPE? YES! BUT THERE’S MORE… – A REVIEW",
    subheading: "",
    content: "",
    date: "AUGUST 30, 2021",
    comments: [
      {
        name: 'Gachi',
        email: 'www.daddygachi@yahoo.com',
        commentdetail: 'Fantastic write up as always'
      }
    ]

  },
  {
    tags: 'FILM ARTICLE, TV SERIES ARTICLES',
    imageUrl: "../../assets/20210828_184321.jpg",
    header: "NETFLIX RENEWS MANIFEST FOR A FOURTH AND FINAL SEASON",
    subheading: "",
    content: "",
    date: "AUGUST 28, 2021",
    comments: []

  },
  {
    tags: "FILM ARTICLE, RR ORIGINAL",
    imageUrl: "../../assets/nneka.jpg",
    header: "PLAY NETWORK STUDIOS’ NNEKA THE PRETTY SERPENT REBOOT STRIKES BUT CAN BARELY LAND A PUNCH",
    subheading: "",
    content: "",
    date: "AUGUST 28, 2021",
    comments: []

  },
  {
    tags: "FILM ARTICLE, RR ORIGINAL",
    imageUrl: '../../assets/rr-blog4.png',
    header: "SCARLETT JOHANSSON VS. DISNEY VS. EMMA STONE",
    subheading: "",
    content: "",
    date: "AUGUST 25, 2021",
    comments: []

  }
]
