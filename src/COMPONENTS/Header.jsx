// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Header =() => {
 
        const [products, setProducts] = useState([]);
        const [searchTerm, setSearchTerm] = useState('');
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        const [category, setCategory] = useState("all");
         const [filtered, setFiltered] = useState([]);
      
        useEffect(() => {
                    const fetchProducts = async () => {
                        try{
                            const response = await axios.get('https://fakestoreapi.com/products');
                            setProducts(response.data);
                            // console.log(response.data);
                        } catch (err) {
                            setError(err.message);
                        } finally {
                            setLoading(false);
                        }
                    };
            
                    fetchProducts()
                }, []);

        if (loading) {
        return  <div className='rolling'>
            <div id="wifi-loader">
        <svg className="circle-outer" viewBox="0 0 86 86">
            <circle className="back" cx="43" cy="43" r="40"></circle>
            <circle className="front" cx="43" cy="43" r="40"></circle>
            <circle className="new" cx="43" cy="43" r="40"></circle>
        </svg>
        <svg className="circle-middle" viewBox="0 0 60 60">
            <circle className="back" cx="30" cy="30" r="27"></circle>
            <circle className="front" cx="30" cy="30" r="27"></circle>
        </svg>
        <svg className="circle-inner" viewBox="0 0 34 34">
            <circle className="back" cx="17" cy="17" r="14"></circle>
            <circle className="front" cx="17" cy="17" r="14"></circle>
        </svg>
        <div className="text" data-text="Searching"></div>
    </div>
        </div>
        }

    if (error) {
        return <div>
            <div className='error'>
            <div className='network'></div>
        </div>

        <div className='secode'></div>
        </div>;
    }

        const categories = ["all", "men's clothing", "women's clothing", "jewelery", "electronics"];


        const handleClick = () => {
            Swal.fire({
                title: "Good job!",
                text: "Items Added to Chart",
                icon: "success"
              });
        }

                const handleCategory = (e) => {
                    const categoryval = e.target.value;
                    setCategory(categoryval);
            
                    const filtereditems = categoryval === 'all'
                    ? products
                    : products.filter((product)=> (
                        product.category === categoryval
                    ))
                    setFiltered(filtereditems);
                }

    return(
        <>
            <div className="main">
            <nav className="mini-header">
                <div className="contact">
                    <p>  +234-7014457796  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
            </svg></p>
                </div>
                <div className="promo">
                    <p className='rib'>Get 50% on Selection  |  Shop Now</p>
                </div>
                <div className="location">
                    <div className="Eng"><p>Eng <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg></p></div>
                    <div className="track"><p>Location <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg></p></div>
                </div>
            </nav>

            <div className="header">
            <div className="logo"></div>
            <div className="Deals">
            <select name="" id="drop-down">
                    <option value="text">Category brand</option>
                    <option value="text">Amazon</option>
                    <option value="">Apple</option>
                    <option value="">Samsung</option>
                    <option value="">Jordan Snickers</option>
                </select>
                <button className="rec">Deals</button>
                <button className="rec">What's New</button>
                <button className="rec">Delivery</button>
            </div>
            <div className="container-input">
                <input type="text" placeholder="Search...." name="name" className="input" 
                             value={searchTerm}
                             onChange={(e) => setSearchTerm(e.target.value)}  />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
            </div>

            <div className="item">
                <div className="Eng1"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                </svg><p className="record">Account</p></div>
                <div className="track1"><p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                </svg> Cart</p></div>

                                    <div className="loader">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        height="16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="w-6 h-6 text-gray-800 dark:text-white"
                    >
                        <path
                        d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        stroke="currentColor"
                        ></path>
                    </svg>
                    <div className="point"></div>
                    </div>

            </div>
            </div>

            <div className="hero-section">
                <div className="hero-title">
                    <div className="hero-vid">
                        <div className="weekly">
                            <div className="weekly-text"><p>weekly Discount</p></div><br/>

                            <div className="page-title"><h1>Premium Product Online Shop</h1></div><br/>
                            <span className="rnfo"><p className="idi"> Explore a vast range of products across multiple categories. From trendy apparel and accessories to innovative gadgets and home essentials, our extensive collection is designed to meet all your needs.</p></span><br/>
                            <button className="shop">Shop Now</button>
                        </div>
                    </div>



                    <ul className="example-2">
                    <li className="icon-content">
                        <a
                        href="https://linkedin.com/"
                        aria-label="LinkedIn"
                        data-social="linkedin"
                        >
                        <div className="filled"></div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-linkedin"
                            viewBox="0 0 16 16"
                            xmlSpace="preserve"
                        >
                            <path
                            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                            fill="currentColor"
                            ></path>
                        </svg>
                        </a>
                        <div className="tooltip">LinkedIn</div>
                    </li>
                    <li className="icon-content">
                        <a href="https://www.github.com/" aria-label="GitHub" data-social="github">
                        <div className="filled"></div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-github"
                            viewBox="0 0 16 16"
                            xmlSpace="preserve"
                        >
                            <path
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                            fill="currentColor"
                            ></path>
                        </svg>
                        </a>
                        <div className="tooltip">GitHub</div>
                    </li>
                    <li className="icon-content">
                        <a
                        href="https://www.instagram.com/"
                        aria-label="Instagram"
                        data-social="instagram"
                        >
                        <div className="filled"></div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-instagram"
                            viewBox="0 0 16 16"
                            xmlSpace="preserve"
                        >
                            <path
                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                            fill="currentColor"
                            ></path>
                        </svg>
                        </a>
                        <div className="tooltip">Instagram</div>
                    </li>
                    <li className="icon-content">
                        <a href="https://youtube.com/" aria-label="Youtube" data-social="youtube">
                        <div className="filled"></div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-youtube"
                            viewBox="0 0 16 16"
                            xmlSpace="preserve"
                        >
                            <path
                            d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
                            fill="currentColor"
                            ></path>
                        </svg>
                        </a>
                        <div className="tooltip">Youtube</div>
                    </li>
                    </ul>

                </div>
            </div>


            <div className="vid"><h1>Our Top Categories</h1></div>
        <div className="inp-holder">
            <div className="inp-holder1">
            <div className="goods-section2"><h3>
            <select id='drop-down' onChange={handleCategory}>
            {categories.map((item)=>(
            <option value={item} key={item}>{item}</option>
            ))}
            </select>
                </h3></div>
                <div className="goods-section"><h3>
                <select name="" id="drop-down">
                    <option value="text"> All Category</option>
                    <option value="text">Phones</option>
                    <option value="">Tablets</option>
                    <option value="">SOB Speakers</option>
                    <option value="">Watchs</option>
                </select>
                </h3></div>

                
                <div className="goods-section"><h3>
                <select name="" id="drop-down">
                    <option value="text">Wireless</option>
                    <option value="text">Painting</option>
                    <option value="">Graphics</option>
                    <option value="">Snickers</option>
                    <option value="">Bluetooth</option>
                   </select>
                </h3></div>

                <div className="goods-section"><h3>
                <select name="" id="drop-down">
                    <option value="text">Prices</option>
                    <option value="text">$400</option>
                    <option value="">$30</option>
                    <option value="">$900</option>
                    <option value="">$100</option>
                   </select>
                </h3></div>

                <div className="goods-section"><h3>
                <select name="" id="drop-down">
                    <option value="text">Offer</option>
                    <option value="text">Designs</option>
                    <option value="">Clothes</option>
                    <option value="">Shoes</option>
                    <option value="">Markup</option>
                   </select>
                </h3></div>
                
            </div>

            <div className="inp-holder2">
                <div className="goods-section1"><h3>
                    Filters <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sliders2-vertical" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M0 10.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H3V1.5a.5.5 0 0 0-1 0V10H.5a.5.5 0 0 0-.5.5M2.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m3-6.5A.5.5 0 0 0 6 6h1.5v8.5a.5.5 0 0 0 1 0V6H10a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5M8 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2A.5.5 0 0 0 8 1m3 9.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H14V1.5a.5.5 0 0 0-1 0V10h-1.5a.5.5 0 0 0-.5.5m2.5 1.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5"/>
                    </svg>
                </h3></div>
            </div>
        </div>

            <div className="remark">
                <div className="advert">
                    <div className="advert-image1">
                        <div className="advert-image-text">
                            <span><h3 className="image-text">Men Shirts</h3></span><br/>
                            <span><p>From $30</p></span><br/>
                            <button className="acct">Shop Now</button>
                        </div>
                    </div>
                    <div className="advert-image2">
                        <div className="advert-image-text">
                            <span><h3 className="image-text">Holiday Style</h3></span><br/>
                            <span><p>From $50</p></span><br/>
                            <button className="acct">Shop Now</button>
                        </div>
                    </div>
                    <div className="advert-image3">
                        <div className="advert-image-text">
                            <span><h3 className="image-text">Men Shirts</h3></span><br/>
                            <span><p>From $90</p></span><br/>
                            <button className="acct">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-box">
                <h1>Our Products</h1>
            </div>
            </div>
            

            <div className='container'>
                {filtered.map((product) => (
                <div className='product'key={product.id}> 
                    <div className='collect'>
                    <input id="toggle-heart" type="checkbox"/><label htmlFor="toggle-heart" aria-label="like">❤</label>
                    </div>
                    <div className='product-item'><img src={product.image} alt={product.title} className='product-img'/></div> 
                    <div className='product-details'>
                            <div className='inside-text'>
                                <span className='tittle'>{product.title}</span>
                                <span className='tittle'>{product.category}</span>
                            </div>
                            <span className="font-medium text-xl ml-auto">★★★★★</span>
                    </div><br />
                    <div className="button" data-tooltip={product.price} onClick={handleClick}>
                    <div className="button-wrapper">
                        <div className="text">Add To Cart</div>
                        <span className="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-cart2"
                            viewBox="0 0 16 16"
                        >
                            <path
                            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                            ></path>
                        </svg>
                        </span>
                    </div>
                    </div>
                    
                </div>
                ))} 
            </div>
        </>
    )
}

export default Header