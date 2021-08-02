import * as React from "react";
import Button from 'react-bootstrap/Button';
import {createBlockly, createMonaco, hideMenu, showMenuBar, Options} from "../index";
import {List} from "react-bootstrap-icons";
import {Dropdown, FormControl, InputGroup} from "react-bootstrap";

export class MainMenu extends React.Component {

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
                    <h1 style={{color: "#F8F9FAFF"}}>Editor auswählen</h1>
                    <div className={"menu-choose-editors-root"}>
                        <div className={"menu-choose-editor"} onClick={this.openBlockEditor}>
                            <img
                                src={"https://developers.google.com/blockly/images/logos/logo_only.png"} width={128}
                                height={128}/>
                            <p className={"menu-editor-description"}>
                                Block <br /> Editor
                            </p>
                        </div>
                        <div className={"menu-choose-editor"} onClick={this.openMonaco}>
                            <img
                                src={"https://developers.google.com/blockly/images/logos/logo_only.png"} width={128}
                                height={128}/>
                            <p className={"menu-editor-description"}>
                                Code <br /> Editor
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    toggleLivePreview(){
        console.log(!Options.enableLivePreview)
        Options.enableLivePreview = !Options.enableLivePreview;
    }

    openBlockEditor() {
        hideMenu();
        showMenuBar();
        createBlockly();
    }

    openMonaco() {
        hideMenu();
        showMenuBar()
        createMonaco()
    }
}
