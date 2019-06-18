import React, {Component} from 'react';

class Welcome extends Component {

    render() {
        return(
            <div>
            <h3>WELCOME TO THE LEADING PLATFORM<a>FOR FREELANCE WRITERS</a></h3>
            <h5>Competitive salaries and a constant stream of assignments guaranteed</h5>

            <button type="button" className="btn btn-info btn-lg">Place Bids for New Orders Now!</button>
            <hr />
            </div>
        )
    }
}
export default Welcome;