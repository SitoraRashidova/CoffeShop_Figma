import CoffeeImage from '../assets/coffee-one.png'


const TypeCofee = () => {
  return (
    <div className="container">
        <div className="type-coffee">
            <div>
                <h2>Best Coffee Flavour</h2>
                <img src={CoffeeImage} alt="Best Coffee Flavour" />
            </div>
        </div>
    </div>
  )
}

export default TypeCofee