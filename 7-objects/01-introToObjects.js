/*
    OBJECTS
    -similar to arrays, objects are used to store multiple sets of data, with the data being stored in a key-value paired format
    -objects are denoted by {}
    -values are assigned to keys in an object using : instead of =
    -key/value pairs are separated by a comma

*/

let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};
//where arrays use square bracket notation to access properties, ojbects use what is called dot (.) notation

console.log('All data:',netflix);
console.log('Just season info', netflix.season1.seasonInfo);
console.log('Specific episode name:',netflix.season1.seasonInfo.episodeInfo[0].episodeName)

//Challenge: pick an episode to console.log
//using dot notation, walk through the netflix object and print off both an episode number and an episode name
console.log(`Episode Name:${netflix.season1.seasonInfo.episodeInfo[2].episodeName} - Episode Number: ${netflix.season1.seasonInfo.episodeInfo[2].episode}`)

/*
        JSON OBJECTS
        
        -JSON stands for JavaScript Object Notation
        -the JSON syntax is derived from regular object syntax, but the JSON format is text only
        -JSON exists as a string. JSON data is what we receive when we fetch data from a server. Since JSON data is text only, it needs to be converted to a native JavaScript object if we want to be able to access and use the data

*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

console.log(Object.keys(spaceJam.toonSquad))
console.log(Object.keys(spaceJam.toonSquad.duck))
console.log(Object.keys(spaceJam.toonSquad).toString())//since object.keys() is a method, we can chain other methods onto it
console.log(Object.values(spaceJam.nbaPlayers).toString());