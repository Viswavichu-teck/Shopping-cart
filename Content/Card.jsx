import React, { useState } from 'react';
let data = [
  {
    title: "Apple 15 pro max",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818",
    price: "$1499.00"
  },
  {
    title: "Samsung S24 Ultra",
    img: "https://i.gadgets360cdn.com/products/large/galaxy-s24-ultra-797x800-1705519965.jpg?downsize=*:180",
    price: "$1299.00"
  },
  {
    title: "OnePlus 12",
    img: "https://assets.sangeethamobiles.com/product_img/15752/1706100396_QBa.jpg",
    price: "$937.00"
  },
  {
    title: "vivo X100 Pro",
    img: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1703155786129/235fc4fbe0277e6fc5f25fc84fabdd7f.png",
    price: "$1080.00"
  },
  {
    title: "Xiaomi 14 Ultra",
    img: "https://i02.appmifile.com/91_operatorx_operatorx_opx/24/02/2024/4eafcd40186edde466860564f9ff71e9.png?thumb=1&w=500&f=webp&q=85",
    price: "$1199.00"
  },
  {
    title: "galaxy z fold5",
    img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708667175/Croma%20Assets/Communication/Mobiles/Images/275452_0_y1res8.png?tr=w-640",
    price: "$1799.00"
  },
  {
    title: "Google Pixel 8 Pro",
    img: "https://images-cdn.ubuy.co.in/651e1cdf997a536aed735f24-google-pixel-8-pro-unlocked-android.jpg",
    price: "$999.00"
  },
  {
    title: "iQOO 12 5G",
    img: "https://m.media-amazon.com/images/I/619lW2YtVhL._SL1200_.jpg",
    price: "$605.00"
  },
];
function Card({ setcart }) {
  const [toggles, setToggles] = useState(Array(data.length).fill(false));

  // Function to handle toggling the cart status
  const handleToggle = (index) => {
    const newToggles = [...toggles];
    newToggles[index] = !newToggles[index];
    setToggles(newToggles);
    setcart((count) => (newToggles[index] ? count + 1 : count - 1));
  };

  return (
    <>
      {data.map((product, index) => (
        <div className="col mb-5" key={index}>
          <div className="card h-100">
            <img className="card-img-top" width={"250px"} height={"250px"} src={product.img} alt={product.title} />
            <div className="card-body p-4">
              <div className="text-center">
                <h5 className="fw-bolder">{product.title}</h5>
                {product.price}
              </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={() => handleToggle(index)}
                >
                  {toggles[index] ? 'Remove from Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;



// tried some Alternate method //


// function Card({setcart}) {
//   let [toggle, setToggle] = useState(true);
//   return (
//     <>
//       <div className="col mb-5">
//         <div className="card h-100">
//           {/* <!-- Product image--> */}
//           <img
//             className="card-img-top"
//             src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818"
//             alt="Apple Phone"
//           />
//           {/* <!-- Product details--> */}
//           <div className="card-body p-4">
//             <div className="text-center">
//               {/* <!-- Product name--> */}
//               <h5 className="fw-bolder">Apple Phone</h5>
//               {/* <!-- Product price--> */}
//               $120.00
//             </div>
//           </div>
//           {/* <!-- Product actions--> */}
//           <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//             <div className="text-center">
//               {toggle ? (
//                 <button
//                   className="btn btn-outline-dark mt-auto"
//                   onClick={()=> {
//                     setToggle(e => !e)
//                     setcart(e=>e+1)
//                   }}
//                 >
//                   Add to Cart
//                 </button>
//               ) : (
//                 <button
//                   className="btn btn-outline-dark mt-auto"
//                   onClick={() => {
//                     setToggle(e => !e)
//                     setcart(e=>e-1)
//                   }}
//                 >
//                   Remove from Cart
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Card;
