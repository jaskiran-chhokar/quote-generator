/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


let quotes = [
  {
    'quote': 'An investment in knowledge pays the best interest.',
    'source': 'Benjamin Franklin',
    'citation': 'xxx',
    'year': 2067
  },
  {
    'quote': 'All that we see or seem is but a dream within a dream.',
    'source': 'Edgar Allan Poe',
    'citation': 'xxx',
    'year': 2067
  },
  {
    'quote': 'The supreme art of war is to subdue the enemy without fighting.',
    'source': 'Sun Tzu',
    'citation': 'xxx',
    'year': 2067
  },
  {
    'quote': 'The journey of a thousand miles begins with one step.',
    'source': 'Lao Tzu',
    'citation': 'xxx',
    'year': 2067
  },
  {
    'quote': 'If you cannot do great things, do small things in a great way.',
    'source': 'Napoleon Hill',
    'citation': 'xxx',
    'year': 2067
  }
]; 

console.log(quotes); 

// get random quote function 
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * 4 + 1); 
  return quotes[randomNumber];
}

console.log(getRandomQuote());

// print quote function 
function printQuote() {
  let randomquote = getRandomQuote(); 
  let quoteString = '<p class="quote">' + randomquote.quote + '</p>' + 
                      '<p class="source">' +  randomquote.source + 
                      '<span class="citation">' +  randomquote.citation +  '</span>' + 
                      '<span class="year">' + randomquote.year + '</span>' + 
                    '</p>'

  return quoteString; 
}

console.log(printQuote());




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);