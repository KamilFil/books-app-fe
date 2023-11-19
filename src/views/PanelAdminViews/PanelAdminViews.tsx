import "./PanelAdminViews.css"
import {PanelAdminBooks} from "./PanelAdminBooks/PanelAdminBooks";
import React from "react";
import {Link} from "react-router-dom";

export const PanelAdminViews = () => {

    return (
        <div className="panel-admin-page">
            <div className="panel-admin-menu">
                <div className="panel-admin-menu_img">
                    <img src="/img/logo.png" alt={'logo'}/>

                </div>
                <nav>
                    <ul>
                        <Link to={`/`}>Strona Główna</Link>
                    </ul>
                </nav>
            </div>
            <main>
                <div className="dashboard-admin">
                    <div className="dashboard-head">
                        <div className="dashboard-head_container">
                        <h1>Panel Admin</h1>
                            <div className="user-info">
                                <p>Username</p>
                                <img src="/img/avatar.jpg" alt='avatar'/>
                            </div>
                        </div>
                    </div>

                        <PanelAdminBooks/>


                    <div className="footer-dash">
                    </div>
                </div>

            </main>
        </div>
    )
}