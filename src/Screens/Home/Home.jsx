import React, { useEffect, useState } from 'react'
import Hader from '../../MiniComp/Hader'
import Carousel from './MiniComp/CarouselComp'
import Categories from './MiniComp/Categories'
import PopulerProductComp from './MiniComp/Products/PopulerProductComp'

import axios from 'axios'
import { url } from '../../Address'

function Home() {
    const { baseUrl, route, getAllProduct,getCategoryAndBrand,getallfeaturesPhotos } = url

    const [products, setProducts] = useState([])
    const [categories,setCategories]=useState([])
    const [featurePhotos,setFeaturePhotos]=useState([])


    // get all product
    const allProduct = async () => {
        await axios.get(baseUrl + route + getAllProduct).then((res) => {
           
            setProducts(res.data.products)
        }).catch(error => {

            console.error(error)
        })
    }

    const allCategory = async()=>{
        await axios.get(baseUrl+route+getCategoryAndBrand).then((res)=>{
            setCategories(res.data.categories)
        }).catch(error=>{
          //  console.error(error)
        })
    }

    
    const allFeatureImages = async()=>{
        await axios.get(baseUrl+route+getallfeaturesPhotos).then((res)=>{
            setFeaturePhotos(res.data.featurePhotos.photos)
        }).catch(error=>{
           console.error(error)
        })
    }

    useEffect(() => {
        allCategory()
        allProduct()
        allFeatureImages()
    }, [])

    return (
        <div>
            <Hader />
            <Categories props={categories} />
            <Carousel  featurePhotos={featurePhotos} />
            <PopulerProductComp data={products} />

        </div>
    )
}

export default Home