const Cart = ({ imgCart }) => {

    return (
        <div >
            <img src={imgCart} 
            alt=" Img Carrito" 
            height= {50}
            />
            <span className="contador">0</span>
        </div>
    )
}

export default Cart; 