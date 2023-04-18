const messages = [
  "What is the meaning of life? Well, it's not debugging code, but it's close.",
  "Existential crisis: Is my code just a bunch of 1's and 0's or is it something more?",
  "To be or not to be a programmer, that is the question.",
  "Life is like a programming language. You start with the basics and then build upon it, but sometimes you just need to debug.",
  "The more I code, the less I understand about the meaning of existence.",
  "Is it possible to refactor your life? Asking for a friend who needs a change.",
  "Life is just one big git commit, constantly making changes and hoping for the best.",
  "I code, therefore I am... tired and in need of caffeine.",
  "What's the point of code if it doesn't make life easier? Oh wait, it's to create more code.",
  "Sometimes I feel like I'm just a program in the matrix, executing code endlessly.",
  "Existential crisis: Am I coding because I love it, or because I don't know how to do anything else?",
  "Life is short, code is long. So I better write efficient code to get the most out of life.",
  "The more I code, the more I realize how much I don't know. Is ignorance really bliss?",
  "Why do we code? To make the world a better place? To show off our skills? Or simply because we can?",
  "Existential crisis: If code is my life's work, what happens when it becomes obsolete?"
]

const existentialMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`)
}

export default existentialMsg