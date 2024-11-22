

var quotes = [
    {
        name: " --Oscar Wilde",
        que: "Be yourself; everyone else is already taken."
    }
    ,
    {
        name: "--Marilyn Monroe",
        que: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
    },
    {
        name: "--Frank Zappa",
        que: "So many books, so little time."
    },
    {
        name: "--Albert Einstein",
        que: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    },
    {
        name: "--Marcus Tullius Cicero",
        que: "A room without books is like a body without a soul."
    },


];
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var pervice = 0;


function test() {
    var i = getRandomInt(quotes.length)

    if (i == pervice&&i!=quotes.length-1) {
        i = i + 1
        document.getElementById("authorname").innerHTML = (quotes[i].name)
        document.getElementById("quato").innerHTML = (quotes[i].que)
        pervice = i;
    
    }
    else if(i==pervice&&i==quotes.length-1){
        i = i -2
        document.getElementById("authorname").innerHTML = (quotes[i].name)
        document.getElementById("quato").innerHTML = (quotes[i].que)
        pervice = i;

    }
    else if (i != pervice) {
        document.getElementById("authorname").innerHTML = (quotes[i].name)
        document.getElementById("quato").innerHTML = (quotes[i].que)
        pervice = i;
    }


}