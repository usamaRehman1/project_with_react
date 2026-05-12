const Item = ({ item }) => {
    console.log(item, "==> item")
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            width: "20%",
            padding: "10px 20px"
        }}>
            <input type="checkbox" style={{ padding: "10px" }} />
            <h4 style={{
                color: "#fde7aa",
            }}>{item.value}</h4>
            <span style={{ color: "red" }}>x</span>
        </div>
    )
}

export default Item