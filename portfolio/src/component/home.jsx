import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 description">
                    <h1>I am Ken Ford. <br /> A Web Designer</h1>
                    <p>I transition from Education line to TECH. <br /> I had to enrol for Fullstac bootcamp course and Coursera certified! </p>
                    <Link to="/Contact" className="btn btn-lg hire text-white bg-primary">Hire me</Link>
                    <Link to="Services" className="btn btn-lg view">View Portfolio</Link>
                </div>
                <div className="col-12 col-md-6 text-center">
                    <img src="https://media.istockphoto.com/id/1391718981/photo/portrait-of-a-confident-young-businessman-standing-with-his-arms-crossed-in-an-office.jpg?s=612x612&w=0&k=20&c=eF_0QCtw-Y8Q2c4_xQe6KTkcSPiGCT6qBf6nuavE2Dg=" className="img-fluid" alt="image" width="100%" />
                </div>
            </div>
        </div>
    );
}
export default Home;