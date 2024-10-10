import { useState } from "react";
import { useUpdateProductsMutation } from "../../services/productsApi";


const UpdatedProduct = ({product,setEditingProduct}) => {
    const [updatedProduct, setUpdatedProduct] = useState(product)
    console.log(updatedProduct)
    const[updateProducts] = useUpdateProductsMutation()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            await updateProducts({id: product?.id, updatedProduct:updatedProduct});
            setEditingProduct(null)
        } catch (error) {
            console.log('Failed to update the product: ', error)
        }
    }
    return (
        <div className="">
            <form onSubmit={handleSubmit} className="space-y-6 flex flex-col justify-center items-center mt-2 shadow-xl w-[500px] p-2 mx-auto shadow-red-950">
                <h2>Edit product</h2>
                <input 
                className="bg-slate-300 text-blue-950 outline-none w-96 "
                type="text"
                placeholder="title"
                value={updatedProduct?.title}
                onChange={(e)=>
                    setUpdatedProduct({...updatedProduct, title:e.target.value})
                }
                 />
                <input 
                className="bg-slate-300 text-blue-950 outline-none w-96 "
                type="number"
                placeholder="price"
                value={updatedProduct?.price}
                onChange={(e)=>
                    setUpdatedProduct({...updatedProduct, price:e.target.value})
                }
                 />
                <input 
                type="text"
                className="bg-slate-300 text-blue-950 outline-none w-96 "
                placeholder="description"
                value={updatedProduct?.description}
                onChange={(e)=>
                    setUpdatedProduct({...updatedProduct, description:e.target.value})
                }
                 />
                <input 
                type="text"
                className="bg-slate-300 text-blue-950 outline-none w-96 "
                placeholder="category"
                value={updatedProduct?.category}
                onChange={(e)=>
                    setUpdatedProduct({...updatedProduct, category:e.target.value})
                }
                 />
                <div className="flex gap-4">
                <button 
                 type="submit"
                 className="p-1 bg-purple-500 text-white font-thin"
                 >
                    save update
                    </button>
                 <button 
                 type="button"
                 className="p-1 bg-purple-500 text-white font-thin"
                 onClick={()=>setEditingProduct(null)}
                 >
                    cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdatedProduct;