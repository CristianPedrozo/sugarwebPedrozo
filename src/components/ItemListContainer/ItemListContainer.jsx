import Item from '../item/item'

const ItemListContainer = ({input})=>{
    return(
        <div > 
             {props.map(p => <Item key={p.id} title= {p.title} description={p.description} price={p.price} imgUrl={p.imgUrl} stock={p.Stock} />)}
        </div>
        
    )
} 
export default ItemListContainer