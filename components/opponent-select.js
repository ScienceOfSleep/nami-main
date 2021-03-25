const OpponentSelect = ({supports, opponent, setOpponent}) =>{
    return <form>
        <label htmlFor="opponent">Opponent</label>
        <select
            id="opponent"
            defaultValue="Swain"
            onChange={event => setOpponent(event.target.value)}
            onBlur={event => setOpponent(event.target.value)}
        >
            {supports.map((support) =>
                <option
                    value={support.name}
                    key={support.name}
                >
                    {support.name}
                </option>
            )}
        </select>
    </form>
}

export default OpponentSelect