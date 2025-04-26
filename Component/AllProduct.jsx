import { useContext } from 'react';
import DataContext from '../Context/DataContex'
import Product from './Product';
import VideoPlayer from './VideoPlayer';
import ShopByCategory from './ShopByCategory';
function AllProduct(){
    const {products}=useContext(DataContext);
    console.log(products);
    return(
        <>
        <div>
            <VideoPlayer src={"https://www.apple.com/105/media/ww/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome3/xlarge_2x.mp4"}></VideoPlayer>
            {/* <ShopByCategory></ShopByCategory> */}
            <Product item={products}></Product>
        </div>
        </>
    )
}

export default AllProduct;