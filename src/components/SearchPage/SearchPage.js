import React from "react";
import classes from './SearchPage.module.css';
import LogoBar from "../UI/LogoBar/LogoBar";
import search from '../../assets/search.png';
import student from '../../assets/student.png';

const SearchPage = () => {
    const onSubmitHandler = (e) => {
        e.preventdefault();

    }


    return (
        <div>
            <LogoBar />
            <div className={classes.searchbar}>
                <form onSubmit={onSubmitHandler}>
                    <input type="text" placeholder="Please enter your search key word" required />
                    <button type="submit"><img src={search} alt="" /></button>
                </form>
            </div>
            <div className={classes.student}>
                <img src={student} alt="" />
            </div>
        </div>
    )
}

export default SearchPage;