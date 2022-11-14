import StateDistrict from '../../API/StateDistrict';

const State = () => {
    const result = StateDistrict.map((elem) => {
        return <><option key={elem.id} value={elem.state}>{elem.state.toUpperCase()}</option></>
    });

    return(result);
}




export default State;