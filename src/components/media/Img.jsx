import { Image } from 'primereact/image';
export default function Img(props) {
    return  <Image 
                src={props.src} 
                alt={props.alt} 
                width={props.width} 
                height={props.height} 
                loading='lazy'
                downloadable
                preview={props.preview!=null ? true : false}
            />
}