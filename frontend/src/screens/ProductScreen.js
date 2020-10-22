import React from 'react';
import { Link } from 'react-router-dom';
import data from '../date';


function ProductScreen (props){
    console.log(props.match.params.id);
    const product= data.products.find(x=>x._id === props.match.params.id)

    return <div className="">
        <div className="back-to-result">
            <Link to='/'>חזרה</Link>
        </div>
        <div className="details">
            <div className="details-image">
                <img  className="product-image" src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        מחיר: <b>{product.price}</b>
                    </li>
                    <li>
                        תיאור:
                        <div>{product.description}</div>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        מחיר: {product.price}
                    </li>
                    <li>
                        סטטוס: {product.status}
                    </li>
                    <li>
                        <button className="button">הוסף לעגלה</button>
                    </li>

                </ul>
            </div>

        </div>
    </div>
}

export default ProductScreen    ;