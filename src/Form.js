const Form = ({handleChange, day, month, year, isEmpty1, isEmpty2, isEmpty3, warningText, warningText2, warningText3}) => {
    return (
        <form className="d-flex flex-row flex-wrap justify-content-evenly">
            <div className="d-flex flex-column item">
                <label htmlFor="day">DAY</label>
                <input value={day} name="day" onChange={(e) => handleChange(e)} id="day" type="number" placeholder="DD"></input>
                {
                    isEmpty1 && <p className="warning-text">This field is required</p>
                }
                <p className="warning-text">{warningText}</p>
            </div>
            <div className="d-flex flex-column item">
                <label htmlFor="month">MONTH</label>
                <input value={month} name="month" onChange={(e) => handleChange(e)}  id="month" type="number" placeholder="MM"></input>
                {
                    isEmpty2 && <p className="warning-text">This field is required</p>
                }
                <p className="warning-text">{warningText2}</p>
            </div>
            <div className="d-flex flex-column item">
                <label htmlFor="year">YEAR</label>
                <input value={year} name="year" onChange={(e) => handleChange(e)} id="year" type="number" placeholder="YYYY"></input>
                {
                    isEmpty3 && <p className="warning-text">This field is required</p>
                }
                <p className="warning-text">{warningText3}</p>
            </div>
           
        </form>
    )
}
export default Form;