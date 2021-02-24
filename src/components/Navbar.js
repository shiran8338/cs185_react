import { Component } from 'react';
import "./style.css";

class Navbar extends Component {
    constructor() {
        super(); 
        this.state = {
            hovered: [
                {
                    id: 0,
                    hover: false
                },
                {
                    id: 1,
                    hover: false
                },
                {
                    id: 2,
                    hover: false
                },
                {
                    id: 3,
                    hover: false
                },
                {
                    id: 4,
                    hover: false
                },
                {
                    id: 5,
                    hover: false
                },
            ]
        }
    }
    render() {
        const addStyle = (tab) => {
            var style
            if (this.props.active_tab === tab.id) {
                style = {textDecoration: 'underline'}
            }
            else {
                if (this.state.hovered[tab.id].hover === true) {
                    style = {textDecoration: 'hover'}
                }
                else {
                    style = {textDecoration: 'none'}
                }
            }
            return style; 
        }

        const onTabChange = (tab) => {
            this.props.changeTabs(tab.id); 
        }

        return(
            <div className="navbar">
                {this.props.tabs.map((tab) =>
                    tab.id === 1 ? <h1 onClick={onTabChange.bind(this, tab)} style={addStyle(tab)} className="navbar-entry entry1">{tab.title}</h1> 
                        : <h1 onClick={onTabChange.bind(this, tab)} style={addStyle(tab)} className="navbar-entry entry">{tab.title}</h1>
                )}
            </div>
        )
    }
}

export default Navbar;

