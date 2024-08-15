import React from 'react';
import '../../App.css';
import {useTheme} from "../ThemeContext";

const AboutMe = () => {
    const {theme} = useTheme();

    return (
        <div className={theme==='light' ? 'light-theme':'dark-theme'}>
            <div className="container">
                <h1>About Me </h1>
                Lorem ipsum dolor sit amet. Est dolor eaque vel totam consequuntur eos obcaecati fugit a consequuntur expedita. Et laboriosam voluptatibus est repellat dolores ab magni nihil est magnam quos. Et quia accusamus ut nihil quaerat ex veritatis similique sed officia repellendus et officia Quis eos iure mollitia est tempora consequatur.

                Ex iste neque sed eligendi tempora ex iusto excepturi et minima quibusdam est harum repudiandae. Non laborum veniam ea reiciendis alias et tempore sunt. Sed quisquam saepe qui distinctio error et tenetur aperiam qui quis dicta.

                Aut temporibus quos ut quae molestias hic accusantium omnis non totam quas qui similique omnis. Quo fugit nostrum aut quam voluptas sit vero voluptas.
            </div>
        </div>
    );
};

export default AboutMe;