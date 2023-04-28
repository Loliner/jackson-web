import React from 'react';
import "./css/themify-icons.css";
import "./css/flaticon.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/owl.carousel.css";
import "./css/owl.theme.css";
import "./css/slick.css";
import "./css/slick-theme.css";
import "./css/swiper.min.css";
import "./css/owl.transitions.css";
import "./css/jquery.fancybox.css";
import "./css/odometer-theme-default.css";
import "./css/component.css";
import "./sass/style.css";
import "./css/responsive.css";

function Main() {
    return (
        <div className="page-wrapper">
            <div className="preloader">
                <div className="angular-shape">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div>
            </div>
            <header id="header" className="wpo-site-header">
                <div className="topbar">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-7 col-md-9 col-sm-12 col-12">
                                <div className="contact-intro">
                                    <ul>
                                        <li className="update"><span>New Update</span></li>
                                        <li>Betting against meme stocks could get you seriously burned</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col  col-lg-5 col-md-3 col-sm-12 col-12">
                                <div className="contact-info">
                                    <ul>
                                        <li><a href="#"><i className="ti-facebook"></i></a></li>
                                        <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                                        <li><a href="#"><i className="ti-instagram"></i></a></li>
                                        <li><a href="#"><i className="ti-google"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <button type="button" className="navbar-toggler open-btn">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar first-angle"></span>
                                        <span className="icon-bar middle-angle"></span>
                                        <span className="icon-bar last-angle"></span>
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <a className="navbar-brand" href="index.html">
                                        <img loading="lazy" src="images/logo.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <a className="active" href="#">Home</a>
                                            <ul className="sub-menu">
                                                <li><a className="active" href="index.html">Home style 1</a></li>
                                                <li><a href="index-2.html">Home style 2</a></li>
                                                <li><a href="index-3.html">Home style 3</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#">Pages</a>
                                            <ul className="sub-menu">
                                                <li><a href="blog.html">Archive</a></li>
                                                <li><a href="contact.html">Contact Us</a></li>
                                                <li><a href="shop.html">Shop</a></li>
                                                <li><a href="shop-single.html">Shop Single</a></li>
                                                <li><a href="cart.html">Cart</a></li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                                <li><a href="404.html">Error 404</a></li>
                                                <li><a href="login.html">Login</a></li>
                                                <li><a href="register.html">Register</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="lifestyle.html">Lifestyle</a></li>
                                        <li><a href="foods.html">Foods</a></li>
                                        <li><a href="business.html">Business</a></li>
                                        <li><a href="travels.html">Travel</a></li>
                                        <li className="menu-item-has-children">
                                            <a href="#">Post</a>
                                            <ul className="sub-menu">
                                                <li><a href="blog.html">Post right sidebar</a></li>
                                                <li><a href="blog-left-sidebar.html">Post left sidebar</a></li>
                                                <li><a href="blog-fullwidth.html">Post fullwidth</a></li>
                                                <li className="menu-item-has-children">
                                                    <a href="#">Post details</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="blog-single.html">Post details right sidebar</a></li>
                                                        <li><a href="blog-single-left-sidebar.html">Post details left
                                                            sidebar</a></li>
                                                        <li><a href="blog-single-fullwidth.html">Post details fullwidth</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button className="search-toggle-btn"><i
                                                className="fi flaticon-magnifiying-glass"></i></button>
                                            <div className="header-search-form">
                                                <form>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                        <button type="submit"><i
                                                            className="fi flaticon-magnifiying-glass"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="header-right-menu-wrapper">
                                        <div className="header-right-menu">
                                            <div className="right-menu-toggle-btn">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                            <div className="header-right-menu-wrap">
                                                <button className="right-menu-close"><i className="ti-close"></i></button>
                                                <div className="logo"><img loading="lazy" src="images/logo2.png" alt="" /></div>
                                                <div className="header-right-sec">
                                                    <div className="project-widget widget">
                                                        <h3>Our Latest News</h3>
                                                        <div className="posts">
                                                            <div className="post">
                                                                <div className="img-holder">
                                                                    <img loading="lazy" src="images/recent-posts/img-1.jpg" alt="" />
                                                                </div>
                                                                <div className="details">
                                                                    <span className="date">19 Jun 2022 </span>
                                                                    <h4><a href="blog-single.html">Perfect Photo Clicking
                                                                        Idea You Must
                                                                        Know.</a></h4>
                                                                </div>
                                                            </div>
                                                            <div className="post">
                                                                <div className="img-holder">
                                                                    <img loading="lazy" src="images/recent-posts/img-2.jpg" alt="" />
                                                                </div>
                                                                <div className="details">
                                                                    <span className="date">22 May 2022 </span>
                                                                    <h4><a href="blog-single.html">Best tourism site all
                                                                        over the world.</a>
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div className="post">
                                                                <div className="img-holder">
                                                                    <img loading="lazy" src="images/recent-posts/img-3.jpg" alt="" />
                                                                </div>
                                                                <div className="details">
                                                                    <span className="date">12 Apr 2022 </span>
                                                                    <h4><a href="blog-single.html">Whats In Trend in Now
                                                                        Woman Fashion.</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="widget wpo-contact-widget">
                                                        <div className="widget-title">
                                                            <h3>Contact Us</h3>
                                                        </div>
                                                        <div className="contact-ft">
                                                            <ul>
                                                                <li><i className="fi flaticon-location"></i>68D, Belsion Town
                                                                    2365 <br /> Fna city, LH 3656, USA</li>
                                                                <li><i className="fi flaticon-telephone"></i>+ 8 (123) 123 456
                                                                    789 <br />
                                                                    + 8 (123) 123 456 789</li>
                                                                <li><i className="fi flaticon-email"></i>Bloggar@gmail.com</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>


            <div className="wpo-blog-hero-area">
                <div className="container">
                    <div className="sortable-gallery">
                        <div className="gallery-filters"></div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="wpo-blog-grids gallery-container clearfix">
                                    <div className="grid">
                                        <div className="img-holder">
                                            <img loading="lazy" src="images/hero/img-1.jpg" alt="" className="img img-responsive" />
                                            <div className="wpo-blog-content">
                                                <div className="thumb">Fasion</div>
                                                <h2><a href="blog-single.html">What’s In Trend In Women's Fashion
                                                    Summer?</a></h2>
                                                <p>You can customize the view Blog posts with a simple mouse click and
                                                    immediately see the result of your changes. </p>
                                                <ul>
                                                    <li><img loading="lazy" src="images/blog/blog-avater/img-1.jpg " alt="" /></li>
                                                    <li>By <a href="blog-single.html">Robert</a></li>
                                                    <li>20 Nov 2022</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid">
                                        <div className="img-holder">
                                            <img loading="lazy" src="images/hero/img-2.jpg" alt="" className="img img-responsive" />
                                            <div className="wpo-blog-content">
                                                <div className="thumb">Travel</div>
                                                <h2><a href="blog-single.html">Traveling Makes You More Interesting</a></h2>
                                                <ul>
                                                    <li>By <a href="blog-single.html">Robert</a></li>
                                                    <li>20 Nov 2022</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid s2">
                                        <div className="img-holder">
                                            <img loading="lazy" src="images/hero/img-3.jpg" alt="" className="img img-responsive" />
                                            <div className="wpo-blog-content">
                                                <div className="thumb">Food</div>
                                                <h2><a href="blog-single.html">Top 10 Healthy Food</a></h2>
                                                <ul>
                                                    <li>By <a href="blog-single.html">Robert</a></li>
                                                    <li>20 Nov 2022</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="img-holder">
                                            <img loading="lazy" src="images/hero/img-4.jpg" alt="" className="img img-responsive" />
                                            <div className="wpo-blog-content">
                                                <div className="thumb">Business</div>
                                                <h2><a href="blog-single.html">What Makes a Leader?</a></h2>
                                                <ul>
                                                    <li>By <a href="blog-single.html">Robert</a></li>
                                                    <li>20 Nov 2022</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            <div className="wpo-breacking-news section-padding">
                <div className="container">
                    <div className="row">
                        <div className="b-title"><span>Breaking News</span></div>
                        <div className="wpo-breacking-wrap owl-carousel">
                            <div className="wpo-breacking-item s1">
                                <div className="wpo-breacking-img">
                                    <img loading="lazy" src="images/breaking-news/img-1.jpg" alt="" />
                                </div>
                                <div className="wpo-breacking-text">
                                    <span>22 Sep 2022</span>
                                    <h3><a href="blog-single.html">5 unbelievable secret about choosing right fuirniture</a>
                                    </h3>
                                </div>
                            </div>
                            <div className="wpo-breacking-item">
                                <div className="wpo-breacking-img">
                                    <img loading="lazy" src="images/breaking-news/img-2.jpg" alt="" />
                                </div>
                                <div className="wpo-breacking-text">
                                    <span>22 Sep 2022</span>
                                    <h3><a href="blog-single.html">Healthy rutine for your healthy lifestyle.</a></h3>
                                </div>
                            </div>
                            <div className="wpo-breacking-item">
                                <div className="wpo-breacking-img">
                                    <img loading="lazy" src="images/breaking-news/img-3.jpg" alt="" />
                                </div>
                                <div className="wpo-breacking-text">
                                    <span>22 Sep 2022</span>
                                    <h3><a href="blog-single.html">Best tourism site all over the world.</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="wpo-blog-highlights-section">
                <div className="container">
                    <div className="wpo-section-title">
                        <h2>Today's Top Highlights</h2>
                    </div>
                    <div className="row">
                        <div className="col col-lg-8 col-12">

                            <div className="wpo-blog-highlights-wrap">
                                <div className="wpo-blog-items">
                                    <div className="row">
                                        <div className="col col-lg-6 col-md-6 col-12">
                                            <div className="wpo-blog-item">
                                                <div className="wpo-blog-img">
                                                    <img loading="lazy" src="images/blog/img-1.jpg" alt="" />
                                                    <div className="thumb">Travel</div>
                                                </div>
                                                <div className="wpo-blog-content">
                                                    <h2><a href="blog-single.html">Traveling Makes You More Inteligent
                                                        and More Energetic</a></h2>
                                                    <ul>
                                                        <li><img loading="lazy" src="images/blog/blog-avater/img-1.jpg " alt="" />
                                                        </li>
                                                        <li>By <a href="blog-single.html">Admin</a></li>
                                                        <li>25 Sep 2022</li>
                                                    </ul>
                                                    <p>You can customize the view Blog post with author simple mouse click
                                                        and immediately see the result of your changes. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-md-6 col-12">
                                            <div className="wpo-blog-item">
                                                <div className="wpo-blog-img">
                                                    <img loading="lazy" src="images/blog/img-2.jpg" alt="" />
                                                    <div className="thumb">Travel</div>
                                                </div>
                                                <div className="wpo-blog-content">
                                                    <h2><a href="blog-single.html">12 Things to See and Find Out in Bergen,
                                                        Norway</a></h2>
                                                    <ul>
                                                        <li><img loading="lazy" src="images/blog/blog-avater/img-2.jpg " alt="" />
                                                        </li>
                                                        <li>By <a href="blog-single.html">Admin</a></li>
                                                        <li>25 Sep 2022</li>
                                                    </ul>
                                                    <p>You can customize the view Blog post with author simple mouse click
                                                        and immediately see the result of your changes. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-md-6 col-12">
                                            <div className="wpo-blog-item">
                                                <div className="wpo-blog-img">
                                                    <img loading="lazy" src="images/blog/img-3.jpg" alt="" />
                                                    <div className="thumb">Travel</div>
                                                </div>
                                                <div className="wpo-blog-content">
                                                    <h2><a href="blog-single.html">Healthy Daily Rutine For Your Healthy
                                                        Lifestyle</a></h2>
                                                    <ul>
                                                        <li><img loading="lazy" src="images/blog/blog-avater/img-3.jpg " alt="" />
                                                        </li>
                                                        <li>By <a href="blog-single.html">Admin</a></li>
                                                        <li>25 Sep 2022</li>
                                                    </ul>
                                                    <p>You can customize the view Blog post with author simple mouse click
                                                        and immediately see the result of your changes. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-md-6 col-12">
                                            <div className="wpo-blog-item">
                                                <div className="wpo-blog-img">
                                                    <img loading="lazy" src="images/blog/img-4.jpg" alt="" />
                                                    <div className="thumb">Travel</div>
                                                </div>
                                                <div className="wpo-blog-content">
                                                    <h2><a href="blog-single.html">Perfect Photo Clicking Idea You Must
                                                        Khow About.</a></h2>
                                                    <ul>
                                                        <li><img loading="lazy" src="images/blog/blog-avater/img-1.jpg " alt="" />
                                                        </li>
                                                        <li>By <a href="blog-single.html">Admin</a></li>
                                                        <li>25 Sep 2022</li>
                                                    </ul>
                                                    <p>You can customize the view Blog post with author simple mouse click
                                                        and immediately see the result of your changes. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-md-6 col-12">
                                            <div className="wpo-blog-item">
                                                <div className="wpo-blog-img">
                                                    <img loading="lazy" src="images/blog/img-5.jpg" alt="" />
                                                    <div className="thumb">Travel</div>
                                                </div>
                                                <div className="wpo-blog-content">
                                                    <h2><a href="blog-single.html">Traveling Makes You More Inteligent
                                                        and More Energetic</a></h2>
                                                    <ul>
                                                        <li><img loading="lazy" src="images/blog/blog-avater/img-2.jpg " alt="" />
                                                        </li>
                                                        <li>By <a href="blog-single.html">Admin</a></li>
                                                        <li>25 Sep 2022</li>
                                                    </ul>
                                                    <p>You can customize the view Blog post with author simple mouse click
                                                        and immediately see the result of your changes. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-md-6 col-12">
                                            <div className="wpo-blog-item">
                                                <div className="wpo-blog-img">
                                                    <img loading="lazy" src="images/blog/img-6.jpg" alt="" />
                                                    <div className="thumb">Travel</div>
                                                </div>
                                                <div className="wpo-blog-content">
                                                    <h2><a href="blog-single.html">12 Things to See and Find Out in Bergen,
                                                        Norway</a></h2>
                                                    <ul>
                                                        <li><img loading="lazy" src="images/blog/blog-avater/img-3.jpg " alt="" />
                                                        </li>
                                                        <li>By <a href="blog-single.html">Admin</a></li>
                                                        <li>25 Sep 2022</li>
                                                    </ul>
                                                    <p>You can customize the view Blog post with author simple mouse click
                                                        and immediately see the result of your changes. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col col-lg-4 col-12">
                            <div className="blog-sidebar">
                                <div className="widget category-widget">
                                    <h3>Trending Topics</h3>
                                    <ul>
                                        <li><a href="blog-single.html">Lifestyle<span>(05)</span></a></li>
                                        <li><a href="blog-single.html">Inspiration <span>(07)</span></a></li>
                                        <li><a href="blog-single.html">Fashion <span>(03)</span></a></li>
                                        <li><a href="blog-single.html">Photography <span>(06)</span></a></li>
                                        <li><a href="blog-single.html">Travel <span>(12)</span></a></li>
                                        <li><a href="blog-single.html">Business <span>(08)</span></a></li>
                                    </ul>
                                </div>
                                <div className="widget recent-post-widget">
                                    <h3>Popular Post</h3>
                                    <div className="posts">
                                        <div className="post">
                                            <div className="img-holder">
                                                <img loading="lazy" src="images/recent-posts/img-1.jpg" alt="" />
                                            </div>
                                            <div className="details">
                                                <span className="date">19 Jun 2022 </span>
                                                <h4><a href="blog-single.html">Perfect Photo Clicking Idea You Must
                                                    Know.</a></h4>
                                            </div>
                                        </div>
                                        <div className="post">
                                            <div className="img-holder">
                                                <img loading="lazy" src="images/recent-posts/img-2.jpg" alt="" />
                                            </div>
                                            <div className="details">
                                                <span className="date">22 May 2022 </span>
                                                <h4><a href="blog-single.html">Best tourism site all over the world.</a>
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="post">
                                            <div className="img-holder">
                                                <img loading="lazy" src="images/recent-posts/img-3.jpg" alt="" />
                                            </div>
                                            <div className="details">
                                                <span className="date">12 Apr 2022 </span>
                                                <h4><a href="blog-single.html">Whats In Trend in Now Woman Fashion.</a></h4>
                                            </div>
                                        </div>
                                        <div className="post">
                                            <div className="img-holder">
                                                <img loading="lazy" src="images/recent-posts/img-4.jpg" alt="" />
                                            </div>
                                            <div className="details">
                                                <span className="date">12 Apr 2022 </span>
                                                <h4><a href="blog-single.html">Top 10 Healthy Food of Your Menu.</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-add-widget">
                                    <a href="#"><img loading="lazy" src="images/add.jpg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="wpo-blog-sponsored-section section-padding">
                <div className="container">
                    <div className="wpo-section-title">
                        <h2>sponsored news</h2>
                    </div>
                    <div className="row">
                        <div className="wpo-blog-sponsored-wrap">
                            <div className="wpo-blog-items">
                                <div className="row">
                                    <div className="col col-xl-3 col-lg-6 col-md-6 col-12">
                                        <div className="wpo-blog-item">
                                            <div className="wpo-blog-img">
                                                <img loading="lazy" src="images/sponsord/img-1.jpg" alt="" />
                                                <div className="thumb">Travel</div>
                                            </div>
                                            <div className="wpo-blog-content">
                                                <h2><a href="blog-single.html">Top Most Beautiful Scenery in The World.</a>
                                                </h2>
                                                <ul>
                                                    <li><img loading="lazy" src="images/blog/blog-avater/img-1.jpg " alt="" /></li>
                                                    <li>By <a href="blog-single.html">Admin</a></li>
                                                    <li>25 Sep 2022</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-xl-3 col-lg-6 col-md-6 col-12">
                                        <div className="wpo-blog-item">
                                            <div className="wpo-blog-img">
                                                <img loading="lazy" src="images/sponsord/img-2.jpg" alt="" />
                                                <div className="thumb">Travel</div>
                                            </div>
                                            <div className="wpo-blog-content">
                                                <h2><a href="blog-single.html">Perfect Photo Clicking Idea You Must Khow
                                                    About.</a></h2>
                                                <ul>
                                                    <li><img loading="lazy" src="images/blog/blog-avater/img-2.jpg " alt="" /></li>
                                                    <li>By <a href="blog-single.html">Admin</a></li>
                                                    <li>25 Sep 2022</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-xl-3 col-lg-6 col-md-6 col-12">
                                        <div className="wpo-blog-item">
                                            <div className="wpo-blog-img">
                                                <img loading="lazy" src="images/sponsord/img-3.jpg" alt="" />
                                                <div className="thumb">Travel</div>
                                            </div>
                                            <div className="wpo-blog-content">
                                                <h2><a href="blog-single.html">Top Most Beautiful Scenery in The World.</a>
                                                </h2>
                                                <ul>
                                                    <li><img loading="lazy" src="images/blog/blog-avater/img-3.jpg " alt="" /></li>
                                                    <li>By <a href="blog-single.html">Admin</a></li>
                                                    <li>25 Sep 2022</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-xl-3 col-lg-6 col-md-6 col-12">
                                        <div className="wpo-blog-item">
                                            <div className="wpo-blog-img">
                                                <img loading="lazy" src="images/sponsord/img-4.jpg" alt="" />
                                                <div className="thumb">Travel</div>
                                            </div>
                                            <div className="wpo-blog-content">
                                                <h2><a href="blog-single.html">Top Most Beautiful Scenery in The World.</a>
                                                </h2>
                                                <ul>
                                                    <li><img loading="lazy" src="images/blog/blog-avater/img-1.jpg " alt="" /></li>
                                                    <li>By <a href="blog-single.html">Admin</a></li>
                                                    <li>25 Sep 2022</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="wpo-subscribe-section section-padding">
                <div className="container">
                    <div className="wpo-subscribe-wrap">
                        <div className="subscribe-text">
                            <h3>Never miss any Update!</h3>
                            <p>Get the freshest headlines and updates sent uninterrupted to your inbox.</p>
                        </div>
                        <div className="subscribe-form">
                            <form action="#">
                                <div className="input-field">
                                    <input type="email" placeholder="Enter your email" required />
                                    <button type="submit">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            <footer className="wpo-site-footer">
                <div className="wpo-upper-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget about-widget">
                                    <div className="logo widget-title">
                                        <img loading="lazy" src="images/logo2.png" alt="blog" />
                                    </div>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                        suffered alteration in some form, by injected humour, or randomised words which
                                        don't look even slightly believable.</p>

                                </div>
                            </div>
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget link-widget">
                                    <div className="widget-title">
                                        <h3>Important Link</h3>
                                    </div>
                                    <ul>
                                        <li><a href="blog.html">News</a></li>
                                        <li><a href="blog.html">Career </a></li>
                                        <li><a href="blog.html">Technology</a></li>
                                        <li><a href="blog.html">Startups</a></li>
                                        <li><a href="blog.html">Gadgets</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="widget tag-widget">
                                    <div className="widget-title">
                                        <h3>Browse by Tag </h3>
                                    </div>
                                    <ul>
                                        <li><a href="travels.html">Travel</a></li>
                                        <li><a href="business.html">Business</a></li>
                                        <li><a href="lifestyle.html">Lifestyle</a></li>
                                        <li><a href="blog.html">Marketing</a></li>
                                        <li><a href="blog.html">Medical</a></li>
                                        <li><a href="blog.html">Sports</a></li>
                                        <li><a href="blog.html">Career</a></li>
                                        <li><a href="foods.html">Foods</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                                <div className="widget social-widget">
                                    <div className="widget-title">
                                        <h3>Social Media</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#"><i><img loading="lazy" src="images//ft-icon/1.png" alt="" /></i> Facebook</a>
                                        </li>
                                        <li><a href="#"><i><img loading="lazy" src="images//ft-icon/2.png" alt="" /></i> Twitter</a>
                                        </li>
                                        <li><a href="#"><i><img loading="lazy" src="images//ft-icon/3.png" alt="" /></i> Instagram</a>
                                        </li>
                                        <li><a href="#"><i><img loading="lazy" src="images//ft-icon/4.png" alt="" /></i> Youtube</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wpo-lower-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col col-xs-12">
                                <p className="copyright"> Copyright &copy; 2022 Bloggar by <a href="http://www.bootstrapmb.com">bootstrapMB</a>.
                                    All
                                    Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Main;
