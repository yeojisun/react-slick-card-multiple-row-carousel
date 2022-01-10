

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    
    const settings = {
        dots: true
        , infinite: false
        , speed: 500
        , slidesPerRow: 3
        , rows: 3
    };

    return (
        <>
            
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>7</h3>
            </div>
            <div>
              <h3>8</h3>
            </div>
            <div>
              <h3>9</h3>
            </div>
            <div>
              <h3>10</h3>
            </div>
            <div>
              <h3>11</h3>
            </div>
            <div>
              <h3>12</h3>
            </div>
            <div>
              <h3>13</h3>
            </div>
            <div>
              <h3>14</h3>
            </div>
            <div>
              <h3>15</h3>
            </div>
            <div>
              <h3>16</h3>
            </div>
          </Slider>
        </>
    );
}
export default App;
