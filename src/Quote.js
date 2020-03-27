import React from 'react';
import './Quote.css';

class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: ''
        }
        this.getNewQuote = this.getNewQuote.bind(this);
    }

    componentDidMount() {
        this.getNewQuote();
    }

    getNewQuote() {
        fetch('https://api.quotable.io/random')
        .then(results => {
            return results.json();
        })
        .then(data => {
            this.setState({
                quote: data.content,
                author: data.author,
            });
        })
    }

    render() {
        const twitterURL = 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + this.state.quote + '" ' + this.state.author)

        return (
            <div className="quote-box" id="quote-box">
                <p className="text" id="text">{this.state.quote}</p>
                <p className="author" id="author">- {this.state.author} -</p>
                <a
                    className="twitter-share-button twitter"
                    id="tweet-quote"
                    href={twitterURL}
                    target="_blank"
                >
                    Tweet
                </a>
                <button className="new-quote" id="new-quote" onClick={this.getNewQuote}>New Quote</button>
            </div>
        )
    }
}

export default Quote;