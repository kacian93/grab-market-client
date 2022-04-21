
import { useParams, BrowserRouter as router } from 'react-router-dom';
import axios from "axios";
import {useEffect, useState} from "react";
import './index.css'

export default ProductPage;
function ProductPage(){
    const [product, setProduct] = useState(null);
    const {id} = useParams();
    useEffect(function(){
        axios.get("https://f67889d5-a575-4c05-8525-9838b2e1f778.mock.pstmn.io/products/"+id).then(function(result){
            console.log(product);
            setProduct(result.data);
        }).catch(function(error){
            console.log("error : ",error);
        });
    },[]);
    console.log(product);

    if(product === null){
        return <h1>상품정보를 받고 있습니다...</h1>
    }
    return (
        <div>
            <div id="image-box">
                <img src={"/"+product.imageUrl} alt=""/>
            </div>
            <div id="profile-box">
                <img src="/img/icons/avatar.png" alt=""/>
                <span>{product.seller}</span>
            </div>
            <div id={"contents-box"}>
                <div id={"name"}>{product.name}</div>
                <div id={"price"}>{product.price}</div>
                <div id="createdAt">2022.4.21</div>
                <div id={"description"}>{product.description}</div>
            </div>
        </div>

);
}
