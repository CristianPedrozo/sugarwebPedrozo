import Itemcount from '../ItemCount/ItemCount'

const ItemListContainer = ({input})=>{
    return(
        <div> 
        {input}
        <Itemcount stock={10} initial={0} title ={"Item List"} desc ={"Soy un item list"}/>
    </div>
        
    )
} 
export default ItemListContainer