import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BreadCrumb, Btn, Loader, Recommended } from '..';
import ApiHandler from '../hooks/ApiHandler';
import { CartState } from '../data/Context';
import { current, big_wishlist } from '../assets';

const Product = () => {
  const { prodId } = useParams();
  /* const { getProducts } = ApiHandler();
  const { state: { products }, dispatch } = CartState();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        getProducts();
        const { state: { products: updatedProducts } } = CartState();
        const foundProduct = updatedProducts.find(prod => prod.id === prodId);
        setProduct(foundProduct || null);
      } catch (error) {
        console.log(`Error fetching product ${prodId}`, error);
      }
    };

    if (!products.length) {
      fetchProduct();
    } else {
      const foundProduct = products.find(prod => prod.id === prodId);
      setProduct(foundProduct || null);
    }
  }, [prodId, products, dispatch, getProducts]);

  if (!product) {
    return (
      <div className="grid place-items-center py-20">
        <Loader />
      </div>
    );
  } */
  const { getProdExtraInfo, addToCart } = ApiHandler()
  const [colors, setColors] = useState([])
  const [extraInfo, setExtraInfo] = useState({});

  /* Get extra info for all product */
  useEffect(() => {
    const fetchExtraInfo = async () => {
      const extraInfo = await getProdExtraInfo(prodId)
      setExtraInfo(extraInfo)
    }

    fetchExtraInfo()
  }, [])

  useEffect(() => {
    if (extraInfo.colors) setColors(JSON.parse(extraInfo.colors))
  }, [extraInfo])

  const prod = JSON.parse(localStorage.getItem('product'));
  const {name, photos, description, current_price, available_quantity} = prod

  return (
    <>
      <BreadCrumb name="Products" search={true} />
      <div className="container">
        <p className='text-xl font-mono text-green-400 pb-6'>
          <span className='text-[#BFC5C4]'>Products</span> &gt;
          <span> Description page</span> &gt;
          <span> {name}</span>
        </p>
        <div className="flex max-md:flex-col gap-9">
          <div className="">
            <img src={`https://api.timbu.cloud/images/${photos[0].url}`} alt={name} />
          </div>
          <div className="grid justify-between gap-10">
            <div className="grid gap-1">
              <h1 className='text-green-400 lg:text-2xl text-xl'>{name}</h1>
              <h2 className='text-red-400 lg:text-xl text-lg'>{description ? description : 'Handmade clay-fired with crystal elements'}</h2>
              <div className="flex items-center gap-2.5">
                <h2 className='text-green-400 lg:text-2xl text-xl'>${current_price[0].NGN[0]}</h2>
                <p className='text-[#969999] text-sm'>Excluding tax</p>
              </div>
              <div className="grid gap-3">
                <div className="flex gap-2 items-center">
                  <img src={current} alt="current" />
                  <p className='text-red-600'>{available_quantity} pieces available</p>
                </div>
                {colors && (
                  <div className="flex gap-2 items-center">
                    {colors.map((color) => (
                      <div
                        style={{ backgroundColor: `${color}` }}
                        key={color}
                        className="p-2.5 shadow rounded-full"
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="grid gap-9">
              <div className="">

              </div>
              <div className="flex items-center gap-3">
                <div className=""><img src={big_wishlist} alt="wishlist" /></div>
                <div onClick={() => addToCart({...prod, colors})}>
                  <Btn name='Add to cart' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
        
				<Recommended title='You also might like' />
      </div>
    </>
  );
}

export default Product;