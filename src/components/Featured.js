import React , {useState, useEffect} from 'react'
import './Featured.css'
import {FiArrowUpRight} from 'react-icons/fi'
import axios from 'axios' 
import BTC from '../assets/btc-img.png'

const Featured = () => {
    const [data, setData] = useState(null)
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'
    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    if (!data) return null 

  return (
    <div className='Featured'>
        <div className='container'>
            {/* Left */}
            <div className='left'>
                <h2> Explore top Crypto's Like Bitcoin, Ethereum</h2>
                <p>See all available assets: Cryptocurrencies and NFT's</p>
                <button className='btn'> See more coins</button>
            </div>

            {/* Right */}

            <div className='right'>
                <div className='top'>
                    <img src={BTC} alt='/'/>
                </div>
                <div>
                    <h5>Bitcoin</h5>
                    <p>$49,000</p>
                </div>
                <span><FiArrowUpRight/>2.5%</span>
            </div>
        </div>

    </div>
  )
}

export default Featured