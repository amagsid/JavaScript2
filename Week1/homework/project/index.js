let quotesArr = [
    'Out Beyond ideas of wrongdoing and rightdoing, there is a field, I\'ll meet you there.<br/><span> ‐Rumi </span>' ,
    'Forget safety. Live where you fear to live. Destroy your reputation. Be notorious.<br/><span> ‐Rumi</span>' ,
    'Stay hungry. Stay foolish.<br/><span> ‐Steve Jobs</span>' ,
    'I have looked in the mirror every morning and asked myself &quot;If today were the last day of my life, would I want to do what I am about to do today?&quot; And whenever the answer has been &quot;No&quot; for too many days in a row, I know I need to change something.<br/><span> ‐Steve Jobs</span>',
    'what matters most is how well you walk through the fire.<br/><span> ‐Charles Bukowski</span>',
    'The nine-to-five is one of the greatest atrocities sprung upon mankind. You give your life away to a function that doesn’t interest you.<br/><span> ‐Charles Bukowski</span>',
    'Maybe the moon is beautiful only because it is far.<br/><span> ‐Mahmoud Darwish</span>',
    'If the doors of perception were cleansed, everything would appear as it truly is; infinite.<br/><span> ‐William Blake</span>',
    'Would you like you, if you met you?<br/><span> ‐Unknown</span>',
    'You can’t be brave if you’ve only had wonderful things happen to you. <br/><span> ‐Mary Tyler Moore</span>',
]

console.log(quotesArr.length)

function generateQuote() {
let randomQuote =  quotesArr[Math.floor(Math.random() * quotesArr.length)];
document.getElementById('quotedisplay').innerHTML = randomQuote;

};

let btn = document.getElementById('quote-button')

btn.addEventListener('click', generateQuote )



