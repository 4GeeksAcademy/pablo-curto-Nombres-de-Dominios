let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
for (let i = 0; i < adj.length; i++) {
  for (let j = 0; j < pronoun.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      console.log(pronoun[j] + adj[i] + noun[k] + ".com");
    }
  }
}
