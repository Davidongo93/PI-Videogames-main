import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
const CardsContainer = ()=>{

    const cardExample = [
        {
            "id": 309525,
            "name": "SONIC",
            "platform": [
                "PC"
            ],
            "image": "https://media.rawg.io/media/screenshots/f84/f84eff0df81802ee885018eb4395e352.jpg",
            "released": "2019-04-13",
            "rating": 0,
            "genre": [],
            "created": false
        },
        {
            "id": 4331,
            "name": "Sonic Generations",
            "platform": [
                "PC",
                "Xbox One",
                "PlayStation 4",
                "Nintendo 3DS",
                "Xbox 360",
                "PlayStation 3",
                "PlayStation",
                "Xbox",
                "Nintendo"
            ],
            "image": "https://media.rawg.io/media/games/9a1/9a18c226cf379272c698f26d2b79b3da.jpg",
            "released": "2011-11-01",
            "rating": 3.89,
            "genre": [
                19,
                83,
                11,
                4
            ],
            "created": false
        },
        {
            "id": 27943,
            "name": "Sonic Forces",
            "platform": [
                "PC",
                "Xbox One",
                "PlayStation 4",
                "Nintendo Switch",
                "iOS",
                "Android",
                "PlayStation",
                "Xbox",
                "Nintendo"
            ],
            "image": "https://media.rawg.io/media/games/0e9/0e9d75008321d640e4a14a8b5e322620.jpg",
            "released": "2017-11-07",
            "rating": 2.78,
            "genre": [
                83,
                3,
                4
            ],
            "created": false
        },
        {
            "id": 343595,
            "name": "Sonic Adventure",
            "platform": [
                "PC",
                "Xbox One",
                "Xbox 360",
                "PlayStation 3",
                "Dreamcast",
                "PlayStation",
                "Xbox",
                "SEGA"
            ],
            "image": "https://media.rawg.io/media/games/566/566b771293b3e8aee0c071a02e81d925.jpg",
            "released": "1998-12-23",
            "rating": 3.98,
            "genre": [
                3,
                4,
                5,
                19,
                83
            ],
            "created": false
        },
        {
            "id": 54320,
            "name": "Sonic CD (1993)",
            "platform": [
                "PC",
                "SEGA CD",
                "SEGA"
            ],
            "image": "https://media.rawg.io/media/screenshots/f80/f8088fd37ab6e56ab935885444a0cd4b.jpg",
            "released": "1993-09-23",
            "rating": 3.82,
            "genre": [],
            "created": false
        },
        {
            "id": 28413,
            "name": "Sonic's UGC",
            "platform": [
                "Xbox 360",
                "Xbox"
            ],
            "image": "https://media.rawg.io/media/screenshots/159/159102c68cee88ad4f986541b59c1e49.jpg",
            "released": "2009-02-10",
            "rating": 3.94,
            "genre": [
                2,
                4,
                5
            ],
            "created": false
        },
        {
            "id": 57180,
            "name": "Sonic Spinball (1993)",
            "platform": [
                "PC",
                "iOS",
                "Wii",
                "GameCube",
                "Genesis",
                "SEGA Master System",
                "Game Gear",
                "Nintendo",
                "SEGA"
            ],
            "image": "https://media.rawg.io/media/screenshots/0e3/0e3fd5a5436b82095044e5a5f8a20d51.jpg",
            "released": "1993-11-15",
            "rating": 3.45,
            "genre": [
                4
            ],
            "created": false
        },
        {
            "id": 608563,
            "name": "Sonic Colors: Ultimate",
            "platform": [
                "PC",
                "Xbox One",
                "PlayStation 4",
                "Xbox Series S/X",
                "Nintendo Switch",
                "PlayStation",
                "Xbox",
                "Nintendo"
            ],
            "image": "https://media.rawg.io/media/screenshots/e03/e03546b5b5b7b7de9fc16714c84f8f41.jpg",
            "released": "2021-09-07",
            "rating": 2.79,
            "genre": [
                40,
                83,
                4
            ],
            "created": false
        },
        {
            "id": 14988,
            "name": "Sonic Lost World",
            "platform": [
                "PC",
                "Nintendo 3DS",
                "Wii U",
                "Nintendo"
            ],
            "image": "https://media.rawg.io/media/screenshots/51d/51dec86a3a4fff0d0faa122db48a98fd.jpg",
            "released": "2013-10-18",
            "rating": 2.92,
            "genre": [
                11,
                83,
                3,
                4
            ],
            "created": false
        },
        {
            "id": 283965,
            "name": "Sonic The Hedgehog (2006)",
            "platform": [
                "Xbox 360",
                "PlayStation 3",
                "PlayStation",
                "Xbox"
            ],
            "image": "https://media.rawg.io/media/games/b91/b913b71d625c823c1b7f62d27565d5c0.jpg",
            "released": "2006-11-14",
            "rating": 2.51,
            "genre": [
                83
            ],
            "created": false
        },
        {
            "id": 2552,
            "name": "Sonic the Hedgehog 2",
            "platform": [
                "PC",
                "Xbox One",
                "iOS",
                "Android",
                "Nintendo 3DS",
                "Xbox 360",
                "PlayStation 3",
                "Wii",
                "GameCube",
                "Genesis",
                "Game Gear",
                "PlayStation",
                "Xbox",
                "Nintendo",
                "SEGA"
            ],
            "image": "https://media.rawg.io/media/games/2c3/2c3363eb1ae202b9e4e7520d3f14ab2e.jpg",
            "released": "1992-11-21",
            "rating": 4.28,
            "genre": [
                83,
                11,
                4
            ],
            "created": false
        },
        {
            "id": 343597,
            "name": "Sonic Adventure 2",
            "platform": [
                "PC",
                "Xbox One",
                "Xbox 360",
                "PlayStation 3",
                "GameCube",
                "Dreamcast",
                "PlayStation",
                "Xbox",
                "Nintendo",
                "SEGA"
            ],
            "image": "https://media.rawg.io/media/games/4f5/4f57124f7c0285150626cd1411c45b6e.jpg",
            "released": "2001-06-18",
            "rating": 3.96,
            "genre": [
                83,
                3,
                4
            ],
            "created": false
        },
        {
            "id": 57177,
            "name": "Sonic 3D Blast (1996)",
            "platform": [
                "PC",
                "Wii",
                "GameCube",
                "Genesis",
                "SEGA Saturn",
                "Nintendo",
                "SEGA"
            ],
            "image": "https://media.rawg.io/media/screenshots/681/68145c58e234705ed4559a05c043f41a.jpg",
            "released": "1996-11-01",
            "rating": 3.26,
            "genre": [
                11
            ],
            "created": false
        },
        {
            "id": 53551,
            "name": "Sonic the Hedgehog (1991)",
            "platform": [
                "PC",
                "iOS",
                "Android",
                "Nintendo 3DS",
                "Xbox 360",
                "PlayStation 3",
                "Wii",
                "Game Boy Advance",
                "Genesis",
                "Game Gear",
                "PlayStation",
                "Xbox",
                "Nintendo",
                "SEGA"
            ],
            "image": "https://media.rawg.io/media/games/373/373a9a1f664de6e4c31f08644729e2db.jpg",
            "released": "1991-06-23",
            "rating": 4.1,
            "genre": [
                11,
                3,
                4
            ],
            "created": false
        },
        {
            "id": 57179,
            "name": "Sonic the Hedgehog 3 (1994)",
            "platform": [
                "PC",
                "Xbox 360",
                "Wii",
                "GameCube",
                "Genesis",
                "Xbox",
                "Nintendo",
                "SEGA"
            ],
            "image": "https://media.rawg.io/media/games/bb0/bb0032aa8b422968ebadb01353cdd608.jpg",
            "released": "1994-02-02",
            "rating": 4.37,
            "genre": [
                11
            ],
            "created": false
        }
    ];


    return(
        <div className={style.Container}>
            {cardExample.map(cardExample=>{
                return <Card
                id={cardExample.id}
                name={cardExample.name}
                image={cardExample.image}
                released={cardExample.release}
                rating={cardExample.rating}
                />
            })}
        </div>
    )
};
export default CardsContainer;