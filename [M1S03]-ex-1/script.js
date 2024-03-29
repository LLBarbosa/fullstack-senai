const list = [
  {
    "name": "Scenic Stream",
    "username": "Eladio66",
    "RG": 2589637,
    "rating": 0.9,
    "favorites": 2,
    "visits": 10,
    "difficulty": 3,
    "terrain": 4,
    "size": "big",
    "created": "September 15, 2021",
    "updated": "November 25, 2022",
    "coords": "30.0795 111.6412"
  },

  {
    "name": "Indigo Shady Stream",
    "username": "Marian_Volkman10",
    "RG": 1478526,
    "rating": 2.8,
    "favorites": 42,
    "visits": 504,
    "difficulty": 3,
    "terrain": 4,
    "size": "mini",
    "created": "December 21, 2022",
    "updated": "February 7, 2023",
    "coords": "40.4485 -76.4953"
  },

  {
    "name": "Historic Trail",
    "username": "Tabitha_Bosco",
    "RG": 3259874,
    "rating": 3.5,
    "favorites": 21,
    "visits": 84,
    "difficulty": 3,
    "terrain": 3,
    "size": "mini",
    "created": "August 26, 2022",
    "updated": "November 2, 2022",
    "coords": "44.4780 10.7721"
  },

  {
    "name": "Old Footpath",
    "username": "Ford50",
    "RG": 5489831,
    "rating": 3.8,
    "favorites": 23,
    "visits": 322,
    "difficulty": 1,
    "terrain": 1,
    "size": "small",
    "created": "December 10, 2021",
    "updated": "July 27, 2022",
    "coords": "15.3748 -25.0323"
  },

  {
    "name": "Viovar Historic Route",
    "username": "Soledad_Olson",
    "RG": 9842616,
    "rating": 1.2,
    "favorites": 6,
    "visits": 6,
    "difficulty": 4,
    "terrain": 1,
    "size": "small",
    "created": "May 4, 2022",
    "updated": "June 13, 2022",
    "coords": "81.8303 33.4350"
  },

  {
    "name": "Orange Shady Footpath",
    "username": "Jarvis_Hackett",
    "RG": 8641237,
    "rating": 3.1,
    "favorites": 31,
    "visits": 93,
    "difficulty": 4,
    "terrain": 2,
    "size": "large",
    "created": "June 20, 2022",
    "updated": "November 19, 2022",
    "coords": "-68.5221 -97.7478"
  },

  {
    "name": "Orange Shady Footpath",
    "username": "Jarvis_Hackett",
    "RG": 8641237,
    "rating": 3.1,
    "favorites": 31,
    "visits": 93,
    "difficulty": 4,
    "terrain": 2,
    "size": "large",
    "created": "June 20, 2022",
    "updated": "November 19, 2022",
    "coords": "-68.5221 -97.7478"
  }
];

const usuarioEncontrado = list.find(usuario => usuario.username === 'Jarvis_Hackett');

if (usuarioEncontrado){
  console.log(usuarioEncontrado);
} else {
  console.log("Usuario não encontrado!!");
}












