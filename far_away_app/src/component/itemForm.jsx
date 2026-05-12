import { useState } from "react"

const ItemForm = ({ formData, setFormData }) => {

    let [itemNum, setItemNum] = useState(0)
    let [itemValue, setItemValue] = useState()

    const addDataHandler = () => {
        const newData = [...formData]
        newData.push({
            number: itemNum,
            value: itemValue
        })
        setFormData(newData)
    }

    return (
        <div style={{
            backgroundColor: "#df6b1b",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            padding: "20px",
        }}>
            <h4>What do you need for your trip?</h4>
            <select style={{
                padding: "3px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#fde7aa",
            }} onChange={(e) => setItemNum(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
            </select>
            <input type="text" placeholder="item..." style={{
                padding: "5px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#fde7aa",
            }} onChange={(e) => setItemValue(e.target.value)} />
            <button style={{
                padding: "5px 10px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#67c1a3"
            }} onClick={addDataHandler}>ADD</button>
        </div>
    )
}

export default ItemForm