import React, { Component } from 'react';
import Cookies from 'js-cookie';

class TweetTable extends Component {
    constructor() {
        super()
        this.state = {
            data: null
        }
        //this.handleSelect = this.handleSelect.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }

    componentDidMount() {
            var z = this.props.info
            //this.setState({data: w});
            //console.log("w", w);
            //console.log("Asda", w);
            let qwerty = "";
            console.log("object", z);
            if (z != null)
            {
                console.log("z is not null in search");
                console.log("object search", z);
                console.log("object within:", z);
                this.setState({data: z});

                const data = z.slice(0, 10);

                Cookies.set('scache', data, { maxAge: 90000 });
                console.log("object in cookie", data);
            }

            //console.log("object2", JSON.stringify(z));
            // <option key={i} value={item}>
            //   {item.name}{ item.tweet_volume}
            // </option>
            //<th scope="row">1</th>
            //

    }

    componentDidUpdate() {
        var z = this.props.info
  //this.setState({data: w});
        //console.log("w", w);
        //console.log("Asda", w);
        let qwerty = "";
        console.log("object", z);
        if (z != null)
        {
            console.log("z is not null in search");
            console.log("object search", z);
            console.log("object within:", z);
            //this.setState({data: z});
            const data = z.slice(0, 10);
            Cookies.set('scache', data, { maxAge: 90000 });
            console.log("object in cookie", data);

        }
        //console.log("object2", JSON.stringify(z));
        // <option key={i} value={item}>
        //   {item.name}{ item.tweet_volume}
        // </option>
        //<th scope="row">1</th>
        //
    }

  render() {

      let qwerty = "";
      this.componentDidUpdate();
      var scache = Cookies.get('scache');
      console.log("cookie", scache);
      if(scache !== undefined){
          var smcache = JSON.parse(scache);
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
