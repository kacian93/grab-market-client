import axios from "axios";
import "./css/index.css"
import React from "react";
import App from "../App";
import {Link} from 'react-router-dom'

function MainPageComponent(){
    const [grabProducts, setProducts] = React.useState([]);
    React.useEffect(function(){
        axios.get("https://f67889d5-a575-4c05-8525-9838b2e1f778.mock.pstmn.io/products").
        then(function(result){
            console.log("result : ", result);
            const grabProducts = result.data.products;
            setProducts(grabProducts);
        }).catch(function(error){
            console.log("error  : ",error);
        });
    },[]);

    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <img src="/img/icons/logo.png" alt="logo" />
                </div>
            </div>
            <div id="body">
                <div id="banner">
                    <img src="/img/banners/banner1.png" alt="배너이미지" />
                </div>
                <h1>판매되는 상품들</h1>
                <div id="product-list">
                    {grabProducts.map(function(product, index) {
                        return (
                            <Link className={"product-link"} to={"/products/" + product.id}>

                                <div  className={"product-card"}>
                                        <div>
                                            <img className={"product-img"} src={product.imageUrl}/>
                                        </div>
                                        <div className={"product-contents"}>
                                            <span className={"product-name"}>
                                                {product.name}
                                            </span>
                                            <span className={"product-price"}>{product.price}</span>
                                            <div className={"product-seller"}>
                                                <img className={"product-avatar"} src={"img/icons/avater.png"}/>
                                                <span>{product.seller}</span>

                                            </div>
                                        </div>
                                </div>
                            </Link>)
                    })}
                </div>
            </div>
            <div id="footer"></div>
        </div>

    );
}

export default MainPageComponent;
