import React from 'react';
import './DropDownHeader.css'


export default function DropDownHeader(){
    return(
        <div className="Conta">
            
        <div class="dropdown ">
        <span className="bg" data-toggle="dropdown">
        <div type="button" class="dropdown-toggle" >
        </div>
        </span>
        <div class="dropdown-menu dropdown-menu-right">
          <a class="dropdown-item" href="#">Link 1</a>
          <a class="dropdown-item" href="#">Link 2</a>
          <a class="dropdown-item" href="#">Link 3</a>
        </div>
      </div>
      </div>
    )
}