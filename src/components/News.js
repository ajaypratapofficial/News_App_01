import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import { PropTypes } from "react";
export class News extends Component {

  static defaultProps = {
    country   : 'us',
    category  : 'general',
    pageSize  :  9,

  }
  // static propTypes = {
  //   country: PropTypes.string,
  //   category: PropTypes.string,
  //   pageSize : PropTypes.number,
  // }
  constructor() {
    // console.log("news constructor");
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    // console.log("componentDidMount");
    this.setState({loading:true});
    let url =
      `${this.props.url}&category=${this.props.category}&country=${this.props.country}&page=1&pageSize=${this.props.pageSize}`;
      // console.log(url);
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false, 
    }); 
  }


  handlePrevious = async () => {
    // console.log("previous");
    let url = `${this.props.url}&category=${this.props.category}&country=${this.props.country}&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading : false,
    });
  };


  handleNext = async () => {
      // console.log("next");
      let url = `${this.props.url}&category=${this.props.category}&country=${this.props.country}&page=${
      this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading : false,
      });
  };


  render() {
    // console.log("news rendered");
    return (
      <div className="container my-3 text-center" >
        <h2 style={{margin: "40px 0px"}}>News-Monkey : Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          {/* bootstrap flex box v5 */}
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevious}
            disabled={this.state.page <= 1}
          >
            &laquo; Previous
          </button>

          <button
            type="button"
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &raquo;
          </button>
          {/* previous and next arrow html  */}
        </div>
      </div>
    );
  }
}

export default News;
