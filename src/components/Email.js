import { Component } from 'react';
import './style.css';

class Email extends Component {

    onSubmit = () => {
        var e = document.getElementById("email");
        var result = document.getElementById("result");
        console.log(e.value);
        if ((e.value.endsWith(".edu") || e.value.endsWith(".com") || e.value.endsWith(".EDU") || e.value.endsWith(".COM")) && e.value.includes("@")) {
            result.innerHTML = "Email successfully recorded";
        }
        else {
            result.innerHTML = "Email is invalid";
        }
    }

    render() {
        return (
            <div>
                <section>
                <label for="fname">Email Address:</label><br></br>
                <input type="text" id="email" name="email"></input><br></br>
                <br></br>
                <button onClick={() => this.onSubmit()} id="sub">Submit</button>
                <p id="result"></p>
                </section>
            </div>
        )
    }
}

export default Email; 