import React, { useState } from 'react';
import './style.css';

function Table() {

    var [topButtonStatus, toggleTopButton] = useState(false);

    window.onscroll = () => scrollFunction();

    function scrollFunction() {
        var scrollTop = window.scrollY;
        var documentHeight = document.body.offsetHeight;
        var windowHeight = window.innerHeight;
        var scrollPercent = 100 * scrollTop / (documentHeight - windowHeight)
        if (scrollPercent > 25) {
            toggleTopButton(true);
        }
        else {
            toggleTopButton(false);
        }
    }

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (

        <div>
            <section id="table">
                <table class="border-solid">
                    <tr>
                        <th>Place</th>
                        <th>Details</th>
                        <th>Year</th>
                    </tr>
                    <tr>
                        <td><a href="https://en.wikipedia.org/wiki/Zanzibar" class="inblack">Zanzibar Island, Tanzania</a></td>
                        <td>
                            The video was taken in a restaurant while we were having our brunch, and the cat passed by and stayed here.
                </td>
                        <td>2018</td>
                    </tr>
                    <tr>
                        <td><a href="https://en.wikipedia.org/wiki/Dodoma" class="inblack">Dodoma, Tanzania</a></td>
                        <td>
                            This was also in a restaurant, and this adorable pug was living with the couple who owned that restaurant.
                </td>
                        <td>2018</td>
                    </tr>
                    <tr>
                        <td><a href="https://en.wikipedia.org/wiki/Camarillo,_California" class="inblack">Camarillo, U.S.</a></td>
                        <td>
                            It happened when my friend was driving, and I saw this view.
                </td>
                        <td>2018</td>
                    </tr>
                </table>

            </section>

            <button onClick={() => backToTop()} id="top_button" title="To Top" style={{ display: topButtonStatus ? "block" : "none" }}>Top</button>
        </div>

    )

}

export default Table;