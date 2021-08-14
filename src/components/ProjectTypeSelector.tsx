/**
 * @author The InCode Devs
 * @copyright 2018-2021 The InCode Developers <https://github.com/InCodeDevs>
 */

import * as React from "react";
import { Options } from "../Options";
import { TempOptions } from "../TempOptions";

import {UIManager} from "../utils/UIManager";
import {ProjectManager} from "../utils/ProjectManager";
import {MainMenu} from "./MainMenu";

export class ProjectTypeSelector extends React.Component {

    render() {
        return (
            <>
                <div style={{
                    top: "50%",
                    left: "50%",
                    transform: 'translate(-50%, -50%)',
                    position: "absolute",
                    textAlign: "center"
                }}>
                    <h1 style={{color: "#F8F9FAFF"}}>Projekt Typ auswählen</h1>
                    <div className={"menu-choose-editors-root"}>
                        <div className={"menu-choose-editor"}>
                            <img
                                src={"/assets/website.png"} width={128}
                                height={128}/>
                            <p className={"menu-editor-description"}>
                                Website <br/>
                                <span style={{fontFamily: "Comic Sans MS"}}>Eine einfache Website</span>
                            </p>
                        </div>
                        <div className={"menu-choose-editor"}>
                            <img
                                src={"/assets/website.png"} width={128}
                                height={128}/>
                            <p className={"menu-editor-description"}>
                                Styled Website <br/>
                                <span style={{fontFamily: "Comic Sans MS"}}>Eine vordesignte Website</span>
                            </p>
                        </div>
                        <div className={"menu-choose-editor"}>
                            <img
                                src={"/assets/desktop.png"} width={128}
                                height={128}/>
                            <p className={"menu-editor-description"}>
                                Desktop App <br/>
                                <span style={{fontFamily: "Comic Sans MS"}}>Eine einfache Desktop Anwendung</span>
                            </p>
                        </div>
                    </div>
                    <div className={"menu-choose-editors-root"}>
                        <div className={"menu-choose-editor"}>
                            <img
                                src={"/assets/desktop.png"} width={128}
                                height={128}/>
                            <p className={"menu-editor-description"}>
                                Styled Desktop App <br/>
                                <span style={{fontFamily: "Comic Sans MS"}}>Eine vordesignte Desktop Anwendung</span>
                            </p>
                        </div>
                        <div className={"menu-choose-editor"}>
                            <img
                                src={"/assets/game.png"} width={128}
                                height={128}/>
                            <p className={"menu-editor-description"}>
                                Game <br/>
                                <span style={{fontFamily: "Comic Sans MS"}}>Ein einfaches Spiel</span>
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
