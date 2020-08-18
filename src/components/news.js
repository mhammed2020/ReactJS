import React from 'react';

const News = ({data}) =>{
    return(

        <div>
            {
            data.map((item) => {
                 return(
                     <div>
                    
                    {item.title} <br/>
                    {item.content} <br/>


                     </div>
                 )
            })
            
            }
        </div>
    )
}

export default News ;