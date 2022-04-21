
import { useParams, BrowserRouter as router } from 'react-router-dom';
import axios from "axios";
import {useEffect, useState} from "react";


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

    return (
            <h1>product {id} </h1>
    );

}
export default ProductPage;
