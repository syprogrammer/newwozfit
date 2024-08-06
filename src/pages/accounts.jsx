import React from 'react'

const accounts = () => {
    return (
        <div>
            <>
                {/*=============== HEADER ===============*/}
                <header className="header">
                    <div className="header__top">
                        <div className="header__container container">
                            <div className="header__contact">
                                <span>+91 8527703997</span>
                                <span> Our location</span>
                            </div>
                            <p className="header__alert-news">
                                Super Value Deals - Save more with coupons
                            </p>
                            <a href="login-register.html" className="header__top-action">
                                Log In / Sign Up
                            </a>
                        </div>
                    </div>
                    <nav className="nav container">
                        <a href="index.html" className="nav__logo">
                            <img
                                src="assets/img/wozfitz-removebg-preview (1).png"
                                alt=""
                                className="nav__logo-img"
                            />
                        </a>
                        <div className="nav__menu" id="nav-menu">
                            <div className="nav__menu-top">
                                <a href="index.html" className="nav__menu-logo">
                                    <img src="assets/img/logo.svg" alt="" />
                                </a>
                                <div className="nav__close" id="nav-close">
                                    <i className="fi fi-rs-cross-small" />
                                </div>
                            </div>
                            <ul className="nav__list">
                                <li className="nav__item">
                                    <a href="index.html" className="nav__link">
                                        Home
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a href="shop.html" className="nav__link">
                                        Shop
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a href="accounts.html" className="nav__link active-link">
                                        My Account
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a href="compare.html" className="nav__link">
                                        Compare
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a href="login-register.html" className="nav__link">
                                        Login
                                    </a>
                                </li>
                            </ul>
                            <div className="header__search">
                                <input
                                    type="text"
                                    placeholder="Search for items..."
                                    className="form__input"
                                />
                                <button className="search__btn">
                                    <img src="assets/img/search.png" alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="header__user-actions">
                            <a href="wishlist.html" className="header__action-btn">
                                <img src="assets/img/icon-heart.svg" alt="" />
                                <span className="count">3</span>
                            </a>
                            <a href="cart.html" className="header__action-btn">
                                <img src="assets/img/icon-cart.svg" alt="" />
                                <span className="count">3</span>
                            </a>
                            <div className="header__action-btn nav__toggle" id="nav-toggle">
                                <img src="assets/img/menu-burger.svg" alt="" />
                            </div>
                        </div>
                    </nav>
                </header>
                {/*=============== MAIN ===============*/}
                <main className="main">
                    {/*=============== BREADCRUMB ===============*/}
                    <section className="breadcrumb">
                        <ul className="breadcrumb__list flex container">
                            <li>
                                <a href="index.html" className="breadcrumb__link">
                                    Home
                                </a>
                            </li>
                            <li>
                                <span className="breadcrumb__link">&gt;</span>
                            </li>
                            <li>
                                <span className="breadcrumb__link">Account</span>
                            </li>
                        </ul>
                    </section>
                    {/*=============== ACCOUNTS ===============*/}
                    <section className="accounts section--lg">
                        <div className="accounts__container container grid">
                            <div className="account__tabs">
                                <p className="account__tab active-tab" data-target="#dashboard">
                                    <i className="fi fi-rs-settings-sliders" /> Dashboard
                                </p>
                                <p className="account__tab" data-target="#orders">
                                    <i className="fi fi-rs-shopping-bag" /> Orders
                                </p>
                                <p className="account__tab" data-target="#update-profile">
                                    <i className="fi fi-rs-user" /> Update Profile
                                </p>
                                <p className="account__tab" data-target="#address">
                                    <i className="fi fi-rs-marker" /> My Address
                                </p>
                                <p className="account__tab" data-target="#change-password">
                                    <i className="fi fi-rs-user" /> Change Password
                                </p>
                                <p className="account__tab">
                                    <i className="fi fi-rs-exit" /> Logout
                                </p>
                            </div>
                            <div className="tabs__content">
                                <div className="tab__content active-tab" content="" id="dashboard">
                                    <h3 className="tab__header">Hello Rosie!</h3>
                                    <div className="tab__body">
                                        <p className="tab__description">
                                            From your account dashboard. you can easily check &amp; view
                                            your recent orders, manage your shipping and billing addresses
                                            and edit your password and account details.
                                        </p>
                                    </div>
                                </div>
                                <div className="tab__content" content="" id="orders">
                                    <h3 className="tab__header">Your Orders</h3>
                                    <div className="tab__body">
                                        <table className="placed__order-table">
                                            <tbody>
                                                <tr>
                                                    <th>Orders</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                    <th>Total</th>
                                                    <th>Actions</th>
                                                </tr>
                                                <tr>
                                                    <td>#1357</td>
                                                    <td>March 45, 2020</td>
                                                    <td>Processing</td>
                                                    <td>$125.00</td>
                                                    <td>
                                                        <a href="#" className="view__order">
                                                            View
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#12468</td>
                                                    <td>June 29, 2020</td>
                                                    <td>Completed</td>
                                                    <td>$364.00</td>
                                                    <td>
                                                        <a href="#" className="view__order">
                                                            View
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#1357</td>
                                                    <td>August 02, 2020</td>
                                                    <td>Completed</td>
                                                    <td>$280.00</td>
                                                    <td>
                                                        <a href="#" className="view__order">
                                                            View
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab__content" content="" id="update-profile">
                                    <h3 className="tab__header">Update Profile</h3>
                                    <div className="tab__body">
                                        <form action="" className="form grid">
                                            <input
                                                type="text"
                                                placeholder="Username"
                                                className="form__input"
                                            />
                                            <div className="form__btn">
                                                <button className="btn btn--md">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="tab__content" content="" id="address">
                                    <h3 className="tab__header">Shipping Address</h3>
                                    <div className="tab__body">
                                        <address className="address">
                                            3522 Interstate <br />
                                            75 Business Spur, <br />
                                            Sault Ste. <br />
                                            Marie, MI 49783
                                        </address>
                                        <p className="city">New York</p>
                                        <a href="" className="edit">
                                            Edit
                                        </a>
                                    </div>
                                </div>
                                <div className="tab__content" content="" id="change-password">
                                    <h3 className="tab__header">Change Password</h3>
                                    <div className="tab__body">
                                        <form action="" className="form grid">
                                            <input
                                                type="password"
                                                placeholder="Current Password"
                                                className="form__input"
                                            />
                                            <input
                                                type="password"
                                                placeholder="New Password"
                                                className="form__input"
                                            />
                                            <input
                                                type="password"
                                                placeholder="Confirm Password"
                                                className="form__input"
                                            />
                                            <div className="form__btn">
                                                <button className="btn btn--md">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*=============== NEWSLETTER ===============*/}
                    <section className="newsletter section">
                        <div className="newsletter__container container grid">
                            <h3 className="newsletter__title flex">
                                <img
                                    src="assets/img/icon-email.svg"
                                    alt=""
                                    className="newsletter__icon"
                                />
                                Sign up to Newsletter
                            </h3>
                            <p className="newsletter__description">
                                ...and receive $25 coupon for first shopping.
                            </p>
                            <form action="" className="newsletter__form">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="newsletter__input"
                                />
                                <button type="submit" className="newsletter__btn">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </section>
                </main>
                {/*=============== FOOTER ===============*/}
                <footer className="footer container">
                    <div className="footer__container grid">
                        <div className="footer__content">
                            <a href="index.html" className="footer__logo">
                                <img
                                    src="assets/img/wozfitz-removebg-preview (1).png"
                                    alt=""
                                    className="footer__logo-img"
                                />
                            </a>
                            <h4 className="footer__subtitle">Contact</h4>
                            <p className="footer__description">
                                <span>Address:</span>
                            </p>
                            <p className="footer__description">
                                <span>Phone:</span> +91 8527703997
                            </p>
                            <div className="footer__social">
                                <h4 className="footer__subtitle">Follow Me</h4>
                                <div className="footer__social-links flex">
                                    <a href="">
                                        <img
                                            src="assets/img/icon-facebook.svg"
                                            alt=""
                                            className="footer__social-icon"
                                        />
                                    </a>
                                    <a href="">
                                        <img
                                            src="assets/img/icon-twitter.svg"
                                            alt=""
                                            className="footer__social-icon"
                                        />
                                    </a>
                                    <a href="">
                                        <img
                                            src="assets/img/icon-instagram.svg"
                                            alt=""
                                            className="footer__social-icon"
                                        />
                                    </a>
                                    <a href="">
                                        <img
                                            src="assets/img/icon-pinterest.svg"
                                            alt=""
                                            className="footer__social-icon"
                                        />
                                    </a>
                                    <a href="">
                                        <img
                                            src="assets/img/icon-youtube.svg"
                                            alt=""
                                            className="footer__social-icon"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer__content">
                            <h3 className="footer__title">Address</h3>
                            <ul className="footer__links">
                                <li>
                                    <a href="" className="footer__link">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="footer__link">
                                        Delivery Information
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="footer__link">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="footer__link">
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="footer__link">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="footer__link">
                                        Support Center
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__content">
                            <h3 className="footer__title">My Account</h3>
                            <ul className="footer__links">
                                <li>
                                    <a href="" className="footer__link">
                                        Sign In
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="footer__link">
                                        View Cart
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="footer__link">
                                        My Wishlist
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="footer__link">
                                        Track My Order
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="footer__link">
                                        Help
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="footer__link">
                                        Order
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__content">
                            <h3 className="footer__title">Secured Payment Gateways</h3>
                            <img
                                src="assets/img/payment-method.png"
                                alt=""
                                className="payment__img"
                            />
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <p className="copyright">© 2024 Wozfitz. All rights reserved</p>
                        <span className="designer" />
                    </div>
                </footer>
            </>

        </div>
    )
}

export default accounts
