//declare quotes 
let quotes = [
  {
    'quote': 'An investment in knowledge pays the best interest.',
    'source': 'Benjamin Franklin', 
    'tags': 'business'
  },
  {
    'quote': 'All that we see or seem is but a dream within a dream.',
    'source': 'Edgar Allan Poe'
  },
  {
    'quote': 'The supreme art of war is to subdue the enemy without fighting.',
    'source': 'Sun Tzu', 
    'tags': 'history'
  },
  {
    'quote': 'The journey of a thousand miles begins with one step.',
    'source': 'Lao Tzu', 
    'tags': 'philosophy'
  },
  {
    'quote': 'It does not do to dwell on dreams and forget to live',
    'source': 'JK Rowling',
    'citation': 'Sorcerer’s Stone',
    'year': 2001
  },
  {
    'quote': 'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends',
    'source': 'JK Rowling',
    'citation': 'Sorcerer’s Stone',
    'year': 2001
  }, 
  {
    'quote': 'If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals',
    'source': 'JK Rowling',
    'citation': 'Goblet of Fire',
    'year': 2005
  } 
]; 

// dynamically retrieve a random quote 
getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length); 
  return quotes[randomNumber];
}

//generate random rgb number from 0 to 255
getRandomRgbValue = () => Math.floor(Math.random() * 255); 

//create rgb value 
getRgb = () => `rgb(${getRandomRgbValue()}, ${getRandomRgbValue()}, ${getRandomRgbValue()})`; 

// print random quote to page 
printQuote = () => {
  let randomquote = getRandomQuote(); 
  let quoteString = `<p class="quote"> + ${randomquote.quote} </p> <p class="source"> +  ${randomquote.source}`; 
                    
  if (randomquote.citation) { quoteString += `<span class="citation"> ${randomquote.citation} </span>`; }

  if (randomquote.year) { quoteString += `<span class="year"> ${randomquote.year} </span>`; } 

  if(randomquote.tags) {  quoteString += `<span class="tags"> ${randomquote.tags} </span>`; }

  quoteString += `</p>`; 

  document.getElementById('quote-box').innerHTML = quoteString; 

  //change background color of page
  document.querySelector('body').style.backgroundColor = `${getRgb()}`;

  return quoteString; 
}

//print quote to page by default
printQuote();

//set timer to automatically change quote
setInterval(function(){ printQuote(); }, 5000);

//load quote onto page
document.getElementById('load-quote').addEventListener("click", printQuote, false); 