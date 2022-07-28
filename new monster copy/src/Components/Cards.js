import React, { Component } from "react";

export class Cards extends Component {
    static defaultProps = {
        pageSize: 10,
        category: "general",
    };

    constructor() {
        super();
        this.state = {
            articles: [],
            country: "in",
            page: 1,
        };
    }

    changetoindia = () => {
        this.setState({
            country: "in",
        }, () => {
            this.updatenews();
        });
    }
    changetous = () => {
        this.setState({
            country: "us",
        }, () => {
            this.updatenews();
        });
    }
    changetocanada = () => {
        this.setState({
            country: "ca"
        }, () => {
            this.updatenews();
        });
    }
    changetochina = () => {
        this.setState({
            country: "ch"
        }, () => {
            this.updatenews();
        });

    }
    changetorussia = () => {
        this.setState({
            country: "ru"
        }, () => {
            this.updatenews();
        });
    }

    gotonext = async () => {
        this.setState({
            page: this.state.page + 1,
        });
        this.updatenews();
    };
    gotoprevious = async () => {
        this.setState({
            page: this.state.page + -1,
        });
        this.updatenews();
    };

    async updatenews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=3bd4f13f725b42b0a43c278db98d3450&category=${this.props.category}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let response = await data.json();
        this.setState({
            articles: response.articles,
            totalResults: response.totalResults,
        });
        console.log(response);
    }

    async componentDidMount() {
        this.updatenews();
    }

    render() {
        return (
            <div>
                <button type="button" class="btn btn-dark" onClick={this.changetochina}>China</button>
                <button type="button" class="btn btn-dark" onClick={this.changetocanada}>Canada</button>
                <button type="button" class="btn btn-dark" onClick={this.changetorussia}>Russia</button>
                <button type="button" class="btn btn-dark" onClick={this.changetoindia}>India</button>
                <button type="button" class="btn btn-dark" onClick={this.changetous}>Usa</button>


                <div className="container">
                    <h1> News Monster </h1>

                    <div className="row ">
                        {this.state.articles.map((element) => {
                            return (
                                <div
                                    className="card mx-3 my-3 text-bg-dark"
                                    style={{ width: "18rem" }}
                                >
                                    <img
                                        src={element.urlToImage ? element.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIBQGcTFXAGLNlgJ1iqi7-koGqivWzx_y9w&usqp=CAU"}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{element.title}</h5>
                                        <p className="card-text">{element.description}</p>
                                        <a href={element.url} className="btn btn-primary">
                                            view more
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="container d-flex justify-content-between">
                    <button
                        disabled={this.state.page <= 1}
                        type="button"
                        className="btn btn-dark"
                        onClick={this.gotoprevious}
                    >
                        {" "}
                        &larr; Previous
                    </button>
                    <button
                        disabled={
                            this.state.page + 1 >
                            Math.ceil(this.state.totalResults / this.props.pageSize)
                        }
                        type="button"
                        className="btn btn-dark"
                        onClick={this.gotonext}
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        );
    }
}

export default Cards;