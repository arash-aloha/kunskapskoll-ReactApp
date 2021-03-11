const Destinations = (props) => {
    
    const from = (e) => {props.setDeparture(e.target.value)}
    const to = (e) => {props.setDestination(e.target.value)}

    return ( 
        <section className="Destinations">
           
            <select className="departure" onChange={from}>
                <option>Departure</option>
                <option>GÖTEBORG</option>
                <option>STOCKHOLM</option>
                <option>MALMÖ</option>
            </select>
            <p>Time: 12:00</p>

            <select className="destination" onChange={to}>
                <option>Destinations</option>
                <option>GÖTEBORG</option>
                <option>STOCKHOLM</option>
                <option>MALMÖ</option>
            </select>
            <p>Time: 12:00</p>

        </section>
     );
}
 
export default Destinations;