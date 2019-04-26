import React, { Component } from 'react';
import Cookies from 'js-cookie';

class TweetTable extends Component {
    constructor() {
        super()
        this.state = {
            data: null
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }

    componentDidMount() {
        Cookies.set('search', this.props.info, { maxAge: 90000 });
    }

    componentDidUpdate() {
        Cookies.set('search', this.props.info, { maxAge: 90000 });
    }

  render() {
      let qwerty = "";
      var search = Cookies.get('search');
      console.log("cookie", search);
      if(search !== undefined){
          var smcache = JSON.parse(search);
          console.log("object that was in cookie.", smcache);
          qwerty = smcache.map((item, i) => {
              console.log(item.name);
              return (
                  <tr>
                      <td>{item.user.name}</td>
                      <td>{item.full_text}</td>
                      <td>{item.favorite_count}</td>
                      <td>{item.retweet_count}</td>
                  </tr>
              );
          });
      }
      else{
          qwerty = () => {
             return (<></>);
          };
      }

    return (

        <div>
        <div>
        </div>
          <div className="Info">
              <table class="table">
                  <thead class="thead-dark">
                      <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Tweet</th>
                          <th scope="col">Favorite Count</th>
                          <th scope="col">Retweet Count</th>
                      </tr>
                  </thead>
                  <tbody>
                  {qwerty}
                  </tbody>

              </table>

      </div>
  </div>
    );
  }
 }
 export default TweetTable;
