window.onload = function () {

    let domainNameGenerator = [];

    let pronoun = ['the', 'our', 'this', 'those'];
    let adj = ['great', 'big', 'magical', 'amazing'];
    let noun = ['jogger', 'racoon', 'cat', 'dolphin'];
    let dom = ['net', 'com', '.cl'];

    for (let a = 0; a < pronoun.length; a++) {
        for (let s = 0; s < adj.length; s++) {
            for (let d = 0; d < noun.length; d++) {
                for (let f = 0; d < dom.length; f++) {
                    domainNameGenerator.push(pronoun[a] + adj[s] + noun[d] + dom[f]);
                }
            }
        }
    }


    console.log(domainNameGenerator);
};
