import ProductPost from "../elements/ProductPost"
import "../../css/HomePage.css";

export default function Homepage() {
    return(
        <div style={{height: "100%", width: "100%"}}>
            <h1>Home Page</h1>
            <div className="sidescrolling-box">
                <ProductPost itemName="Broom" itemPrice="$599.99"/>
                <ProductPost itemName="Wand" itemPrice="$10.99"/>
                <ProductPost itemName="Flask" itemPrice="$9.99"/>
                <ProductPost itemName="Cats" itemPrice="$2.50"/>

            </div>
            
        </div>
    );
}