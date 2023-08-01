import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Children, isValidElement, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function ButtonMenu(props) {

    const menu=useRef();
    const navigate=useNavigate();
    const [menuDetail,setMenuDetail]=useState([]);

    const hasMenuLink = () => {
        let hasMenuLink = false;
        Children.forEach(props.children, (child) => {
            if (isValidElement(child) && child.type.name === "MenuLink") {
                hasMenuLink = true;
            }
        });
        return hasMenuLink;
    };



    

    

    useEffect(()=>{
        const getLinkItem = () => {
            let menuLink = [];
            let menuDetails=[];
            Children.forEach(props.children, (child) => {
                if (isValidElement(child) && child.type.name === "MenuLink") {
                    let icon=null;
                    let label=null;
                    let link=child.props.href;
                    Children.forEach(child.props.children,(ch)=>{
                        if(ch.type==="i"){
                            icon=ch.props.className;
                        }
                        if(ch.type==="label"){
                            label=ch.props.children;
                        }
                        if(ch.type==null){
                            if(label==null){
                                label=ch;
                            }
                        }
                        
                    })
                    menuDetails.push({
                        icon:icon,
                        label:label,
                        command:()=>{
                            if(child.props.onClick!=null){
                                child.props.onClick();
                            }
                            navigate(link);
                        }
                    });
                    
                }
                if (child.type === "br") {
                    menuDetails.push({separator: true});
                }
            });
            setMenuDetail(menuDetails);
        };
        getLinkItem();
    },[props.children,navigate])    

    return (
        <>
            <Menu model={menuDetail} popup ref={menu}/>
            <Button 
                rounded={props.rounded==null || props.rounded===false ? false : true}
                text={props.text==null || props.text===false ? false : true}
                raised={props.raised==null || props.raised===false ? false : true}
                severity={props.severity}
                icon={props.icon}
                label={props.label}
                className={props.className}
                id={props.id}
                onClick={(event) => {
                        if(props.onClick!=null){
                            props.onClick();
                        }
                        if (hasMenuLink()) {
                            menu.current.toggle(event)
                        }
                    }
                }
            />
        </>
    );
}