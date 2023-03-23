import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ThemeActions } from "../Store/ThemeSlice";
import classes from './Profile.module.css';



const Toggle = () => {
    const theme = useSelector(state => state.theme.Blacktheme)
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(ThemeActions.changeTheme());
    };

    return (
        <div className={classes.toggle}>
            <p>Theme</p>
            <button onClick={handleClick}>{theme ? "dark" : "light"}</button>
        </div>

    );
}
export default Toggle;