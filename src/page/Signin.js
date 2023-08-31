import React from "react";

class Signin extends React.Component {
    
    render() {
        return (
            <div className="pg-wrap signin-wrap">
                <h3 className="pg-title">Sgin-In</h3>
                <ul className="pg-contents pg-type-lists">
                    <li className="list">
                        <h4 className="ipt-title">email</h4>
                        <div className="ipt-contents">{/* error class name : red */}
                            <input type="text" placeholder="example@google.com"/>
                        </div>
                    </li>
                    <li className="list">
                        <h4 className="ipt-title">password</h4>
                        <div className="ipt-contents">
                            <input type="text" placeholder="example@google.com"/>
                        </div>
                    </li>
                </ul>
                <button type="button" className="btn btn-type-full">submit</button>
            </div>
        );
    }
}

export default Signin;