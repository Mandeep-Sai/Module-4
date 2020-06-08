import React,{Component} from 'react'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'
let bookCategories=["fantasy","horror","history","romance","scifi"]
let books={
    fantasy:require("../jsons/fantasy.json"),
    horror:require("../jsons/horror.json"),
    history:require("../jsons/history.json"),
    romance:require("../jsons/romance.json"),
    scifi:require("../jsons/scifi.json")
}
let json = null
class booksContainer extends React.Component{
  
}

export default booksContainer