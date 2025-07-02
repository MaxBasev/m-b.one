'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function EnglishPage() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (mounted) {
			if (isMenuOpen) {
				document.body.classList.add('mobile-nav-active');
			} else {
				document.body.classList.remove('mobile-nav-active');
			}
		}
	}, [isMenuOpen, mounted]);

	if (!mounted) {
		return null;
	}

	return (
		<div>
			{/* Mobile nav toggle button */}
			<button
				type="button"
				className={`mobile-nav-toggle d-xl-none`}
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			>
				<i className="fa fa-bars"></i>
			</button>

			{/* Header */}
			<header id="header" className={isMenuOpen ? 'mobile-nav-active' : ''}>
				<div className="d-flex flex-column">
					<div className="profile">
						<img src="/MB_Logo.png" alt="Max Basev Logo" className="img-fluid rounded-circle" width="120" height="120" />
						<h1 className="text-light">
							<Link href="/">Max Basev</Link>
						</h1>
					</div>

					<nav className="nav-menu">
						<ul>
							<li>
								<Link href="/en">
									<span className="lang-flag">EN</span> <span>English</span>
								</Link>
							</li>
							<li>
								<Link href="/ru">
									<span className="lang-flag">RU</span> <span>Russian</span>
								</Link>
							</li>
							<li>
								<Link href="/en/offer">
									<i className="bx bx-file-blank"></i> <span>Public Offer Agreement</span>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>

			{/* Main Content */}
			<main id="main">
				{/* About Section */}
				<section id="about" className="about">
					<div className="container">
						<div className="section-title">
							<h2>PE Basev Maksim Igorevich</h2>
							<p>Software development</p>
						</div>

						<div className="row">
							<div className="col-lg-4">
								<img src="/img/profile-img.jpg" className="img-fluid" alt="" width="400" height="400" />
							</div>
							<div className="col-lg-8 pt-4 pt-lg-0 content">
								<h3>Software developer</h3>
								<div className="row">
									<div className="col-lg-6">
										<ul>
											<li>
												<i className="fa fa-chevron-right"></i>
												<strong>Birthday:</strong> 8 January 1991
											</li>
											<li>
												<i className="fa fa-chevron-right"></i>
												<strong>Website:</strong> <a href="https://m-b.one">m-b.one</a>
											</li>
											<li>
												<i className="fa fa-chevron-right"></i>
												<strong>Phone:</strong> +996 502560036
											</li>
											<li>
												<i className="fa fa-chevron-right"></i>
												<strong>City:</strong> Bishkek, Kyrgyzstan
											</li>
										</ul>
									</div>
									<div className="col-lg-6">
										<ul>
											<li>
												<i className="fa fa-chevron-right"></i>
												<strong>Age:</strong> 34
											</li>
											<li>
												<i className="fa fa-chevron-right"></i>
												<strong>Degree:</strong> Master
											</li>
											<li>
												<i className="fa fa-chevron-right"></i>
												<strong>Email:</strong> <a href="mailto:connect@m-b.one">connect@m-b.one</a>
											</li>
										</ul>
									</div>
								</div>
								<p>
									I&apos;m Max Basev, a professional software developer specializing in building custom software solutions, web applications,
									and services for a wide range of industries. I use modern technologies and best programming practices to ensure all my
									projects meet the highest standards of quality, security, and reliability.
								</p>
								<p><b>Services</b></p>
								<ul>
									<li>- Custom software development for businesses</li>
									<li>- Web application development and support</li>
									<li>- Optimization and improvement of existing software products</li>
									<li>- Technical consulting and software architecture advisory</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section id="contact" className="contact section-bg">
					<div className="container">
						<div className="row">
							<div className="section-title">
								<h2>Contacts</h2>
							</div>
							<div className="col-lg-12 d-flex align-items-stretch">
								<div className="info">
									<div className="email">
										<i className="fa fa-telegram"></i>
										<h4>Telegram:</h4>
										<p><a href="https://t.me/maxbasev">@maxbasev</a></p>
									</div>
									<div className="email">
										<i className="fa fa-envelope"></i>
										<h4>Email:</h4>
										<p><a href="mailto:connect@m-b.one">connect@m-b.one</a></p>
									</div>
									<div className="phone">
										<i className="fa fa-phone"></i>
										<h4>Phone:</h4>
										<p>+996 502560036</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Banking Details Section */}
				<section id="banking" className="about">
					<div className="container">
						<div className="section-title">
							<h2>Banking Details</h2>
						</div>

						<div className="row">
							<div className="col-lg-12 pt-4 pt-lg-0 content">
								<div className="row">
									<div className="col-lg-6">
										<h3>EUR</h3>
										<p><b>Beneficiary name:</b> PE BASEV MAKSIM IGOREVICH</p>
										<p><b>Beneficiary account #:</b> 1285330002955132</p>
										<p><b>Account currency:</b> EUR</p>
										<p><b>Beneficiary Bank:</b> Kyrgyz Investment and Credit Bank</p>
										<p><b>SWIFT:</b> KICBKG22</p>
									</div>

									<div className="col-lg-6">
										<h3>USD</h3>
										<p><b>Beneficiary name:</b> PE BASEV MAKSIM IGOREVICH</p>
										<p><b>Beneficiary account #:</b> 1285330002955233</p>
										<p><b>Account currency:</b> USD</p>
										<p><b>Beneficiary Bank:</b> Kyrgyz Investment and Credit Bank</p>
										<p><b>BIC:</b> 128001</p>
										<p><b>SWIFT:</b> KICBKG22</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer id="footer">
				<div className="container">
					<div className="copyright">
						2018 - 2025 &copy; MaxBasev
					</div>
				</div>
			</footer>
		</div>
	);
} 