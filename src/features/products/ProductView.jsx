import { useGetProductsQuery } from "../../services/productsApi";

const ProductView = () => {
   const {data:products, isLoading, isFetching, isSuccess,error} =  useGetProductsQuery()
   console.log(products)
   
    return (
        <div className="w-full h-screen">
           <h1 className="font-bold">List of products</h1>
           <p className="content-center text-center">{isLoading && <p>Loading</p> }</p>
           <p className="content-center text-center">{error && <p>{error.message}</p>}</p>
           {!isLoading && !error && products && products.length>0 && (
                 <div className="products">
                   { products.map((product)=>{
                    return <div key={product?.id}>
                        <h1 className="block"><span className="font-bold">Title :</span> {product?.title}</h1>
                    </div>
                   })}
                 </div>
            )}
          
        </div>
    );
};

export default ProductView;