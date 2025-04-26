import { useParams } from "react-router-dom";
import Product from "../Component/Product";
import VideoPlayer from "../Component/VideoPlayer";
import { Videos } from "../Context/Data";
import {items} from '../Context/Data'

function ProductByCategory() {
    const { cat } = useParams();

    const videoCategory = Videos.find(
        (vid) => vid.category.toLowerCase() ==cat.toLowerCase()
    );

    const productCategory = items.filter(
        (pro) => pro.category.toLowerCase() === cat.toLowerCase()
    );

    return (
        <div>
           <VideoPlayer src={videoCategory.url}></VideoPlayer>
           <Product item={productCategory}></Product>
        </div>
    );
}

export default ProductByCategory;
