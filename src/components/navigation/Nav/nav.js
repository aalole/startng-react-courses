import React from "react";
import "./nav.css";
import logo from '../../../assets/images/logo.png'

const Navbar = () => {
	return (
		<div className="navbar">
			<header>
				<div className="container">
					<nav className="navbar navbar-expand-lg navbar-light navigation py-5 px-1">
						<a className="navbar-brand" href="/">
							<img
								src={logo}
								alt="logo"
							/>
						</a>
						<button
							className="navbar-toggler d-lg-none"
							type="button"
							data-toggle="collapse"
							data-target="#collapsibleNavId"
							aria-controls="collapsibleNavId"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							{" "}
							<i
								style={{ color: "#E7332B" }}
								className="fas fa-bars"
							/>
						</button>
						<div
							className="collapse navbar-collapse"
							id="collapsibleNavId"
						>
							<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
								<li className="nav-item">
									<a
										className="nav-link ml-lg-3 text-danger"
										href="/"
									>
										Home
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link ml-lg-3"
										href="/"
									>
										Curriculum
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link ml-lg-3"
										href="/"
									>
										Previous Techies
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link ml-lg-3"
										href="/"
									>
										Mentors
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link ml-lg-3"
										href="/"
									>
										Contact
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link btn mt-3 mt-lg-0 h-btn px-4 text-white"
										href="/"
									>
										Join StartNG
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
