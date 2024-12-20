import './product-card.styles.scss';

import Button from '../button/button.component';

const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product;
    return (
        <dic className = "product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted'>Add to card</Button>
        </dic>
    )
   
}

export default ProductCard;
