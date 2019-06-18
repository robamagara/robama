import React, {Component} from 'react';

class Top extends Component {

    render() {
        return (
           <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <a className="navbar-brand" href="#">RobaWriters</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-label="Toggles navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><strong>Logout</strong><span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><strong>My Orders</strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><strong>My balance</strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><strong>Get Orders</strong></a>
                    </li>
                   
                </ul>
            </div>
           </nav>
        )
    }
}
export default Top;