const pewter = {
    id: 'pewter',
    title: 'Showdown in Pewter City',
    description: `
        You arrive to Pewter City, home of the rugged Rock-Type Gym Leader Brock! To prepare for the battle ahead, you decide to
        pick up a new Pokemon! What type of Pokemon do you add to your team?
    `,
    map: {
        top: '18%',
        left: '18%'
    },
    
    choices: [
        {
            id: 'grass',
            description: 'Look for a Grass-Type on Route 2',
            result: `
                    You have the makings of a great trainer! Grass-Type Pokemon are super effective against Rock-Types!
                    You let your newly acquired Grass-Type handle the Gym and come out on top, earning you the coveted Boulder Badge!
                    `,
            hp: 0,
            experience: 10
        },
        {
            id: 'bug',
            description: 'Look for a Bug-Type on Route 3.',
            result: `
                    Someone should have studied more! Bug-Type pokemon are weak aagainst Rock-Types! However, you create a genius
                    strategy that allows you to win despite the disadvantage and earn the Boulder Badge! 
                    `,
            hp: -200,
            experience: 40
        },
        {
            id: 'psychic',
            description: 'Go look for a Psychic-Type in town.',
            result: `
                    You find an old man with a young Psychic-Type Pokemon. He asks you to take it so it can go on another journey,
                    and you accept. Psychic is neutral against Rock, so the playing field is even. You beat Brock and earn the
                    Boulder Badge!
                    `,
            hp: -10,
            experience: 20
        },
    ]
};

const cerulean = {
    id: 'cerulean',
    title: 'The Water Flowers of Cerulean City',
    description: `
            You feel the refreshing breeze of a fountain as you make your way into Cerulean City, ready to head straight to the gym and take on the leader Misty!
            But before you do, you get the urge to catch a Pokemon. What will you try to find?
    `,
    map: {
        top: '16%',
        left: '52%'
    },

    choices: [
        {
            id: 'electric',
            description: 'Look for a Electric-Type.',
            result: `
                    An excellent choice! Electric-Type Pokemon are strong against Water-Types! Misty's Pokemon are no match for you, and you win with ease! The Cascade Badge is yours!
                    `,
            hp: 0,
            experience: 10
        },
        {
            id: 'fire',
            description: 'Look for a Fire-Type.',
            result: `
                    Don't you know? However, your remaining Pokemon are strong enough to pull through and earn you the Cascade Badge!
                    `,
            hp: -20,
            experience: 40
        },
        {
            id: 'flying',
            description: 'Look for a Flying-Type.',
            result: `
                    Misty's Pokemon are untouchable in the water, but yours are untouchable in the air. The battle is intense, but you eventually seize the moment to deliver a decisive blow.
                    You win the Cascade Badge!
                    `,
            hp: -10,
            experience: 20
        },
    ]
};

const vermillion = {
    id: 'vermillion',
    title: 'Vermillion City: Electric Shock Showdown',
    description: `
        Lt. Serge has given Vermillion City an electric atmosphere, so you're buzzing with an excitement to battle! Before you do, you decide
        getting a new Pokemon. What will you be trying to catch?
    `,
    map: {
        top: '54%',
        left: '50%'
    },

    choices: [
        {
            id: 'ground',
            description: 'Look for a Ground-Type.',
            result: `
                    Genius! Ground-Type Pokemon are grounded, making them immune to Electric attacks! You win with ease and add the Thunder Badge
                    to your collection!
                    `,
            hp: 0,
            experience: 10
        },
        {
            id: 'flying',
            description: 'Look for a Flying-Type.',
            result: `
                    Flying-Type Pokemon can have their wings temporarily clipped by electricity. Your Flying-Type is brought to earth and beaten, 
                    but the rest of your Pokemon are able to squeeze by and win you the Thunder Badge!
                    `,
            hp: -20,
            experience: 40
        },
        {
            id: 'fighting',
            description: 'Look for a Fighting-Type.',
            result: `
                    Fighting-Type Pokemon are tenacious, but they do not have an advantage against Electric-Types. It's a hard-fought
                    battle, but a Dynamic Punch to Serge's Raichu wins you the battle and the Thunder Badge.
                    `,
            hp: -10,
            experience: 20
        },
    ]
};

