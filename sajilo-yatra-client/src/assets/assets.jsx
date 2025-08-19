import { Route, DollarSign, House } from 'lucide-react';

//constants
const navItemIconSize = 20;


export const navLinks = [
    {
        name:"Routes",
        link:"/route",
        icon:(<Route size={navItemIconSize} strokeWidth={2}/>)
    },
    {
        name:"Home",
        link:"/home",
        icon:(<House size={navItemIconSize} strokeWidth={2}/>)
    },
    {
        name:"Fare",
        link:"/fare",
        icon:(<DollarSign size={navItemIconSize} strokeWidth={2}/>)
    },

]