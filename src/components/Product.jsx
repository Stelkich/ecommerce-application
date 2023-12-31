import React from 'react'
import { styled } from 'styled-components'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Info = styled.div`
    opacity: 0;
    width:100%;
    height:100%;
    position: absolute;
    top:0;
    left:0; 
    background-color: rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
      transition:all 0.6s ease;
    
`

const Container = styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    height:350px;
    display:flex;
    align-items:center;
    justify-content: center;
    background-color: #ffffff;
    position:relative;
    
    &:hover ${Info}{
        opacity: 1;
      
    }

`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #000000;
    position: absolute;
`
const Image = styled.img`
    height:75%;
    z-index: 2;
`

const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius: 50%;
    background-color: #fff;
    display:flex;
    align-items: center;
    justify-content: center;
    margin:10px;
    transition:all 0.5 ease;
    &:hover{
        background-color: #940074;
        transform:scale(1.1)
    }

   
    
`
const Product = ({item}) => {
  return (
    <Container>
          <Circle />
          <Image src={item.img} />
          <Info>
              <Icon>
              <ShoppingBasketIcon/>
              </Icon>
              <Icon>
              <SearchIcon/>
              </Icon>
              <Icon>
              <FavoriteIcon/>
             </Icon>
          </Info>
          
    </Container>
  )
}

export default Product