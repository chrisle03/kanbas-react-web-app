function FunctionParenthesisAndParameters() {
    const square = a => a * a;
    const plusOne = a => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);

    return(
        <>
        <h3>Parenthesis and parameters</h3>
        twoSquared = {twoSquared}<br />
        square(2) = {twoSquared}<br />
        threePlusOne = {threePlusOne}<br />
        plusOne(3) = {threePlusOne}<br />

       </>
    )
}
export default FunctionParenthesisAndParameters;