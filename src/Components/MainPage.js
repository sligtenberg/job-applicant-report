import Body from "./TableBody";
import Footer from "./Footer";
import Header from "./Header";

function MainPage() {
    return (
        <table className="job-applicants">
            <Header />
            <Body />
            <Footer />
        </table>
    );
}

export default MainPage;
