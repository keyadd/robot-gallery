import React  from "react";
import styles from "./ShoppingCart.module.css"

interface Props{

}

interface State{
    isOpen:boolean;
}


class ShoppingCart extends React.Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state ={
            isOpen:false,
        };
    }

    render(){
        return(
            <div className={styles.cartContainer}>
                <button className={styles.button}
                onClick={(e)=>{
                    this.setState({isOpen:!this.state.isOpen})
                }}
                >🛍️购物车</button>
                <div className={styles.cartDropDown}
                style={{
                    display: this.state.isOpen ? "block":"none"
                }}
                >
                    <ul>
                        <li>robot 1</li>
                        <li>robot 2</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ShoppingCart;