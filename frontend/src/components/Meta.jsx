import { Helmet } from "react-helmet-async"; 

export default function Meta(props){
    return(
        <Helmet>
        <meta charset="UTF-8"/>
          <title>{props.title}</title>
        </Helmet>
    )
}