import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameProducts } from "../Redux/Actions/UsersActions";
//import { connect } from "react-redux";
import style from "./Style/SearchBar.module.css";
import SearchIcon from "@material-ui/icons/Search";

const SearchInput = (props) => {
  const [input, setInput] = useState("");
  let dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault(e);
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    //debugger
    e.preventDefault(e);
    dispatch(getNameProducts(input));
    setInput("");
    //debugger
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={style.formSearch}>
      <input
        className={style.input}
        type={"text"}
        name="products"
        value={input}
        placeholder="Search"
        onChange={(e) => handleChange(e)}
      />
      <button className={style.submit} type={"submit"}>
        <SearchIcon style={{ fontSize: 28 }} />
      </button>
    </form>
  );
};

export default SearchInput;
