import React from "react";
import { useHistory } from "react-router-dom";
import { ButtonGroup, Button } from 'reactstrap';
// import { FaSignInAlt } from "react-icons/fa";
// import { MdSwitchAccount } from "react-icons/md";
import sign from '../img/signup.png';
import log from '../img/login.png';

//Use in Homepage component for login or signup user
function NoLoggedIn() {
    let history = useHistory();
    return (
        <ButtonGroup>
            <Button className='btn btn-m' style={{ color: '#bfe64b' }}onClick={evt => {history.push('/signup')}} type="Signup">
            Signup <img src={sign} alt="signup" style={{ height:'30px', width:'30px'}} />
                {/* <h4><MdSwitchAccount /> </h4>  */}
                 </Button>
            <Button className='btn btn-m' style={{ color: '#bfe64b' }} onClick={evt => {history.push('/login')}} type="Login"> 
            Login <img src={log} alt="login" style={{ height:'30px', width:'30px'}} />
            {/* <h4> <FaSignInAlt /></h4>  */}
            </Button>
        </ButtonGroup>
    )
}

export default NoLoggedIn;