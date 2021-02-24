import { Component } from 'react';
import './style.css';

class TextPage extends Component {
    render() {
        return(
            <div>
                <section>
                    <form>
                        <label for="firstname">First name:</label><br></br>
                        <input type="text" id="firstname" name="firstname"></input><br></br>
                        <label for="lastname">Last name:</label><br></br>
                        <input type="text" id="lastname" name="lastname"></input>
                        <br></br>

                        <label for="travelplace">The Next Place You Would Like to Travle</label>
                        <br></br>
                        <div>
                            <input type="radio" name="travelplace" value="island"></input>
                            <label for="travelplace">Island</label>
                        </div>

                        <div>
                            <input type="radio" name="travelplace" value="forest"></input>
                            <label for="travelplace">Forest</label>
                        </div>

                        <div>
                            <input type="radio" name="travelplace" value="home"></input>
                            <label for="travelplace">Stay at Home</label>
                        </div>
                        <br></br>
                        <input type="submit" value="Done"></input>
                     </form>
                </section>
          </div>
        )
    }
}

export default TextPage; 