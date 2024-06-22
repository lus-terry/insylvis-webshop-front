import { useParams } from 'react-router-dom';

const CheckoutSuccess = () => {
    let { orderId } = useParams();

    return ( 
        <div className="content_container_blank" > 
            <h2>Checkout Success</h2>
            <p>Your order ID is: {orderId}</p>
        </div>
        
     );
}
 
export default CheckoutSuccess;