const celadon = {
    id: 'celadon',
    title: 'Celadon City Scent-sation',
    description: `
        The flowers and beauty of Celadon City ease your weary soul. After resting your mind and body, you're ready to catch a new Pokemon
        and battle Erika.
    `,

    map: {
        top: '35%',
        left: '39%'
    },

    choices: [
        {
            id: 'ice',
            description: 'Look for an Ice-Type.',
            result: `
                    Plants don't do well in extreme temperatures. But because you didn't want to burn down the greenery, you went with
                    an Ice-Type Pokemon. You beat Erika and claim the Rainbow Badge with no issues!
                    `,
            hp: 0,
            experience: 10
        },
        {
            id: 'water',
            description: 'Look for a Water-Type.',
            result: `
                    Plants use water to grow, so a Water-Type is one of the worst possible match-ups. Your Pokemon is KOed, but your remaining team
                    is able to pull together a win and get you the Rainbow Badge.
                    `,
            hp: -20,
            experience: 40
        },
        {
            id: 'psychic',
            description: 'Look for a Psychic-Type.',
            result: `
                    A Psychic-Type Pokemon does not have any disadvantages or advantages over Grass-Types. The battle is deadeven, but you prevail in the end and gain the Rainbow Badge.
                    `,
            hp: -10,
            experience: 20
        },
    ]
};

const fuchsia = {
    id: 'fuchsia',
    title: 'Fuchsia City Ninja Showdown',
    description: `
            The Safari Zone is the first thing you notice when you arrive to Fuchsia City. It's home to many rare and unique Pokemon, and you have a hunch that the key to
            beating Koga is inside. What type of Pokemon are you trying to catch?
            `,

    map: {
        top: '75%',
        left: '41%'
    },
    choices: [
        {
            id: 'psychic',
            description: 'Look for a Psychic-Type.',
            result: `
                    Psychic-Type Pokemon are able to control the circulation of poison in bodies and dispel it, making them perfect to battle
                    against Poison-Types. Koga's Poison-Types fall to your Pokemon's prowess, earning you the Marsh Badge.
                    `,
            hp: 0,
            experience: 10
        },
        {
            id: 'grass',
            description: 'Look for a Grass-Type.',
            result: `
                    Grass-Type Pokemon are covered in living organisms, making them more suspecitble to Poison-Type attacks. Your Grass-Type is defeated,
                    but you're able bring it back and earn the Marsh Badge!
                    `,
            hp: -20,
            experience: 40
        },
        {
            id: 'water',
            description: 'Look for a Water-Type.',
            result: `
                    Water-Type Pokemon cannot dillute the effects of Poison, but they do not possess a disadvantage against them. You come up with an alternate strategy to win,
                    and earn the Marsh Badge from Koga.
                    `,
            hp: -10,
            experience: 20
        },
    ]
};

const saffron = {
    id: 'saffron',
    title: 'The Psychic Showdown: Saffron City',
    description: `
        Stepping up to the Saffron City Gym is unnerving. You've heard rumors about its unusual leader Sabrina, and are now unsure if you're ready to battle. You leave to catch
        another Pokemon. What will you be looking for?
    `,
    map: {
        top: '34%',
        left: '52%'
    },

    choices: [
        {
            id: 'ghost',
            description: 'Look for a Ghost-Type.',
            result: `
                    Psychic-Type Pokemon are powerful, but you discovered that they are particularly weak to things that unnerve the average person.
                    Ghosts are something that the mind cannot comprehend, making Psychic-Type moves ineffective. You win the battle and get the Soul Badge
                    from Sabrina.
                    `,
            hp: 0,
            experience: 10
        },
        {
            id: 'poison',
            description: 'Look for a Poison-Type.',
            result: `
                    You think that by inflicting status effects you will be able to beat Sabrina and her Psychic-Type Pokemon. Your plan initially works, but Psychic-Type Pokemon
                    are strong against dispelling poison. Your plan falls through, but you improvise and get a Soul Badge.
                    `,
            hp: -20,
            experience: 40
        },
        {
            id: 'fire',
            description: 'Look for a Fire-Type',
            result: `
                    A Fire-Type Pokemon has no advantages against Psychic-Types, but your new ally's firey personality motivates you. You battle intensely against Sabrina, and win the
                    Soul Badge in a blaze of glory.
                    `,
            hp: -10,
            experience: 20
        },
    ]
};


