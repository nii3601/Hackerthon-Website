import './Rules.css'

function Rules(){
    return(
        <div className="Rules">
                <div className="header">
                        <h1>Rules</h1>
                </div>
                <ul>
                        <li>
                                <h2>Each dorm has sensors installed to monitor water usage, one sensor per section</h2>
                        </li>
                        <li>
                                <h2>Our proprietary algoritms calculate your dorm and section score based on total water usage</h2>
                        </li>
                        <li>
                                <h2>Cut down on your shower time!  The average shower uses over 17 GALLONS of water!  Reducing your shower time is the easiest way to boost your dorm AND section score!</h2>
                        </li>
                        <li>
                                <h2>Check back here often for up-to-the-second updates!</h2>
                        </li>
                        <li>
                                <h2>Good luck!</h2>
                        </li>
                </ul>
        </div>
    );
}

export default Rules;