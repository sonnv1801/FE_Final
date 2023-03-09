import React from 'react';
import './style.css';
import ReactStars from 'react-rating-stars-component';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import numeral from 'numeral';
scroll.scrollToTop();
export default function MediaCard(props) {
  const oldPrice = props.card?.oldPrice;
  const newPrice = props.card?.newPrice;
  const formattedOldPrice = numeral(oldPrice).format('0,0');
  const formattedNewPrice = numeral(newPrice).format('0,0');

  return (
    <>
      <Link to={`/product-detail/${props.card?._id}`}>
        <Card sx={{ maxWidth: 300 }} className="container-card">
          <CardMedia
            className="sub-card-container"
            sx={{ height: 200 }}
            image={props.card?.image}
            title="Sản phẩm"
          />
          <div style={{ height: '200px' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.card?.title.slice(0, 10) + '...'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {(props.card?.description).slice(0, 10) + '...'}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <del
                  style={{ opacity: '0.7', lineHeight: '2' }}
                >{`${formattedOldPrice}đ`}</del>
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {`${formattedNewPrice}đ`}
              </Typography>
              <Typography variant="body2">
                <span id="color-tile-card">
                  <ReactStars count={props.card?.rates} />
                </span>
              </Typography>
            </CardContent>
          </div>
          <CardActions>
            <Link
              // onClick={() => scroll.scrollToTop()}
              to={`/product-detail/${props.card?._id}`}
            >
              <Button size="small">Xem chi tiết</Button>
            </Link>
            {/* <Button
          size="small"
          onClick={() => {
            dispatch(addCart(props.card));
          }}
        >
          Thêm vào giỏ
        </Button> */}
          </CardActions>
        </Card>
      </Link>
    </>
  );
}
