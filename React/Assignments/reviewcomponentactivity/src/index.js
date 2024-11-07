import React from 'react';
import ReactDOM from 'react-dom/client';


// function NumberSquares() {
//   const squares = [];
//   for (let i = 1; i <= 100; i++) {
//     squares.push(
//       <div key={i} className="square">
//         {i}
//       </div>
//     );
// }
//   return (
//   <div className="container">{squares}</div>
// )
// };


const boxStyle={
    display: "inline-block",
    width: "50px",
    height: "50px",
    margin: "5px",
    textAlign: "center",
    lineHeight: "50px",
}
const BoxNumGenerator=(props)=>{
  const formatArrayNum=props.numberList.map(eachNum=><li className={boxStyle}>{eachNum}</li>)
  return(
    <div>
      {formatArrayNum}
    </div>
  )
}

const NumberContainer=()=>{
  const arrayNum=[1,2,3,4]
  return(
    <div>
      <BoxNumGenerator numberList={arrayNum}/>
    </div>
  )

}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <NumberContainer />
  </>
);