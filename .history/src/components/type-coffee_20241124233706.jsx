import CoffeeImage from '../assets/coffee-one.png'


const TypeCofee = () => {
  return (
    <div className="container">
        <div className="type-coffee">
            <div>
                <h3 className='type-coffee__title'><b className=''>01</b> Best Coffee Flavour</h3>
                <img c src={CoffeeImage} alt="Best Coffee Flavour" />
            </div>
        </div>
    </div>
  )
}

export default TypeCofee