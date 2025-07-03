'use client';
import { useState, useCallback } from 'react';
import Link from 'next/link';

export default function RussianOfferPage() {
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
				<section id="about" className="about">
					<div className="container">
						<div className="section-title">
							<h2>ДОГОВОР ОФЕРТЫ</h2>
						</div>

						<div className="content">
							<h3>1. Общие положения</h3>
							<p className="mb-4">1.1. Настоящий документ является предложением ИП Басев Максим Игоревич, именуемого в дальнейшем &quot;Исполнитель&quot;, заключить договор на предоставление услуг в соответствии с изложенными ниже условиями.</p>
							<p className="mb-4">1.2. Настоящий договор является публичной офертой в соответствии с Гражданским кодексом Кыргызской Республики. Принятие настоящей оферты означает заключение договора на изложенных в нем условиях.</p>

							<h3>2. Предмет договора</h3>
							<p className="mb-4">2.1. Исполнитель обязуется оказать услуги разработки программного обеспечения, а Заказчик обязуется принять эти услуги и оплатить их в соответствии с условиями настоящего договора.</p>

							<h3>3. Порядок заключения договора</h3>
							<p className="mb-4">3.1. Договор считается заключенным с момента принятия Заказчиком условий настоящей оферты путем оплаты услуг Исполнителя.</p>

							<h3>4. Права и обязанности сторон</h3>
							<p className="mb-4">4.1. Исполнитель обязуется:<br />Оказывать услуги в срок и с надлежащим качеством.</p>
							<p className="mb-4">4.2. Заказчик обязуется:<br />Оплатить услуги Исполнителя в полном объеме и в установленные сроки.</p>

							<h3>5. Стоимость и порядок расчетов</h3>
							<p className="mb-4">5.1. Стоимость услуг определяется на основании прейскуранта.</p>
							<p className="mb-4">5.2. Оплата производится на расчетный счет ИП Басев Максим Игоревич:</p>

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

							<h3>6. Ответственность сторон</h3>
							<p className="mb-4">6.1. За неисполнение или ненадлежащее исполнение своих обязательств стороны несут ответственность в соответствии с законодательством Кыргызской Республики.</p>

							<h3>7. Заключительные положения</h3>
							<p className="mb-4">7.1. Настоящий договор действует с момента его заключения и до полного исполнения обязательств.</p>
							<p className="mb-4">7.2. Все споры и разногласия решаются путем переговоров, в случае невозможности урегулирования - в суде по месту нахождения Исполнителя.</p>
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