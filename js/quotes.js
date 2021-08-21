const quotes = [
  {
    quotes: "When you go through hardships and decide not to surrender, that is strength.",
    author: "Arnold Schwarzenegger",
  },
  {
    quotes: "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
    author: "Angelina Jolie",
  },
  {
    quotes: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quotes: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quotes: "Success seems to be connected with action. Successful people keep moving.",
    author: "Conrad Hilton",
  },
  {
    quotes: "In order to succeed, we must first believe that we can.",
    author: "Nikos Kazantzakis",
  },
  {
    quotes: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    quotes: "Without haste, but without rest.",
    author: "Goethe",
  },
  {
    quotes: "Indecision is often worse than wrong action.",
    author: "Henry Ford",
  },
  {
    quotes: "I will prepare and some day my chance will come.",
    author: "Abraham Lincoln",
  },
];

const quote = document.querySelector("#quote span:first-child"); ///span 첫번째
const author = document.querySelector("#quote span:last-child"); ///span 마지막

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;