import Itemcount from '../ItemCount/ItemCount'

const ItemListContainer = ({input})=>{
    return(
        <div> 
            {input}
            <Itemcount title ={"Items"} desc ={"Soy un Item"}/>
        </div>
        
    )
} 
export default ItemListContainer