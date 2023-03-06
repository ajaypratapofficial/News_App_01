import React, { Component } from 'react'

export class NewsItem extends Component {
  constructor() {
    super();
    // console.log('newsitems constructor');
  }

  render() {
    // console.log("newsItems rendered");
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div className='container my-3'>
        <div className="card">
          <img src={imageUrl ? imageUrl : "https://th.bing.com/th/id/OIP.DAuF8ksdA5Kjh7fLifDpnwHaHa?pid=ImgDet&rs=1"} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small>By {author} on {date}</small></p>
            <a href={newsUrl}
              target="_blank"
              rel='noreferrer'
              className="btn btn-sm btn-dark"
            // primary to dark
            >Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem