const Result = ({day, month, year}) => {
    return (
        <section className="result-div">
            <h1><span className="purple">{year ? year : "--"}</span> years</h1>
            <h1><span className="purple">{month ? month : "--"}</span> months</h1>
            <h1><span className="purple">{day ? day : "--"}</span> days</h1>
        </section>
    )
}
export default Result;