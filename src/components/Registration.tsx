export const Registration = () => {
    return (
        <form>
            <label htmlFor="email"></label>
            <input id="email" type="text" name="email" />

            <label htmlFor="userName"></label>
            <input id="usernNme" type="text" name="userName" />

            <label htmlFor="password"></label>
            <input id="password" type="text" name="password" />

            <label htmlFor="passwordConfirm"></label>
            <input id="passwordConfirm" type="text" name="passwordConfirm" />

            <button type="submit">Register</button>
        </form>
    )
}