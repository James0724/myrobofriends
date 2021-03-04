import { React } from "react";

const card = ({name, email, id}) => {
    return (<div className='tc bg-yellow dib pa3 ma2 grow bw3 shadow-5 br4'>
        <img src={`https://robohash.org/1${id}`} alt='robots pic' />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div> );
}
 
export default card;