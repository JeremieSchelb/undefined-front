import axios from "axios";
import React from "react";

const Icon = (props) => {
  const [svg, setSvg] = React.useState('');

  React.useEffect(() => {
    axios.get(`/static/svg/${props.name}.svg`, {
      headers: {
        'Accept': 'image/svg+xml'
      }
    }).then((data) => {
      setSvg(data.data);
    });
  }, [props.name]);

  return <span className={props.className} dangerouslySetInnerHTML={{__html: svg}}></span>
}

export default Icon;