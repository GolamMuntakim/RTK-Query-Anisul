import { useDeleteProductsMutation, useGetProductsQuery } from "../../services/productsApi";

const ProductView = () => {
   const {data:products, isLoading, error} =  useGetProductsQuery()
   const [deleteProducts] = useDeleteProductsMutation()

   const handleDelete = async (id) =>{
    await deleteProducts(id)
   }
   
    return (
        <div className="w-full h-screen p-10">
           <h1 className="font-bold">List of products</h1>
          {isLoading && <p className="content-center text-center">Loading</p> }
          {error && <p className="content-center text-center">{error.message}</p>}
          <div>
          {!isLoading && !error && products && products.length>0 && (
                 <div className="products grid grid-cols-4">
                   { products.map((product)=>{
                    return <div key={product?.id}>
                        <h1 className="block"><span className="font-bold">Title :</span> {product?.title}</h1>
                        <button onClick={()=>handleDelete(product?.id)} className="btn p-1 bg-fuchsia-500 text-white font-semibold">Delete</button>
                    </div>
                   })}
                 </div>
            )}
          </div>
          
        </div>
    );
};

export default ProductView;