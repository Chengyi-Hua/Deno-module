export function randomString(stringset) {
    var random = Math.floor(Math.random()*stringset.length);
    let result = stringset[random];
    return result;
}


