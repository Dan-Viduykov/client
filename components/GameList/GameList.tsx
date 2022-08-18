import { FC } from "react";
import styles from "./GameList.module.scss";
import picture from '../../../server/dist/static/image/a57e4e5d-72c2-4eb9-9be1-f594cbd46fb2.jpg';
import GameCard from "../GameCard";

const GameList: FC = () => {
    const games = [
        {
            _id: 'id1',
            name: "name1",
            studio: "studio1",
            publisher: "publisher1",
            price: 999,
            date: "date1",
            genre: "genre1",
            tags: ["tag 11","tag 21","tag 31","tag 41"],
            description: "description1 description1 description1 description1",
            rating: 96,
            picture: picture,
            video: picture,
            comments: []
        }, 
        {
            _id: 'id2',
            name: "name2",
            studio: "studio2",
            publisher: "publisher2",
            price: 999,
            date: "date2",
            genre: "genre2",
            tags: ["tag 12","tag 22","tag 32","tag 42"],
            description: "description2 description2 description2 description2",
            rating: 96,
            picture: picture,
            video: picture,
            comments: []
        },
        {
            _id: 'id3',
            name: "name1",
            studio: "studio1",
            publisher: "publisher1",
            price: 999,
            date: "date1",
            genre: "genre1",
            tags: ["tag 11","tag 21","tag 31","tag 41"],
            description: "description1 description1 description1 description1",
            rating: 96,
            picture: picture,
            video: picture,
            comments: []
        }, 
        {
            _id: 'id4',
            name: "name2",
            studio: "studio2",
            publisher: "publisher2",
            price: 999,
            date: "date2",
            genre: "genre2",
            tags: ["tag 12","tag 22","tag 32","tag 42"],
            description: "description2 description2 description2 description2",
            rating: 96,
            picture: picture,
            video: picture,
            comments: []
        },
        {
            _id: 'id5',
            name: "name1",
            studio: "studio1",
            publisher: "publisher1",
            price: 999,
            date: "date1",
            genre: "genre1",
            tags: ["tag 11","tag 21","tag 31","tag 41"],
            description: "description1 description1 description1 description1",
            rating: 96,
            picture: picture,
            video: picture,
            comments: []
        }, 
        {
            _id: 'id6',
            name: "name2",
            studio: "studio2",
            publisher: "publisher2",
            price: 999,
            date: "date2",
            genre: "genre2",
            tags: ["tag 12","tag 22","tag 32","tag 42"],
            description: "description2 description2 description2 description2",
            rating: 96,
            picture: picture,
            video: picture,
            comments: []
        }
    ]

    return (
        <ul className={styles.list}>
            {games.map(game => <GameCard className={styles.list__item} key={game._id} game={game} />)}
        </ul>
    )
}

export default GameList