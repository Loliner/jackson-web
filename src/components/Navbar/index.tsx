import React from 'react';

function Navbar() {
    return (<div id="navbar" className="collapse navbar-collapse navigation-holder">
    <button className="menu-close"><i className="ti-close"></i></button>
    <ul className="nav navbar-nav mb-2 mb-lg-0">
        <li className="menu-item-has-children">
            <a className="active" href="#">首页</a>
            {/* <ul className="sub-menu">
                <li><a className="active" href="index.html">Home style 1</a></li>
                <li><a href="index-2.html">Home style 2</a></li>
                <li><a href="index-3.html">Home style 3</a></li>
            </ul> */}
        </li>
        <li className="menu-item-has-children">
            <a href="#">宠物食品</a>
            {/* <ul className="sub-menu">
                <li><a href="blog.html">Archive</a></li>
                <li><a href="contact.html">Contact Us</a></li>
                <li><a href="shop.html">Shop</a></li>
                <li><a href="shop-single.html">Shop Single</a></li>
                <li><a href="cart.html">Cart</a></li>
                <li><a href="checkout.html">Checkout</a></li>
                <li><a href="404.html">Error 404</a></li>
                <li><a href="login.html">Login</a></li>
                <li><a href="register.html">Register</a></li>
            </ul> */}
        </li>
        <li><a href="lifestyle.html">宠物用品</a></li>
        <li><a href="foods.html">宠物健康</a></li>
        <li><a href="business.html">宠物教育</a></li>
        {/* <li><a href="travels.html">宠物社区</a></li> */}
        <li><a href="travels.html">关于我们</a></li>
        {/* <li className="menu-item-has-children">
            <a href="#">关于我们</a>
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
        </li> */}
    </ul>
</div>)
}

export default Navbar;