import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { generateCountriesData } from '@nivo/generators';
import Cookies from 'js-cookie';

class Bar extends React.Component{
    constructor() {
        super();
        this.state = {
            data: null,
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);
    }

    componentDidMount(){
        //var tcache = Cookies.get('tcache');
        //this.setState({data: tcache});
    }

    shouldComponentUpdate(nextProps) {
        const differentTrends = this.data !== nextProps.info;
        return differentTrends;
    }

    render(){
      var z = this.props.info;

      //var z = JSON.parse(w);
      console.log("The Data Passed To Bar",z);
      let qwerty = "";
      //console.log("object", z);

      let data=[];


      if (z != null)
      {
          console.log("z is not null");

        if (z != null)
        {
            console.log("qwert");
            //qwerty = z.trends[0].trends;
            qwerty = JSON.stringify(z);
            data = z;
            //data.sort("tweet_volume");
            data.sort((a, b) => a.tweet_volume < b.tweet_volume);
            data = data.slice(0, 10);

            //console.log(qwerty);
          // qwerty = z.trends[0].trends.map((item, i) => {
          //     console.log(item.name);
          //       return (
          //           <tr>
          //               <td>{item.name}</td>
          //               <td>{item.tweet_volume}</td>
          //           </tr>
          //
          //       );
          //     });
           }

      }



      return(
    <ResponsiveBar
    position="absolute"
    height={360}
    width={400}
    data={data}
    keys={[
        "tweet_volume"
    ]}
    indexBy="name"
    margin={{
        "top": 30,
        "right": 10,
        "bottom": 100,
        "left": 90
    }}
    padding={0.3}
    colors="#38bcb2"
    colorBy="index"
    color= "#38bcb2"
    defs={[
        {
            "id": "dots",
            "type": "patternDots",
            "background": "inherit",
            "color": "#38bcb2",
            "size": 4,
            "padding": 1,
            "stagger": true
        },
        {
            "id": "lines",
            "type": "patternLines",
            "background": "inherit",
            "color": "#eed312",
            "rotation": -45,
            "lineWidth": 6,
            "spacing": 10
        }
    ]}

    borderColor="inherit:darker(1.6)"

    axisBottom={{
        "tickSize": 5,
        "tickPadding": 5,
        "tickRotation": -50,
        "legend": "country",
        "legendPosition": "middle",
        "legendOffset": 80
    }}
    axisLeft={{
        "tickSize": 5,
        "tickPadding": 5,
        "tickRotation": 0,
        "legend": "tweet volume",
        "legendPosition": "middle",
        "legendOffset": -70
    }}
    enableLabel={false}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor="inherit:darker(1.6)"
    animate={true}
    motionStiffness={90}
    motionDamping={15}

/>
  );
}
}

export default Bar
