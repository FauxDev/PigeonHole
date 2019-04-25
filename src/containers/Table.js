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
        var scache = Cookies.get('scache');
        if (scache !== undefined) {
            this.setState({data: JSON.parse(scache)}, function(){
                console.log("data", this.state.data);
            });
        }
        else{
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
                console.log("object within:", z.trends.statuses);
                this.setState({data: z});

                if (z.trends.statuses != null)
                {
                    qwerty = z.trends.statuses.map((item, i) => {
                        //console.log(item.name);
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
            }
            //console.log("object2", JSON.stringify(z));
            // <option key={i} value={item}>
            //   {item.name}{ item.tweet_volume}
            // </option>
            //<th scope="row">1</th>
            //

        }
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
            console.log("object within:", z.trends.statuses);
            //this.setState({data: z});

          if (z.trends.statuses != null)
          {
            qwerty = z.trends.statuses.map((item, i) => {
                //console.log(item.name);
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

        }
        //console.log("object2", JSON.stringify(z));
        // <option key={i} value={item}>
        //   {item.name}{ item.tweet_volume}
        // </option>
        //<th scope="row">1</th>
        //
    }

  render() {

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
