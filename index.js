export function randomString(stringset) {
    var random = Math.floor(Math.random()*stringset.length);
    result = stringset[random];
    return result;
}


