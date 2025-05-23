import Itemform from '../../components/Itemform/Itemform';
import ItemList from '../../components/ItemLists/ItemList';
import './ManageItems.css'

const ManageItems =() =>{
    return(
        <div className="items-container text-light">
            <div className="left-column">
                <Itemform/>
            </div>
             <div className="right-column">
                <ItemList/>
            </div>
        </div>
    )
}

export default ManageItems;