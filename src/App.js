

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardActionArea, Typography, CardContent, Card } from '@mui/material';

function App() {
    
    const settings = {
        dots: true
        , infinite: false
        , speed: 500
        , slidesPerRow: 2
        , rows: 2
    };

    return (
        <>
            
          <Slider {...settings}>
          <Card>
              <CardActionArea>
                  <CardContent className="card_content">
                      <Typography gutterBottom variant="h5" component="div">
                        타이틀1
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        내용
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        날짜
                      </Typography>
                  </CardContent>
              </CardActionArea>
          </Card>
          <Card>
              <CardActionArea>
                  <CardContent className="card_content">
                      <Typography gutterBottom variant="h5" component="div">
                        타이틀2
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        내용
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        날짜
                      </Typography>
                  </CardContent>
              </CardActionArea>
          </Card>
          <Card>
              <CardActionArea>
                  <CardContent className="card_content">
                      <Typography gutterBottom variant="h5" component="div">
                        타이틀3
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        내용
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        날짜
                      </Typography>
                  </CardContent>
              </CardActionArea>
          </Card>
          <Card>
              <CardActionArea>
                  <CardContent className="card_content">
                      <Typography gutterBottom variant="h5" component="div">
                        타이틀4
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        내용
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        날짜
                      </Typography>
                  </CardContent>
              </CardActionArea>
          </Card>
          <Card>
              <CardActionArea>
                  <CardContent className="card_content">
                      <Typography gutterBottom variant="h5" component="div">
                        타이틀5
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        내용
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        날짜
                      </Typography>
                  </CardContent>
              </CardActionArea>
          </Card>
          <Card>
              <CardActionArea>
                  <CardContent className="card_content">
                      <Typography gutterBottom variant="h5" component="div">
                        타이틀6
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        내용
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        날짜
                      </Typography>
                  </CardContent>
              </CardActionArea>
          </Card>
          </Slider>
        </>
    );
}
export default App;
