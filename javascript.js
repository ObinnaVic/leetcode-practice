function isPrime(num) {
    console.log(Math.sqrt(num))
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false
    return num > 1;
}

console.log(isPrime(19))

function canConstruct(ransomNote, magazine) {
    let magArr = magazine.toLowerCase().split("");
    let obj1 = {}, obj2 = {};
    for (let i = 0; i <= magArr.length; i++) obj1.hasOwnProperty(magArr[i]) ? obj1[magArr[i]]++ : obj1[magArr[i]] = 1

    for (let i = 0; i <= ransomNote.length; i++) obj2.hasOwnProperty(ransomNote[i]) ? obj2[ransomNote[i]]++ : obj2[ransomNote[i]] = 1;
    
    for (let i in obj2) {
        if (obj1[i] === undefined || obj2[i] > obj1[i]) {
            return false
        }
    }
    return true
}

console.log(canConstruct("aabcc", "acccadabra"));


