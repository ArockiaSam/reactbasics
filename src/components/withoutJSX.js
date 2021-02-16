import React from 'react'

const WithoutJSX = () =>{
   return React.createElement('div', {id:"iddi", className:"withoutJSX"}, 
    React.createElement('p', null, 'Wow without jsx working...'))
}

export default WithoutJSX 