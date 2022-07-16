import React from "react";
import "./body.css";
class Body extends React.Component {
    render() {
        return (
            <div class="bodyy">
                <div class="contanier">
                    <div class="bodyy__content">
                        <div class="bodyy__top">
                          
                            <h1>A warm welcome!</h1>
                            <p>Bootstrap utility classes are used to create this jumbotron since the old component has been removed
                                from the framework. Why create custom CSS when you can use utilities?

                            </p>
                            <h2>Call to action</h2>
                        </div>
                        <div class="bodyy__bottom">

                            <div class="col">
                            <i class="fa-solid fa-car"></i>
                                <h2>Fresh new layout</h2>
                                <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                            </div>
                            <div class="col">
                                <i class="fa-solid fa-cloud-arrow-down"></i>
                                <h2>Free to download</h2>
                                <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
                            </div>
                            <div class="col">
                                <i class="fa-solid fa-id-card"></i>
                                <h2>Jumbotron hero header</h2>
                                <p>The heroic part of this template is the jumbotron hero header!</p>
                            </div>
                            <div class="col">
                                <i class="fa-brands fa-bootstrap"></i>
                                <h2>Feature boxes</h2>
                                <p>We've created some custom feature boxes using Bootstrap icons!</p>
                            </div>
                            <div class="col">
                                <i class="fa-solid fa-code"></i>
                                <h2>Simple clean code</h2>
                                <p>We keep our dependencies up to date and squash bugs as they come!</p>
                            </div>
                            <div class="col">
                                <i class="fa-solid fa-circle-check"></i>
                                <h2>A name you trust</h2>
                                <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );


    }
}
export default Body;