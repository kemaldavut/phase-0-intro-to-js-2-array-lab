// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];
console.log("cats list = ",cats)

function destructivelyAppendCat(name) {
cats.push(name)
}cle

function destructivelyPrependCat(name) {
cats.unshift(name)
}

function destructivelyRemoveLastCat() {
cats.pop()
}

function destructivelyRemoveFirstCat() {
cats.shift()
}

function appendCat(name) {
   return [...cats, name]
}

function prependCat(name) {
    return [ name, ...cats]
 }

 function removeFirstCat() {
return cats.slice(1, 3)
 }

 function removeLastCat() {
return cats.slice(0, -1)
}