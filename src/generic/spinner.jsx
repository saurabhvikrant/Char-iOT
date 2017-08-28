import React from 'react';
import '../../styles/index.scss';

export default class Spinner extends React.Component {
  render() {
    return (
<div className="container">
	<div className="row">
		<div className="text-center">
        </div>
        <div className="animationload">
            <div className="osahanloading"></div>
        </div>
	</div>
</div>
)
}
}
