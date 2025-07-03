'use client';
import { useState, useCallback } from 'react';
import Link from 'next/link';

export default function RussianPage() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = useCallback(() => {
		setIsMenuOpen(prev => {
			const newState = !prev;
			if (newState) {
				document.body.classList.add('mobile-nav-active');
			} else {
				document.body.classList.remove('mobile-nav-active');
			}
			return newState;
		});
	}, []);

	return (
		<div>
			{/* Mobile nav toggle button */}
			<button
				type="button"
				className={`mobile-nav-toggle d-xl-none`}
				onClick={toggleMenu}
			>
				<i className="fa fa-bars"></i>
			</button>

			{/* Header */}
			<header id="header" className={isMenuOpen ? 'mobile-nav-active' : ''}>
				<div className="d-flex flex-column">
					<div className="profile">
						<img src="/MB_Logo.png" alt="Max Basev Logo" className="img-fluid rounded-circle" width="120" height="120" />
						<h1 className="text-light">
							<Link href="/ru">Max Basev</Link>
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
								<Link href="/ru/offer">
									<i className="bx bx-file-blank"></i> <span>Договор оферты</span>
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
							<h2>ИП Басев Максим Игоревич</h2>
							<p>Разработка программного обеспечения</p>
						</div>

						<div className="row">
							<div className="col-lg-4">
								<picture>
									<source srcSet="/img/profile-img.webp" type="image/webp" />
									<img src="/img/profile-img.jpg" className="img-fluid" alt="" width="400" height="400" />
								</picture>
							</div>
							<div className="col-lg-8 pt-4 pt-lg-0 content">
								<h3>Программист</h3>
								<div className="row">
									<div className="col-lg-6">
										<ul>
											<li>
												<i className="fa fa-chevron-right"></i>
												<strong>Дата рождения:</strong> 8 января 1991
											</li>
											<li>
												<i className="fa fa-chevron-right"></i>
												<strong>Сайт:</strong> <a href="https://m-b.one">m-b.one</a>
											</li>
											<li>
												<i className="fa fa-chevron-right"></i>
												<strong>Телефон:</strong> +996 502560036
											</li>
											<li>
												<i className="fa fa-chevron-right"></i>
												<strong>Город:</strong> Бишкек, Кыргызстан
											</li>
										</ul>
									</div>
									<div className="col-lg-6">
										<ul>
											<li>
												<i className="fa fa-chevron-right"></i>
												<strong>Возраст:</strong> 34
											</li>
											<li>
												<i className="fa fa-chevron-right"></i>
												<strong>Образование:</strong> Высшее
											</li>
											<li>
												<i className="fa fa-chevron-right"></i>
												<strong>Email:</strong> <a href="mailto:connect@m-b.one">connect@m-b.one</a>
											</li>
										</ul>
									</div>
								</div>
								<p>
									Я, Максим Басев, занимаюсь профессиональной разработкой программного обеспечения. Основная
									специализация — создание программных решений, веб-приложений и сервисов для различных отраслей бизнеса.
									Все проекты выполняются с использованием современных технологий и методов программирования для обеспечения
									высокого качества, безопасности и надежности.
								</p>
								<p><b>Услуги</b></p>
								<ul>
									<li>- Разработка кастомных программных решений для бизнеса</li>
									<li>- Создание и поддержка веб-приложений</li>
									<li>- Оптимизация и доработка существующих программных продуктов</li>
									<li>- Консультации по техническим вопросам и архитектуре ПО</li>
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
								<h2>Контакты</h2>
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
										<h4>Телефон:</h4>
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
							<h2>Реквизиты</h2>
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