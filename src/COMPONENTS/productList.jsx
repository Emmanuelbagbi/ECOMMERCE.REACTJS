
// import React, { useEffect, useState } from 'react'
// import "./Store.css"
// import axios from "axios"
// import { RiLoader2Line } from "react-icons/ri";
// import Electronics from "../../../assets/Images/Electronics.jpg"
// import WomenClothing from "../../../assets/Images/Women clothing.avif"
// import Jewelry from "../../../assets/Images/Jewelry.avif"
// import MenClothing from "../../../assets/Images/Men Clothes.avif"
// import { MdOutlineShoppingCart } from "react-icons/md";
// import Swal from 'sweetalert2'

// const Store = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [category, setCategory] = useState("all");
//     const [filtered, setFiltered] = useState([])

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try{
//                 const response = await axios.get('https://fakestoreapi.com/products');
//                 setProducts(response.data);
//                 // console.log(response.data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProducts()
//     }, []);

//      const categories = ["all", "men's clothing", "women's clothing", "jewelery", "electronics"]

//     if (loading) {
//       return  <div className="load">
//             <div class="loader">
//         <div class="bar1"></div>
//         <div class="bar2"></div>
//         <div class="bar3"></div>
//         <div class="bar4"></div>
//         <div class="bar5"></div>
//         <div class="bar6"></div>
//         <div class="bar7"></div>
//         <div class="bar8"></div>
//         <div class="bar9"></div>
//         <div class="bar10"></div>
//         <div class="bar11"></div>
//         <div class="bar12"></div>
//     </div>
//         </div>
//     }

//     if (error) {
//         return <div className='load'><h4>Error: {error}</h4></div>;
//     }
//     const handleCategory = (e) => {
//         const categoryval = e.target.value;
//         setCategory(categoryval);
//         // setCategory(e.target.value)

//         const filtereditems = categoryval === 'all'
//         ? products
//         : products.filter((product)=> (
//             product.category === categoryval
//         ))
//         setFiltered(filtereditems);
//     }

//   const handleClick = () => {
//     Swal.fire({
//         title: "Added To Cart",
//         text: "Your item has been added to cart",
//         icon: "success",
//       });
//   }  

//   return (
//     <>
        
//       <div className="storediv">

//         <div className="catselect">
//         <h3>Shop By Category</h3>
//         <select className='theselect' onChange={handleCategory}>
//         {categories.map((item)=>(
//             <option className='myopt' value={item} key={item}>{item}</option>
//         ))}
//         </select>

//         </div>

//         <div className="categorydiv">
//             <div className="myflex" style={{
//                 backgroundImage: url(${Electronics}),
//                 backgroundSize: "cover",
//                 backgroundPosition: "center"
                
//             }}>
//                 <button className='catbutton'><h4>Electronics</h4></button>
//             </div>
//             <div className="myflex" style={{
//                 backgroundImage: url(${Jewelry}),
//                 backgroundSize: "cover",
//                 backgroundPosition: "center"
//             }}>
//                 <button className='catbutton'><h4>Jewelry</h4></button>
//             </div>
//             <div className="myflex" style={{
//                 backgroundImage: url(${WomenClothing}),
//                 backgroundSize: "cover",
//                 backgroundPosition: "top"
//             }}>
//                 <button className='catbutton'><h4>Women's Clothing</h4></button>
//             </div>
//             <div className="myflex" style={{
//                 backgroundImage: url(${MenClothing}),
//                 backgroundSize: "cover",
//                 backgroundPosition: "center"
//             }}>
//                 <button className='catbutton' ><h4>Men's Clothing</h4></button>
//             </div>
//         </div>

//         {/* <select className='theselect' onChange={handleCategory}>
//         {categories.map((item)=>(
//             <option className='myopt' value={item} key={item}>{item}</option>
//         ))}
//         </select> */}
//         <h2>Popular On Little Closets</h2>
         
//          <div className="storeproduct">

//             {filtered.map((product) => (
//                 <div className="productdiv" key={product.id}>

//                     <div className="imagediv">
//                         <img src={product.image} alt={product.title} />
//                     </div>
                    
//                     <div className="productText">
//                     <h5>{product.title}</h5>
//                     {/* <button className='addtocart' onClick={() => handleAddToCart(product)}>Add to */}
//                     </div>
//                     <div className="cart">
//                     <h4>$ {product.price}</h4>
//                     <button className="mycart" onClick={handleClick}>
//                     <MdOutlineShoppingCart className='cartic'/>
//                     </button>
//                     </div>
//                     </div>
//             ))}
//          </div>
    
//     </div>
   
      
//     </>
//   )
// }

// export default Store


