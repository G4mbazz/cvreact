import gitLogo from "../images/giticon.jpg"
import React from "react";
import {ModalComponent} from "../components/modalcomponent";

export default function Portfolio({data}){
    console.log(data);
    return(
<div className="portfolio_page">
    {data.map(item =>(
            <div className="portfolio_page_item">
                <div className="item_title">
                    <a href={item.html_url} target="_blank"><h2>{item.name}</h2></a>
                    <img src={gitLogo}></img>
                    <div>
                        <ModalComponent data={item}/>
                    </div>
                </div>
            </div>
    ))}
</div>
    )
}