// list of common english words
const wordList = [
    "the",
    "be",
    "of",
    "and",
    "a",
    "to",
    "in",
    "he",
    "have",
    "it",
    "that",
    "for",
    "they",
    "I",
    "with",
    "as",
    "not",
    "on",
    "she",
    "at",
    "by",
    "this",
    "we",
    "you",
    "do",
    "but",
    "from",
    "or",
    "which",
    "one",
    "would",
    "all",
    "will",
    "there",
    "say",
    "who",
    "make",
    "when",
    "can",
    "more",
    "if",
    "no",
    "man",
    "out",
    "other",
    "so",
    "what",
    "time",
    "up",
    "go",
    "about",
    "than",
    "into",
    "could",
    "state",
    "only",
    "new",
    "year",
    "some",
    "take",
    "come",
    "these",
    "know",
    "see",
    "use",
    "get",
    "like",
    "then",
    "first",
    "any",
    "work",
    "now",
    "may",
    "such",
    "give",
    "over",
    "think",
    "most",
    "even",
    "find",
    "day",
    "also",
    "after",
    "way",
    "many",
    "must",
    "look",
    "before",
    "great",
    "back",
    "through",
    "long",
    "where",
    "much",
    "should",
    "well",
    "people",
    "down",
    "own",
    "just",
    "because",
    "good",
    "each",
    "those",
    "feel",
    "seem",
    "how",
    "high",
    "too",
    "place",
    "little",
    "world",
    "very",
    "still",
    "nation",
    "hand",
    "old",
    "life",
    "tell",
    "write",
    "become",
    "here",
    "show",
    "house",
    "both",
    "between",
    "need",
    "mean",
    "call",
    "develop",
    "under",
    "last",
    "right",
    "move",
    "thing",
    "general",
    "school",
    "never",
    "same",
    "another",
    "begin",
    "while",
    "number",
    "part",
    "turn",
    "real",
    "leave",
    "might",
    "want",
    "point",
    "form",
    "off",
    "child",
    "few",
    "small",
    "since",
    "against",
    "ask",
    "late",
    "home",
    "interest",
    "large",
    "person",
    "end",
    "open",
    "public",
    "follow",
    "during",
    "present",
    "without",
    "again",
    "hold",
    "govern",
    "around",
    "possible",
    "head",
    "consider",
    "word",
    "program",
    "problem",
    "however",
    "lead",
    "system",
    "set",
    "order",
    "eye",
    "plan",
    "run",
    "keep",
    "face",
    "fact",
    "group",
    "play",
    "stand",
    "increase",
    "early",
    "course",
    "change",
    "help",
    "line"
]

// access our elements
const wordHolder = document.getElementById('words')
const input = document.getElementById('input')

// focus on input when wordHolder is clicked
wordHolder.addEventListener('click', e => {
    input.focus()
})

// initialize the index of the word and character
let wordIndex = 0
let charIndex = 0


// generates array of random words
function randomWords(length) {
    const words = []
    for (let i = 0, n = length; i < n; i++) {
        // random index in wordList
        const ran = Math.floor(Math.random() * wordList.length)
        words.push(wordList[ran])
    }
    return words
}

const test = randomWords(15)

// for each word in test
for (let i = 0, n = test.length; i < n; i++) {
    // create a div and style
    const word = wordHolder.appendChild(document.createElement('div'))
    word.style.margin = '4px'
    word.style.cursor = 'default'
    // for each char in the word
    for (let j = 0, n = test[i].length; j < n; j++) {
        // add a span for each char
        word.appendChild(document.createElement('span')).textContent = test[i][j]
    }
}

// get elements of all of the words
let wordElements = wordHolder.querySelectorAll('div')

// when input is typed into
input.addEventListener('keydown', e => {
    // if the char is wrong
    if(e.key !== test[wordIndex][charIndex]) {
        // make it red
        wordElements[wordIndex].childNodes[charIndex].style.color = 'red'
    // if the char is right
    } else if (e.key === test[wordIndex][charIndex]) {
        // make it white
        wordElements[wordIndex].childNodes[charIndex].style.color = '#E0E0E0'
    }
    // go to next letter
    charIndex++
})