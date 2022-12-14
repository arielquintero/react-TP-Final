import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemConutQuanty = ({ stock = 10, initial = 1 }) => {

    const [count, setCount] = useState(initial);

    const add = () => count < stock && setCount(count + 1);
    const subtract = () => count > initial && setCount(count - 1);

    //  const handleOnAdd = () => onAdd(count);



  return (
    <div>
        <div className="header-card-count">
                <span>Cantidad: {count}</span>
            </div>
            <div className="body-card-count">
                <button className="button-card-count-add" onClick={add}>
                    {" "}
                    +{" "}
                </button>
                <button className="button-card-count-subtract" onClick={subtract}>
                    {" "}
                    -{" "}
                </button>
            </div>
    </div>
  )
}

export default ItemConutQuanty;