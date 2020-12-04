import * as React from 'react';
import axios from 'axios'
import _ from 'lodash'
import { Footer } from '../src/components/footer'
import Header from './partials/header'
import helpers from '../helpers'
import config from '../configblog';
import { withRouter } from 'react-router';
import { any } from 'prop-types';

import { useEffect } from 'react';
import './styles/index.css';

function Status({ code, children }) {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) staticContext.status = code;
        return children;
      }}
    />
  );
}

export default class Blog extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        cosmic: {
          posts:[],
          global: []
        }
    }
}
  async componentDidMount() {
    const query = `{
      getObjects(bucket_slug: "${config.bucket.slug}", input: {
        read_key: "${config.bucket.read_key}"
      })
      {
        _id
        type_slug
        slug
        title
        metadata
        created_at
      }
    }`
await axios.post(`https://graphql.cosmicjs.com/v1`, { query })
  .then( (response) =>
    this.setState({
      cosmic: {
        posts: _.filter(response.data.data.getObjects, { type_slug: 'posts' }),
        global: _.keyBy(_.filter(response.data.data.getObjects, { type_slug: 'globals' }), 'slug')
      }   
    })   
  )
  .catch(function (error) {
    console.log(error)
  })
  }
  
  render() {
    if (!this.state.cosmic)
      return <div style={{backgroundColor:"red"}}>Loading...</div>
    return (
      <div className="blog">
         <Header cosmic={ this.state.cosmic }/>
         <main className="container">
           <h1 style={{fontFamily:"didot", margin:"200px auto"}}> COMING SOON!</h1>
           {/* {
            !this.state.cosmic.posts &&
            'You must add at least one Post to your Bucket'
          }
          {
            this.state.cosmic.posts &&
            this.state.cosmic.posts.map(post => {
              const friendly_date = helpers.friendlyDate(new Date(post.created_at))
              post.friendly_date = friendly_date.month + ' ' + friendly_date.date
              return (
                 <div className="card" data-href={`/${post.slug}`} key={post._id}>
                  {
                    post.metadata.hero.imgix_url &&
                    <a href={`/${post.slug}`} className="blog-post-hero blog-post-hero--short" style={{ backgroundImage: `url(${post.metadata.hero.imgix_url})`}}></a>
                  }
                  <div className="card-padding">
                    <h2 className="blog__title blog__title--small">
                      <a href={`/${post.slug}`}>{post.title}</a>
                    </h2>
                    <div className="blog__author">
                      <a href={`/author/${post.metadata.author.slug}`}>
                        <div className="blog__author-image" style={{ backgroundImage: `url(${post.metadata.author.metafields[0].imgix_url}?w=100)`}}></div>
                      </a>
                      <div className="blog__author-title">by <a href={`/author/${post.metadata.author.slug}`}>{post.metadata.author.title}</a> on {post.friendly_date}</div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="blog__teaser droid" dangerouslySetInnerHTML={{__html: post.metadata.teaser}}></div>
                    <div className="blog__read-more">
                      <a href={`/${post.slug}`}>Read more...</a>
                    </div>
                  </div>
                </div>  
              )
            })
          } */}
        </main>
        <Footer />
      </div>
    )
  }
}
