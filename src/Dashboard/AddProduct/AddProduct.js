import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const AddProduct = () => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);

    const { data: categories = [] } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
          const res = await fetch("http://localhost:5000/categories");
          const data = await res.json();
          return data;
        },
    });

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const seller_name = user?.displayName;
        const seller_email = user?.email;
        const name = form.name.value;
        // const img = form.img.value;
        const description = form.description.value;
        const resale_price = form.resale_price.value;
        const original_price = form.original_price.value;
        const condition = form.condition.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const use_years = form.years.value;
        const category_id = form.category.value;

        const image = form.image.files[0];
        const formData = new FormData();
        formData.append('image',image);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`;

        fetch(url, {
            method:'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                const product = {
                    product_name:name,
                    category_id,
                    picture: imgData.data.url,
                    description,
                    resale_price,
                    original_price,
                    condition,
                    seller_name,
                    seller_email,
                    phone,
                    location,
                    use_years,
                    isAdvertised:false
                }
        
                console.log(product);
        
                fetch('http://localhost:5000/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(product)
                })
                .then( res => res.json())
                .then( data => {
                    if(data.acknowledged){
                        toast.success('Product added Successfully')
                        form.reset();
                        navigate('/dashboard/myproducts');
                    }
                })
                .catch( error => console.error(error))
            }
        })    
    }

    return (
        <div className="dark:text-gray-100 my-10">
            <form onSubmit={handleAddProduct} noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow border ng-untouched ng-pristine ng-valid text-gray-700">
                <h2 className="w-full text-3xl font-semibold leading-tight">Please Add a Product</h2>
                <div>
                    <label htmlFor="name" className="block mb-1 ml-1">Product Name</label>
                    <input id="name" type="text" name='name' placeholder="Product Name" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-100 text-gray-700 border border-gray-300" required />
                </div>
                <div>
                    <label for="category" className="block mb-1 ml-1">Product Category</label>
                    <select
                        name='category'    
                        className="select select-bordered w-full max-w-xs"
                    >
                        {categories?.map((category) => (
                        <option key={category._id} value={category._id}>
                            {category.name}
                        </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="image" className="block mb-1 ml-1">ImageURL</label>
                    <input
                        type="file"
                        id='image'
                        name='image'
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
                <div>
                    <label for="description" className="block mb-1 ml-1">Description</label>
                    <textarea id="description" type="text" name='description' placeholder="Description..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-100 text-gray-700" required></textarea>
                </div>
                <div>
                    <label for="resale_price" className="block mb-1 ml-1">Resale Price</label>
                    <input id="resale_price" type="number" name='resale_price' placeholder="Resale Price" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-100 text-gray-700" />
                </div>
                <div>
                    <label for="original_price" className="block mb-1 ml-1">Original Price</label>
                    <input id="original_price" type="number" name='original_price' placeholder="Price" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-100 text-gray-700" />
                </div>
                <div>
                    <label for="condition" className="block mb-1 ml-1">Product Condition</label>
                    <select name='condition' className="select select-bordered w-full max-w-xs">
                        <option value='excellent'>excellent</option>
                        <option value='good'>good</option>
                        <option value='fair'>fair</option>
                    </select>
                </div>
                <div>
                    <label for="phone" className="block mb-1 ml-1">Phone Number</label>
                    <input id="phone" type="text" name='phone' placeholder="Phone number" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-100 text-gray-700" />
                </div>
                <div>
                    <label for="location" className="block mb-1 ml-1">Location</label>
                    <input id="location" type="text" name='location' placeholder="Location" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-100 text-gray-700" />
                </div>
                <div>
                    <label for="years" className="block mb-1 ml-1">Years of use</label>
                    <input id="years" type="text" name='years' placeholder="Years of use" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-100 text-gray-700" />
                </div>
                
                <div>
                    <button type="submit" className="btn btn-secondary w-full">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;