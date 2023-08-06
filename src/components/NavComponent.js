export default function Nav({ onNavClick }) {
    const endpointToId = {
        Listings: "Listings",
        CreatePost: "CreatePost",
        Profile: "Profile",
        SecSettings: "SecSettings",
        MyOffers: "MyOffers",
    };

    const handleNavClick = (endpoint) => {
        onNavClick(endpoint);
        const activeId = endpointToId[endpoint] || "Listings";
        const links = document.querySelectorAll(".links a");
        links.forEach((link) => {
            if (link.id === activeId) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    };

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("user");
    };

    return (
        <div className="nav">
            <div className="title">
                <h2>Pearl</h2>
            </div>
            <div className="links">
                <a className="active" id="Listings" onClick={() => handleNavClick("Listings")}>Hire a Service</a>
                <a id="" onClick={() => handleNavClick("my-hires")}>My Hires</a>
                <a id="CreatePost" onClick={() => handleNavClick("CreatePost")}>Offer a Service</a>
                <a id="" onClick={() => handleNavClick("MyOffers")}>My Offers</a>
                <a id="Profile" onClick={() => handleNavClick("Profile")}>My Profile</a>
                <a className="logout" href="/" onClick={handleLogout}>Log Out</a>
            </div>
        </div>
    );
}