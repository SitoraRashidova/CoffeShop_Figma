import CoffeeImage from '../assets/coffee-one.png'


const TypeCofee = () => {
  return (
    <div className="container">
        <div className="type-coffee">
            <div>
                <h3 className='type-coffee__title'><b className=''>01</b> Best Coffee Flavour</h3>
                <img className='type-coffee_image' src={CoffeeImage} alt="Best Coffee Flavour" />
            </div>
            <div>
                <h3 className='type-coffee__title'><b className=''>02</b> Best Coffee Flavour</h3>
                <img className='type-coffee_image' src={CoffeeImage} alt="Best Coffee Flavour" />
            </div>
            <div>
                <h3 className='type-coffee__title'><b className=''>03</b> Best Coffee Flavour</h3>
                <img className='type-coffee_image' src={CoffeeImage} alt="Best Coffee Flavour" />
            </div>
        </div>
    </div>
  )
}

export default TypeCofee