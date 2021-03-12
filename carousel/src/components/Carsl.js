import React,{Component} from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../App.css';
 

let styles = {
    margin: 'auto',
    width: '500px'
};

const imgs = [
  {name: "Hong Kong", url: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg"},
  {name: "Singapore", url: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp"},
  {name: "Japan", url: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp"},
  {name: "Las Vegas", url: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp"}
]

  /* Use this data to create an array of objects that you loop through
  to create the carousel. 

  Hong Kong: https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg
  Singapore: https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp
  Japan: https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp
  Las Vegas: https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp

  Use the react-responsive-carousel package to create the Carousel: 
  https://www.npmjs.com/package/react-responsive-carousel


  */

class Carsl extends Component {
	render() {
    return (
      <div style={styles}>
        <Carousel>
          {
          imgs.map(
            img => <div><img src={img.url} alt={img.name} /><p className="legend">{img.name}</p></div>
            )
          }
        </Carousel>
      </div>
    )
  }
}


export default Carsl;