const cinnabar = {
    id: 'cinnabar',
    title: 'Volcanic Panic on Cinnabar Island',
    description: `
        You're sweating profusely by the time you reach Cinnabar Island. There are a few neighboring islands, home to plenty of unique Pokemon you wouldn't normally see on the main islands of
        Kanto. What will you try and catch?
    `,

    map: {
        top: '91%',
        left: '13%'
    },
    choices: [
        {
            id: 'rock',
            description: 'Look for a Rock-Type.',
            result: `
                    The sturdy exterior of Rock-Types make them resistant to and strong against fire. You snuff out the flames of
                    Blaine and earn the Volcano Badge!
                    `,
            hp: 0,
            experience: 10
        },
        {
            id: 'ice',
            description: 'Look for an Ice-Type.',
            result: `
                    Though Water has the ability to put out Fire, Ice is melted by Fire. Your Ice-Type falls victim to to Blaine's fire,
                    but the rest of your team is able to win and earn you the Volcano Badge!
                    `,
            hp: -20,
            experience: 40
        },
        {
            id: 'electric',
            description: 'Look for an Electric-Type.',
            result: `
                    Electricity is neutral against Fire, so you have to rely on your wits to win the battle. You do, and defeat Blaine to earn the
                    Volcano Badge!
                    `,
            hp: -10,
            experience: 20
        },
    ]
};

const viridian = {
    id: 'viridian',
    title: 'Battle of the Badge: Viridian City',
    description: `
        The Viridian City Gym Leader, Giovanni, is the leader of the criminal organization Team Rocket. You know you'll need another Pokemon to add to your party,
        so you set out on another search. What will you be looking for?
    `,
    map: {
        top: '44%',
        left: '16%'
    },

    choices: [
        {
            id: 'water',
            description: 'Look for a Water-Type.',
            result: `
                    Water-Type attacks can erode Ground-Type Pokemon, so you made the best choice! You beat Giovanni and earn the
                    Earth Badge!
                    `,
            hp: 0,
            experience: 10
        },
        {
            id: 'electric',
            description: 'Look for an Electric-Type.',
            result: `
                    Electric-Type Pokemon are ineffective against Ground-Types, so yours is beaten soundly. The rest of your Pokemon are able to secure the win
                    and earn your Earth Badge.
                    `,
            hp: -20,
            experience: 30
        },
        {
            id: 'flying',
            description: 'Look for a Flying-Type.',
            result: `
                    Flying-Type Pokemon are not super-effective against Ground-Types, but they are immune to Ground-Type attacks. The Flying-Type pecks away at 
                    Giovanni's team, allowing you to win the coveted Earth Badge.
                    `,
            hp: -10,
            experience: 20
        },
    ]
};

const adventureData = [
    pewter,
    cerulean,
    vermillion,
    saffron,
    celadon,
    fuchsia,
    cinnabar,
    viridian
];

export default adventureData;





/*
Showdown in Pewter City
The Water Flowers of Cerulean City
Vermillion City: Electric Shock Showdown
The Psychic Showdown: Saffron City
Celadon City Scent-sation
Fuchsia City Ninja Showdown
Volcanic Panic on Cinnabar Island
Battle of the Badge: Viridian City

*/