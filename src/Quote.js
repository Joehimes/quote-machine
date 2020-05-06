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
            <div className="quote-box">
                <div>
                    <p className="text">{' '}{this.state.quote}{' '}</p>
                    <p className="author">{this.state.author}</p>
                </div>
                <div>
                    <a
                        className="twitter-share-button twitter"
                        id="tweet-quote"
                        href={twitterURL}
                        target="_blank"
                    >
                        Tweet
                    </a>
                    <button className="new-quote" variant="primary" onClick={this.getNewQuote}>New Quote</button>
                </div>
            </div>
        )
    }
}

export default Quote;