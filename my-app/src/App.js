
//import './App.css';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import Title from "./components/Title/Title";
import Input from "./components/Input/Input";

let inputValue;

function App() {
    const test =JSON.parse('{\n' +
     '\t"name": "Luke Skywalker",\n' +
     '\t"height": "172",\n' +
     '\t"mass": "77",\n' +
     '\t"hair_color": "blond",\n' +
     '\t"skin_color": "fair",\n' +
     '\t"eye_color": "blue",\n' +
     '\t"birth_year": "19BBY",\n' +
     '\t"gender": "male",\n' +
     '\t"homeworld": "https://swapi.dev/api/planets/1/",\n' +
     '\t"films": [\n' +
     '\t\t"https://swapi.dev/api/films/2/",\n' +
     '\t\t"https://swapi.dev/api/films/6/",\n' +
     '\t\t"https://swapi.dev/api/films/3/",\n' +
     '\t\t"https://swapi.dev/api/films/1/",\n' +
     '\t\t"https://swapi.dev/api/films/7/"\n' +
     '\t],\n' +
     '\t"species": [\n' +
     '\t\t"https://swapi.dev/api/species/1/"\n' +
     '\t],\n' +
     '\t"vehicles": [\n' +
     '\t\t"https://swapi.dev/api/vehicles/14/",\n' +
     '\t\t"https://swapi.dev/api/vehicles/30/"\n' +
     '\t],\n' +
     '\t"starships": [\n' +
     '\t\t"https://swapi.dev/api/starships/12/",\n' +
     '\t\t"https://swapi.dev/api/starships/22/"\n' +
     '\t],\n' +
     '\t"created": "2014-12-09T13:50:51.644000Z",\n' +
     '\t"edited": "2014-12-20T21:17:56.891000Z",\n' +
     '\t"url": "https://swapi.dev/api/people/1/"\n' +
     '}\n' +
     '          ');

    let inputText;
    const textPlaceholder ='people/1/';

    function interactive_call() {
        console.log(inputText);
    }

    function textChange(event) {
        inputText = event.target.value;
    }


    return (
    <div className="App">

        <div className="col-lg-8 col-md-8 col-sm-8">
            <Title text={'SWAPI'} />
            <div className="input-group">
                <span className="input-group-addon">https://swapi.dev/api/</span>
                <Input id="interactive" type="text" className="form-control" placeholder={textPlaceholder} onChange = {textChange}/>
                    <span className="input-group-btn">
                        <Button onClick={interactive_call} className={'btn-primary'}>Get Info</Button></span>
            </div>

            <p className="lead pad_top">Result:</p>

          <textarea>
               {JSON.stringify({test}, null, 4)}
          </textarea>

        </div>

    </div>
  );
}

export default App;
