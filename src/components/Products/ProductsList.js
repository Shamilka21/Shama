import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductsList = ({ products }) => {
  const cart = JSON.parse(localStorage.getItem('cart')) ?? false;
  const [color, setColor] = useState('red');

  const onClick = () => {
    setColor('blue');
  };

  // const sortedUser = useMemo (() => {
  //     return [...users].sort((a,b) => a.age - b.age)
  // }, [users]) -- НА ВСЯКИЙ СЛУЧАЙ ДЛЯ ХУКА USE_MEMO - КОТОРЫЙ ЗАПОМИНАЕТ

  return (
    <Grid container spacing={3}>
      {/* <Button onClick={onClick}>change color</Button>
            <div>{color}</div> -- НА ВСЯКИЙ СЛУЧАЙ ДЛЯ ХУКА USE_MEMO - КОТОРЫЙ ЗАПОМИНАЕТ */}
      {products.map((product) => (
        <Grid item xs={4} key={product.id}>
          <ProductCard product={product} cart={cart} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;
