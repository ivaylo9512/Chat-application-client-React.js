import React, { useState } from 'react'
import { useRequest } from '../hooks/useRequest';

const CreateOrder = ({menu, searchClass}) => {
    const [order, fetchNewOrder] = useRequest({initialUrl:`http://${localStorage.getItem('BaseUrl')}/api/order/auth/create}`, isAuth:true})
    const [filteredMenu, setFilteredMenu] = useState()

    const search = (e) => {
        setFilteredMenu(menu.filter(m => m.name.includes(e.target)))
    }
    
    return(
        <>
            <div>
                {filteredMenu.map(m => 
                    <div>
                        {e.name}
                    </div>
                )}
            </div>
            <Search placeholder={'search menu'} callback={search} searchClass={searchClass}/>
        </>
    )
}
export default CreateOrder