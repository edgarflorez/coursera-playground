// import React from "react";

function Fruits({ msg, fruits}) {
    // const [fruits] = React.useState([
    //     {fruitName: 'apple', id: 1},
    //     {fruitName: 'apple', id: 2},
    //     {fruitName: 'plum', id: 3},
    // ]);
     
    return (
        <div>
            {msg} 
            {/* {fruits.map(f => <p key={f.id}>{f.fruitName}</p>)} */}
            {fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    )
}

export default Fruits;