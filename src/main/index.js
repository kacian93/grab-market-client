import axios from "axios";
import "./css/index.css"
import React from "react";

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
                            <div className={"product-card"}>
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
                            </div>)
                    })}
                </div>
            </div>
            <div id="footer"></div>
            {/*<script>*/}
            {/*    axios.get('https://f67889d5-a575-4c05-8525-9838b2e1f778.mock.pstmn.io/products').then(function(result){*/}
            {/*    const products=result.data.products;*/}
            {/*    let productsHTML='';*/}
            {/*    for(var i = 0 ; i<products.length;i++){*/}
            {/*    productsHTML = productsHTML+*/}
            {/*    '<div class="product-card">'+*/}
            {/*    ' <div><img class="product-img" src="'+products[i].imageUrl+'" alt="'+products[i].name+'" /></div>' +*/}
            {/*    '        <div class="product-contents">' +*/}
            {/*    '          <span class="product-name">'+products[i].name+'</span>' +*/}
            {/*    '          <span class="product-price">'+products[i].price+'</span>' +*/}
            {/*    '          <div class="product-seller">' +*/}
            {/*    '            <img class="product-avatar" src="front-end/img/icons/avatar.png" alt="아바타">' +*/}
            {/*    '            <span>'+products[i].seller+'</span>' +*/}
            {/*    '          </div>' +*/}
            {/*    '        </div>'+*/}
            {/*    '</div>'*/}
            {/*}*/}

            {/*    document.querySelector("#product-list").innerHTML = productsHTML;*/}
            {/*}).catch(function(error){*/}
            {/*    console.error("error : ",error)*/}
            {/*})*/}
            {/*    // var products = [{*/}
            {/*    //   name : '농구공',*/}
            {/*    //   price : 100000,*/}
            {/*    //   seller : '조던',*/}
            {/*    //   imageUrl : './img/products/basketball1.jpeg'*/}
            {/*    // },{*/}
            {/*    //   name : '축ㅁ구공',*/}
            {/*    //   price : 50000,*/}
            {/*    //   seller : '메시',*/}
            {/*    //   imageUrl: './img/products/soccerball1.jpg'*/}
            {/*    // },{*/}
            {/*    //   name : '키보드',*/}
            {/*    //   price : 10000,*/}
            {/*    //   seller : '그랩',*/}
            {/*    //   imageUrl: './img/products/keyboard1.jpg'*/}
            {/*    // }]*/}

            {/*    </script>*/}


        </div>

    );
}

export default MainPageComponent;
