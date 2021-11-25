import './ItemCount.css'

const ItemCount = ({title,desc})=>{return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <div>
                    <a className="">0</a>
                </div>
            </div>
        <a className="btn btn-secondary">Agregar al carrito</a>            
    </div>
)
}
export default ItemCount