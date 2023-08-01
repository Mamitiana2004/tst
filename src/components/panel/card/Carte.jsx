import { Card } from 'primereact/card';
import { Children, isValidElement } from 'react';
export default function Carte(props) {

    const hasCarteHeader = () => {
        let hasHeader = false;
        Children.forEach(props.children, (child) => {
            if (isValidElement(child) && child.type.name === "CarteHeader") {
                hasHeader = true;
            }
        });
        return hasHeader;
    };

    const getCarteHeader = () => {
        let mardHeader = null;
        Children.forEach(props.children, (child) => {
          if (isValidElement(child) && child.type.name === "CarteHeader") {
            mardHeader = child;
          }
        });
        return mardHeader;
    };

    const hasCarteFooter = () => {
        let hasFooter = false;
        Children.forEach(props.children, (child) => {
            if (isValidElement(child) && child.type.name === "CarteFooter") {
                hasFooter = true;
            }
        });
        return hasFooter;
    };

    const getCarteFooter = () => {
        let mardFooter = null;
        Children.forEach(props.children, (child) => {
          if (isValidElement(child) && child.type.name === "CarteFooter") {
            mardFooter = child;
          }
        });
        return mardFooter;
    };

    const hasCarteTitle = () => {
        let hasFooter = false;
        Children.forEach(props.children, (child) => {
            if (isValidElement(child) && child.type.name === "CarteTitle") {
                hasFooter = true;
            }
        });
        return hasFooter;
    };

    const getCarteTitle = () => {
        let carteTitleChildren = [];
        
        Children.forEach(props.children, (child) => {
          if (isValidElement(child) && child.type.name === "CarteTitle") {
                // Check if the CarteTitle component has a Subtitle component as its child
                Children.forEach(child.props.children, (subChild) => {
                if (isValidElement(subChild) && subChild.type.name === "CarteSubtitle") {

                } else {
                    carteTitleChildren.push(subChild);
                }
                });
            }
        });
        return carteTitleChildren;
    };
      
      

    const getSubtitleFromCarteTitle = () => {
        let subtitle = null;
        Children.forEach(props.children, (child) => {
          if (isValidElement(child) && child.type.name === "CarteTitle") {
            // Check if the CarteTitle component has a Subtitle component as its child
            Children.forEach(child.props.children, (subChild) => {
                if (isValidElement(subChild) && subChild.type.name === "CarteSubtitle") {
                    subtitle = subChild;
                }
            });
          }
        });
        return subtitle;
    };

    const getCartelBodyChildren = () => {
        let modalBodyChildren = [];
        Children.forEach(props.children, (child) => {
          if (isValidElement(child) && child.type.name === "CarteBody") {
            modalBodyChildren = Children.toArray(child.props.children);
          }
        });
        return modalBodyChildren;
    };


    return  <Card
                header={hasCarteHeader ? getCarteHeader : null}
                title={hasCarteTitle ? getCarteTitle : null}
                subTitle={getSubtitleFromCarteTitle}
                footer={hasCarteFooter ? getCarteFooter : null}
                className={props.className}
            >
                {getCartelBodyChildren()}
            </Card>
}