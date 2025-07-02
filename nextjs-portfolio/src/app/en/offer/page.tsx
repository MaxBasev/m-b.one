'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function EnglishOfferPage() {
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
							<Link href="/en">Max Basev</Link>
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
				<section id="about" className="about">
					<div className="container">
						<div className="section-title">
							<h2>PUBLIC OFFER AGREEMENT</h2>
						</div>

						<div className="content">
							<h3>1. General Provisions</h3>
							<p className="mb-4">1.1. This document is an offer by Private Entrepreneur Basev Maksim Igorevich, hereinafter referred to as the &quot;Service Provider,&quot; to conclude a service agreement under the conditions specified below.</p>
							<p className="mb-4">1.2. This agreement is a public offer in accordance with the Civil Code of the Kyrgyz Republic. Acceptance of this offer means the conclusion of an agreement on the terms set out herein.</p>

							<h3>2. Subject of the Agreement</h3>
							<p className="mb-4">2.1. The Service Provider undertakes to provide services in software development, and the Client undertakes to accept these services and pay for them in accordance with the terms of this agreement.</p>

							<h3>3. Procedure for Concluding the Agreement</h3>
							<p className="mb-4">3.1. The agreement is considered concluded from the moment the Client accepts the terms of this offer by paying for the services of the Service Provider.</p>

							<h3>4. Rights and Obligations of the Parties</h3>
							<p className="mb-4">4.1. The Service Provider undertakes to:<br />Provide the services in a timely manner and with proper quality.</p>
							<p className="mb-4">4.2. The Client undertakes to:<br />Pay for the services of the Service Provider in full and within the established time frames.</p>

							<h3>5. Cost and Payment Procedure</h3>
							<p className="mb-4">5.1. The cost of services is determined based on a price list.</p>
							<p className="mb-4">5.2. Payment is made to the following bank account of the Service Provider:</p>

							<div className="row">
								<div className="col-lg-6">
									<h4>EUR</h4>
									<p><b>Beneficiary name:</b> PE BASEV MAKSIM IGOREVICH</p>
									<p><b>Beneficiary account #:</b> 1285330002955132</p>
									<p><b>Account currency:</b> EUR</p>
									<p><b>Beneficiary Bank:</b> Kyrgyz Investment and Credit Bank</p>
									<p><b>SWIFT:</b> KICBKG22</p>
								</div>
								<div className="col-lg-6">
									<h4>USD</h4>
									<p><b>Beneficiary name:</b> PE BASEV MAKSIM IGOREVICH</p>
									<p><b>Beneficiary account #:</b> 1285330002955233</p>
									<p><b>Account currency:</b> USD</p>
									<p><b>Beneficiary Bank:</b> Kyrgyz Investment and Credit Bank</p>
									<p><b>BIC:</b> 128001</p>
									<p><b>SWIFT:</b> KICBKG22</p>
								</div>
							</div>

							<h3>6. Liability of the Parties</h3>
							<p className="mb-4">6.1. For failure to perform or improper performance of their obligations, the parties shall be liable in accordance with the legislation of the Kyrgyz Republic.</p>

							<h3>7. Final Provisions</h3>
							<p className="mb-4">7.1. This agreement is valid from the moment of its conclusion until the full fulfillment of the obligations by both parties.</p>
							<p className="mb-4">7.2. Any disputes and disagreements shall be resolved through negotiations. If no agreement can be reached, the disputes shall be resolved in court at the location of the Service Provider.</p>
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