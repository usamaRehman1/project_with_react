import Item from "./child/item";


const ItemListBody = ({ formData, setFormData }) => {
    console.log(formData, "formData")


    const sortingHandler = (value) => {
        console.log(value)
        const sortDataArr = formData;

        if (value == "sort by description") {

            sortDataArr = formData.map((data) => {
                data.value
            })


        }

    }

    return (
        <div style={{
            backgroundColor: "#4c3423",
            height: "80vh",
            position: "relative"


        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                gap: "20px",
                padding: "20px 50px",
                width: "90%",
                margin: "0 auto",
            }}>
                {
                    formData?.map((item, ind) => <Item item={item} key={ind} />)
                }
            </div>

            <div style={{
                position: "absolute",
                bottom: "0px",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "20px 20px",
                display: "flex",
                gap: "20px",
            }}>
                <select style={{
                    padding: "3px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#fde7aa",
                }} onChange={(e) => sortingHandler(e.target.value)}>
                    <option value="sort by input order">SORT BY INPUT ORDER</option>
                    <option value="sort by description">SORT BY DESCRIPTION</option>
                    <option value="sort by packed status">SORT BY PAKED STATUS</option>
                </select>

                <button style={{
                    padding: "5px 10px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#fde7aa"
                }} onClick={() => setFormData([])}>CLEAR LIST</button>
            </div>
        </div>
    )
}


export default ItemListBody