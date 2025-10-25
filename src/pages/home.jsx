import "./home.css"
import img from "../assets/image.png";

function Home(){
    return(
        <div className="home">
            <div className="about-us">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt, aliquid ducimus facere quisquam atque earum soluta ex sequi. Natus iste consequatur fugit neque eveniet provident obcaecati sint asperiores laudantium! Nisi saepe voluptatibus sequi, corporis a, natus eum earum voluptatum amet excepturi eligendi reiciendis asperiores? Repellat dicta obcaecati ipsa et exercitationem ullam doloribus incidunt nesciunt quam consequatur architecto quisquam aliquam, sit veritatis distinctio soluta voluptate, repudiandae, perferendis repellendus. Reiciendis deleniti ab molestias libero ratione dolorem quae provident esse dolore sint enim officia voluptas eos accusamus modi adipisci fuga non, architecto laborum dicta ullam quisquam impedit expedita ipsum! Eos, cupiditate ex?</p>
            </div>

            <div className="about-us highlights">
                <h1>Highlights</h1>


                <div className="scroll-track">
                    {/* Duplicate set for seamless loop */}
                    <img src={img} alt="Highlight 1" />
                    <img src={img} alt="Highlight 2" />
                    <img src={img} alt="Highlight 3" />
                    <img src={img} alt="Highlight 4" />

                    <img src={img} alt="Highlight 1" />
                    <img src={img} alt="Highlight 2" />
                    <img src={img} alt="Highlight 3" />
                    <img src={img} alt="Highlight 4" />
                </div>
            </div>


        </div>
    );
}

export default Home;