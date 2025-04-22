import React,{useEffect,useState} from 'react'

export  function FoodPage() {
  return (
    <div className = "container px-[5em] mt-[6em]">
      <HeaderFoodPage/>
      <FoodPageContent/>
    </div>
  )
}
export function HeaderFoodPage() {
    return (
        <div className="header-food-page mb-[2em]">
            <h3 className = "text-[#DB4444] font-[Instrument Sans] font-[500] text-[1.25em] border-l-[3px] border-[#DB4444] p-[0.5em] mb-[2em]">Our products</h3>
            <h1 className = "capitalize font-[Instrument Sans] font-[500] text-[2em]">explore our products</h1>
        </div>
    )
}
export function FoodPageContent() {
    let [isAdded,setIsAdded] = useState(false);
    let [product,setProduct] = useState([]);
    async function getProductsApi() {
        let data = await fetch('https://dummyjson.com/products');
        let body =  await data.json();
        let productsData = await body.products;
        setProduct(productsData);
    }
    useEffect(() => {
        getProductsApi();
    })
return  (
    <div className="food-page-content grid xl:grid-cols-3 gap-[2em] lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        {product.map((item) => {
            return (
                <div className="product rounded-[25px] py-[1.75em] px-[1.5em] bg-white p-[1em] col-span-1" key = {item.id} style = {{boxShadow: "0 1px 40px 0 #00000040"}}>
                    <div className="product-image  flex justify-center items-center mb-[1em] bg-[#ccc] rounded-[25px]">
                        <img src= {item.thumbnail} alt="" className = " h-60"/>
                        <div className="icons absolute">

                        </div>
                    </div>
                    <div className="product-info mb-[1em]">
                        <span className="product-price text-[#DB4444] font-[Instrument Sans] font-[600] text-[1.25em] mb-[1em] block">{item.price}$</span>
                        <span className="product-title font-[Instrument Sans] font-[500] text-[1.25em]">{item.title}</span>
                    </div>
                    <div className="product-btn">
                        <button className = "bg-[#1D1D1D] rounded-[1em] w-full p-[1em] font-[Instrument Sans] font-[500] text-[1.25em] text-white cursor-pointer" onClick= {() => {setIsAdded(true)}}>Add To Cart</button>
                        
                    </div>
                </div>
            )
        })}
    </div>
)
}

