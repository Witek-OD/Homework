import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";

function Button({ className,btnClick}) {

    return (
        <>
            <Button onClick={btnClick} className={className}>Get Info</Button>
        </>
    );
}

export default Button;