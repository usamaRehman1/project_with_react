const States = ({ formData }) => {
    return (
        <div style={{
            backgroundColor: "#68c1a3",
            textAlign: "center",
            padding: "15px 50px"

        }}>
            <p>You have {formData.length} items on your list, and you already packed 0 (0%).</p>
        </div>
    )
}

export default States
