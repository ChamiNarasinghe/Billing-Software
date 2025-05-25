import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { deleteItem } from "../../service/ItemService";
import toast from "react-hot-toast";

const ItemList = () => {
    const { itemsData, setItemsData } = useContext(AppContext);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredItems = itemsData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const removeItem = async (itemId) => {
        try {
            const response = await deleteItem(itemId);
            if (response.status === 204) {
                const updatedItems = itemsData.filter(item => item.itemId !== itemId);
                setItemsData(updatedItems);
                toast.success("Item deleted.");
            } else {
                toast.error("Unable to delete item.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Unable to delete item.");
        }
    };

    return (
        <div className="category-list-container" style={{ height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}>
            <div className="row pe-2">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        name="keyword"
                        id="keyword"
                        placeholder="Search by keyword..."
                        className="form-control"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                    />
                    <span className="input-group-text bg-warning">
                        <i className="bi bi-search"></i>
                    </span>
                </div>
            </div>
            <div className="row g-3 pe-2">
                {filteredItems.map((item, index) => (
                    <div className="card p-3 bg-dark" key={item.itemId}>
                        <div className="d-flex align-items-center">
                            <div className="item-image me-3">
                                <img src={item.imgUrl} alt={item.name} width={64} height={64} />
                            </div>
                            <div className="flex-grow-1">
                                <h6 className="mb-1 text-white">{item.name}</h6>
                                <p className="mb-0 text-white">Category: {item.categoryName}</p>
                                <span className="badge rounded-pill text-bg-warning">LKR {item.price}</span>
                            </div>
                            <div>
                                <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.itemId)}>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemList;
