import { useParams } from "react-router-dom"
import {items} from '../Context/Data'
import Product from '../Component/Product'
function SearchProduct(){
    const {term}=useParams();
    const searchProduct=items.filter((pro)=>pro.title.toLowerCase().includes(term.toLowerCase()));
return (
    <>
    <div>
        <Product item={searchProduct}></Product>
    </div>
    </>
)
}
export default SearchProduct