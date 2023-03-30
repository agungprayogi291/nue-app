
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import './slide.css';
import Carousel from "nuka-carousel/lib/carousel";
import water from '../../images/water.jpeg';
// material ui
import Card  from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { createTheme,ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#000',
      contrastText: '#fff',
    },
  },
});

function Slide(prop){
    const navigate = useNavigate()
    Aos.init()
    return (
        <>
            <div className="container section-content mt-5 " data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
               <div className='my-auto'>
                  <Carousel wrapAround={true} slidesToShow={3} autoplay>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 300 }}
                        image={water}
                        title="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <div className="mx-auto">
                          <ThemeProvider theme={theme}>
                            <Button color="neutral" variant="contained" onClick={() => navigate('/order')}>
                              Order now
                            </Button>
                          </ThemeProvider>
                        </div>
                      </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 300 }}
                        image={water}
                        title="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <div className="mx-auto">
                          <ThemeProvider theme={theme}>
                              <Button color="neutral" variant="contained" onClick={() => navigate('/order')}>
                                Order now
                              </Button>
                          </ThemeProvider>

                        </div>
                      </CardActions>
                    </Card>
                    
                  </Carousel>
               </div>
                <div className="d-flex justify-content-center mt-5">
                    <button className={ prop.use ? "btn  text-white" :"collapse"} onClick={() => navigate('/products')}>Telusuri...</button>
                </div>
            </div>
        </>
    )
}
export default Slide;