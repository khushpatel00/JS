const quoteEl = document.getElementById('quoteBox');
const authorEl = document.getElementById('authorBox');
const newBtn = document.getElementById('newQuoteBtn');
const copyBtn = document.getElementById('copyBtn');

let quotes = [];

function pickRandomQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
}

function renderQuote(item) {
    quoteEl.textContent = `${item.quote}`;
    authorEl.textContent = item.author ? `— ${item.author}` : '— Unknown';
}

function loadQuotes() {
    quotes = QUOTES_DATA.quotes;
    renderQuote(pickRandomQuote());
}

if (newBtn) {
    newBtn.addEventListener('click', () => {
        renderQuote(pickRandomQuote());
    });
}


document.addEventListener('keydown', (e) => {
    if (e.key === 'n' || e.key === 'N') {
        renderQuote(pickRandomQuote());
    }
});

loadQuotes();
